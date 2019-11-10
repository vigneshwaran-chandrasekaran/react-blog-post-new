import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import CreateBlogPost from './CreateBlogPost';

export default function CreateBlogPostModal() {
	const dispatch = useDispatch();

	// const [show, setShow] = useState(false);

	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	const show = useSelector(state => state.showBlogPostPopup);

	function handleClose() {
		dispatch({ type: 'SHOW_BLOG_POST_POPUP', payload: false });
	}
	return (
		<>
			{/* <Button variant="primary" onClick={handleShow}>
				Add new post
			</Button> */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					{/* <Modal.Title>Modal heading</Modal.Title> */}
				</Modal.Header>
				<Modal.Body>
					<CreateBlogPost />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}