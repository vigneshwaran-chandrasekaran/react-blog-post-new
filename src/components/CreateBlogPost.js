import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Fieldset } from './Fieldset';

const initialValues = {
    title: '',
    Category: '',
    author: '',
    ImageURL: '',
    Description: ''
};

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title required'),
    Category: Yup.string().required('Category required'),
    author: Yup.string().required('Author required'),
});

const CreateBlogPost = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    
    const handleOnSubmit = async (values, { resetForm }) => {
        axios.post(`https://my-json-server.typicode.com/Srinivasan47/mockjson/posts`, values)
            .then((response) => {
                dispatch({ type: 'ADD_BLOG_POST', payload: response.data });
                // handle success
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
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
            <div className="row d-flex justify-content-center">
                <div className="col-4">
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
                                <Fieldset
                                    name="Category"
                                    label="Category"
                                    placeholder="Category"
                                />
                                <Fieldset
                                    name="author"
                                    label="Author"
                                    placeholder="Author"
                                />
                                <Fieldset
                                    name="ImageURL"
                                    label="ImageURL"
                                    placeholder="ImageURL"
                                />
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
                </div>
            </div>
        </>
    );
};

export default CreateBlogPost;
