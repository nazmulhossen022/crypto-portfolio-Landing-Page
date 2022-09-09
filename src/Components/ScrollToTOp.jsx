import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { useStyles } from '../style'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box } from '@mui/material';

const ScrollToTOp = () => {
    const classes = useStyles();
  return (
    <Box>
      <ScrollToTop smooth top="1000" component={<ArrowUpwardIcon />} className={classes.scroll_to_top} />
    </Box>
  )
}

export default ScrollToTOp
