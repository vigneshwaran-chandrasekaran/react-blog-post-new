import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import BlogPost from "./BlogPost";
import { API_PATH } from "../utils";

export default function BlogsList() {
  const dispatch = useDispatch();
  const blogPosts = useSelector(state => state.blogPosts);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    // setLoader(true);
    axios
      .get(API_PATH)
      .then(response => {
        dispatch({ type: "LIST_BLOG_POSTS", payload: response.data });
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
