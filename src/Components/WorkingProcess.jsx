import { Avatar, Box, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../style'
import preference_connection from '../image/preference connection 1.png'
import img_1 from '../image/1.png'
import img_2 from '../image/2.png'
import img_3 from '../image/3.png'

const ListData = [
    {
        img: img_1,
        title: "First Working Process",
        des: "Blessing it ladyship on sensible judgment settling outweigh.",
    },
    {
        img: img_2,
        title: "Dedicated Team",
        des: "Warmly little before cousin sussex entire men set.",
    },
    {
        img: img_3,
        title: "24/7 Hours Support",
        des: "And excellence partiality estimating terminated day everything.",
    },
];

const WorkingProcess = () => {
    const classes = useStyles();
    return (
        <Box pt={15} pb={15} mt={15} mb={8} className={classes.working_section}>
            <Container maxWidth="xl">
                <Box pb={8}>
                    <Grid container spacing={2}>
                        <Grid item md={9} xs={12}>
                            <Typography variant="h2" component="h4" className={classes.working_title}>
                                Yet preference connection unpleasant yet melancholy but end appearance
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Button href="#" className={classes.working_button}>
                                Get Started Now
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={2} sx={{display:"flex",flexDirection:{md:"row",sm:"column-reverse",xs:"column-reverse"}}}>
                        <Grid item md={5} xs={12} alignItems="center" display="flex">
                            <List>
                                {ListData.map((item, index) => (
                                    <ListItem alignItems="center" className={classes.working_ListItem}>
                                        <ListItemAvatar className={classes.working_ListItemAvatar}>
                                            <img src={item.img} alt="our feature" className={classes.imageResponsive} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            className={classes.working_ListItemText}
                                            primary={
                                                <Typography component="h4" variant="h4" className={classes.working_ListItemText_Heading}>
                                                    {item.title}
                                                </Typography>}
                                            secondary={
                                                <Typography component="span" variant="body2" className={classes.working_ListItemText_description}>
                                                    {item.des}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item md={7} xs={12}>
                            <img src={preference_connection} alt="our feature" className={classes.imageResponsive} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default WorkingProcess
