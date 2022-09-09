import { Box, Button, Divider, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from '../style'
import NAvbar from './NAvbar'
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';

const Header = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const classes = useStyles();

  const style = {
  };

  return (
    <Box className={classes.header}>
      
      <Box className={classes.headerTextarea}>
        <Typography
          variant="h2"
          className={classes.header_heading_text}
        >
          Managing your crypto portfolio <br></br> has never been easier
        </Typography>
        <Typography
          variant="h5"
          className={classes.header_heading_sub_text}
        >
          End-to-end payments and financial management in a single solution. Meet<br></br> the right platform to help realize.
        </Typography>
        <Box className={classes.header_button_section}>
          <Button
            className={classes.header_button_section1}
            href="#">
            Get Started
          </Button>
          <Button
            onClick={() => setOpenVideo(!openVideo)}
            startIcon={<PlayArrowSharpIcon className={classes.header_play_icon} />}
            className={classes.header_button_section2}
          >
            See How It Works
          </Button>
          <Modal
            open={openVideo}
            onClose={() => setOpenVideo(!openVideo)}
          >
            <Box sx={style} className={classes.videoMedia_section}>
              <Typography variant="h5" component="h2" align='center' className={classes.videoMedia_section_title}>
              Our Profession
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                <iframe
                className={classes.playvideo}
                  width="100%"
                  height="200%"
                  src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1&cc_load_policy=1"
                  frameborder="0"
                  allowfullscreen>
                </iframe>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
