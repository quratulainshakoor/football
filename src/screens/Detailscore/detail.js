import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import DetailCard from './detailcard'
import { dat } from './mockupdata'



const Detail = () => {
  const FinalScore = [
    {
      name: 'Cristiano Ronaldo',
    defence:'Lionel Andrés Messi',
     score: '5',
     scores:'3',
     team:'Team   A'
    },

  ]
  return (
    <>
    <Box>

         <Typography
          variant="h2"
          style={{
            textAlign: "center",
            marginTop: "150px",
            marginBottom: "50px",
            color: "	#001433",
            fontWeight: "bold",
            textDecoration:'underline'
          }}
        >
        Detailed ScoreCard
        </Typography>

  
  <Container>

          <Grid container spacing={2}>
            {dat.map((val, i) => (
              <DetailCard key={i} dat={val} />
            ))}
          </Grid>
        </Container>

        {FinalScore.map((FinalScore, index) => {
        return (
          <Box
            sx={{
              marginTop:'10px',
             fontFamily:'sans-serif',
             fontWeight:'bold',
             fontSize:'25px',
             marginLeft:'100px',
             color:'#001433'

            }}
          
          key={index}>
            <p>Cristiano Ronaldo Goal Save:{FinalScore.score}</p>
            <p>Lionel Andrés Messi Goal Save:{FinalScore.scores}</p>
            <p>Highest Score: {FinalScore.name}</p>
            <p>Best Defence: {FinalScore.defence}</p>
            <p>Winning Football : {FinalScore.team}</p>
          </Box>
        )
      })}

    </Box>
    </>
  )
}

export default Detail
