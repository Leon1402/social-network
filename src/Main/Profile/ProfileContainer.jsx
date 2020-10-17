import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getProfileInfoThunkCreator } from './../../redux/profileReducer';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) userId = 11911;
        this.props.getProfileInfoThunkCreator(userId)
    }
    render() {
        return <Profile profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getProfileInfoThunkCreator }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)

