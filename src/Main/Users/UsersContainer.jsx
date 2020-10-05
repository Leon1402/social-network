import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);