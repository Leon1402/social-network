import { connect } from 'react-redux';
import { addNewPost } from '../../../redux/profileReducer';
import Posts from './Posts';

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
    }
);

const PostsContainer = connect(mapStateToProps, {addNewPost})(Posts)

export default PostsContainer;