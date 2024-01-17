import { Typography ,Box} from '@mui/material'
import industry from '../constants/Indusry';
import React from 'react'

export default function () {
  return (
    <> 
     <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',textAlign:'center',padding:'3%',paddingBottom:'2%'}}>
        <Typography variant='h1' sx={{color:'white'}}>
            {industry.headtext1} 
        </Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',marginTop:'0',marginLeft:'25%',marginRight:'25%',paddingBottom:'5%'}}>
    <Typography variant='h5' sx={{color:'grey'}}>
         {industry.headtext2}
    </Typography>
    </Box>
    </>
  
  )
}
