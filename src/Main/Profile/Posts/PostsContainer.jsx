import { connect } from 'react-redux';
import { addPostAC, changeNewPostAC } from '../../../redux/profileReducer';
import Posts from './Posts';

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
<<<<<<< HEAD
});
const mapDispatchToProps = (dispatch) => ({
    addNewPost(text) {
        if (text) dispatch(addPostAC());
        else alert("Enter text!!!")
=======
    }
);
const mapDispatchToProps = (dispatch) => ({
    addNewPost(text) {
        if (text) dispatch(addPostAC());
        else alert("Enter text!!!");
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
    },
    changeNewPost(text) {
        dispatch(changeNewPostAC(text));
    }
<<<<<<< HEAD
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
=======
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9

export default PostsContainer;