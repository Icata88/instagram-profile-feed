import React from 'react';
import Profile from './Profile';
import Posts from './Posts';


let Main = () => {
	return (
		<div>
			<div className='row'>
				<h1 className='striked col-xs-12'><span>Welcome to my Instagram profile page</span></h1>										
			</div>
			<Profile />				
			<Posts />					
		</div>			
	);
}

export default Main;


