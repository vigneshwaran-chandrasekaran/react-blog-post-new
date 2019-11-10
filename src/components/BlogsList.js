import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import BlogPost from './BlogPost';

export default function BlogsList() {
	const dispatch = useDispatch();
	const blogPosts = useSelector(state => state.blogPosts);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = () => {
		// setLoader(true);
		axios
			.get(`https://my-json-server.typicode.com/Srinivasan47/mockjson/posts`)
			.then(response => {
				dispatch({ type: 'LIST_BLOG_POSTS', payload: response.data });
				// handle success
			})
			.catch(error => {
				// handle error
				console.log(error);
			});
	};

	return (
		<section className="container-fluid">
			{blogPosts && blogPosts.map(post => <BlogPost key={post.id} {...post} />)}
		</section>
	);
}
