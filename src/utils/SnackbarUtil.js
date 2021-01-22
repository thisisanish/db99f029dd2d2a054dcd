import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

export const Popup = {};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars({ children }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState('info');
  const [message, setMessage] = React.useState('');

  const handleOpen = (severity, message) => {
    setSeverity(severity);
    setMessage(message);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  Popup.success = message => handleOpen('success', message);
  Popup.info = message => handleOpen('info', message);
  Popup.warning = message => handleOpen('warning', message);
  Popup.error = message => handleOpen('error', message);

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} size={20}>
        <Alert onClose={handleClose} severity={severity}>
          {
            message
          }
        </Alert>
      </Snackbar>
      {
        children
      }
    </div>
  );
}
