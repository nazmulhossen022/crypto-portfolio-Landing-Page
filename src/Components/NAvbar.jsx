import { AppBar, Box, Button, Container, Drawer, Hidden, IconButton, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from '../style'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../image/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavLinks = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Contact", link: "#" }
];

const NAvbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();

  const [naVbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <AppBar position="static" className={naVbar ? `${classes.navbarActive}` : `${classes.navbar}`}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Logo} alt="Logo" className={classes.imageResponsive} />
            </Box>
            <Box className={classes.navItem}>
              <Hidden mdDown>
                {NavLinks.map((item, index) => (
                  <Button
                    key={index}
                    href={item.link}
                    className={classes.navlinks}
                  >{item.name}</Button>
                ))}
              </Hidden>
              <Hidden mdUp>
                <IconButton onClick={() => setOpenMenu(!openMenu)}>
                  <MenuIcon className={classes.mobailMenuicon} />
                </IconButton>
              </Hidden>
              <Drawer
                anchor={'left'}
                open={openMenu}
                onClose={() => setOpenMenu(!openMenu)}
                style={{ overflowY: "hidden !important" }}
              >
                <Box className={classes.mobail_menu}>
                  <Box className={classes.mobail_menu_logo}>
                  <img src={Logo} alt="Logo" className={classes.imageResponsive} />
                  </Box>
                  {NavLinks.map((item, index) => (
                    <Button
                      key={index}
                      href={item.link}
                      className={classes.navlinksMobail}
                    >{item.name}</Button>
                  ))}
                  <Box className={classes.mobail_sosial_icon}>
                    <IconButton>
                      <FacebookIcon className={classes.mobailMenuicon} />
                    </IconButton>
                    <IconButton>
                      <LinkedInIcon className={classes.mobailMenuicon} />
                    </IconButton>
                    <IconButton>
                      <GitHubIcon className={classes.mobailMenuicon} />
                    </IconButton>
                  </Box>
                </Box>
              </Drawer>
            </Box>
            <Box className={classes.navbarleft}>
              <Button className={classes.navbarleftbutton1} href="#">Sign In</Button>
              <Button className={classes.navbarleftbutton2} href="#">Start Free</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default NAvbar
