import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import CreateBlogPostModal from './CreateBlogPostModal';

function Header() {
	const dispatch = useDispatch();

	function handleShow() {
		dispatch({ type: 'SHOW_BLOG_POST_POPUP', payload: true });
	}

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="light"
			variant="light"
			className="mb-3"
		>
			<Navbar.Brand as={NavLink} to="/">
				Blog
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link exact as={NavLink} to="/">
						Blog List
					</Nav.Link>
					{/* <Nav.Link as={NavLink} to="/add">
						Add new post
					</Nav.Link> */}
					<Button variant="primary" onClick={handleShow}>
						Add new post
					</Button>
				</Nav>
			</Navbar.Collapse>
			<CreateBlogPostModal />
		</Navbar>
	);
}

export default Header;
