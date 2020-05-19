import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
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
        }
        
    },
})

export default theme;