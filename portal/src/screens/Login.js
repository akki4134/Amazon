import { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Button, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#fff',
        width: '100vw',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
    },
    form: {
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.up('lg')]: {
            flexGrow: 1,
            alginitems: "center",
            justifyContent: "center",
            width: '70%',
            padding: 20,
            border: '0.5px solid',
            borderColor: '#737373',
            borderRadius: '5px',
        },

    },
    textfeild: {
        height: 30,
        width: '80%',
        margin: 5,
        borderRadius: '4px',
        border: '0.5px solid',
        borderColor: '#737373',
        '&:focus': {
            boxShadow: '0 0 3px 2px rgb(228 121 17 / 50%)',
            borderColor: '#e77600'
        },
    },
    button: {
        width: '80%',
        margin: 5,
        textTransform: 'none',
        background: '#f0c14b',
        color: '#000',
        border: '0.5px solid',
        '&:hover': {
            background: '#f0c14b',
            border: '0.5px solid',
            borderColor: '#737373',
        }
    },
    h2: {

    },
    h3: {
        fontSize: 15,
        fontWeight: 500,
    },
    h4: {

    },
}));

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid>

                <Grid wrap="nowrap">
                    <div>
                        <img height='100px' width='200px'
                            alt='logo'
                            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                        />
                    </div>
                </Grid>

                <Grid className={classes.form} wrap="nowrap">
                    <form>
                        <Typography>Sign-In</Typography>

                        <input
                            className={classes.textfeild}
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>


                        <input
                            className={classes.textfeild}
                            type="email"
                            id="password"
                            placeholder="Enter password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>

                        <Grid wrap="nowrap">
                            <Button className={classes.button}>
                                Login
                            </Button>
                        </Grid>


                        <Typography className={classes.h3}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</Typography>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
