import React from 'react'
import useForm from '../hooks/useForm'

export default function Home() {
    const [formValues, handleChange] = useForm({username: "", email: "", password: ""})  
    
    console.log(formValues)
    return (
        <div>
            <input type="text" name="username" value={formValues.username} onChange={handleChange}/>
            <input type="text" name="email" value={formValues.email} onChange={handleChange}/>
            <input type="password" name="password" value={formValues.password} onChange={handleChange}/>
            <p>username: {" " + formValues.username}</p>
            <p>email: {" " + formValues.email}</p>
            <p>password: {" " + formValues.password}</p>
        </div>
    )
}
