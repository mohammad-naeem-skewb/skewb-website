import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

function FounderCard({ img, name, position, content }) {
    return (

        <Card sx={{ borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}

                    </Typography>
                    <Typography gutterBottom variant="h10" component="div">
                        {position}
                    </Typography>
                    <Typography variant="body2" color="#B4D0B4">
                        {content}
                        <Typography><br />  </Typography>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" style={{ color: '#d6ff41' }}>
                    Connect
                </Button>
            </CardActions>
        </Card>


    )
}

export default FounderCard