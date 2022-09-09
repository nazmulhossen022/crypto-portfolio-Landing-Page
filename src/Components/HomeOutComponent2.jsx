import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../style'
import preference_connection from '../image/preference connection 1.png'
import Data from '../image/Data.png'
import Own from '../image/Own.png'
import Most from '../image/Most.png'

const HomeOutComponent2 = () => {
    const classes = useStyles();
    return (
        <Box mt={8} mb={8} >
            <Container maxWidth="xl">
                <Box>
                    <Grid container spacing={{md:8,sm:4,xs:5}}>
                        <Grid item md={6} xs={12} m={{md:0,sm:1,xs:1}} alignItems="center" display="flex">
                            <Box className={classes.homeOutline2_section_box} p={{md:10,sm:10,xs:5}}>
                                <Typography component="h5" variant="h5" className={classes.homeout_2_title}>
                                    Outward clothes<br></br> promise at gravity.
                                </Typography>
                                <Typography component="h5" variant="h5" className={classes.homeout_2_description}>
                                    End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                                </Typography>
                                <Button href='#' className={classes.homeout_2_button}>Read More</Button>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} m={{md:0,sm:1,xs:1}} alignItems="center" display="flex">
                            <Box className={classes.homeOutline2_section_box} p={{md:10,sm:10,xs:5}}>
                                <Typography component="h5" variant="h5" className={classes.homeout_2_title}>
                                    Sufficient particular<br></br> impossible.
                                </Typography>
                                <Typography component="h5" variant="h5" className={classes.homeout_2_description}>
                                    End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                                </Typography>
                                <Button href='#' className={classes.homeout_2_button}>Read More</Button>
                            </Box>
                        </Grid>



                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default HomeOutComponent2
