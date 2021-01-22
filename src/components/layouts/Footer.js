import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  root: {
      flexgrow:1,
      background: '#222222',
      padding:'50px',
  },
  footer:{
      display:'flex',
      flexDirection:'coloumn',
      justifyContent:'space-around',
      alignItems:'center',
      textDecoration: "underline",
      font: "normal normal normal 20px",
      fontFamily:theme.typography.fontFamily,
      color: theme.palette.footer.main,
      opacity: 1,
  },
  footerLogo:{
    width: '170px',
    height: '55px',
  },
  footerContainer:{
      listStyleType:'none'
  },
  footerStyle:{
      display:'flex',
      alignItems:'center',
      justifyContent:'flex-start',
  },
  footerAppStore:{
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      justifyContent:'flex-end',
  },
  socialIcon:{
      marginRight:'5px',
  },
  googlePlay:{
    height:'67px',
    width:'175px',
  },
  appStore:{
    height:'67px',
    width:'175px',
    padding: '11px',
  },
  copyrightStyle:{
      display:'flex',
      alignItems:'center',
      justifyContent:'flex-end',
      fontSize:'14px',
      fontFamily:theme.typography.fontFamily,
      color: theme.palette.footer.main,
      borderTop:'1px solid',
      borderColor:theme.palette.footer.main,
    },
    policy:{
      display:'flex',
      alignItems:'center',
      justifyContent:'flex-start',
      fontSize:'14px',
      fontFamily:theme.typography.fontFamily,
      color: theme.palette.footer.main,
      borderTop:'1px solid',
      borderColor:theme.palette.footer.main,
    }
}));

export default function Footer() {
  const classes = useStyles();

  return (

      <Grid container component="main" className={classes.root}>
       <Grid md={4} sm={4} xs={12} className={classes.footerStyle}>
       </Grid>
       <Grid md={4} sm={4} xs={12} className={classes.footer}>
           <div>
             <ul className={classes.footerContainer}>
                 <li>
                     <a>About Us</a>
                 </li>
                 <li>
                    <a>Blog</a>
                 </li>
             </ul>
           </div>
           <div>
            <ul className={classes.footerContainer}>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                  <a className={classes.socialIcon}><FacebookIcon></FacebookIcon></a>
                  <a className={classes.socialIcon}><InstagramIcon></InstagramIcon></a>
                  <a className={classes.socialIcon}><TwitterIcon></TwitterIcon></a>
                  <a className={classes.socialIcon}><LinkedInIcon></LinkedInIcon></a>
              </li>
            </ul>
           </div>
       </Grid>
       <Grid md={6} sm={6} xs={6} className={classes.policy} >
         <p><a>Private Policy</a> | <a>Terms of Service</a> | <a>Return Policy</a></p>
       </Grid>
    </Grid>
  )
}
