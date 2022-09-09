import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../style'
import brand from '../image/brand.png'
import brand_1 from '../image/brand_1.png'
import brand_2 from '../image/brand_2.png'
import brand_3 from '../image/brand_3.png'
import brand_4 from '../image/brand_4.png'
import brand_5 from '../image/brand_5.png'
import brand_6 from '../image/brand_6.png'


const brandImage = [
    { img: brand, title: 'brand' },
    { img: brand_1, title: 'brand_1' },
    { img: brand_2, title: 'brand_2' },
    { img: brand_3, title: 'brand_3' },
    { img: brand_4, title: 'brand_4' },
    { img: brand_5, title: 'brand_5' },
    { img: brand_6, title: 'brand_6' },
];

const BrandImage = () => {
    const classes = useStyles();
    return (
        <Box pt={5}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: "center", padding: "20px 0px" }}>
                    <Typography variant="h4" component="h4" className={classes.brandText}>
                        Over 32k+ software  businesses growing with AR Shakir.
                    </Typography>
                </Box>
                <ImageList className={classes.brandImage_group}>
                    {brandImage.map((item) => (
                        <ImageListItem key={item.img} className={classes.brandImage_dev}>
                            <img
                                src={item.img}
                                alt={item.title}
                                className={classes.imageResponsive}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Box>
    )
}

export default BrandImage
