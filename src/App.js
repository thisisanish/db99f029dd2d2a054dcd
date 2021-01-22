import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import AppRouter from 'routers/AppRouter';

import 'styles/styles.css';
import { theme } from 'styles';

import store from 'utils/store';
import CustomizedSnackbars from 'utils/SnackbarUtil';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CustomizedSnackbars>
          <AppRouter />
        </CustomizedSnackbars>
      </ThemeProvider>
    </Provider>
  );
}
