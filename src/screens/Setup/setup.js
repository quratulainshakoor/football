import { Box } from '@mui/material'
// import React from 'react'
// import { data } from '../../asserts/Card/mockupData'
// import SoccerLineUp from 'react-soccer-lineup'
import Ground from '../../asserts/images/setup.png'
// import Player from '../../asserts/images/player.png'
import Image1 from "../../asserts/images/img1.jpg";
import Image2 from "../../asserts/images/img2.jfif";
import Image3 from "../../asserts/images/img3.jfif";
import Image4 from "../../asserts/images/img4.jfif";
import Image5 from "../../asserts/images/img5.jfif";
import Image6 from "../../asserts/images/img6.jfif";
import Image7 from "../../asserts/images/img7.jfif";
import Image8 from "../../asserts/images/img8.jfif";
import Image9 from "../../asserts/images/img9.jfif";

const Setup = () => {
  // let Image = data.image;
  // console.log(data)
  return (
    <>  
    <Box sx={{
      marginTop:'50px',
      marginBottom:'100px',
      display:'flex',
      justifyContent:'center',
    }}>

      <img src={Ground} alt='soccer-ground'  style={{
      marginTop:'100px',
      marginBottom:'100px',
     
    }} />



    
<img src={Image1}  style={{
      marginTop:'100px',
      marginBottom:'100px',
      border:'5px solid blue',
      borderRadius:'50px',
    height:'100px' , 
      width:'100px',
     position:'absolute',
     top:'90px',
     right:'670px',
  bottom:'66px'
    }}   />


<img src={Image2} style={{
      marginTop:'100px',
      marginBottom:'100px',
      border:'5px solid blue',
      borderRadius:'50px',
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'60px',
     right:'750px',
  bottom:'100px'
    }}   />

<img src={Image3}  style={{
      marginTop:'100px',
      marginBottom:'100px',
      border:'5px solid blue',
      borderRadius:'50px',
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'30px',
     right:'690px',
  bottom:'70px'
    }}   />

    
<img src={Image4}  style={{
      marginTop:'100px',
      border:'5px solid blue',
      borderRadius:'50px',
      marginBottom:'100px',
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'90px',
     right:'670px',
  bottom:'66px'
    }}   />

<img src={Image5}  style={{
      marginTop:'100px',
      marginBottom:'100px',
      border:'5px solid blue',
      borderRadius:'50px',
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'60px',
     right:'440px',
  bottom:'40px'
    }}   />

{/* <img src={Image6}  style={{
      marginTop:'100px',
      marginBottom:'100px',
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'60px',
     right:'440px',
  bottom:'40px'
    }}   />
    
<img src={Image7}  style={{
      marginTop:'100px',
      marginBottom:'100px',
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'60px',
     right:'440px',
  bottom:'40px'
    }}   />
    
<img src={Image8}  style={{
      marginTop:'100px',
      marginBottom:'100px',
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'60px',
     right:'440px',
  bottom:'40px'
    }}   />
    
<img src={Image9}  style={{
      marginTop:'100px',
      marginBottom:'100px',
    height:'100px' , 
      width:'100px',
     position:'relative',
     top:'60px',
     right:'440px',
  bottom:'40px'
    }}   /> */}
        

    </Box>
    </>
  )
}

export default Setup
