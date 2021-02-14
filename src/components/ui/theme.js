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
      tab: {
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: "700",
        fontSize: "1rem",
      },
      estimate: {
        fontFamily: "Pacifico",
        fontSize: "1rem",
        textTransform: "none",
        color: "white"
      }
  }
});

export default Theme;