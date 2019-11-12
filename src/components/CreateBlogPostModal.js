import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import CreateBlogPost from './CreateBlogPost';
import { actionCreator } from '../actions';

export default function CreateBlogPostModal() {
	const dispatch = useDispatch();
	const show = useSelector(state => state.showBlogPostPopup);

	function handleClose() {
		// alert(1);
		// actionCreator(dispatch);
		dispatch({ type: 'SHOW_BLOG_POST_POPUP', payload: false });
		dispatch({ type: 'EDIT_BLOG_POST', payload: null });

		// dispatch([
		// 	{ type: 'SHOW_BLOG_POST_POPUP', payload: false },
		// 	{ type: 'EDIT_BLOG_POST', payload: null }
		// ]);
	}

	return (
		<>
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
