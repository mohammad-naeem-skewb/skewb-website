import React, { useState } from "react";
import {
  Button,
  Box,
  Grid,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Loader from "../loader/Loader";
import axios from "axios";
import { toast } from "react-toastify";
 
const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  // console.log("error: ", error);
 
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
 
  function firstNameClick(e) {
    setFirstName(e.target.value);
  }
  function lastNameClick(e) {
    setLastName(e.target.value);
  }
  function companyNameClick(e) {
    setCompanyName(e.target.value);
  }
  function emailClick(e) {
    setEmail(e.target.value);
  }
 
  function messageClick(e) {
    setMessage(e.target.value);
  }
 
  const postFormData = async () => {
    setLoader(true);
    try {
      const response = await axios.post("http://15.207.123.147:8000/contact/", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        company_name: companyName,
        message: message,
      });
 
      //   console.log("data: ", response.data);
      setLoader(false);
      toast.success(`${response.data}!`);
    } catch (error) {
      //   console.error("Error while posting data:", error);
      toast.error("Error while submitting form!");
      setLoader(false);
    }
  };
 
  function onsubmit(e) {
    e.preventDefault();
    if (!firstName) {
      setError("First name is required");
    } else if (!email) {
      setError("Email is required");
    } else if (!message) {
      setError("Message is required");
    } else {
      postFormData();
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setCompanyName("");
      setError("");
    }
  }
 
  const inputStyles = {
    color: "white",
    background: "#1d2838",
    borderRadius: "15px",
    width: { xs: "80%", sm: "60%", md: "50%" },
    "&::placeholder": {
      textAlign: "center",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C"
    },
    
    
  };
 
  return (
    <>
      {loader && <Loader />}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: isMatch ? "100%" : "50%",
          }}
        >
          <Grid container spacing={2}>
            <Grid xs={12} item>
              <TextField
                placeholder="First Name"
                fullWidth
                required
                InputProps={{ style: { ...inputStyles } }}
                value={firstName}
                onChange={firstNameClick}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                placeholder="Last Name"
                variant="outlined"
                fullWidth
                required
                InputProps={{ style: { ...inputStyles } }}
                value={lastName}
                onChange={lastNameClick}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                placeholder="Company Name"
                variant="outlined"
                fullWidth
                required
                InputProps={{ style: { ...inputStyles } }}
                value={companyName}
                onChange={companyNameClick}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="email"
                placeholder="Enter Your Email"
                variant="outlined"
                fullWidth
                required
                InputProps={{ style: { ...inputStyles } }}
                value={email}
                onChange={emailClick}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                placeholder="Type your message"
                variant="outlined"
                multiline
                rows={6}
                fullWidth
                required
                InputProps={{ style: { ...inputStyles } }}
                value={message}
                onChange={messageClick}
              />
            </Grid>
          </Grid>
          <Grid
            xs={12}
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* Error massage start */}
            <Grid xs={12} item>
              {error && (
                <Typography variant="p" sx={{ color: "red" }}>
                  {error}
                </Typography>
              )}
            </Grid>
            {/* Error message end */}
            <Button
              type="submit"
              variant="contained"
              onClick={onsubmit}
              sx={{
                backgroundColor: "#C8D640",
                width: "25%",
                marginTop: "3%",
                padding: "1.7%",
                fontWeight: "600",
                borderRadius: "10px",
                color: "black",
                "&:hover": {
                  backgroundColor: "#d6ff41",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
 
export default Form;