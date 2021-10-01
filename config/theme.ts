import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#172F26',
    },
    secondary: {
      main: '#CBD320',
    },
    background: {
      default: '#172F26',
    },
  },
	typography: {
		fontFamily: "Work Sans",
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"@font-face": [
					{
						fontFamily: "Work Sans",
						fontStyle: "normal",
						fontDisplay: "swap",
						fontWeight: 400,
					},
				],
			},
		},
	},
});

export default theme;