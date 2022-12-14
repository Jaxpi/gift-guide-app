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
  console.log(props);
  // const { error, loading, data } = useQuery(QUERY_WISHLISTS);
  // const handleFormSubmit = async (event) => {
  //     event.preventDefault();}

  // const handleDeleteList = async (wishlistId) => {
  //   const [deleteList] = useMutation(DELETE_WISHLIST)

  //   // const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   // if (!token) {
  //   //   return false;
  //   // }

  //   try {
  //     const { user } = await deleteList({
  //       variables: {
  //         wishlistId: wishlistId,
  //       },
  //     });

  //     //? what goes here?
  //     // userData = user;
  //     // removeBookId(bookId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

// ADD ITEM CODE ******************************
// const handleAdd = ({ itemId }) => {
// const [addItem, { error }] = useMutation(ADD_ITEM_TO_WISHLIST, {
//   const { data } = addItem()
//   // update(cache, { data: { addItem } }) {
    
//   //   try {
//   //     const { item } = cache.readQuery({ query: QUERY_ITEMS });

//   //     cache.writeQuery({
//   //       query: QUERY_ITEMS,
//   //       data: { items: [addItems, ...items] },
//   //     });
//     } catch (e) {
//       console.error(e);
//     }

//     // update me object's cache
//     const { me } = cache.readQuery({ query: QUERY_ME });
//     cache.writeQuery({
//       query: QUERY_ME,
//       data: { me: { ...me, items: [...me.itemss, addItem] } },
//     });
//   },
// });
// }
const [items, setItems] = useState([]);

const [addItem, { error }] = useMutation(ADD_ITEM_TO_WISHLIST);

const saveItem = async (e) => {
  const i = e.target.dataset.index;

  try {
   
    const { data } = await addItem({
    variables: {
      wishlistId: props.wishlist._id,
      item: items[i]
      } 
    });

    if (data.addItem.items) {
        console.log('success!')
        console.log("wishlist: ", data.addItem.items)
    } else {
        console.warn("error with form submit")
    }
  } catch(err) {
    console.log(err)
  }
}
// ENDS ADD ITEMS CODE *******************************
useEffect(() => {
  console.log(items);
}, [items])


  const handleAdd = () => {
    const newItem = [...items, ''];
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

  const changeStyle = function () {
    console.log("you just clicked");
    if (style === "cont1") {
      setStyle("cont2");
      localStorage.setItem(`theme${props.cardNo}`, "cont2");
    } else if (style === "cont2") {
      setStyle("cont3");
      localStorage.setItem(`theme${props.cardNo}`, "cont3");
    } else {
      setStyle("cont1");
      localStorage.setItem(`theme${props.cardNo}`, "cont1");
    }
  };

  return (
    <section className={style}>
      <div className="wishButtonsWrap">
        <button
          id="themeButton"
          // To change the theme we invoke dispatch and pass in an object containing action type and payload
          onClick={changeStyle}
          className="btn"
          type="button"
        >
          Theme
        </button>
        {/* <button id="deleteList" onClick={() => handleDeleteList()}>
          Delete List
        </button> */}
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
                  id="itemName" onBlur={(i) => saveItem(i)}
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
};

export default WishListCard;
