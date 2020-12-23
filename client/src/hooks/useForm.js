import {useState} from 'react'

export default function useForm(formValues) {
    const [values, setValues] = useState(formValues)
    return [ 
        values,  
        e => { 
            setValues({ 
                ...values, [e.target.name]: e.target.value 
            }) 
        } 
    ]
}
