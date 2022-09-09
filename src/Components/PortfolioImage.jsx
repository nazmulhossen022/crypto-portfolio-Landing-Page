import { Box, Container } from '@mui/material'
import React from 'react'
import Imageportfolio from '../image/portgolio_1.png'
import { useStyles } from '../style'

const PortfolioImage = () => {
    const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box className={classes.portfolioImage_dev}>
        <img src={Imageportfolio} alt="Portfolio image" className={`${classes.imageResponsive} ${classes.portfolioImage_section}`} />
      </Box>
    </Container>
  )
}

export default PortfolioImage
