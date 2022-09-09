import { makeStyles } from "@mui/styles";
import { Theme } from "./Theme";
import headerBanner from "./image/banner2.png"
import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});


export const useStyles = makeStyles(() => ({
    //common css
    imageResponsive: {
        width: "100%",
        height: "auto",
    },

    //Navbar
    navbar: {
        background: "transparent !important",
        boxShadow: "none !important",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            paddingTop: "8px",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "28px",
        },

    },
    navbarActive: {
        background: Theme.colors.base1,
        boxShadow: "none !important",
        alignItems: "center",
        position:"sticky !important",
        top:"0 !important",
        zIndex:"999 !important",
        paddingTop: "0px",
        transition:"0.5s !important",
    },

    navItem: {
        display: "flex",
        flexFlow: "row wrap",
        gap: "12px",
    },

    navlinks: {
        color: Theme.colors.base2,
        fontFamily: Theme.font.fontS,
        fontSize: "15px !important",
        fontWeight: "500 !important",
    },

    //Navbar Left
    navbarleft: {
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
        gap: "12px",
    },

    navbarleftbutton1: {
        color: Theme.colors.base2,
        fontFamily: Theme.font.fontS,
        fontSize: "15px !important",
        fontWeight: "500 !important",
    },

    navbarleftbutton2: {
        color: Theme.colors.base2,
        fontFamily: Theme.font.fontS,
        fontSize: "15px !important",
        background: Theme.colors.base3,
        fontWeight: "500 !important",
        borderRadius: "8px !important",
        padding: "10px 28px !important",
    },

    //mobail menu
    mobailMenuicon: {
        color: Theme.colors.base2,
    },
    mobail_menu:{
        background:Theme.colors.base1,
        color:Theme.colors.base2,
        border:`1px solid ${Theme.colors.base1}`,
        height:"100% !important",
    },
    mobail_menu_logo:{
        padding:"20px 5px 10px 5px !important",
    },
    navlinksMobail:{
        color: Theme.colors.base2,
        fontFamily: Theme.font.fontS,
        fontSize: "16px !important",
        fontWeight: "500 !important",
        display:"block !important",
        textAlign:"center !important",
        padding:"10px 40px !important",
    },
    mobail_sosial_icon:{
        position:"absolute",
        bottom:"30px",
        left:"0",
        right:"0",
    },

    //header
    header: {
        width: "100%",
        [theme.breakpoints.up('lg')]: {
            minHeight: "1000px",
        },
        [theme.breakpoints.only('md')]: {
            minHeight: "900px",
        },
        [theme.breakpoints.only('sm')]: {
            minHeight: "750px",
        },
        [theme.breakpoints.only('xs')]: {
            minHeight: "700px",
        },
        height: "auto",
        background: `url(${headerBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display:"flex !important",
        flexFlow:"column",
        marginTop:"-10% !important",
        [theme.breakpoints.only('xs')]:{
            marginTop:"-20% !important",
        },
    },
//header Text area
    headerTextarea: {
        textAlign: "center",
        color: Theme.colors.base2,
        marginTop: "250px",
        [theme.breakpoints.up('md')]: {
            marginTop: "250px",
        },
        [theme.breakpoints.down('md')]: {
            marginTop: "200px",
        },
        justifyContent: "center",
        alignItems: "center",
    },

    header_heading_text: {
        color: Theme.colors.base2,
        fontFamily: Theme.font.fontS,
        fontWeight: "800 !important",
        [theme.breakpoints.up('md')]: {
            fontSize: "60px !important",
            lineHeight: "80px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "40px !important",
            lineHeight: "55px !important",
        },
    },

    header_heading_sub_text: {
        color: Theme.colors.base2,
        fontFamily: Theme.font.fontS,
        fontSize: "20px !important",
        fontWeight: "500 !important",
        lineHeight: "30px !important",
        marginTop: "55px !important",
    },

    header_button_section: {
        marginTop: "60px !important",
        [theme.breakpoints.only('xs')]: {
            paddingBottom: "225px !important",
        },

    },

    header_button_section1: {
        color: Theme.colors.base2,
        fontFamily: Theme.font.fontS,
        fontSize: "15px !important",
        background: Theme.colors.base3,
        fontWeight: "500 !important",
        borderRadius: "50px !important",
        padding: "10px 28px !important",
        [theme.breakpoints.up('sm')]: {
            marginRight: "25px !important",
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: "10px !important",
            marginRight: "25px !important",
        },
        textTransform: "inherit",
    },

    header_button_section2: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: "25px !important",
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: "25px !important",
        },
        color: Theme.colors.base2,
        fontFamily: Theme.font.fontS,
        fontSize: "15px !important",
        fontWeight: "500 !important",
        textTransform: "inherit",
    },

    header_play_icon: {
        background: Theme.colors.base4,
        width: "60px !important",
        height: "60px !important",
        borderRadius: "50px !important",
        boxShadow: `0px 0px 25px 3px ${Theme.colors.base4}`,
    },

    //video css
    videoMedia_section: {
        [theme.breakpoints.up('md')]: {
            width: "50%",
            height: "500px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "90%",
            height: "300px",
        },
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        background: Theme.colors.base2,
        padding: "1%",
        boxShadow: `0px 0px 25px 3px #dddddd63`,
        borderRadius: "8px",
        transition: "0.8s",
    },

    videoMedia_section_title: {
        color: Theme.colors.base1,
        fontFamily: Theme.font.fontS,
        fontSize: "30px !important",
        fontWeight: "800 !important",
    },

    playvideo: {
        [theme.breakpoints.up('md')]: {
            width: "100%",
            height: "400px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "230px",
        },
    },

    //Portfolio image
    portfolioImage_dev: {
        [theme.breakpoints.up('md')]: {
            width: "60%",
        },
        [theme.breakpoints.down('md')]: {
            width: "80%",
        },
        margin: "0 auto",
    },

    portfolioImage_section: {

        [theme.breakpoints.up('lg')]: {
            margin: "-280px 0px 0px 0px",
        },
        [theme.breakpoints.only('md')]: {
            margin: "-210px 0px 0px 0px",
        },
        [theme.breakpoints.only('sm')]: {
            margin: "-165px 0px 0px 0px",
        },
        [theme.breakpoints.only('xs')]: {
            margin: "-120px 0px 0px 0px",
        },
    },

    //Breand Image Section
    brandText: {
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "22px !important",
        lineHeight: "30px !important",
        textAlign: "center",
    },

    brandImage_group: {
        display: "flex !important",
        flexWrap: "wrap",
        justifyContent: "space-between !important",
        alignItems: "center !important",
        padding: "20px 0px !important",
    },

    brandImage_dev: {
        display: "flex !important",
        flex: "1",
        maxWidth: "150px",
        minWidth: "120px",
        justifyContent: "center !important",
        alignItems: "center !important",
        margin: "1rem",
    },

    //Feature css
    feature_subtitle: {
        fontFamily: Theme.font.fontS,
        fontWeight: "800 !important",
        fontSize: "18px !important",
        lineHeight: "25px !important",
        color: Theme.colors.base1,
        textTransform: "uppercase",
        marginBottom: "22px !important",
    },

    feature_title: {
        fontFamily: Theme.font.fontS,
        fontWeight: "700 !important",
        [theme.breakpoints.up("sm")]: {
            fontSize: "50px !important",
            lineHeight: "56px !important",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "35px !important",
            lineHeight: "46px !important",
        },
        marginBottom: "30px !important",
    },

    feature_description: {
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "18px !important",
        lineHeight: "26px !important",
        color: Theme.colors.base1,
        marginBottom: "40px !important",
        // [theme.breakpoints.up("md")]:{
        //     width:"80%",
        // },
    },

    feature_button: {
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "16px !important",
        lineHeight: "30px !important",
        textTransform: "inherit !important",
        letterSpacing: "-0.02em !important",
        color: Theme.colors.base2,
        background: Theme.colors.base1,
        padding: "12px 40px !important",
        borderRadius: "7px",
    },

    feature_image: {
        [theme.breakpoints.up("md")]: {
            width: "85%",
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        height: "auto",
    },

    //Working Process
    working_section: {
        background: Theme.colors.base1,
    },

    working_title: {
        fontFamily: Theme.font.fontS,
        fontWeight: "800 !important",
        [theme.breakpoints.up("sm")]: {
            fontSize: "45px !important",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "35px !important",
        },
        lineHeight: "50px !important",
        textTransform: "inherit !important",
        color: Theme.colors.base2,
    },

    working_button: {
        fontFamily: Theme.font.fontS,
        fontWeight: "700 !important",
        fontSize: "18px !important",
        lineHeight: "30px !important",
        textTransform: "inherit !important",
        letterSpacing: "-0.02em !important",
        background: Theme.colors.base3,
        color: Theme.colors.base2,
        padding: "12px 40px !important",
        [theme.breakpoints.down("md")]: {
            marginTop: "25px !important",
        },
    },

    working_ListItemText: {
        padding: "0px 30px 0px 30px !important",
    },

    working_ListItemText_Heading: {
        fontFamily: Theme.font.fontS,
        fontWeight: "700 !important",
        fontSize: "26px !important",
        lineHeight: "32px !important",
        color: Theme.colors.base2,
    },

    working_ListItemText_description: {
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "18px !important",
        lineHeight: "32px !important",
        color: Theme.colors.base6,
    },

    //HomeOutComponent1
    homeOutline1_section: {
        background: Theme.colors.base2,
        border: "1px solid #DEE1E6 !important",
        borderRadius: "20px",
        padding: "40px !important",
    },

    homeout_1_title: {
        fontFamily: Theme.font.fontS,
        fontWeight: "800 !important",
        fontSize: "34px !important",
        lineHeight: "46px !important",
        letterSpacing: "-0.03em !important",
    },

    homeOutline_1_ListItemText: {
        [theme.breakpoints.up("md")]: {
            padding: "0px 30px 0px 15px !important",
        },
        [theme.breakpoints.down("md")]: {
            padding: "0px 15px 0px 15px !important",
        },
        padding: "0px 30px 0px 15px !important",
    },

    homeOutline_1_ListItemText_text: {
        fontFamily: Theme.font.fontS,
        fontWeight: "600 !important",
        [theme.breakpoints.up("md")]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "25px !important",
        },
        lineHeight: "32px !important",
        letterSpacing: "-0.03em !important",
    },

    //HomeOutComponent2
    homeOutline2_section_box: {
        width: "100%",
        background: "#ffffff !important",
        boxShadow: "0px 141.825px 113.46px rgba(0, 0, 0, 0.03), 0px 91.9235px 66.4476px rgba(0, 0, 0, 0.0227778), 0px 54.6288px 36.1391px rgba(0, 0, 0, 0.0182222), 0px 28.365px 18.4372px rgba(0, 0, 0, 0.015), 0px 11.5561px 9.24488px rgba(0, 0, 0, 0.0117778), 0px 2.62639px 4.46486px rgba(0, 0, 0, 0.00722222) !important",
        borderRadius: "20px !important",
        display: "flex !important",
        alignItems: "center !important",
        flexFlow: "column wrap",
    },

    homeout_2_title: {
        fontFamily: Theme.font.fontS,
        fontWeight: "800 !important",
        fontSize: "42px !important",
        lineHeight: "50px !important",
        letterSpacing: "-0.03em !important",
        textAlign: "center",
        marginBottom: "30px !important",
    },

    homeout_2_description: {
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "16px !important",
        lineHeight: "30px !important",
        letterSpacing: "-0.02em !important",
        textAlign: "center",
        marginBottom: "30px !important",
    },

    homeout_2_button: {
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "16px !important",
        lineHeight: "22px !important",
        textTransform: "inherit !important",
        background: Theme.colors.base1,
        color: Theme.colors.base2,
        padding: "12px 40px !important",
        borderRadius: "8px !important",
    },

    //Blogs section home page
    blogs_section_box: {
        backgroundColor: Theme.colors.base2,
    },

    blog_1_section: {
        [theme.breakpoints.up("lg")]: {
            padding: "20px 240px 20px 50px !important",
        },
        [theme.breakpoints.only("md")]: {
            padding: "20px 55px 20px 30px !important",
        },
        [theme.breakpoints.only("sm")]: {
            padding: "20px 50px 20px 30px !important",
        },
        [theme.breakpoints.only("xs")]: {
            padding: "20px 20px  20px 20px !important",
        },
    },

    blogs_subtitle: {
        fontFamily: Theme.font.fontS,
        fontWeight: "700 !important",
        fontSize: "16px !important",
        lineHeight: "36px !important",
        letterSpacing: "0.07em !important",
        marginBottom: "15px !important",
    },

    blogs_title: {
        fontFamily: Theme.font.fontS,
        fontWeight: "700 !important",
        fontSize: "29px !important",
        lineHeight: "36px !important",
        letterSpacing: "-0.02em !important",
        marginBottom: "50px !important",
    },

    blogs_button: {
        fontFamily: Theme.font.fontS,
        fontWeight: "600 !important",
        fontSize: "16px !important",
        lineHeight: "16px !important",
        textTransform: "inherit !important",
        color: Theme.colors.base5,
    },

    blog_2_section: {
        backgroundColor: Theme.colors.base2,
        borderRadius:"5px",
        padding:"25px 25px 15px 25px !important",
    },

    //footer 
    footer_section:{
        background:Theme.colors.base7,
    },
    footer_Top:{
        display:"flex",
        flexFlow:"column",
        alignItems:"center",
        textAlign:"center",
        padding:"100px 0px 100px 0px !important",
        borderBottom:"1px solid #404444 !important",
    },
    footerTop_title:{
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        [theme.breakpoints.down("sm")]:{
            fontSize: "43px !important",
        },
        fontSize: "53px !important",
        lineHeight: "70px !important",
        letterSpacing: "-0.02em !important",
        color:Theme.colors.base2,
        marginBottom: "50px !important",
    },
    footerTop_button:{
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "16px !important",
        lineHeight: "22px !important",
        textTransform: "inherit !important",
        background: Theme.colors.base3,
        color: Theme.colors.base7,
        padding: "12px 40px !important",
        borderRadius: "8px !important",
    },

    //footer middle

    footer_middle:{
        padding:"80px 0px 90px 0px !important",
        borderBottom:"1px solid #404444 !important",
        [theme.breakpoints.only("sm")]:{
            padding:"80px 0px 70px 0px !important",
        },
        [theme.breakpoints.only("xs")]:{
            padding:"80px 0px 70px 0px !important",
        },
    },
    footerMiddle_title:{
        fontFamily: Theme.font.fontS,
        fontWeight: "700 !important",
        fontSize: "20px !important",
        lineHeight: "27px !important",
        color:Theme.colors.base2,
        marginBottom: "20px !important",
    },
    footerMiddle_des:{
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "16px !important",
        lineHeight: "26px !important",
        color:Theme.colors.base2,
        opacity:"0.4 !important",
        width:"80% !important",
        [theme.breakpoints.only("md")]:{
            width:"90% !important",
        },
        [theme.breakpoints.only("sm")]:{
            width:"100% !important",
            marginBottom:"30px !important",
        },
        [theme.breakpoints.only("xs")]:{
            width:"100% !important",
            marginBottom:"30px !important",
        },
    },
    footerMiddle_link:{
        textDecoration:"none !important",
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "16px !important",
        lineHeight: "24px !important",
        color:Theme.colors.base2,
        display:"block !important",
        paddingBottom:"20px !important"
    },

    //footer copyRight
    footer_copyRight:{
        padding:"20px 0px 20px 0px !important",
    },
    footer_copyright_left:{
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "12px !important",
        lineHeight: "26px !important",
        color:Theme.colors.base2,
        [theme.breakpoints.only("sm")]:{
            textAlign:"center !important",
        },
        [theme.breakpoints.only("xs")]:{
            textAlign:"center !important",
        },
    },
    footer_copyright_right:{
        fontFamily: Theme.font.fontS,
        fontWeight: "500 !important",
        fontSize: "12px !important",
        lineHeight: "26px !important",
        color:Theme.colors.base2,
        textAlign:"end !important",
        [theme.breakpoints.only("sm")]:{
            textAlign:"center !important",
        },
        [theme.breakpoints.only("xs")]:{
            textAlign:"center !important",
        },
    },


    //scroll to top button css
    scroll_to_top:{
        color:Theme.colors.base2,
        background:Theme.colors.base1,
        transition:"0.7s !important",
    },


    //anamation css
    // "@global": {
    //     "@keyframes upDown": {
    //         "0%": {
    //             transform: "scale(0.6)",
    //             opacity: "1",
    //             boxShadow: `inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75)`,
    //         },
    //         "100%": {
    //             transform: "scale(1)",
    //             opacity: "0",
    //             boxShadow: "none",
    //         },
    //     },
    // },



}));


