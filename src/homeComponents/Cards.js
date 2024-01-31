import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Quotes from "../assets/Quotes.svg";
import closingQuotes from "../assets/closing_quotes.svg";

function Cards({ image, content, onMouseEnter, onMouseLeave }) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        borderRadius: "20px",
        width: isMedium || isSmall ? "100%" : "80%",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        color: "#99cc00",
      }}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <CardActionArea sx={{ textAlign: "center" }}>
        <Box
          sx={{ width: isMedium || isSmall ? "80%" : "30%", margin: "auto" }}
        >
          <CardMedia component="img" image={image} />
        </Box>
        <CardContent>
          <Box
            variant="body2"
            color="#B4D0B4"
            sx={{
              fontSize: "17px",
              fontStyle: "italic",
              lineHeight: "160%",
              textAlign: "justify",
            }}
          >
            <Typography
              variant="div"
              sx={{
                marginTop: "5%",
                textAlign: "left",
                fontSize: "18px",
                lineHeight: "176%",
                color: "#616d7e",
              }}
            >
              {" "}
              <span style={{ fontSize: "40px", marginRight: "7px" }}>
                {" "}
                <img src={Quotes} width="30px" alt=" " />
              </span>
              {content}
              <span style={{ fontSize: "40px", marginLeft: "3px" }}>
                {" "}
                <img src={closingQuotes} width="30px" alt="" />
              </span>
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
