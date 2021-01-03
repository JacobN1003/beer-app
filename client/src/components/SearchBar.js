import React, {useState, createContext}from 'react'
import axios from 'axios'
import {TextField, InputAdornment, Grid, ListItem, 
    ListItemText} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { SearchFilter } from './SearchFilter';


const searchbarStyles = makeStyles({
    container: {
        padding: '20px'
    },
    searchbar:{
        width:'100%',
    },
    icon_button: {
        paddingLeft: "10px",
        "&:hover":{
            fontSize:"30px",
            cursor:'pointer',
            
        }
    },
});

export const FilterContext = createContext(false)

export default function SearchBar() {
    const classes = searchbarStyles();
    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])
    const [openFilter, setOpenFilter] = useState(false)

    // const [values, setFilters] = useFilters({ byType:""}) //byCity: "", byName: "", byState: "", byZip: "", })
    
    
    const onSearch = () =>{
        try{
            axios.post('/find_breweries', {query: query})
            .then((response)=>{
                if(response.data.message === "ok"){
                    setResult(response.data.data)
                }
            })
        }
        catch(e){ console.log(e) }
        finally{ setQuery("") }
    }

    const handleKeyPress = (e) => { 
        if(e.key === 'Enter') onSearch() 
    }
    
    return (
        
            <Grid container justify="center" className={classes.container}>
                <Grid item xs={12} sm={10} lg={8} xl={6}>
                    <TextField 
                        className={classes.searchbar} 
                        id="home-search-bar" 
                        label="Search breweries..." 
                        variant="outlined"
                        value={query}
                        color="primary"
                        onChange={(e)=>setQuery(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e)}
                        InputProps={{endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon 
                                    className={classes.icon_button} 
                                    color="primary" 
                                    onClick={()=>onSearch()}/>
                                {openFilter ? 
                                    <CloseIcon
                                    className={classes.icon_button} 
                                    color="secondary" 
                                    onClick={()=>setOpenFilter(!openFilter)}/>
                                    :
                                    <TuneIcon 
                                        className={classes.icon_button} 
                                        color="secondary" 
                                        onClick={()=>setOpenFilter(!openFilter)}/> }
                            </InputAdornment>
                            ),}}/>

                    <FilterContext.Provider value={{openFilter, setOpenFilter}}>
                        <SearchFilter/>
                    </FilterContext.Provider>
                    
                        {result.map((each, idx)=>(
                                <ListItem key={idx}> 
                                    <ListItemText>
                                        {each}
                                    </ListItemText>
                                </ListItem>
                            ))}
                </Grid>
            </Grid>
    )
}
