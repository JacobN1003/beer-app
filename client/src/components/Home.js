import React from 'react'
import SearchBar from './SearchBar.js'
import NavBar from './NavBar.js'
import { makeStyles } from '@material-ui/core/styles';

const homeStyles = makeStyles({
    container:{
       
    },
});

export default function Home() {  
    const classes = homeStyles()

    return (
        <div className={classes.container}>
            <NavBar/>
            <SearchBar/>
        </div>
    )
}
