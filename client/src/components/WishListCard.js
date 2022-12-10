import React, { useState } from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

const WishListCard = () => {
  // const handleFormSubmit = async (event) => {
  //     event.preventDefault();}
  const [item, setItem] = useState([]);
  const handleAdd = () => {
    const newItem = [...item, []];
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

  return (
    <section className="wishCard">
      <Jumbotron id="wishTitle">
        {/* <Container> */}
        <h1 id="myListTitle">Username's<br></br> Wish List</h1>
        {/* </Container> */}
      </Jumbotron>
      <Button id="addItem" onClick={() => handleAdd()}>
        Add Item
      </Button>
      {item.map((data, i) => {
        return (
          <div id="listItem">
            <input id="itemName" value={data} onChange={(e) => handleChange(e, i)} />
            <Button id="removeItem" onClick={() => handleDelete(i)}>
              X
            </Button>
            <Button id="received">
              Got!
            </Button>
          </div>
        );
      })}
      {/* <Form onSubmit={handleFormSubmit}>

        </Form> */}
    </section>
  );
};

// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

export default WishListCard;
