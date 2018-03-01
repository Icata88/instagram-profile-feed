import React, { Component } from 'react';
import { connect } from 'react-redux';
import getProfileInfo from './../actions/getProfileInfo';


class Profile extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.showInfo();
	}

	render() {
		return (
			<div>
				{this.props.profile && (
					<div className='profile row col-md-offset-2 col-sm-offset-1 bottom-xs'>
						<div className='col-sm-3 col-md-2 col-xs-12'>
							<div className='row center-xs'>
								<img src={this.props.profile.data.profile_picture} />
							</div>
						</div>
						<div className='col-sm-8 col-md-8 col-xs-12 profile-info'>
							<div className='row center-xs start-sm'>
								<h3 className='full-name col-xs-12'>{this.props.profile.data.full_name}</h3>
								<p className='username col-xs-12'>{this.props.profile.data.username}</p>
							</div>

							<div className='row'>
								<div className='col-md-4 col-sm-4 col-xs-12 tab'>
									<div className='row info-wrap center-xs'>
										<span className='col-xs-12 info'><b>{this.props.profile.data.counts.media}</b> posts</span>
									</div>
								</div>					
								<div className='col-md-4 col-sm-4 col-xs-12 tab'>
									<div className='row info-wrap center-xs'>
										<span className='col-xs-12 info'><b>{this.props.profile.data.counts.followed_by}</b> followers</span>
									</div>
								</div>

								<div className='col-md-4 col-sm-4 col-xs-12 tab'>
									<div className='row info-wrap center-xs'>
										<span className='col-xs-12 info'><b>{this.props.profile.data.counts.follows}</b> following</span>
									</div>
								</div>
							</div>		

						</div>
					</div>
				)}
			</div>
		);
	}
}


function mapDispatchToProps(dispatch) {

	return {
		showInfo: function() {
			dispatch(getProfileInfo());
		}
	}
}

function mapStateToProps(state) {

	return {
		profile: state.profileReducer.self_data		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);