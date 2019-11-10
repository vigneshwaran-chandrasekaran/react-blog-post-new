import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Fieldset } from './Fieldset';

const CreateBlogPost = () => {
	const inputRef = useRef(null);
	const dispatch = useDispatch();
	const editId = useSelector(state => state.editId);
	const blogPosts = useSelector(state => state.blogPosts);

	let initialValues;
	let action;

	if (editId) {
		const selectedBlogPost = blogPosts.find(post => post.id === editId);
		initialValues = selectedBlogPost;
		action = 'PUT';
	} else {
		initialValues = {
			title: '',
			Category: '',
			author: '',
			ImageURL: '',
			Description: ''
		};
		action = 'POST';
	}

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('Title required'),
		Category: Yup.string().required('Category required'),
		author: Yup.string().required('Author required')
	});

	const handleOnSubmit = async (values, { resetForm }) => {
		if (action === 'POST') {
			await axios
				.post(
					`https://my-json-server.typicode.com/Srinivasan47/mockjson/posts`,
					values
				)
				.then(response => {
					dispatch({ type: 'ADD_BLOG_POST', payload: response.data });
					// handle success
				})
				.catch(error => {
					// handle error
					console.log(error);
				});
		} else if (action === 'PUT') {
			await axios
				.put(
					`https://my-json-server.typicode.com/Srinivasan47/mockjson/posts/${values.id}`,
					values
				)
				.then(response => {
					dispatch({ type: 'UPDATE_BLOG_POST', payload: response.data });
					// handle success
				})
				.catch(error => {
					// handle error
					console.log(error);
				});
			dispatch({ type: 'SHOW_BLOG_POST_POPUP', payload: false });
			dispatch({ type: 'EDIT_BLOG_POST', payload: null });
		}
		resetForm();
	};

	const handleOnReset = e => {
		console.log('handleOnReset', e);
		setFocus();
	};

	const setFocus = () => {
		inputRef.current.focus();
	};

	return (
		<>
			<h3 className="my-3 text-center">Add new blog post</h3>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleOnSubmit}
				onReset={handleOnReset}
				render={({ isSubmitting, handleReset }) => (
					<Form>
						<Fieldset
							innerRef={inputRef}
							name="title"
							label="Title"
							placeholder="Title"
						/>
						<Fieldset name="Category" label="Category" placeholder="Category" />
						<Fieldset name="author" label="Author" placeholder="Author" />
						<Fieldset name="ImageURL" label="ImageURL" placeholder="ImageURL" />
						<Fieldset
							name="Description"
							label="Description"
							placeholder="Description"
						/>
						<button type="submit" className="btn btn-primary mr-3">
							Submit
						</button>
						<button
							type="reset"
							className="btn btn-warning"
							disabled={isSubmitting}
							onClick={handleReset}
						>
							Reset
						</button>
					</Form>
				)}
			/>
		</>
	);
};

export default CreateBlogPost;
