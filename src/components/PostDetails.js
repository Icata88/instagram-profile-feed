import React from 'react';

let PostDetails = (props) => {
	return (
		<div className='row'>
			<div className='col-xs-12'>
				<div className='row post-details'>
					<p className='col-xs-12'><b>{props.post.likes.count} likes</b></p>
					<p className='col-xs-12'><b>{props.post.comments.count} {props.post.comments.count === 1 ? 'comment' : 'comments'}</b></p>									
					{
						props.post.caption && (
						<p className='col-xs-12'>
							<b>{props.post.user.username}</b> <span className='tags'>{props.post.caption.text}</span>		
						</p>
						)
					}

					<p className='date col-xs-12'>{convertDate(props.post.created_time)}</p>
				</div>								
			</div>
		</div>
	);
}

let convertDate = (timestamp) => {
	let date = new Date(timestamp * 1000);
	let formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);

	return formattedDate;
}

export default PostDetails;


