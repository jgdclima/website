import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#71928B',
            main: '#45645E',
            dark: '#1C3A34'
        },
        secondary: {
            light: '#ffff58',
            main: '#fcce17',
            dark: '#c49d00',
        },
        text: {
            primary: '#fff',
            secondary: ''
        }

    },
    typography: {
        fontFamily: [
            'montserrat',
            'IBM Plex Sans'
        ].join(','),
        body1: {

        },
        body2: {

        },
        button: {

        }
    }
})

theme = responsiveFontSizes(theme);

export default theme;