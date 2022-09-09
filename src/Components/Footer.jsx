import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../style'
import EastIcon from '@mui/icons-material/East';
import CopyRight from './CopyRight';

const dataMiddle = [
    { title: "Company", subtitle_1: "About Us", subtitle_2: "Careers", subtitle_3: "Blog", subtitle_4: "Pricing" },
    { title: "Product", subtitle_1: "Invoicing Platform", subtitle_2: "Accounting Plateform", subtitle_3: "Create Proposal", subtitle_4: "Contracts" },
    { title: "Resources", subtitle_1: "Proposal Template", subtitle_2: "Invoice Template", subtitle_3: "Tuturoial", subtitle_4: "How to write a contract" },
];


const Footer = () => {
    const classes = useStyles();
    return (
        <Box mt={8} className={classes.footer_section}>
            <Box className={classes.footer_Top}>
                <Container maxWidth="xl">
                    <Box>
                        <Typography variant="h2" component="h2" className={classes.footerTop_title}>
                            Join millions of <br></br>
                            creative people with AR Shakir
                        </Typography>
                        <Button href='#' className={classes.footerTop_button} endIcon={<EastIcon />}>Join The Waitlist</Button>
                    </Box>
                </Container>
            </Box>

            <Box className={classes.footer_middle}>
                <Container maxWidth="xl">
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item md={6}>
                                <Typography variant="h4" component="h4" className={classes.footerMiddle_title}>
                                    AR Shakir
                                </Typography>
                                <Typography variant="body1" component="p" className={classes.footerMiddle_des}>
                                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                                </Typography>
                            </Grid>
                            {dataMiddle.map((item, index) => (
                                <Grid item md={2} sm={4} xs={12} key={index}>
                                    <Typography variant="h4" component="h4" className={classes.footerMiddle_title}>
                                        {item.title}
                                    </Typography>
                                    <Box pt={1}>
                                        <Typography variant="h6" component="a" href='#' className={classes.footerMiddle_link}>
                                            {item.subtitle_1}
                                        </Typography>
                                        <Typography variant="h6" component="a" href='#' className={classes.footerMiddle_link}>
                                            {item.subtitle_2}
                                        </Typography>
                                        <Typography variant="h6" component="a" href='#' className={classes.footerMiddle_link}>
                                            {item.subtitle_3}
                                        </Typography>
                                        <Typography variant="h6" component="a" href='#' className={classes.footerMiddle_link}>
                                            {item.subtitle_4}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <CopyRight />
        </Box>

    )
}

export default Footer
