import React from 'react';
import { connect } from 'react-redux';
import { setIsLoadingAC, followAC, unfollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC, setIsLoading } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios';
import Loader from '../../common/loader';


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).
            then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount / 50)
            });
    }
    setCurrentPage(p) {
        this.props.setCurrentPage(p);
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).
            then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
            });
    }
    render() {

        return <>
            {this.props.isLoading ? <Loader />
                : <Users currentPage={this.props.currentPage}
                    setCurrentPage={this.setCurrentPage.bind(this)}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize} />}
        </>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isLoading: state.usersPage.isLoading
});
const mapDispatchToProps = (dispatch) => {
    return {
        follow(userId) {
            dispatch(followAC(userId))
        },
        unfollow(userId) {
            dispatch(unfollowAC(userId))
        },
        setUsers(users) {
            dispatch(setUsersAC(users))
        },
        setTotalCount(count) {
            dispatch(setTotalCountAC(count));
        },
        setCurrentPage(page) {
            dispatch(setCurrentPageAC(page));
        },
        setIsLoading(isLoading) {
            dispatch(setIsLoadingAC(isLoading))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);