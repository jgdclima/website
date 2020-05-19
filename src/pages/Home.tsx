import React, { ReactElement } from 'react'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import PageTemplate from '../components/PageTemplate'


interface Props {

}

const useStyles = makeStyles((theme: Theme) => createStyles ({
    root: {
        backgroundColor: theme.palette.background.paper,
        
    },
}))

export default function Home({ }: Props): ReactElement {
    const classes = useStyles()
    return (
        <PageTemplate>
            Hello
        </PageTemplate>
    )
}
