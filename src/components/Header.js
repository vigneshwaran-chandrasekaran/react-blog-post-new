import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3">
            <Navbar.Brand as={NavLink} to="/">Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" >
                    <Nav.Link exact as={NavLink} to='/'>Blog List</Nav.Link>
                    <Nav.Link as={NavLink} to="/add">Add new post</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;