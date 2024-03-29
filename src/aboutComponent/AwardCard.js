import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AwardCard = ({ name, img }) => {
  return (
    <Card sx={{ width: 150, borderRadius: "15%" }}>
      <CardActionArea>
        <CardMedia component="img" width="100%" image={img} />
        <CardContent>
          <Typography
            sx={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AwardCard;
