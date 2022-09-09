import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../style'
import Our_Feature from '../image/Our Feature.png'
import debit_card from '../image/debit card.png'

const Feature = () => {
    const classes = useStyles();
    return (
        <Box p={2} mt={8} mb={8}>
            <Container maxWidth="xl">
                <Box>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <img src={Our_Feature} alt="our feature" className={classes.feature_image} />
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ alignItems: "center", display: "flex" }}>
                            <Box sx={{width:{lg:"80%",sm:"100%"},marginTop:{md:"0",sm:"30px"}}}>
                                <Typography variant='h5' component='h5' className={classes.feature_subtitle}>
                                    Our Feature
                                </Typography>
                                <Typography variant='h2' component='h2' className={classes.feature_title}>
                                    All of your portfolios are
                                    linked to your AR Shakir
                                    account
                                </Typography>
                                <Typography variant='body1' component='h2' className={classes.feature_description}>
                                    Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
                                </Typography>
                                <Button href='#' className={classes.feature_button}>Get Started</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box pt={5}>
                    <Grid container spacing={2} sx={{display:"flex", flexDirection:{md:"row",sm:"column-reverse",xs:"column-reverse"}}}>
                        <Grid item md={6} xs={12} sx={{ alignItems: "center", display: "flex" }}>
                            <Box  sx={{width:{lg:"80%",sm:"100%"},marginTop:{md:"0",sm:"30px"}}}>
                                <Typography variant='h5' component='h5' className={classes.feature_subtitle}>
                                    Our Feature
                                </Typography>
                                <Typography variant='h2' component='h2' className={classes.feature_title}>
                                    All of your portfolios are
                                    linked to your AR Shakir
                                    account
                                </Typography>
                                <Typography variant='body1' component='h2' className={classes.feature_description}>
                                    Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
                                </Typography>
                                <Button href='#' className={classes.feature_button}>Get Started</Button>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{marginTop:{md:"0",sm:"30px"},justifyContent:{md:"end",sm:"center"},display:"flex"}}>
                            <img src={debit_card} alt="our feature" className={classes.feature_image} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Feature