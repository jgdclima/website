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
            secondary: '#000'
        },
        background: {
            paper: '#eee'
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
        h1: {

        },
        button: {
            fontSize: '1.3rem',
            textTransform: 'none'
        }
    }
})

theme = responsiveFontSizes(theme);

export default theme;