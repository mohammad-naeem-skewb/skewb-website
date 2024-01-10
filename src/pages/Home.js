import { Typography } from "@mui/material";

// constants
import home from "../constants/home";

const Home = () => {
  return (
    <Typography variant="h3" sx={{ color: "themeColor", textAlign: "center" }}>
      {home.title}
    </Typography>
  );
};

export default Home;
