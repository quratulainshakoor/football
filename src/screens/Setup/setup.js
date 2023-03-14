import { Box } from '@mui/material'
import React from 'react'
// import SoccerLineUp from 'react-soccer-lineup'
import Ground from '../../asserts/images/setup.png'
const Setup = () => {
  return (
    <>  
    <Box sx={{
      marginTop:'50px',
      marginBottom:'100px',
      display:'flex',
      justifyContent:'center',
    }}>

           <img src={Ground}   style={{
      marginTop:'100px',
      marginBottom:'100px',
     
    }} />
    </Box>
    </>
  )
}

export default Setup
