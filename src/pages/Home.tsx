import React, { ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import PageTemplate from '../components/PageTemplate'
import Card from '../components/Card'
import { Grid, Typography, Box } from '@material-ui/core'


interface Props {

}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.background.paper,

    },
    cardHolder: {
        // alignItems: 'center',
        justifyContent: 'center',
        height: '70%'
    },
    mainTextHolder: {
        height: '30%',
        color: theme.palette.text.primary,
        marginLeft: theme.spacing(8),
        marginTop: theme.spacing(6)
    }
}))

export default function Home({ }: Props): ReactElement {
    const classes = useStyles()

    const devContent = <ul>
        <li>Front-end (JS, React)</li>
        <li>Web (SquareSpace, WordPress, Webflow)</li>
        <li>OO (Java, C++, WPF)</li>
    </ul>

    const creativeContent = <ul>
        <li>Dungeons & Dragons</li>
        <li>Game Design & Narrative</li>
        <li>Comics & Sketches</li>
    </ul>

    const designContent = <ul>
        <li>Heuristic Evaluations</li>
        <li>User-centered Design</li>
        <li>Prototyping</li>
        <li>User Research</li>
    </ul>

    return (
        <PageTemplate>
            <Grid item className={classes.mainTextHolder} component={Box} textAlign={'left'} md={4} xs={12}>
                <Typography variant={'h3'} paragraph>Hi. I'm João</Typography>
                <Typography variant={'body1'} >I’m a software developer with a passion for community, learning, and accessibility.</Typography>
            </Grid>
            <Grid item container className={classes.cardHolder}>
                <Grid item md={3}>
                    <Card title={'DEV'} link='/dev' color={'#008C4D'} content={devContent} />
                </Grid>
                <Grid item md={3}>
                    <Card title={'CREATIVE'} link='/creative' color={'#FCCF17'} content={creativeContent} />
                </Grid>
                <Grid item md={3}>
                    <Card title={'DESIGN'} link='/design' color={'#46979F'} content={designContent} />
                </Grid>
            </Grid>
            {/* <Grid item></Grid> */}
        </PageTemplate>
    )
}
