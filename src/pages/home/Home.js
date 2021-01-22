import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import msg from "../../../assets/icons/message.svg";
import Footer from 'components/layouts/Footer';
import {colors} from 'styles'

import Loader from 'components/loader';

import { countryService } from 'services';
import Connector from 'utils/Connector';
import Validator from 'utils/ValidateUtil'
import { Popup } from 'utils/SnackbarUtil';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:theme.typography.fontFamily,
  },
  imageContainer: {
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  },
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '650px',
    width: '100%'
  },
  login:{
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    margin: theme.spacing(8, 4),
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginTop: theme.spacing(10),

  },
  typography: {
    fontSize: '33Px',
    fontWeight: '500',
    color: colors.nero,
    opacity: 1,
    marginBottom: '16px',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
    background: '#F15D4F 0% 0% no-repeat padding-box',
    borderRadius: '10px',
    height: 40,
    fontSize: '16px',
    '&:hover':{
      background: theme.palette.secondary.main,
    }
  },
  p: {
    fontSize: 12,
    color: colors.dimGrey,
    opacity: 1
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  emailInput: {
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:'20px',
  },
  icon: {
    height: '14px',
    width: '15px'
  },
  textfield: {
    width: '500px',
    height: '36px',
    fontSize: '14px',
    color: colors.nero,
    backgroundColor: colors.patternBlue,
    border: 'none',
    borderRadius: '10px',
    marginLeft:'10px',
    padding: '7px',
    boxShadow:' box-shadow: 1px 5px #e6a9a4',
    '&:focus':{
      outline:'none',
      border:'1px solid  #0068FF',
    }
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    opacity: 1
  },
  socialImg: {
    height: '50px',
    cursor: 'pointer',
    padding: '10px'
  },
  forgetPara:{
    fontSize:"11px",
    color:colors.dimGrey,
    marginTop:'20px',
  },
}));


export default function Home() {
  const classes = useStyles();
  const history = useHistory()

  const [isLoading, setIsLoading] = React.useState(false);
  const [country, setCountry] = React.useState('');

  function forgot() {
    if(!Validator.validateFeild(country)) return Popup.warning("Please Enter the data")
    setIsLoading(true);
    // Fetch
      // .catch(Popup.error)
      // .finally(() => setIsLoading(false));

      // history.push({
      //   pathname: '/country',
      //   state: { countriesData }
      // });
  }

  return (
    <>
      <Grid container component="main" className={classes.root}>

        <Grid item xs={12} sm={6} md={5} className={classes.login} square>
          <div className={classes.paper}>
            <text align="left" className={classes.typography}>
              Title
            </text>
            <div className={classes.emailInput}>
              <input
                 id="country"
                 label="country"
                 name="country"
                 autoComplete="country"
                 className={classes.textfield}
                 placeholder='Please enter some text'
                 onChange={e => setCountry(e.target.value)}
                />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={forgot}
              >
                {
                  isLoading
                    ? (
                        <Loader size={20} color='white' />
                    )
                    : <text className={classes.buttonText}>Button Title</text>
                }
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
