import React from 'react'
import { Button, Box, Grid, TextField } from "@mui/material";
const Form = () => {
  return (
    <Box sx={{
      display: "flex", flexDirection: "column", width: "50%"

    }}>

      <Grid container spacing={2} sx={{

      }}  >
        <Grid xs={12} item sx={{
          input: {
            color: 'white', background: '#1d2838;', borderRadius: '15px', border: '1px solid 18288',
          }
        }}>
          <TextField placeholder="First Name" fullWidth required />

        </Grid>
        <Grid xs={12} item sx={{
          input: {
            color: 'white', background: '#1d2838;', borderRadius: '15px'
          }
        }}>
          <TextField placeholder="Last Name" variant="outlined" fullWidth required />

        </Grid>
        <Grid xs={12} item sx={{
          input: {
            color: 'white', background: '#1d2838;', borderRadius: '15px'
          }
        }}>
          <TextField placeholder="Company Name" variant="outlined" fullWidth required />

        </Grid>
        <Grid xs={12} item sx={{
          input: {
            color: 'white', background: '#1d2838;', borderRadius: '15px'
          }
        }}>
          <TextField type="email" placeholder="Enter Your Email" variant="outlined" fullWidth required />
        </Grid>


        <Grid xs={12} item sx={{

          '& .MuiInputBase-input': {

            color: 'white',

            background: '#1d2838',

            borderRadius: '15px'

          },

          '& .MuiOutlinedInput-multiline': {

            background: '#1d2838', // You may need to adjust this if needed

            borderRadius: '15px'

          },

          '& .MuiOutlinedInput-notchedOutline': {

            borderColor: 'none' // Adjust the border color as needed

          }

        }}>

          <TextField
            
            placeholder="Type your message"

            variant="outlined"
 
            multiline
            rows={6}

            fullWidth

            required

            InputProps={{ style: { borderRadius: '15px' } }}
       
          />

        </Grid>



      </Grid>
      <Grid xs={12} item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button type="submit" variant="contained" sx={{
          backgroundColor: '#C8D640', margin: '4%', border: 'none', borderRadius: '14px', lineHeightheight: '140%', width: '100px', color: 'black', fontSize: '18px', ':hover': {
            color: '#C8D640', background: 'black',
            transform: 'scale(1.15) rotate(0 deg)',
            boxShadow: 'rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px'
          }
        }}>submit</Button>
      </Grid>
    </Box>
  )
}

export default Form