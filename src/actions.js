export function actionCreator(dispatch) {
	alert(2);
	return dispatch => {
		dispatch({ type: 'SHOW_BLOG_POST_POPUP', payload: false });
		dispatch({ type: 'EDIT_BLOG_POST', payload: null });
	};
}
