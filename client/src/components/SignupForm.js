import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import Auth from '../utils/auth';
import{useMutation} from '@apollo/react-hooks'
import { ADD_USER } from '../utils/mutations';

const SignupForm = () => {
    // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  // mututation for adding user
  const [createUser] =useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
     // check if form has everything (as per react-bootstrap docs)
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }
     try {
        const { data } = await createUser({
            
            variables: {...userFormData}})

            Auth.login(data.addUser.token);
        } 
        catch (err) {
        console.error(err);
        setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
          });
        };

  return()
}


export default SignupForm;