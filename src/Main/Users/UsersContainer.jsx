import React from 'react';
import { connect } from 'react-redux';
import { followTnunkCreator, unfollowTnunkCreator, getUsersThunkCreator} from '../../redux/usersReducer';
import Users from './Users';
import Loader from '../../common/Loader';

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
    }
    changeCurrentPage(p) {
        this.props.getUsersThunkCreator(this.props.pageSize, p)
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return this.props.isLoading ? <Loader />
        :<Users totalCount={this.props.totalCount}
            pageSize = {this.props.pageSize}
            currentPage={this.props.currentPage}
            changeCurrentPage ={this.changeCurrentPage.bind(this)}
            users={this.props.users}
            isFollowed={this.props.isFollowed}
            followTnunkCreator={this.props.followTnunkCreator}
            unfollowTnunkCreator={this.props.unfollowTnunkCreator}/>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isLoading: state.usersPage.isLoading,
    isFollowed: state.usersPage.isFollowed
});

export default connect(mapStateToProps, {
    getUsersThunkCreator, followTnunkCreator, unfollowTnunkCreator
})(UsersAPI);