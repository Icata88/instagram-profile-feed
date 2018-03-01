import React, { Component } from 'react';
import { connect } from 'react-redux';
import getProfilePosts from './../actions/getProfilePosts';
import Post from './Post';
import ClickedPost from './ClickedPost';

class Posts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clickedPostID: '',
			showPopup: false,
			windowWidth: window.innerWidth
		}

		this.onPostClick = this.onPostClick.bind(this);
		this.togglePopup = this.togglePopup.bind(this);
		this.handleWindowWidth = this.handleWindowWidth.bind(this);
	}

	togglePopup() {
		this.setState((prevState) => ({showPopup: !prevState.showPopup}));
	}

	onPostClick(id) {
		let checkID = this.state.clickedPostID === id;

		this.setState((prevState) => ({
			clickedPostID: id, 
			showPopup: !checkID ? true : !prevState.showPopup
		}));
	}

	handleWindowWidth() {
		this.setState({windowWidth: window.innerWidth});
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowWidth);
	}	

	componentDidMount() {
		this.props.showPosts();
	}

	render() {

		return (			
			<div className='posts row'>		
				{'posts' in this.props && this.props.posts ? (this.props.posts.data.map((v) => <Post 
				key={v.id}
				post={v} 
				windowWidth={this.state.windowWidth}
				selected={this.state.clickedPostID === v.id}
				showDetails={this.state.showPopup}
				clickHandler={() => this.onPostClick(v.id)} 
				image={this.state.windowWidth > 755 ? v.images.thumbnail.url : v.images.low_resolution.url} />)) : null}
				{this.state.showPopup && this.state.windowWidth > 755 ? <ClickedPost togglePopup={this.togglePopup} post={this.props.posts.data.filter((post) => post.id === this.state.clickedPostID)} /> : null}								
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		showPosts: function() {
			dispatch(getProfilePosts());
		}
	}
}

function mapStateToProps(state) {
	return {
		posts: state.postsReducer.posts	
	}	
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);