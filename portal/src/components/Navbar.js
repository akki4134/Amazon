import './styles/Navbar.css'
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    makeStyles,
} from '@material-ui/core';

import { IoMenu, } from 'react-icons/io5'

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
            fontSize: 30,
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
            paddingLeft:-20,
        }
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
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
            backgroundColor:'#fff',
            borderRadius:5,
            position: 'absolute',
            marginLeft: 120,
            width: 'auto',
        },
        [theme.breakpoints.only('sm')]: {
            backgroundColor:'#fff',
            borderRadius:5,
            position: 'relative',
            width: 'auto',
        },
        [theme.breakpoints.only('md')]: {
            position: 'relative',
            borderRadius:5,
            backgroundColor:'#fff',
            width: 550,
            maxWidth: 550,
        },
        [theme.breakpoints.only('lg')]: {
            position: 'relative',
            borderRadius:5,
            backgroundColor:'#fff',
            width: 750,
            maxWidth: 850,
        },
        [theme.breakpoints.only('xl')]: {
            position: 'relative',
            borderRadius:5,
            backgroundColor:'#fff',
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
    inputInput: {

    },
}));


const Navigation = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.navbar} position="static">

                <Toolbar disableGutters={true}>

                    <div className={classes.menuicon}>
                        <IoMenu />
                    </div>

                    <img
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

                    <div className={classes.maintitle}>
                        <Typography className={classes.title} variant="h6">
                            Hello,Sign In
                        </Typography>
                        <Typography className={classes.subtitle} variant="h6">
                            Account & List
                        </Typography>
                    </div>

                    <div className={classes.maintitle}>
                        <Typography className={classes.title} variant="h6">
                            Returns
                        </Typography>
                        <Typography className={classes.subtitle} variant="h6">
                            & Orders
                        </Typography>
                    </div>
                    <div className={classes.maintitle}>
                        <Typography className={classes.subtitle} variant="h6">
                            Cart
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Navigation
