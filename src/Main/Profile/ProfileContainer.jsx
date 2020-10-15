import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getProfileInfoThunkCreator } from './../../redux/profileReducer';

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

const ProfileWithRouter = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, { getProfileInfoThunkCreator })(ProfileWithRouter)
