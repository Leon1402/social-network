import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getProfileInfo, getStatus, updateStatus } from './../../redux/profileReducer';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) userId = 11911;
        this.props.getProfileInfo(userId);
        this.props.getStatus(userId);
    }
    render() {
        return <Profile 
            profile={this.props.profile} 
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { getProfileInfo, getStatus, updateStatus }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)

