import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

function GrowthDriversCard({text1,img,text2}) {
  return (
    <Grid
item
height="500px"
xs={12}
md={4}
style={{
  maxWidth: "25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6.75%",
  color: "#B4D0B4",
}}
>
<Card
  sx={{
    borderRadius: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    color: "#d6ff41",

    padding: "6.75%"
  }}
>
  <CardActionArea>
    <CardContent sx={{ padding: "10%" }}>
      
        <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
          {text1}
        </Typography>
        <Typography>
          <br />{" "}
        </Typography>
        <CardMedia
          component="img"
          height="60%"
          image={img}
          alt="Ensemble models"
          style={{ borderRadius: "50%" }}
        />
      
      <Typography>
       
      </Typography>
      <Typography variant="body2" color="#B4D0B4">
        <Typography style={{ fontSize: "1rem",textAlign:"center" , marginTop:"5%"}} variant='body2'>
          {" "}
         {text2}
        </Typography>
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</Grid>

  )
}

export default GrowthDriversCard

