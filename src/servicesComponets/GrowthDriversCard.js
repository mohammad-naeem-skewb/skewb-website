import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function GrowthDriversCard({text1,img,text2}) {
  return (
    <CardActionArea sx={{padding:"5%"}}>
    
    
    <CardContent>
        <Typography style={{ width: '70%' }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "center" }} >
                {text1}
            </Typography>
            <Typography><br /> </Typography>
            <CardMedia

                component="img"
                height="70%"
                image={img}
                alt="Ensemble models"
                style={{ borderRadius: '50%' }}
            />
        </Typography>
       
        <Typography variant="h6" color="#B4D0B4" sx={{padding:"8%", fontSize: "92px", lineHeight: "103%", letterSpacing: "-1.4%", fontFamily: "Sora, sans-serif", fontWeight: "500"}}>
       {text2}
        </Typography>
    </CardContent>
</CardActionArea>

  )
}

export default GrowthDriversCard