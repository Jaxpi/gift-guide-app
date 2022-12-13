import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { CREATE_WISHLIST } from "../utils/mutations";
import { Navigate } from "react-router-dom";

const Create = () => {
  const [list, setList] = useState({ title: "", friends: "" });
  const createList = (event) => {
    event.preventDefault();
    const newList = { ...list };
    setList(newList);
  };

  const [createWishlist, { error }] = useMutation(CREATE_WISHLIST);
//   const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setList({ ...list, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(list);
    const { data } = await createWishlist({
      variables: { ...list },
    });
    console.log(data);
    if (data.createWishlist) {
        window.location.assign("/me")
    } else {
        console.warn("error with form submit")
    }

    setList({
      title: "",
      friends: "",
    });
  };

  //   if (Auth.loggedIn()) {
  //     return <Navigate replace to="/login" />
  //   }

  return (
    <div className="createFormContainer">
      <Form onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your information!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Title"
            name="title"
            onChange={handleInputChange}
            value={list.title}
            required
          />
          <Form.Control.Feedback type="invalid">
            Title is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="friends">Friends</Form.Label>
          <Form.Control
            type="text"
            placeholder="Share With Friends"
            name="friends"
            onChange={handleInputChange}
            value={list.friends}
          />
        </Form.Group>
        <Button disabled={!list.title} type="submit" variant="success">
          Create Wish List
        </Button>
      </Form>
    </div>
  );
};

export default Create;
