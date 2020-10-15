import { connect } from 'react-redux';
import { addMessageAC, changeNewMessageAC } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => ({
    state: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;