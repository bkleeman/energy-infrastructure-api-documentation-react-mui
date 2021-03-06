import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
      contained: {
        boxShadow: 'none',
        margin: '0.5em 0.5em',
      }
    },
    MuiContainer: {
      root: {
        '&:has(.endpoint-table)': {
          paddingLeft: '0px',
          paddingRight: '0px',
          marginLeft: '0',
          marginRight: '0',  
        }
      }
    }
    // MuiTableContainer: {
    //   root: {
    //     marginLeft: '-19rem'
    //   }
    // }
  },
});
export default theme;
