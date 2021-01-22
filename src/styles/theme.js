import {createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

const font =  "'Quicksand', sans-serif";
export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main:'#0B223B' // customise your main color here
    },
    secondary: {
      main:'#F15D4F'
    },
    error: {
      main:'#ca0909'
    },
    sand: {
      main:'#F4DECB'
    },
    shell: {
      main:'#F8EEE7'
    },
    footer: {
      main:'#BBBBBB'
    },
    white:'white',
    productFeature:'#222222',
    status: {
      danger:'#b71c1c'
    },
    secondary: {main:'#F15D4F' },

    error: {main:'#ca0909' },

     sand:{main:'#F4DECB'},
     shell:{main:'#F8EEE7'},
     footer:{main:'#BBBBBB'},
     white:'white',
     nero:'#222222',
     status:{
         danger:'#b71c1c'
     },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Quicksand',
    underline: '#F99E2A'
  },
});
