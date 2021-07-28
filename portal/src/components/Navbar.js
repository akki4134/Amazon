import './styles/Navbar.css'
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    makeStyles,
    Badge,
    // Select,
    // MenuItem,
    Popover,
    Button,
    Grid,
} from '@material-ui/core';

import { useState } from 'react';

import { IoMenu, } from 'react-icons/io5'
import { FaCartPlus } from "react-icons/fa"

import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { signout } from '../Redux/Actions/userAction';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navbar: {
        background: '#131921'
    },
    menuicon: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 30,
        },
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.up('lg')]: {
            display: "none"
        },
    },
    maintitle: {
        borderColor: 'transporent',
        margin: 10,
        '&:hover': {
            border: '1.5px solid',
            borderColor: '#fff',
            cursor: 'pointer',
            borderRadius: '2px',
            paddingLeft: -20,
        }
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 8,
            fontWeight: 550,
            color: '#cccccc',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 10,
            fontWeight: 550,
            color: '#cccccc',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 12,
            fontWeight: 550,
            color: '#cccccc',
        },
    },
    subtitle: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 10,
            fontWeight: 600,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 12,
            fontWeight: 600,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 14,
            fontWeight: 600,
        },
    },
    search: {
        [theme.breakpoints.only('xs')]: {
            backgroundColor: '#fff',
            borderRadius: 5,
            position: 'absolute',
            marginLeft: 120,
            width: 'auto',
        },
        [theme.breakpoints.only('sm')]: {
            backgroundColor: '#fff',
            borderRadius: 5,
            position: 'relative',
            width: 'auto',
        },
        [theme.breakpoints.only('md')]: {
            position: 'relative',
            borderRadius: 5,
            backgroundColor: '#fff',
            width: 550,
            maxWidth: 550,
        },
        [theme.breakpoints.only('lg')]: {
            position: 'relative',
            borderRadius: 5,
            backgroundColor: '#fff',
            width: 750,
            maxWidth: 850,
        },
        [theme.breakpoints.only('xl')]: {
            position: 'relative',
            borderRadius: 5,
            backgroundColor: '#fff',
            width: 1300,
            maxWidth: 1300,
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    select: {
        color: '#fff'
    },
    cart: {
        fontSize: 30
    },
    button: {
        margin: 5,
        textTransform: 'none',
        background: '#f0c14b',
        width: '100%',
        color: '#000',
        '&:hover': {
            background: '#f0c14b',
            border: '0.5px solid',
            borderColor: '#737373',
        }
    },
    h2: {
        fontSize: 20,
        fontWeight: 800,
    },
}));


const Navigation = () => {

    const history = useHistory()
    const classes = useStyles();

    // const [page, setpage] = useState()
    // setpage('')

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const totalItems = cartItems.reduce((totalitems, item) => totalitems + parseInt(item.quantity), 0);

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout())
    }
    return (
        <div className={classes.root}>
            <AppBar className={classes.navbar} position="static">

                <Toolbar disableGutters={true}>

                    <div className={classes.menuicon}>
                        <IoMenu />
                    </div>

                    <img
                        onClick={() => history.push('/')}
                        className="header__logo" alt='logo'
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    />

                    <div className={classes.maintitle}>
                        <Typography className={classes.title} variant="h6">
                            Hello
                        </Typography>
                        <Typography className={classes.subtitle} variant="h6">
                            Select your Address
                        </Typography>
                    </div>

                    <InputBase className={classes.search} />
                    <div
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        className={classes.maintitle}
                    >
                        <Popover
                            id="mouse-over-popover"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            {userInfo ?
                                <div className={classes.root}>
                                    <Button className={classes.button} onClick={signoutHandler} >Sign Out</Button>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Typography className={classes.h2}> Your Account </Typography>
                                            <Typography> Your Orders </Typography>
                                            <Typography> Your Wish List</Typography>
                                            <Typography> Your Recommendations</Typography>
                                            <Typography> Your Prime Membership</Typography>
                                            <Typography> Your Prime Video</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.h2}>Your Lists</Typography>
                                            <Typography>Create a Wish List</Typography>
                                            <Typography>Find a Wish List</Typography>
                                            <Typography>Wish from Any Website</Typography>
                                            <Typography>Discover Your Style</Typography>
                                            <Typography>Explore Showroom</Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                                :
                                <div className={classes.root}>
                                    <Button className={classes.button} onClick={() => history.push(`/login`)}>Sign In </Button>
                                    <Typography>New customer? Start here.</Typography>
                                </div>
                            }

                        </Popover>
                        {userInfo ?
                            <Typography className={classes.title} variant="h6">
                                Hello {userInfo.name}
                            </Typography>
                            :
                            <Typography className={classes.title} variant="h6">
                                Hello,Sign In
                            </Typography>
                        }
                        <Typography className={classes.subtitle} variant="h6">
                            Account & List
                        </Typography>
                    </div>
                    {/* <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        className={classes.select}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}


                    <div className={classes.maintitle}>
                        <Typography className={classes.title} variant="h6">
                            Returns
                        </Typography>
                        <Typography className={classes.subtitle} variant="h6">
                            & Orders
                        </Typography>
                    </div>
                    <div onClick={() => history.push('/products/cart')} className={classes.maintitle}>

                        <Badge badgeContent={totalItems} color="primary">
                            <FaCartPlus className={classes.cart} />
                        </Badge>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Navigation
