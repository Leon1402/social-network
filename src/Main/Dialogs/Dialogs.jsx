import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormControl';
import { isFilled, maxLength } from '../../utils/validators';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(item =>
        <Dialog name={item.name} id={item.id} key={item.id} />)
        
    let messagesElements = props.state.messages.map(item =>
        <Message message={item.message} id={item.id} key={item.id} />)

    let addNewMessage = (value) => {
        props.addNewMessage(value.newMessage);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className="messages">
                <div className={s.messagesItem}>
                    {messagesElements}
                </div>
                <NewMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLengthField = maxLength(50)
let NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessage' placeHolder='Enter New Message' 
            component={Textarea} validate={[isFilled,maxLengthField]}/>
            <button>Send</button>
        </form>
    )
}
NewMessageForm = reduxForm({form: 'newMessageForm'})(NewMessageForm)

export default Dialogs;