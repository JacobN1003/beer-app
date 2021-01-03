import {useState} from 'react'

export function useFilters(filters) {
    const [values, setValues] = useState(filters)
    return [ 
        values,  
        e => { 
            setValues({ 
                ...values, [e.target.name]: e.target.value 
            }) 
        } 
    ]
}
