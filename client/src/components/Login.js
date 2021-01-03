import React, {useContext} from 'react'
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import {Button, TextField, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {LoginContext} from './NavBar';

const useStyle = makeStyles({
    root:{
        
    },
    input:{
       color: 'red'
    },
    login_button:{
       backgroundColor: 'black',
       color: 'white'
    },
    google_button: {
        backgroundColor: '#1769aa',
        color: 'white',
        width: '100%'
    }
})

export default function Login() {
    const isOpen = useContext(LoginContext)
    const classes = useStyle()
    

    return (
           isOpen.openLogin &&  
                <Grid container  alignItems="center" justify="center">
                    <Grid item container direction="column" xs={10} sm={8} md={6} lg={4} alignItems="center" justify="center" >
                        <Grid container item direction="column">
                            <TextField margin='normal' className={classes.input} label="Username" variant="outlined" />
                            <TextField margin='normal' type='password' className={classes.input} label="Password" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <Button 
                                variant="contained" 
                                size='large' 
                                className={classes.login_button}
                                onClick={()=>isOpen.setOpenLogin(false)}>
                                    Login
                            </Button>
                        </Grid>
                        <Grid item style={{marginTop:'30px', marginBottom:'30px', height: '1px', width:'80%', backgroundColor: 'black'}}/>
                        <Grid item>
                            <Button 
                                variant="contained" 
                                size='large' 
                                className={classes.google_button}
                                >
                                    Login with Google
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
    )
}
