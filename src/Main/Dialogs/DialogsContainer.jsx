import { connect } from 'react-redux';
import { addMessageAC, changeNewMessageAC } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

<<<<<<< HEAD
const mapStateToProps = (state) => ({
    state: state.dialogsPage
});
const mapDispatchToProps = (dispatch) => ({
=======
let mapStateToProps = (state) => ({
    state: state.dialogsPage
});
let mapDispatchToProps = (dispatch) => ({
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
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