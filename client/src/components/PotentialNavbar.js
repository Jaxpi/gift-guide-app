/* 
Need to insert "import 'bootstrap/dist/css/bootstrap.min.css';" in the App.js file.

Need to insert "
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
" in the index.html file.

- Hasan
*/

import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default class PotentialNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="https://buy.stripe.com/test_3cs6rWcBJ0SEe9a000">Donate</Nav.Link>
                                {/* <Nav.Link href="/landingpage">Logout</Nav.Link> -- I don't know if this is right. Please modify w/ correct path when possible. - Hasan */}
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                                <Button href='/wishlist'>Create Wishlist</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

/* 
insert "<PotentialNavbar />" in the App.js file.
insert "
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
" in the App.js file.
- Hasan 
*/
