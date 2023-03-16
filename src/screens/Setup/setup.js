import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
 import { data } from '../../asserts/Card/mockupData'
import Ground from '../../asserts/images/setup.png'
import Profile from '../../asserts/images/player.png'


const Setup = () => {

  // let Image = data.image;
  // console.log(data)
  return (
    <>  
      <Typography
          variant="h2"
          style={{
            textAlign: "center",
            marginTop: "150px",
            marginBottom: "10px",
            color: "	#001433",
            fontWeight: "bold",
            textDecoration:'underline'
          }}
        >
          Our Team
        </Typography>
   


    <Box sx={{
      
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
  
      <img src={Ground} alt='soccer-ground'  style={{
      marginTop:'100px',
      marginBottom:'100px',
     height:'80%',
     marginLeft:'250px'
    }} />

    <div>

<img src={Profile}  style={{
    

    height:'100px' , 
      width:'100px',
     position:'relative',
     top: '228px',
     bottom: '183px',
     left: '-310px',
    }}   />

    
<img src={Profile}  style={{
    

    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'-110px',
     left:'-210px',
  bottom:'66px'
    }}   />


<img src={Profile} style={{
    
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'200px',
     left:'-250px',
  bottom:'-110px'
    }}   />



<img src={Profile}  style={{
    
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'30px',
     right:'622px',
  bottom:'20px'
    }}   />

    
<img src={Profile}  style={{
   
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'90px',
     right:'570px',
  bottom:'66px'
    }}   />

<img src={Profile}  style={{
 
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'60px',
     right:'440px',
  bottom:'40px'
    }}   /> 
    </div>


        

    </Box>
    </>
  )
}

export default Setup
