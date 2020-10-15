import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {setProfileInfo} from './../../redux/profileReducer';
import { UsersAxios } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id;
        if(!userId) userId = 11911;
        UsersAxios.getProfileInfo(userId)
        .then(data => {
            this.props.setProfileInfo(data)
        });
    }
    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const ProfileWithRouter = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({profile:state.profilePage.profile})

export default connect(mapStateToProps, {setProfileInfo})(ProfileWithRouter)
