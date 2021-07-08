import React from 'react';
import {Cached} from "@material-ui/icons";
import {Button, Container, Typography} from "@material-ui/core";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AccessibilityNewSharpIcon from '@material-ui/icons/AccessibilityNewSharp';
import AdbSharpIcon from '@material-ui/icons/AdbSharp';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        fontSize: 40,
        color: 'green',
        backgroundColor: 'yellow',
        '&:hover': {
            backgroundColor: 'pink'
        }
    },
    title: {
        textDecoration: 'underline',
        fontSize: 45,
        color: 'blueviolet',
        marginBottom: 20
    }
})

const TestComponent = () => {

    const classes = useStyles();

    return (
        <>
            <Container>

                <Typography
                    className={classes.title}>
                    Header
                </Typography>

                <Button
                    className={classes.button}
                    color='primary'
                    variant='contained'
                    onClick={() => (alert('You clicked'))}
                    startIcon={<AccessibilityNewSharpIcon/>}
                    endIcon={<AdbSharpIcon />}
                >Test</Button>
            </Container>
<br />
<br />
            <FlashOnIcon color='secondary' fontSize='large' />
        </>


    )
}


export default TestComponent;