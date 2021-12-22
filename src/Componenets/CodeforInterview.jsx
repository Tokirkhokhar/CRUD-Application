import React from 'react'
import youtube from'../accets/IMG_20211222_193507_053.jpg'
import insta from'../accets/IMG_20211222_193641_283.jpg'
import tele from'../accets/IMG_20211222_193735_718.jpg'
import {Box, makeStyles} from '@material-ui/core'

const usestyle = makeStyles({
  image:{
    width:'50%',
    height:'50%'
  }
})

function CodeforInterview() {
    return (
      <Box>
      
        <Box style={{display:'flex'}}>
          <img src={youtube}></img>
          <img src={insta}></img>
          <img src={tele}></img>
        </Box>
      </Box>
    )
}

export default CodeforInterview
