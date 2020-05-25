import React, { ReactElement, ReactNode, Children } from 'react'
import { makeStyles, createStyles, Theme, Box, Grid } from '@material-ui/core'

interface Props {
    children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: '80vh',
    },
}))

export default function PageTemplate({ children }: Props): ReactElement {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            {children}
        </Grid>
    )
}
