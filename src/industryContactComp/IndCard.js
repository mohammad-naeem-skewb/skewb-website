import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Card_ind({ img, heading, content }) {
  const strArr = heading.split(" ");
  const title = strArr.filter((ele)=>{
    return ele!==''
  })[0];

  const navigate = useNavigate();
  
 
  return (
    <Card
      sx={{
        width: 350,
        height: 350,

        // maxWidth: "100%",
        boxShadow: "lg",
        background: "rgba(29, 40, 56, .5)",
        margin: "2%",
        border: "1px solid white ",
        borderRadius: "15px",
        lineHeight: "180%",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      
        transition: "transform 0.3s",
        ":hover": {
          transform: "scale(1.01)",
          background: "black",
        },
      }}
    >
      <Grid
        sx={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          margin: "1%",
          // marginTop: "2%",
          // border:"2px solid red"
        }}
      >
        <CardMedia
          sx={{
            height: 50,
            width: 50,
          }}
          component="img"
          image={img}
          title="icon1"
        />
      </Grid>

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
            color: "white",
            fontFamily: " Sora, sans-serif",
            fontWeight: "500",
            lineHeight: "130%",
            fontSize: "24px",
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="small"
          sx={{
            color: "#616d7e",
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
            paddingLeft: "6%",
            paddingRight: "6%",
            fontFamily: "Inter, sans-serif;",
            marginBottom: "32px",
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          component={Link}
          target="_blank"
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1c2427",
            padding: "8px,24px",
            border: "none",
            borderRadius: "12px",
            display: "inline-block",
            boxShadow: "20",
            ":hover": {
              
              background: "black",
              transform: "scale(1.15) rotate(0 deg)",
              border: "1px solid #C8D640 ",
            },
          }}
        >

{/* <Link to={`/user/${userId}`}>Go to User Profile</Link> */}
          <Link
            to={`/industryExplore/${title}`}
            target="blank"
            style={{ textDecoration: "none", color: "#ffffff" ,  ":hover": {
              color: "#d6ff41",
              background: "black",
              transform: "scale(1.15) rotate(0 deg)",
              border: "1px solid #C8D640 ",
            } }}
          >
            {" "}
            Explore
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
