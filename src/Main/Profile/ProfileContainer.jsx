import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from './../../redux/profileReducer'
import * as axios from 'axios';
import Loader from '../../common/loader';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).
        then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return this.props.profile ? <Profile {...this.props}/>: <Loader/>
    }
}
let mapStateToProps = state => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
