import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const arcBlue = "#0B72b9"
const arcOrange = "#FFBA60"


const Theme = createMuiTheme({

  palette: {
    common:{
        arcBlue: `${arcBlue}`,
        arcOrange: `${arcOrange}`
    },
    primary: {
        main: `${arcBlue}`
    },
    secondary: {
        main: `${arcOrange}`
    }
  },
  typography: {
      h3: {
        fontWeight: 300
      }
  }
});

export default Theme;