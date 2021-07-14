import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { signin } from '../actions/userActions';

import {
    makeStyles,
    Grid, Button,
    Divider, Typography
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#fff',
        width: '100vw',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
    },
    body: {
        justifyContent: "center",
        alginitems: "center",
        width: '32vw'
    },
    form: {
        [theme.breakpoints.down('sm')]: {
            flexGrow: 1,
            alginitems: "center",
            justifyContent: "center",
            width: '70%',
            padding: 20,
            border: '0.5px solid',
            borderColor: '#737373',
            borderRadius: '5px',

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
            borderColor: '#767676;',
            borderRadius: '5px',
        },

    },
    textfeild: {
        height: 30,
        width: '100%',
        margin: 5,
        borderRadius: '4px',
        border: '0.5px solid',
        borderColor: '#737373',
        '&:focus': {
            boxShadow: '0 0 3px 2px rgb(228 121 17 / 50%)',
            borderColor: '#e77600'
        },
    },
    divider: {
        width: 70,
        marginRight: 15,
        marginLeft: 15,
    },
    text: {
        margin: '-10px',
        color: '#767676'

    },
    button: {
        width: '100%',
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
        fontSize: 15,
        fontWeight: 500,

    },
    h3: {
        fontSize: 10,
        fontWeight: 500,
    },
    h4: {

    },
}));

function Login(props) {


    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const redirect = props.location.search
    //     ? props.location.search.split('=')[1]
    //     : '/'

    // const userSignin = useSelector((state) => state.userSignin);
    // const { userInfo, loading, error } = userSignin

    //  const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        //  dispatch(signin(email, password));
    };

    // useEffect(() => {
    //     if (userInfo) {
    //         props.history.push(redirect);
    //     }
    // }, [props.history, redirect, userInfo]);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.body} >

                <Grid wrap="nowrap">
                    <div >
                        <img height='100px' width='200px'
                            alt='logo'
                            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                        />
                    </div>
                </Grid>

                <Grid className={classes.form} wrap="nowrap">
                    <form onSubmit={submitHandler}>
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
                            <Button className={classes.button} onClick={() => submitHandler}>
                                Login
                            </Button>
                        </Grid>

                        <Typography className={classes.h3}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</Typography>
                    </form>
                </Grid>
                <br />
                <br />

                <Grid container>
                    <Divider className={classes.divider} />
                    <Grid className={classes.text}>
                        <Typography className={classes.h2}> New to Amazon?</Typography>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>

                <br />
                <br />
                <Grid wrap="nowrap">
                    <Button variant="contained" onClick={() => history.push('/register')} >Create your Amazon account</Button>
                </Grid>

            </Grid>
        </div>
    )
}

export default Login
