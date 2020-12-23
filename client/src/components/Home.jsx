import React, {useState} from 'react'
import SearchBreweries from './SearchBreweries.js'
//import useForm from '../hooks/useForm'

export default function Home() {
    //const [formValues, handleChange] = useForm({username: "", email: "", password: ""})  

    return (
        <div>
            {/* <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={()=>onSearch()}>Search</button>
            {result.map((each, idx)=>(
                <p key={idx}> {each} </p>
            ))} */}
            <SearchBreweries/>
        </div>
    )
}
