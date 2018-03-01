import React from 'react';
import PostDetails from './PostDetails';

let Post = (props) => {
	return (
		<div className='post col-md-2 col-sm-3 col-xs-12'>
			<img onClick={props.clickHandler} src={props.image} />
			{props.selected && props.showDetails && props.windowWidth < 756 ? <PostDetails post={props.post} /> : null}
		</div>
	);
}

export default Post;