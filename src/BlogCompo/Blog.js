// updated newsletter code
import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";


const MyGrid = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Paper

                    sx={{
                        width: "100%",
                        borderRadius: "20px",
                        transition: "transform 0.3s ease-in-out", // Added transition property
                        position: "relative",
                        overflow: "hidden",
                        ":hover": {
                            transform: "scale(1.05)"
                        }
                    }}
                >
                    <div >
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimWCetx_MJTVS7uDQ7YIVNr_lUbeAYhmludQ8CCl2_pngAg3yuxtynaEI006NChT62lQJNIQpQTQ2KGlU6C5tyNcM-6wnqwz3L1fWVx7LDuVWzNQfkQEqTxkstw_0ArDJi_TLH7vqesxf0xFRvFGM_DtooRpM7s7LrgYcq2c55jKN04nrUGYSF248A/w309-h224-p-k-no-nu/6.jpg=w72-h72-p-k-no-nu"
                            alt="Card 1"

                            style={{
                                width: "100%", height: "80%"
                            }}
                        />
                        <Typography
                            variant="h6"

                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                                padding: "8px",
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: 'medium'
                            }}
                        >
                            Are you ready to step up your data analytics? Tell us a little about yourself and someone from the Skewb team will get in touch with you at the earliest.
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}

            >
                <Paper

                    sx={{
                        width: "95%",
                        borderRadius: "20px",
                        transition: "transform 0.3s ease-in-out", // Added transition property
                        position: "relative",
                        overflow: "hidden",
                        transition: "transform 0.3s ease-in-out",
                        height: '45%',
                        marginLeft: '3%',
                        ":hover": {
                            transform: "scale(1.05)",

                        }
                    }}
                >
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsxvPCYpfALj0HvRpH6xcU0-757XNuQ7dxQmutc3nkkfZqKVGHdseSdnb4-t4CebDHpbRLrYvg33QoxyVG_RhhDL5saliTSJqCwU8zJqjNofJUWky-McrpHwO_zizYVn0KOez_2IPwVxj5Wkj3FbWfSdkPTEaN4BjWP3VM79C5NGXEuMroHzJW2ANR/w636-h210-p-k-no-nu/10.jpg=w72-h72-p-k-no-nu"
                        alt="Card 2"

                        style={{ width: "100%", height: "auto" }}
                    />

                    <Typography
                        variant="h6"

                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            padding: "8px",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 'medium'
                        }}
                    >
                        Are you ready to step up your data analytics? Tell us a little about yourself and someone from the Skewb team will get in touch with you at the earliest.
                    </Typography>
                </Paper>
                <Box
                    style={{
                        display: "flex",
                        height: "39%",
                    }}
                >
                    <Paper

                        sx={{
                            width: "100%",
                            borderRadius: "20px",
                            transition: "transform 0.3s ease-in-out", // Added transition property
                            position: "relative",
                            overflow: "hidden",
                            transition: "transform 0.3s ease-in-out",
                            margin: '3%',
                            ":hover": {
                                transform: "scale(1.05)"

                            }
                        }}
                    >
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJJi2GZp65VgmB9OW_eglPcqLgJe0e4rPlhhdlld24AesWug058M_DpD74KeMzSKlqduy8J8SXtlyN9bFJc1aliV2HGBk43G-7APO5Ot33K2qkxBRFboA7_TS4TpAeHLGAR9zMo39a8ZPzOro-6twBsLhsnWE3_29qDhW_3tu0runHWQsuvx5FI6-s/w309-h224-p-k-no-nu/7.jpg=w72-h72-p-k-no-nu"
                            alt="Card 3"

                            style={{ width: "100%", height: "auto%" }}
                        />

                        <Typography
                            variant="h6"
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                                padding: "8px",
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: 'small'
                            }}
                        >
                            Are you ready to step up your data analytics? Tell us a little about yourself and someone from the Skewb team will get in touch with you at the earliest.
                        </Typography>
                    </Paper>

                    <Paper

                        sx={{
                            width: "100%",
                            borderRadius: "20px",
                            transition: "transform 0.3s ease-in-out", // Added transition property
                            position: "relative",
                            overflow: "hidden",
                            transition: "transform 0.3s ease-in-out",
                            margin: '3%',
                            ":hover": {
                                transform: "scale(1.05)"
                            }
                        }}
                    >
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS83TxpYvWlI7VqRAC7lUxf_v8YJqEWiCIigmw3qHCxMGYzyQ2wc1RJml7qgmCo5b064p6dhVMc4AobudKtpRidTcc3LUNjnhVfTpdMn1R6AFN0Xl76dYE4g6LrFgHAekkVgVW5n11agqta-hwD1YR69U8IfMgRswXbluJWQ_Gx6Re-GPnntrsbXFE/w636-h451-p-k-no-nu/11.jpg=w72-h72-p-k-no-nu"
                            alt="Card 4"

                            style={{ width: "100%", height: "100%" }}
                        />

                        <Typography
                            variant="h6"

                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                                padding: "8px",
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: 'small'

                            }}
                        >
                            Are you ready to step up your data analytics? Tell us a little about yourself and someone from the Skewb team will get in touch with you at the earliest.
                        </Typography>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
};

export default MyGrid;