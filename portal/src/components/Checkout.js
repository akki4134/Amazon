import {
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#fff',
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  checkout: {
    borderTop: '0.3rem #c0c0c0 solid',
    color: '#c0c0c0',
    flex: 1,
  },
  active: {
    borderTop: '#f08000',
    color: '#f08000',

  }
}))

export default function Checkout(props) {

  const classes = useStyles();

  return (

    // <div className={props.step1 ? 'active' : ''}>Log-In</div>
    // <div className={props.step2 ? 'active' : ''}>Shipping</div>
    // <div className={props.step3 ? 'active' : ''}>Payment</div>
    // <div className={props.step4 ? 'active' : ''}>Place Order</div>


    <Grid className={classes.checkout} container>
      <Grid className={props.step1 ? classes.active : ''} item> Login</Grid>
      <Grid className={props.step2 ? classes.active : ''} item> Shipping</Grid>
      <Grid className={props.step3 ? classes.active : ''} item> Payment</Grid>
      <Grid className={props.step4 ? classes.active : ''} item> Place Order</Grid>
    </Grid>


  );
}