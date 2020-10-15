import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setTotalCount, setCurrentPage, changeIsloading, changeIsFollowed } from '../../redux/usersReducer';
import Users from './Users';
import { UsersAxios } from '../../api/api';
import Loader from '../../common/Loader';

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.changeIsloading(true);
        UsersAxios.getUsers(this.props.pageSize, this.props.currentPage)
        .then(data => {
                this.props.changeIsloading(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount / 20)
            });
    }
    changeCurrentPage(p) {
        this.props.changeIsloading(true);
        this.props.setCurrentPage(p);
        UsersAxios.getUsers(this.props.pageSize, p)
        .then(data => {
                this.props.changeIsloading(false);
                this.props.setUsers(data.items);
            });
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
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFollowed={this.props.isFollowed}
            changeIsFollowed={this.props.changeIsFollowed}/>
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
    follow, unfollow, setUsers, setCurrentPage, 
    setTotalCount, changeIsloading, changeIsFollowed
})(UsersAPI);