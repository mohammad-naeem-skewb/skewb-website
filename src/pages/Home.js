import { Typography } from "@mui/material";

// constants
import { title } from "../constants/home/title";

const Home = () => {
  return (
    <Typography variant="h2" sx={{ color: "themeColor", textAlign: "center" }}>
      {title.title}
    </Typography>
  );
};

export default Home;
