const initialState = {
    blogPosts: [],
};

export default function reducer(state = initialState, action) {
    if (action.type === 'LIST_BLOG_POSTS') {
        return { ...state, blogPosts: action.payload };
    } if (action.type === 'ADD_BLOG_POST') {
        return { ...state, blogPosts: [...state.blogPosts, action.payload] };
    } if (action.type === 'EDIT_BLOG_POST') {
        return { ...state, blogPosts: [...state.blogPosts, action.payload] };
    } else {
        return state;
    }
}
