import React, { ReactElement, useState, ReactNode } from 'react'
import { Card as MuiCard, CardHeader, CardContent, LinearProgress, makeStyles, lighten, Theme, createStyles, withStyles, darken, } from '@material-ui/core'
import { PaletteColor } from '@material-ui/core/styles/createPalette'
import { Link as RouterLink, } from 'react-router-dom'


interface Props {
    title: string,
    color: string,
    link: string,
    content: ReactNode
}

let tempColor: string = ''


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        margin: theme.spacing(3),
        textAlign: 'left',
        // minHeight: '30vh'
        height: '50%'
    },
    header: (tProp: Props) => ({
        backgroundColor: darken(tProp.color, 0.5),
        color: theme.palette.getContrastText(darken(tProp.color, 0.5)),
        justifyContent: 'flex-start',
        height: 'auto'

    }),
    content: (tProp: Props) => ({
        backgroundColor: tProp.color,
        color: theme.palette.getContrastText(tProp.color),
        height: '100%'
    }),
    // {
    //     backgroundColor: (tProp: Props) => ({color}),
    //     color: theme.palette.getContrastText(tempColor),
    //     outerHeight: '5vh'
    // },
    link: {
        textDecoration: "none",
        color: '#fff'
    }
}))




function Card({ title, color, link, content }: Props): ReactElement {
    const [value, setvalue] = useState(20);


    tempColor = color;
    const classes = useStyles({ title, color, link, content })

    console.log(color)

    const CardHighlight = withStyles({
        root: {
            // height: 10,
            backgroundColor: lighten(color, 0.5),
        },
        bar: {
            // borderRadius: 20,
            backgroundColor: color,
        },
    })(LinearProgress);

    const handleMouseEnter = () => {
        setvalue(100)
    }

    const handleMouseLeave = () => {
        setvalue(20)
    }

    return (
        <RouterLink to={link} className={classes.link}>
            <MuiCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={classes.root}>
                <CardHighlight variant='determinate' value={value} />
                <CardHeader title={title} className={classes.header} />
                <CardContent className={classes.content}>
                    {content}
                </CardContent>
            </MuiCard>
        </RouterLink>
    )
}

export default Card
