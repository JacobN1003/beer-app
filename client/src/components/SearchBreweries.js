import React, {useState}from 'react'
import axios from 'axios'

export default function SearchBreweries() {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])
    
    const onSearch = () =>{
        try{
            axios.post('/find_breweries', {query: query})
            .then((response)=>{
                console.log(response.data.message)
                if(response.data.message === "ok"){
                    setResult(response.data.data)
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={()=>onSearch()}>Search</button>
            {result.map((each, idx)=>(
                <p key={idx}> {each} </p>
            ))}
        </div>
    )
}
