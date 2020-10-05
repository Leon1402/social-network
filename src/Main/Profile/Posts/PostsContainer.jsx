import { connect } from 'react-redux';
import { addPostAC, changeNewPostAC } from '../../../redux/profileReducer';
import Posts from './Posts';

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
    }
);
const mapDispatchToProps = (dispatch) => ({
    addNewPost(text) {
        if (text) dispatch(addPostAC());
        else alert("Enter text!!!");
    },
    changeNewPost(text) {
        dispatch(changeNewPostAC(text));
    }
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;