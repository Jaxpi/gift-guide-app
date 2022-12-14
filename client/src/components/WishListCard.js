import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Jumbotron, Button, Container } from "react-bootstrap";

import { DELETE_WISHLIST, ADD_ITEM_TO_WISHLIST } from "../utils/mutations";
import Create from "../pages/Create";

import {
  QUERY_WISHLISTS,
  QUERY_ME,
  QUERY_ONE_WISHLIST,
} from "../utils/queries";
import { CREATE_WISHLIST } from "../utils/mutations";
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
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,

          data: {
            me: {
              wishlists: me.wishlists.filter(
              (list) => list._id !== data.deleteWishlist._id
            )},
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

  const owned = props.wishlist.owner;

  if (owned === true) {
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
        <h1 id="myListTitle">{props.wishlist.title}</h1>
        <Container>
          {items.map((data, i) => {
            return (
              <div key={i}>
                <div id="listItem">
                  <input
                    id="itemName"
                    onBlur={(i) => saveItem(i)}
                    value={data}
                    data-index={i}
                    onChange={(e) => handleChange(e, i)}
                  />
                  <Button id="removeItem" onClick={() => handleDelete(i)}>
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
  } else {
    return (
      <section className={style}>

        <h1 id="myListTitle">{props.wishlist.title}</h1>
        <Container>
          {items.map((data, i) => {
            return (
              <div key={i}>
                <ul>
                  //items inputted
                </ul>
                  <Button id="onIt">I'm On It!</Button>
              </div>
            );
          })};
        </Container>
      </section>
    );
  }
};

export default WishListCard;
