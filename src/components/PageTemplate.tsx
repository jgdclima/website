import React, { ReactElement, ReactNode } from 'react'
import { makeStyles, createStyles, Theme, Box } from '@material-ui/core'

interface Props {
    children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => createStyles ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: '80vh'
    },
}))

export default function PageTemplate({}: Props): ReactElement {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            
        </Box>
    )
}
