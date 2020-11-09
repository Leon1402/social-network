import React from 'react';
import { connect } from 'react-redux';
import { followTnunkCreator, unfollowTnunkCreator, getUsersThunkCreator} from '../../redux/usersReducer';
import Users from './Users';
import { compose } from 'redux';
import { getAllUsers, getCurrentPage, getIsFollowed, getIsLoading, getPageSize, getTotalCount } from '../../redux/usersSelector';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
    }
    changeCurrentPage = (p) => {
        this.props.getUsersThunkCreator(this.props.pageSize, p)
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <Users totalCount={this.props.totalCount}
            pageSize = {this.props.pageSize}
            currentPage={this.props.currentPage}
            changeCurrentPage={this.changeCurrentPage}
            users={this.props.users}
            isFollowed={this.props.isFollowed}
            followTnunkCreator={this.props.followTnunkCreator}
            unfollowTnunkCreator={this.props.unfollowTnunkCreator}
            isLoading={this.props.isLoading}/>
    }
}

const mapStateToProps = (state) => ({
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCount(state),
    isLoading: getIsLoading(state),
    isFollowed: getIsFollowed(state)
});

export default compose(
    connect(mapStateToProps, {getUsersThunkCreator, followTnunkCreator, unfollowTnunkCreator})
)(UsersContainer)
