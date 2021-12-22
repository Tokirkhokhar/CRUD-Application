import React from 'react'
import {AppBar,makeStyles,Toolbar, Typography} from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import { NavLink } from 'react-router-dom'

const useStyle = makeStyles({
    header: {
        background:'#111111'
    },
    tabs:{
        color:'#ffff',
        textDecoration:'none',
        margin:20
    }

})

function NavBar() {
    const classes = useStyle()
    return (
        <AppBar className={classes.header} position='static'>
          <Toolbar >
            <NavLink  className={classes.tabs} to="./">Crypto Jargon </NavLink>
            <NavLink  className={classes.tabs} to="./all">All Users </NavLink>
            <NavLink  className={classes.tabs} to="./add">Add Users</NavLink>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar
