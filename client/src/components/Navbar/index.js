import React from 'react';
import Dashboard from '../../pages/Dashboard';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Index = () => {
    return (
        <>
        <Nav>
            <Bars />

            <NavMenu>
                <NavLink to='/dashboard' activeStyle>DashBoard</NavLink>
                <NavLink to='/donate' activeStyle>Donate</NavLink>
                <NavLink to='/login' activeStyle>Login</NavLink>
                <>
                <Dashboard />
                </>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/wishlistcard'>Create Wishlist</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Index;