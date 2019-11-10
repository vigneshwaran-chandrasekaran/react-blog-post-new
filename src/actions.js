import { useDispatch, useSelector } from 'react-redux';

export function hideBlogPostPopup() {
	const dispatch = useDispatch();

	dispatch({ type: 'SHOW_BLOG_POST_POPUP', payload: false });
}

// export function hideBlogPostPopup() {
// 	return dispatch => {
// 		dispatch({ type: 'SHOW_BLOG_POST_POPUP', payload: false });
// 	};
// }
