import React, {useContext} from 'react'
import {Grow, Paper, FormGroup, FormControlLabel, 
    Checkbox, TextField, Grid} from '@material-ui/core';
import  {FilterContext } from './SearchBar'

export function SearchFilter() {
    const isOpen = useContext(FilterContext)

    return (
        <Grow in={isOpen.openFilter} >
                <Paper elevation={3}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={8} lg={4} xl={3}>
                            <TextField
                            label="City"/>
                        </Grid>
                        <Grid item xs={12} sm={8} lg={4} xl={3}>
                            <TextField
                            label="State"/>
                        </Grid>
                        <Grid item xs={12} sm={8} lg={4} xl={3}>
                            <TextField
                            label="Zip"/>
                        </Grid>
                        <Grid item xs={12} sm={8} lg={4} xl={3}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox 
                                            checked={false} 
                                            name="Micro" />}
                                    label="Micro"
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Paper>
            </Grow>
    )
}
