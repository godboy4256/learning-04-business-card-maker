import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css'

const CardAddForm = ({onAdd,FileInput}) => {
    const [file,setFile] = useState({fileName:null,fileURL:null})
    const onFileChang = (file) => {
        setFile({
            fileName:file.name,
            fileURL:file.url
        })
    }
  
    const nameRef=useRef(),
         companyRef=useRef(),
        themeRef=useRef(),
        titleRef=useRef(),
        emailRef=useRef(),
        messageRef=useRef(),
        formRef=useRef()
    const onSubmit = (event) => {
        event.preventDefault()
        const card = {
            id:Date.now(),
            name:nameRef.current.value || " ", 
            company:companyRef.current.value || " ",
            theme:themeRef.current.value || " ",
            title:titleRef.current.value || " ",
            email:emailRef.current.value || " ",
            message:messageRef.current.value || " ",
            fileName: file.fileName || " ",
            fileURL: file.fileURL || " " 
        }
        formRef.current.reset()
        setFile({
            fileName:file.name,
            fileURL:file.url
        })
        onAdd(card)
    }
    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name"/>
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company"/>
            <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
            <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title"/>
            <input ref={emailRef} className={styles.input} type="text" name="email"placeholder="email"/>
            <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="message"></textarea>
            <div className={styles.fileInput}>
               <FileInput name={file.fileName} onFileChange={onFileChang}/>
            </div>
            <Button name="Add" onClick={onSubmit} />
        </form>
    )
}
            

export default CardAddForm;