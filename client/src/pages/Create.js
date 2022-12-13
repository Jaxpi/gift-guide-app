import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { CREATE_WISHLIST } from "../utils/mutations";

const Create = () => {
  const [list, setList] = useState({ title: "", friends: "" });
  const createList = (event) => {
    event.preventDefault();
    const newList = [[], ...list];
    setList(newList);
  };

  const [create, { error }] = useMutation(CREATE_WISHLIST);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setList({ ...list, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // try {
    //   const { data } = await login({
    //     variables: { ...list },
    //   });

    //   Auth.login(data.login.token);
    // } catch (e) {
    //   console.error(e);
    //   setShowAlert(true);
    // }

    setList({
      title: "",
      friends: "",
    });
  };

  return (
    <div className="createFormContainer">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
        <Button
          disabled={!(list.title && list.friends)}
          type="submit"
          variant="success"
        >
          Create Wish List
        </Button>
      </Form>
    </div>
  );
};

export default Create;
