import React, {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar, Button, Grid, Drawer, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import Login from './Login';

const useStyles = makeStyles({
    login_button: {
        float: 'right'
    },
    app_bar:{
        backgroundColor: 'black'
    }
})

export const LoginContext = React.createContext(false)

export default function NavBar() {
    const classes = useStyles()    
    const [openDrawer, setOpenDrawer] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    return (
        <div>
            <AppBar position="static" className={classes.app_bar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>setOpenDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Grid container justify="flex-end">
                        <Button className={classes.login_button} color="inherit" onClick={()=>setOpenLogin(!openLogin)}> Login</Button>
                    </Grid>
                </Toolbar>
            </AppBar>

            <LoginContext.Provider value={{openLogin, setOpenLogin}}>
                <Login/>
            </LoginContext.Provider>
            
            
            <Drawer anchor='left' open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}
