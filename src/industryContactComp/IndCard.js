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
 
export default function Card_ind({ img, heading, content }) {
  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        margin: "2%",
        paddingTop: "5%",
        marginLeft: "5%",
        maxWidth: "100%",
        boxShadow: "lg",
        background: "rgba(29, 40, 56, .5)",
 
        border: "1px solid #182233 ",
        borderRadius: "15px",
        ":hover": {
          transform: "scale(1.5) rotate(0 deg)",
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
          marginTop: "2%",
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
            fontFamily: "Inter, sans-serif;",
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
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1c2427",
            margin: "4%",
            border: "none",
            borderRadius: "10px",
            display: "inline-block",
            boxShadow: "20",
            ":hover": {
              color: "#C8D640",
              background: "black",
              transform: "scale(1.15) rotate(0 deg)",
              border:'1px solid #1c2427 '
            },
          }}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
}