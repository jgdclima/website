import React, { ReactElement } from 'react'
import { Grid, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'


type HeaderProps = {
    children: React.ReactChild[];
}

// const theme = useTheme()
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.primary.dark,
        height: '10vh'
    },
    link: {
        textDecoration: "none",
        color: '#fff'
    }
}))


export default function Header({ children }: HeaderProps): ReactElement {
    const classes = useStyles()

    return (
        <Grid container xs={12} className={classes.root} alignItems="center">
            <Grid item xs={3}>{children[0]} </Grid>
            <Grid item xs={6}></Grid>
            {children.map(child => {
                if (children.indexOf(child) > 0)
                    return <Grid item xs>{child}</Grid>
                return ''
            })}
        </Grid>
    )
}

// export default withStyles(styles)(Header)
