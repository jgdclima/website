import React, { ReactElement } from 'react'
import {Grid, Button} from '@material-ui/core'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'


type FooterProps ={
    // children: React.ReactChild[];
}

// const theme = useTheme()
const useStyles = makeStyles((theme: Theme) => createStyles ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        // paddingLeft: theme.spacing(1),
        // paddingRight: theme.spacing(1),
        // paddingTop: theme.spacing(2),
        // paddingBottom: theme.spacing(2)
        height: '10vh'
    },
}))


export default function Footer({}: FooterProps): ReactElement {
    const classes = useStyles()

    return (
            <Grid container xs={12} className={classes.root}>
                Footer
            </Grid>
    )
}

// export default withStyles(styles)(Header)
