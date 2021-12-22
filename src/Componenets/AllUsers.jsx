import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { deleteuser, getusers } from '../service/api'
import { Link } from 'react-router-dom'

const userstyle = makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px'
    },
    thead:{
        '& > *':{
            background:'#000000',
            color:'#ffff',
            fontSize:20
        }
    },
    row:{
        '& > *':{
            fontSize:20
        }
    }
})

function AllUsers() {
    
    const[users,setUsers]=useState([])
    const classes = userstyle();
    useEffect(() => {
        getAllusers();
    }, [])

    const getAllusers =async ()=>{
       const response = await getusers();
       console.log(response.data);
       setUsers(response.data);
    }

    const deleteUserdata =async(id)=>{
       await deleteuser(id);
       getAllusers();
    }
    return (
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                users.map(user => {
                   return(
                       <TableRow className={classes.row}>
                         <TableCell>{user.id}</TableCell>
                         <TableCell>{user.name}</TableCell>
                         <TableCell>{user.username}</TableCell>
                         <TableCell>{user.email}</TableCell>
                         <TableCell>{user.phone}</TableCell>
                         <TableCell>
                          <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                          <Button variant="contained" color="secondary" onClick={()=>deleteUserdata(user.id)}>Delete</Button>
                         </TableCell>
                       </TableRow>                     
                       )
                    })
            }
          </TableBody>
        </Table>
    )
}

export default AllUsers
