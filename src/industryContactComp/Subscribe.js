import React from 'react'
import { Typography, Button, TextField, Box, Grid } from "@mui/material";
import subscribe from '../constants/subscribe';
export default function Subscribe() {
  return (
    <>
      <Grid sx={{
        backgroundImage: 'linear-gradient(to bottom right,#1c2427 40%,#C8D640  )', marginTop: '6%', boxShadow: '#C8D640', borderRadius: '25px', display: 'block', width: "100%",
        maxWidth: "1200px"


      }}>

        <box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant='h3' sx={{ color: "white", textAlign: "center", width: "100%" }} >{subscribe.text}
          </Typography>
        </box>

        <Grid
          container

          sx={{

            display: 'flex',
            margin: '4%',
            justifyContent: 'center',


          }}

        >
          <TextField variant="outlined" placeholder='Your email address' sx={{
            border: '2px solid grey', borderRadius: '10px',
            width: '350px',
            background: 'rgba(29, 40, 56, .25)',

            marginBottom: '5%'
          }} />

          <Button type='subscribe' variant='contained' sx={{

            border: '1px solid #C8D640',
            fontWeight: 'bold',
            borderRadius: '8px',
            marginBottom: '5%',

            boxShadow: '#C8D640',
            width: '150px',
            // box-sizing: border-box;
            color: 'black',

            backgroundColor: '#C8D640',
            marginLeft: '3%',
            ':hover': {
              color: '#C8D640', background: 'black',
              transform: 'scale(1.15) rotate(0 deg)',
              boxShadow: 'rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px'
            }
          }}> Subscribe</Button>

        </Grid>

      </Grid>
    </>
  )
}
