import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../style'

const CopyRight = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footer_copyRight}>
            <Container maxWidth="xl">
                <Box>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Typography variant="body1" component="p" className={classes.footer_copyright_left}>
                                2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Typography variant="body1" component="p" className={classes.footer_copyright_right}>
                                Supported by Microsoft Startup
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default CopyRight
