import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import img from "../assets/serviceAssets/skewb_workflow.gif"
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Button, CardActions } from '@mui/material';
 
 
 
 
export default function About() {
    return (
        <Box sx={{ flexGrow: 1, color: '#e6ffe6', padding: '5%' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} style={{ paddingTop: '7%' }}>
                    <Typography variant="h2" gutterBottom>
                        <span style={{ color: '#d6ff41' }}>What is Skewb ?</span>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom >
                        The future of marketing analytics assisted by ultra-intelligent AI. We deliver personalized and hyper-effective analytical solutions to enable organizations attain marketing excellence like never before.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
                    <img src={img} alt="Skewb Workflow" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </Grid>
 
                <Grid item xs={12} md={6} style={{ padding: '2%', paddingTop: '8%' }}>
                    <Card sx={{ Width: 900, Height: 125, borderRadius: '5%', backgroundColor: 'rgba(255, 255, 255, 0.02)', boxShadow: '1px 1px 1px #d6ff41', color: '#d6ff41' }}>
                        <CardActionArea>
                            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
 
                                <div>
 
                                    <Typography gutterBottom variant="h4" component="div">
                                        <FlagOutlinedIcon fontSize="large" style={{ marginRight: '8%' }} /> Our Mission
                                    </Typography>
                                    <Typography variant="body2" color="#B4D0B4">
                                        <Typography>
                                            Skewb has been established with the mission to assist organizations in attaining marketing excellence , backed by our ultra - intelligent AI  models.
                                        </Typography>
                                        <br /><br /><br />
                                    </Typography>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
 
 
                <Grid item xs={12} md={6} style={{ padding: '2%', paddingTop: '8%' }}>
                    <Card sx={{ Width: 900, Height: 125, borderRadius: '5%', backgroundColor: 'rgba(255, 255, 255, 0.02)', boxShadow: '1px 1px 1px #d6ff41', color: '#d6ff41' }}>
                        <CardActionArea>
                            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
 
                                <div>
 
                                    <Typography gutterBottom variant="h4" component="div">
                                        <StarBorderOutlinedIcon fontSize="large" style={{ marginRight: '8%' }} /> Why Skewb?
                                    </Typography>
                                    <Typography variant="body2" color="#B4D0B4">
                                        <Typography>
 
                                            The current market scenario calls for a more dynamic approach that is both analytical & advisory. Our advanced AI solutions help you take the next step with prescriptive analytics with exceptionally high accuracy.
                                        </Typography>
                                        <br /><br />
                                    </Typography>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
 
 
                <Grid item xs={12} md={12} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '11%', color: '#B4D0B4' }}>
                    <Typography variant="h3" gutterBottom>
                        <center>We're a team of experienced analytics enthusiasts </center>
                        <Typography><br /> <br /> </Typography>
 
                        <Typography variant="subtitle1" gutterBottom  >
                            <center>Skewb’s experienced leadership team packs in a combined experience of over 40+ years from various backgrounds and specializations in analytics. All to help brands get concrete and favourable results by leveraging their extensive experience.
                            </center>
                        </Typography>
                    </Typography>
                </Grid>
 
 
                <Grid item xs={12} md={6} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '7%', color: '#B4D0B4' }}>
                    <Card sx={{ borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="https://assets-global.website-files.com/61eaca7810877f7aff9aaa4f/632948254201ff0a3232694f_Sandeep%20Pandey.png"
                                alt="Sandeep Pandey"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Sandeep Pandey
                                </Typography>
                                <Typography gutterBottom variant="h10" component="div">
                                    CO-FOUNDER & CEO
                                </Typography>
                                <Typography variant="body2" color="#B4D0B4">
                                    Sandeep is a global leader in the field of Analytical consulting and digital transformation. He has a unique acumen for understanding data, its versatility and application beyond businesses along with a strong analytics consulting experience.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" style={{ color: '#d6ff41' }}>
                                Connect
                            </Button>
                        </CardActions>
                    </Card>
 
                </Grid>
                <Grid item xs={12} md={6} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '7%', color: '#B4D0B4' }}>
                    <Card sx={{ borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="https://assets-global.website-files.com/61eaca7810877f7aff9aaa4f/6329482596255e67dc05eced_Snigdha%20Gupta.png"
                                alt="Snigdha Gupta"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Snigdha Gupta
 
                                </Typography>
                                <Typography gutterBottom variant="h10" component="div">
                                    CO-FOUNDER & CPO
                                </Typography>
                                <Typography variant="body2" color="#B4D0B4">
                                    An analytics expert, Snigdha has worked across industries and business endeavors with a proven track record in helping clients solve their most complicated challenges.
                                    <Typography><br /> </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" style={{ color: '#d6ff41' }}>
                                Connect
                            </Button>
                        </CardActions>
                    </Card>
 
                </Grid>
 
 
 
                <Grid item xs={12} md={6} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '7%', color: '#B4D0B4' }}>
                    <Card sx={{ borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="https://assets-global.website-files.com/61eaca7810877f7aff9aaa4f/63294824becdfe367e995de1_Shubham%20Chajjed.png"
                                alt="Shubham Chhajed"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Shubham Chhajed
 
                                </Typography>
                                <Typography gutterBottom variant="h10" component="div">
                                    CO-FOUNDER & CTO
                                </Typography>
                                <Typography variant="body2" color="#B4D0B4">
                                    As an expert in embracing agile transformations from concept to execution, Shubham has aided in implementing efficient and cost-effective technologies that optimize value from day one.
                                    <Typography><br />  </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" style={{ color: '#d6ff41' }}>
                                Connect
                            </Button>
                        </CardActions>
                    </Card>
 
                </Grid>
 
 
                <Grid item xs={12} md={6} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '7%', color: '#B4D0B4' }}>
                    <Card sx={{ borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                width="60%"
                                image="https://gumlet.assettype.com/afaqs/2020-09/633cb5a8-624c-487d-bf10-e86287f6955d/WhatsApp_Image_2020_09_08_at_11_02_04_PM.jpeg?auto=format%2Ccompress"
                                alt="Kavita Nair"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Kavita Nair
                                </Typography>
                                <Typography gutterBottom variant="h10" component="div">
                                    Designation
                                </Typography>
                                <Typography variant="body2" color="#B4D0B4">
                                    Kavita Nair, the chief digital transformation officer and marketing head has moved on from the company. After spending nearly 20 years working at Vi (formerly Vodafone-India), Kavita Nair has moved on from the company. She was responsible for relaunching Vodafone-Idea as Vi
                                    <Typography><br /> <br /> </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" style={{ color: '#d6ff41' }}>
                                Connect
                            </Button>
                        </CardActions>
 
                    </Card>
 
                </Grid>
 
 
 
                <Grid item xs={12} md={12} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '11%', color: '#B4D0B4' }}>
                    <Typography variant="h3" gutterBottom>
                        <center>Awards and Recognitions </center>
                        <Typography><br /> <br /> </Typography>
 
                        <Typography variant="subtitle1" gutterBottom  >
                            <center>We are excited to share our recent awards and recognition. We work diligently to make our clients happy, always upholding strong ethical standards and delivering excellent service. This isn't just good for business – it's part of our identity. When recognized by esteemed organizations, it reinforces that we're on the right path, driven by our core values. Thank you for being part of our success story!
                            </center>
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
 
 
            <Box sx={{ flexGrow: 1, color: '#e6ffe6', padding: '5%' }}>
      <Box
        sx={{
          borderTop: '1px solid #d6ff41',
          marginTop: '5%',
          paddingTop: '2%',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="#B4D0B4">
          Transforming organizations with advanced analytics and intelligent AI models.
        </Typography>
        <Typography variant="body2" color="#B4D0B4">
          Contact us: info@skewb.ai
        </Typography>
        <Typography variant="body2" color="#B4D0B4" style={{ marginTop: '2%' }}>
          Quick Links
        </Typography>
        <Typography variant="body2" color="#B4D0B4">
          Home | About | Services | Industries | Contact
        </Typography>
        <Typography variant="body2" color="#B4D0B4" style={{ marginTop: '2%' }}>
          Connect With Us
        </Typography>
        <Typography variant="body2" color="#B4D0B4">
          LinkedIn | Instagram | Twitter | YouTube
        </Typography>
        <Typography variant="body2" color="#B4D0B4" style={{ marginTop: '2%' }}>
          © 2024 Skewb Analytics. All Rights Reserved.
        </Typography>
        <Typography variant="body2" color="#B4D0B4">
          Powered by <b>Skewb Analytics</b>
        </Typography>
      </Box>
    </Box>
        </Box>
    );
}