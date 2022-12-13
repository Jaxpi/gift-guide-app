import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { DELETE_WISHLIST } from "../utils/mutations";
import Create from "../pages/Create";

const WishListCard = () => {
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

  const [item, setItem] = useState([]);
  const handleAdd = () => {
    const newItem = [[], ...item];
    setItem(newItem);
  };
  const handleChange = (onChangeItem, i) => {
    const inputItem = [...item];
    inputItem[i] = onChangeItem.target.value;
    setItem(inputItem);
  };
  const handleDelete = (i) => {
    const deleteItem = [...item];
    deleteItem.splice(i, 1);
    setItem(deleteItem);
  };
  console.log(item, "ITEMS");

  const [style, setStyle] = useState(localStorage.getItem("theme") || "cont1");

  const changeStyle = function () {
    console.log("you just clicked");
    if (style === "cont1") {
      setStyle("cont2");
      localStorage.setItem("theme", "cont2");
    } else if (style === "cont2") {
      setStyle("cont3");
      localStorage.setItem("theme", "cont3");
    } else {
      setStyle("cont1");
      localStorage.setItem("theme", "cont1");
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
      <h1 id="myListTitle">
        Title created during "create"
      </h1>
      <Container>
        {item.map((data, i) => {
          return (
            <div>
              <div id="listItem">
                <input
                  id="itemName"
                  value={data}
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
