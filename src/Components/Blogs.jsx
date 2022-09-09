import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../style'
import EastIcon from '@mui/icons-material/East';
import Blogs1 from '../image/Blogs 1.png'
import Blogs2 from '../image/Blogs 2.png'
import Blogs3 from '../image/Blogs 3.png'
import Blogs4 from '../image/Blogs 4.png'

const blogData = [
    {
        img: Blogs2,
        subtitle: "Best Practices",
        title: "Partiality on or continuing particular principles as. ",
    },
    {
        img: Blogs3,
        subtitle: "Best Practices",
        title: "Village did removed enjoyed explain",
    },
    {
        img: Blogs4,
        subtitle: "Best Practices",
        title: "Wise busy past both park when an ye no. Nay likely her length.",
    },
];

const Blogs = () => {
    const classes = useStyles();
    return (
        <Box mt={8} mb={8} >
            <Container maxWidth="xl">
                <Box>
                    <Grid container className={classes.blogs_section_box}>
                        <Grid item md={7} xs={12} m={{ md: 0, sm: 1, xs: 1 }} display="flex" alignItems="center" className={classes.blogs_section_box}>
                            <Box className={classes.blog_1_section}>
                                <Typography component="h5" variant="h5" className={classes.blogs_subtitle}>
                                    Best Practices
                                </Typography>
                                <Typography component="h2" variant="h2" className={classes.blogs_title}>
                                    In design active temper be uneasy. Thirty for remove plenty regard.
                                </Typography>
                                <Button href='#' className={classes.blogs_button} endIcon={<EastIcon />}>Read More</Button>
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={12} className={classes.blogs_section_box} sx={{ display: "block", alignItems: "center" }}>
                            <Box>
                                <img src={Blogs1} alt="Best Practices" className={classes.imageResponsive} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={10} mb={8}>
                    <Grid container spacing={3}>
                        {blogData.map((item, index) => (
                            <Grid item md={4} xs={12} m={{ md: 0, sm: 1, xs: 1 }} key={index}>
                                <Box className={classes.blog_2_section}>
                                    <Typography component="h5" variant="h5" className={classes.blogs_subtitle}>
                                        {item.subtitle}
                                    </Typography>
                                    <Typography component="h2" variant="h2" className={classes.blogs_title}>
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Box>
                                    <img src={item.img} alt="Best Practices" className={classes.imageResponsive} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Blogs
