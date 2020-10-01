import React from 'react';
import { addMessageAC, changeNewMessageAC } from '../../redux/dialogsReducer';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(item =>
        <Dialog name={item.name} id={item.id} />)

    let messagesElements = props.state.messages.map(item =>
        <Message message={item.message} id={item.id} />)

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let text = newMessageElement.current.value;
        if (text) props.dispatch(addMessageAC());
        else alert("Enter text!!!");
    }   
    let changeNewMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(changeNewMessageAC(text));
    }
    console.log(props)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className="messages">
                <div className={s.messagesItem}>
                    {messagesElements}
                </div>
                <div className={s.newMessage}>
                    <textarea ref={newMessageElement} 
                    value={props.state.newMessageText}
                    onChange={changeNewMessage}/>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;