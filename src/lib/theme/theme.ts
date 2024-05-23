import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4a536b",
    },
    secondary: {
      main: "#aed6dc",
    },
    
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        
      },
      styleOverrides:{
        root:{
            padding:'4px 24px'
        }
      }
    },
    MuiContainer:{
        defaultProps:{
            maxWidth:'lg'
        }
    }
  },
  typography:{
    body1:{
        color:"#333333"
    }
  }
});
theme.shadows[1] = "0px 6px 20px lightgray"