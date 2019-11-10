const initialState = {
	blogPosts: [],
	editId: null,
	showBlogPostPopup: false
};

export default function reducer(state = initialState, action) {
	if (action.type === 'LIST_BLOG_POSTS') {
		return { ...state, blogPosts: action.payload };
	} else if (action.type === 'ADD_BLOG_POST') {
		return { ...state, blogPosts: [...state.blogPosts, action.payload] };
	} else if (action.type === 'UPDATE_BLOG_POST') {
		const blogPostList = state.blogPosts.map(item => {
			if (item.id === action.payload.id) {
				return action.payload;
			}
			return item;
		});
		return { ...state, blogPosts: blogPostList };
	} else if (action.type === 'EDIT_BLOG_POST') {
		return { ...state, editId: action.payload };
	} else if (action.type === 'SHOW_BLOG_POST_POPUP') {
		return { ...state, showBlogPostPopup: action.payload };
	} else {
		return state;
	}
}
