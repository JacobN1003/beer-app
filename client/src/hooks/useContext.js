import { createContext } from "react";

export const UserContext = createContext(null)

//<UserContext.Provider value={{value, setValue}}>
    
    // all children have access to UserContext values
    
//</UserContext.Provider>


//example

//import {UseContext} from "react"
//import { UserContext } from "../UserContext.js"
//export function Index(){
    //     const {value, setValue} = useContext(UserContext)
    //
    //     return(
    //         <button> onClick={() => setValue("new value")} change value </button>
    //     )
    // }