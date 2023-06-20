import { createTheme } from "@mui/material/styles";
const theme = createTheme({
 direction: "rtl",
 palette: {
  mode: "light",
  primary: {
   main: "#51A8B1",
  },
  secondary: {
   main: "#5F9299",
  },
 },
 typography: {
  fontFamily: [`Yekan Bakh`, `sans-serif`].join(","),
 },
 components: {
  MuiSvgIcon: {
   styleOverrides: {
    root: {
     fill: "#5F9299",
     fontSize: "1.4em",
    },
   },
  },
  MuiTableCell: {
   styleOverrides: {
    root: {
     color: "#5c5c5c",
     fontSize: "13.5px",
     fontWeight: 600,
    },
    head: {
     fontWeight: 700,
    },
   },
  },
  MuiAccordionSummary: {
   styleOverrides: {
    root: {
     flexDirection: "row-reverse",
    },
    content: {
     flexDirection: "row-reverse",
    },
   },
  },
  MuiAccordion: {
   styleOverrides: {
    root: {
     borderRadius: "16px !important",
     backgroundColor: "#EFF9FA",
     boxShadow: "unset",
     marginBottom: "15px",
     flexDirecion: "row-reverse",
     "&:before": {
      opacity: "0",
     },
    },
   },
  },
  MuiOutlinedInput: {
   styleOverrides: {
    root: {
     "&:hover fieldset": {
      borderColor: "#C9E4E8 !important",
     },
     fieldset: { borderRadius: "10px", color: "#5F6869", borderColor: "#C9E4E8 !important" },
    },
    input: {
     textAlign: "right",
    },
   },
  },
  MuiInputBase: {
   styleOverrides: {
    input: {
     textAlign: "right",
     "&::placeholder": {
      fontSize: "15px",
      color: "#5F6869 !important",
      fontWeight: 400,
      opacity: "1.0",
     },
    },
   },
  },
  MuiBottomNavigationAction: {
   styleOverrides: {
    root: {
     gap: "0px",
     backgroundColor: "#F7FCFC",
    },
    label: {
     color: "#505757",
     fontWeight: 500,
    },
   },
  },
 },
});

export default theme;
