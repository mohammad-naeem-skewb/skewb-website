import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function FounderCard({ img, name, position, content, url }) {
  return (
    <Card sx={{ borderRadius: '8%', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41', height: '100%' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={img} alt="Snigdha Gupta"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" style={{ color: '#ffffff', fontSize: '24px', fontFamily: 'Sora, sans-serif' }}>
                          {name}
                        </Typography>
                        <Typography gutterBottom variant="h10" component="div" style={{ color: '#d6ff41', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>
                            {position}
                        </Typography>
                        <Typography variant="body2" color="#8c99ab" style={{ fontSize: '18px', fontFamily: 'Inter, sans-serif' }}>
                            {content} </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{ color: '#d6ff41', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
                        <Link to={url} style={{textDecoration:"none", color:"#d6ff41"}}> Connect </Link>
                    </Button>
                </CardActions>
            </Card>
  );
}

export default FounderCard;
