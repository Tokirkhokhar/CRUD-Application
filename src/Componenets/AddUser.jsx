import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { adduser } from '../service/api'
import{useNavigate} from 'react-router-dom'
const usestyle = makeStyles({
    container:{
        width:'50%',
        display:'static',
        margin:'4% 0 0 25%',
        '&>*':({
            margin:20
        })
    },
    input:{
        // position:'relative'
    }
})

const iv={
    name:'',
    username:'',
    email:'',
    phone:''
}

function AddUser() {
    const classes=usestyle();
    const[user,setuser]=useState(iv);
    const{name,username,email,phone}=user;
    const history=useNavigate();
    const valChange =(e)=>{
         setuser({...user,[e.target.name]: e.target.value})
         console.log(user)
    }
    const addUserDetials =async ()=>{
        await adduser(user);
        history('./all')
    }
    return (
        <FormGroup className={classes.container}>
        <Typography variant="h5">Add User</Typography>
         <FormControl>
          <InputLabel className={classes.input}>Name</InputLabel>
          <Input onChange={(e)=>valChange(e)} name='name' value={name}/>
         </FormControl>
         <FormControl>
          <InputLabel className={classes.input}>Username</InputLabel>
          <Input onChange={(e)=>valChange(e)} name='username' value={username}/>
         </FormControl>
         <FormControl>
          <InputLabel className={classes.input}>email</InputLabel>
          <Input onChange={(e)=>valChange(e)} name='email' value={email}/>
         </FormControl>
         <FormControl>
          <InputLabel className={classes.input}>phone</InputLabel>
          <Input onChange={(e)=>valChange(e)} name='phone' value={phone}/>
         </FormControl>
         <Button variant='contained' color='primary' onClick={()=>addUserDetials()}>Add User</Button>
        </FormGroup>
    )
}

export default AddUser
