import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { addMessageAC, changeNewMessageAC } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => ({
    state: state.dialogsPage,
    isAuth: state.authPage.isAuth
});
let mapDispatchToProps = (dispatch) => ({
    addNewMessage(text) {
        if (text) dispatch(addMessageAC());
        else alert("Enter text!!!");
    },
    changeNewMessage(text) {
        dispatch(changeNewMessageAC(text));
    }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
