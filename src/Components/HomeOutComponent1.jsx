import { Avatar, Box, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../style'
import preference_connection from '../image/preference connection 1.png'
import Data from '../image/Data.png'
import Own from '../image/Own.png'
import Most from '../image/Most.png'

const HomeOutComponent1 = () => {
    const classes = useStyles();
    return (
        <Box mt={15} mb={8} >
            <Container maxWidth="xl">
                <Box className={classes.homeOutline1_section}>
                    <Grid container spacing={1}>
                        <Grid item md={3} xs={12} alignItems="center" display="flex">
                            <Typography component="h5" variant="h5" className={classes.homeout_1_title}>
                                Germany-based <br></br>& GDPR Compliant
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={12} alignItems="center" display="flex">
                            <List>
                                <ListItem alignItems="center">
                                    <ListItemAvatar>
                                        <img src={Data} alt="our feature" className={classes.imageResponsive} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        className={classes.homeOutline_1_ListItemText}
                                        primary={
                                            <Typography component="h5" variant="h5" className={classes.homeOutline_1_ListItemText_text}>
                                                Data does not leave our servers
                                            </Typography>}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={3} xs={12} alignItems="center" display="flex">
                            <List>
                                <ListItem alignItems="center">
                                    <ListItemAvatar>
                                        <img src={Own} alt="our feature" className={classes.imageResponsive} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        className={classes.homeOutline_1_ListItemText}
                                        primary={
                                            <Typography component="h5" variant="h5" className={classes.homeOutline_1_ListItemText_text}>
                                                Own<br></br> infrastructure
                                            </Typography>}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={3} xs={12} alignItems="center" display="flex">
                            <List>
                                <ListItem alignItems="center">
                                    <ListItemAvatar>
                                        <img src={Most} alt="our feature" className={classes.imageResponsive} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        className={classes.homeOutline_1_ListItemText}
                                        primary={
                                            <Typography component="h5" variant="h5" className={classes.homeOutline_1_ListItemText_text}>
                                                Most renowed<br></br> data centers
                                            </Typography>}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default HomeOutComponent1
