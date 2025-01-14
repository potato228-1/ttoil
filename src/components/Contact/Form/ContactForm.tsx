import styles from './ContactForm.module.css'

import MyInput from '@/components/UI/input/MyInput'
import { useState } from 'react'

export default function ContactForm() {
    let [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: '',
    })

    function auto_grow(element: any) {
        element.style.height = (element.scrollHeight) + "px";
      }

    function sendForm(e: any){
        e.preventDefault()
    }

  return (
    <form action="#" className={styles.form}>
        <MyInput
            value={formData.name}
            onChange={(e: any) => setFormData({...formData, name: e.target.value})}
            placeholder='Full name'
        />
        <MyInput
            value={formData.email}
            onChange={(e: any) => setFormData({...formData, email: e.target.value})}
            placeholder='E-mail'
        />
        <MyInput
            value={formData.title}
            onChange={(e: any) => setFormData({...formData, title: e.target.value})}
            placeholder='Title'
        />
        <textarea className={styles.messageField} placeholder='Your message' onInput={e => auto_grow(e.target)} />

        <button className={styles.btn} onClick={e => sendForm(e)}>
            SEND YOUR MESSAGE
        </button>
    </form>
  )
}
