import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { colors } from 'styles';


const useStyles = makeStyles((theme) => ({
  root: {
    padding:'3% 3% 1% 3%',
    flex:1,
    boxSizing:'border-box',
  },
  app:{
    boxShadow:'none',
    background: theme.palette.primary.main,
  },
  logo:{
    width: '100%',
    height: 'auto'
  },
  button1:{
    background: "Transparent",
    borderRadius: "12px",
    border:'1px solid #F15D4F',
    fontFamily:theme.typography.fontFamily,
    opacity: 1,
    width:'110px',
    height:'30px',
    color: theme.palette.secondary.main,
    fontSize:'12px',
    '&:hover': {
    fontSize:'12px',
    fontFamily:theme.typography.fontFamily,
    width:'110px',
    height:'30px',
    color:theme.palette.white,
    background:  theme.palette.secondary.main,
    borderRadius: "12px",
    opacity: 1,
    },
  },
  button2:{
    background:  theme.palette.secondary.main,
    borderRadius: "12px",
    border:'1px solid #F15D4F',
    fontFamily:theme.typography.fontFamily,
    opacity: 1,
    width:'110px',
    height:'30px',
    color: theme.palette.white,
    fontSize:'12px',
    marginLeft:'10px',
    '&:hover': {
    fontSize:'12px',
    fontFamily:theme.typography.fontFamily,
    width:'110px',
    height:'30px',
    color:theme.palette.white,
    background:  colors.flamingo,
    borderRadius: "12px",
    opacity: 1,
    }
  },
  buttonmenu:{
    display:'flex',
    justifyContent:'flex-end',
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  function handleClick(route) {
    history.push(route);
  }

  return (
    <div className={classes.main}>
      <AppBar position='fixed' className={classes.app}>
      <Grid container component="main" className={classes.root}>
        <Grid item md={2} xs={4}>
          <img src={} className={classes.logo}/>
        </Grid>
        <Grid md={1} xs={1}></Grid>
        <Grid  item md={9} xs={7} className={classes.buttonmenu}>
          <Button  className={classes.button1} onClick={() => handleClick("/login")}>
            Login
          </Button>
        </Grid>
      </Grid>
    </AppBar>
    </div>
  );
}
