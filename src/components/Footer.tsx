import React, { ReactElement } from 'react'
import { Grid, Button, IconButton } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import theme from '../theme';


type FooterProps = {
    // children: React.ReactChild[];
}

// const theme = useTheme()
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.primary.dark,
        // paddingLeft: theme.spacing(1),
        // paddingRight: theme.spacing(1),
        // paddingTop: theme.spacing(2),
        // paddingBottom: theme.spacing(2)
        height: '10vh'
    },
}))


export default function Footer({ }: FooterProps): ReactElement {
    const classes = useStyles()

    return (
        <Grid container xs={12} className={classes.root} alignItems="center" style={{ 'justifyContent': "center" }}>
            <Grid item xs={1}>
                <IconButton onClick={() => window.open("https://github.com/jgdclima", "_blank")}>
                    <GitHubIcon htmlColor={theme.palette.text.primary} />
                </IconButton>
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={() => window.open("mailto:theotherlima@gmail.com", "_blank")}>
                    <EmailIcon htmlColor={theme.palette.text.primary} />
                </IconButton>
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={() => window.open("https://www.linkedin.com/in/joaoakabrazil/", "_blank")}>
                    <LinkedInIcon htmlColor={theme.palette.text.primary} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

// export default withStyles(styles)(Header)
