import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

// function SandipSir({ img, name, position, content, ref }) {
//   return (
//     <Box sx={{border:"2px solid red", height:"10%"}}>
//     <Card
//       sx={{
//         borderRadius: "20px",
//         backgroundColor: "rgba(255, 255, 255, 0.0)",
//         color: "#d6ff41",
//         width:"20%",
//         display:"flex",

//         height:"15%",

//       }}
//     >
//       <CardActionArea>
//         <CardMedia sx={{border:"2px solid red", padding:"5%"}} component="img" image={img} alt={name} width="0%" />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             {name}
//           </Typography>
//           <Typography gutterBottom variant="h10" component="div">
//             {position}
//           </Typography>
//           <Typography
//             variant="body2"
//             color="#B4D0B4"
//             sx={{
//               color: "#8c99ab",
//               fontFamily: "Inter, sans-serif",
//               fontSize: "18px",
//               lineHeight: "180%",
//               border:"2px solid red"
//             }}
//           >
//             {content}
//             <Typography>
//               <Button size="small" color="primary" style={{ color: "#d6ff41" }}>
//                 {/* < a  href=" " > Connect </a> */}
//                 <Link
//                   to="/serviceExplore"
//                   style={{ textDecoration: "none", color: "#d6ff41" }}
//                 >
//                   {" "}
//                   Connect{" "}
//                 </Link>
//               </Button>
//             </Typography>
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//     </Box>
//   );
// }

// export default SandipSir;

function SandipSir({ name, img, content, position }) {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #d6ff41",
        borderRadius: "2px",
        display: "flex",
        justifyContent: "center",
        width: "60%",
        marginLeft: "20%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
      }}
    >
      <Box
        sx={{
          //   border: "2px solid red",
          display: "flex",
          justifyContent: "center",
          padding: "0% 5% 5% 5%",
        }}
      >
        <Box
          item
          sx={{
            // border: "2px solid red",
            display: "flex",
            justifyContent: "end",
            padding: "2%",
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
            padding: "2%",
            color: "#8c99ab",
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            lineHeight: "180%",
          }}
        >
          Sandeep is a global leader in the field of Analytical consulting and
          digital transformation. He has a unique acumen for understanding data,
          its versatility and application beyond businesses along with a strong
          analytics consulting experience.
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
