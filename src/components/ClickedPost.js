import React from 'react';

let ClickedPost = (props) => {
	return (
		<div className='custom-overlay'>
			<div className='overlay-container wrapper'>
				<div className='overlay-container-inner row'>
					<div className='overlay-content col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2'>
						<div className='overlay-close'>
							<button onClick={props.togglePopup}>close</button>
						</div>
						<div className='row'>
							<div className='col-md-6 col-sm-6'>
								<img className='col-xs-12' src={props.post[0].images.standard_resolution.url} />
							</div>

							<div className='col-md-6 col-sm-6'>
								<div className='row middle-xs profile-container'>
									<div className='col-md-3 col-sm-3'>
										<img className='col-xs-12 profile-image' src={props.post[0].user.profile_picture} />
									</div>

									<div className='col-md-9 col-sm-9'>
										<p><b>{props.post[0].user.username}</b></p>
										<p className='location'>{props.post[0].location ? props.post[0].location.name : ''}</p>
									</div>

								</div>

								<div className='row post-details'>
									<p className='col-xs-12'><b>{props.post[0].likes.count} likes</b></p>
									<p className='col-xs-12'><b>{props.post[0].comments.count} {props.post[0].comments.count === 1 ? 'comment' : 'comments'}</b></p>									
									{
										props.post[0].caption && (
										<p className='col-xs-12'>
											<b>{props.post[0].user.username}</b> <span className='tags'>{props.post[0].caption.text}</span>		
										</p>
										)
									}

									<p className='date col-xs-12'>{convertDate(props.post[0].created_time)}</p>
								</div>								
							</div>
						</div>

					</div>
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

export default ClickedPost;