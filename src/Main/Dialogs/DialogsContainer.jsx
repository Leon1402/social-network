import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { addNewMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => ({
    state: state.dialogsPage,
    isAuth: state.authPage.isAuth
});

export default compose(
    connect(mapStateToProps, {addNewMessage}),
    WithAuthRedirect
)(Dialogs)
