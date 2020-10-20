import React from 'react'
import s from "./FormControl.module.css"

export const Input = ({input, meta, ...props}) => {
    let error = meta.error && meta.touched
    return (
        <div className={s.formControl + ' ' + (error ? s.error: '')}>
            <input {...input}  {...props}/>
                {error && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {
    let error = meta.error && meta.touched
    return (
        <div className={s.formControl + ' ' + (error ? s.error: '')}>
            <textarea {...input}  {...props}/>
                {error && <span>{meta.error}</span>}
        </div>
    )
}