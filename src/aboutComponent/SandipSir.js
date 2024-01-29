import { Box, Button, Typography } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
function SandipSir({ name, img, content, position }) {
  return (
    <Box
      sx={{
        // border:"2px solid red",
        borderBottom: "1px solid #d6ff41",
        borderRadius: "2px",
        display: "flex",
        justifyContent: "center",
        width: "70%",
        marginLeft: "20%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        padding: "1%",
      }}
    >
      <Box
        sx={{
          // border: "2px solid blue",
          display: "flex",
          justifyContent: "center",
          // padding: "0% 5% 5% 5%",
        }}
      >
        <Box
          item
          sx={{
            // border: "2px solid red",
            display: "flex",
            justifyContent: "end",
            // padding: "2%",
            // padding:"1%"
          }}
        >
          <Box>
            {" "}
            <Box>
              {" "}
              <img
                src="https://assets-global.website-files.com/61eaca7810877f7aff9aaa4f/632948254201ff0a3232694f_Sandeep%20Pandey.png"
                width={"100%"}
                height={"100%"}
                alt=""
              />{" "}
            </Box>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: "center", color: "#white" }}
            >
              Sandeep Pandey
            </Typography>
            <Typography
              gutterBottom
              variant="h11"
              component="div"
              sx={{ textAlign: "center", color: "#d6ff41" }}
            >
              CO-FOUNDER & CEO
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // padding: "2%",
            // color: "#8c99ab",
            // fontFamily: "Inter, sans-serif",
            // fontSize: "18px",
            // lineHeight: "180%",
            // border: "2px solid red",
            // paddingRight:"15%"
          }}
        >
          <Typography
            sx={{
              color: "#8c99ab",
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              lineHeight: "180%",
              padding: "1% 15% 0 4%",
            }}
          >
            Sandeep is a global leader in the field of Analytical consulting and
            digital transformation. He has a unique acumen for understanding
            data, its versatility and application beyond businesses along with a
            strong analytics consulting experience.
          </Typography>
          <Button
            size="small"
            color="primary"
            style={{
              color: "#d6ff41",
              fontSize: "13px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Link
              to={"https://in.linkedin.com/in/sandeeppandey100"}
              target="blank"
              style={{
                textDecoration: "none",
                color: "black",
                padding: "0% 20% 0% 20%",
                backgroundColor: "#d6ff41",
                padding: "10%",
                marginLeft: "50%",
                borderRadius: "10px",
              }}
            >
              {" "}
              Connect{" "}
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SandipSir;
