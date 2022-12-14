import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Jumbotron, Button, Container } from "react-bootstrap";

import { DELETE_WISHLIST, ADD_ITEM_TO_WISHLIST, UPDATE_WISHLIST } from "../utils/mutations";
import Create from "../pages/Create";

import {
  QUERY_WISHLISTS,
  QUERY_ME,
  QUERY_ONE_WISHLIST,
  QUERY_ITEMS,
} from "../utils/queries";
import { CREATE_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from "../utils/mutations";
import Auth from "../utils/auth";
//  when we create a new wishlist we want to render a new wishlist card. all of it to display on the home.js

const WishListCard = (props) => {
  const [items, setItems] = useState([]);

  const { loading, data } = useQuery(QUERY_ONE_WISHLIST, {
    variables: {
      wishlistId: props.wishlist._id
    }
  });

  useEffect(() => {
    if (!loading) {
      const newItems = data?.wishlist.items || [];
      setItems(newItems);
    }
  }, [loading, data])

  const [deleteList] = useMutation(DELETE_WISHLIST, {
    update(cache, { data }) {
      try {
        const { wishlists } = cache.readQuery({ query: QUERY_WISHLISTS });
        cache.writeQuery({
          query: QUERY_WISHLISTS,

          data: {
            wishlists: wishlists.filter(
              (list) => list._id !== data.deleteWishlist._id
            ),
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleDeleteList = async (wishlistId) => {
    try {
      const { user } = await deleteList({
        variables: {
          wishlistId: wishlistId,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleDeleteWishlistItem=(item, wishlistId) => {
    try {
      const { data } =  removeItem({
        variables: {
          wishlistId: wishlistId,
          item: item
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
  // Add code to remove wishlist Items
  const [removeItem] = useMutation(REMOVE_ITEM_FROM_WISHLIST, {
    update(cache, { data }) {
      try {
        const { items } = cache.readQuery({ query: QUERY_ITEMS });
        cache.writeQuery({
          query: QUERY_ITEMS,

          data: {
            wishlists: items.filter(
              (list) => list._id !== data.deleteWishlistItem._id
            ),
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
  
});
  


  //End Section to remove wish list item

  // ADD ITEM CODE ******************************
  const [addItem, { error }] = useMutation(ADD_ITEM_TO_WISHLIST);


  const saveItem = async (e) => {
    const i = e.target.dataset.index;

    try {
      const { data } = await addItem({
        variables: {
          wishlistId: props.wishlist._id,
          item: items[i],
        },
      });

      if (data.addItem.items) {
        console.log("success!");
        console.log("wishlist: ", data.addItem.items);
      } else {
        console.warn("error with form submit");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // ENDS ADD ITEMS CODE *******************************

  const handleAdd = () => {
    const newItem = ["", ...items];
    setItems(newItem);
  };
  const handleChange = (onChangeItem, i) => {
    const inputItem = [...items];
    inputItem[i] = onChangeItem.target.value;
    setItems(inputItem);
  };

  const handleDelete = (i) => {
    const deleteItem = [...items];
    deleteItem.splice(i, 1);
    setItems(deleteItem);
  };

  const [style, setStyle] = useState(
    localStorage.getItem(`theme${props.cardNo}`) || "cont1"
  );

  //move from local storage to db (if there's time)
  const changeStyle = function () {
    console.log("you just clicked");
    if (style === "cont1") {
      setStyle("cont2");
      localStorage.setItem(`theme${props.cardNo}`, "cont2");
    } else if (style === "cont2") {
      setStyle("cont3");
      localStorage.setItem(`theme${props.cardNo}`, "cont3");
    } else if (style === "cont3") {
      setStyle("cont4");
      localStorage.setItem(`theme${props.cardNo}`, "cont4");
    } else if (style === "cont4") {
      setStyle("cont5");
      localStorage.setItem(`theme${props.cardNo}`, "cont5");
    } else {
      setStyle("cont1");
      localStorage.setItem(`theme${props.cardNo}`, "cont1");
    }
  };
  // Changing the wishlist name
  const [newName, setNewName] = useState(null)

  const [updateName , {error: nameError}] = useMutation(UPDATE_WISHLIST)

  const [updatingName, setUpdatingName] = useState(false)
  
  const handleUpdateName = async (event) => {

    const { data } = await updateName({
      variables: {
        wishlistId: props.wishlist._id,
        title: newName
      }

    })
    setUpdatingName(false)
  }


  return (
    <section className={style}>
      <div className="wishButtonsWrap">
        <button
          id="deleteList"
          onClick={() => handleDeleteList(props.wishlist._id)}
        >
          Delete List
        </button>
        <button
          id="themeButton"
          // To change the theme we invoke dispatch and pass in an object containing action type and payload
          onClick={changeStyle}
          className="btn"
          type="button"
        >
          Theme
        </button>
        <button id="addItem" onClick={() => handleAdd()}>
          Add Item
        </button>
      </div>
      { !updatingName ? (
      <>
      <h1 id="myListTitle">{props.wishlist.title}</h1>
        <button onClick={(event) => setUpdatingName(true)}>Update Name</button>
        </>
      ) : (
      <div>
      <input  
      type= "text" 
      value={newName} 
      onChange={(e) => setNewName ( e.target.value)} id="myListTitle" />
      <button onClick={handleUpdateName}></button>
      </div> )}
      <Container>
        {items.map((item, i) => {
          return (
            <div key={i}>
              <div id="listItem">
                <input
                  id="itemName"
                  onBlur={(i) => handleDelete(i)}
                  value={item}
                  data-index={i}
                  onChange={(e) => handleChange(e, i)}
                />
                <Button id="removeItem" onClick={() => handleDeleteWishlistItem(item, props.wishlist._id)}>
                  X
                </Button>
                <Button id="received">Got!</Button>
              </div>
            </div>
          );
        })}
      </Container>
      {/* <Form onSubmit={handleFormSubmit}>

        </Form> */}
    </section>
  );
};

export default WishListCard;
