import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Redux/Actions/userAction';

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
    form: {
        padding: 20,
        border: '0.5px solid',
        borderColor: '#767676;',
        borderRadius: '5px',
    },
    textfeild: {
        margin: 10,
    },
    divider: {
        width: 70,
        marginRight: 15,
        marginLeft: 15,
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
        fontWeight: 800,
        margin: 5,

    },
    h3: {
        fontSize: 10,
        fontWeight: 500,
        marginLeft: 15,
    },
    h4: {

    },
}));

function Register(props) {

    let history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    // const [ConfirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo } = userRegister;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        // e.preventDefault();
        // if (Password !== ConfirmPassword) {
        //     alert('Password and confirm password are not match');
        // } else {
        //     dispatch(register(Name, Phonenumber, Email, Password));
        // }

        dispatch(register(name, email, phonenumber, password));

    };

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid >
                <Grid onClick={() => history.push('/')} style={{ marginLeft: '50px' }} item>
                    <img height='100px' width='200px'
                        alt='logo'
                        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    />
                </Grid>
                <form className={classes.form}>

                    <Typography className={classes.h2} > Create Account</Typography>

                    <Grid item>
                        <TextField autoFocus size="small"
                            className={classes.textfeild}
                            id="name" label="Name"
                            variant="outlined"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField size="small"
                            className={classes.textfeild}
                            id="email" label="Email"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField size="small"
                            className={classes.textfeild}
                            id="mobile" label="Phone Number"
                            variant="outlined"
                            onChange={(e) => setPhonenumber(e.target.value)}
                        />

                    </Grid>
                    <Grid item>
                        <TextField size="small"
                            autoComplete='true'
                            type="password" className={classes.textfeild}
                            id="password" label="Password"
                            variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>

                    <Grid item>
                        <Typography className={classes.h3}>
                            We will send you a text to verify your phone.
                        </Typography>
                        <Typography className={classes.h3}>
                            Message and Data rates may apply.
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Button className={classes.button} onClick={() => submitHandler()}>
                            Continue
                        </Button>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    <Grid item>
                        <Typography>
                            Already have an account?
                            <Link to='/login' onClick={() => history.push('/login')}>
                                sign in
                            </Link>
                        </Typography>
                    </Grid>
                </form>
            </Grid>
        </div >
    )
}

export default Register
