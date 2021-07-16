import {
    Grid,
    makeStyles,
} from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function Error() {

    const [data, setdata] = useState([])

    const fetch = async () => {
        const item = await axios.get('/api/department/all')
        setdata(item.data)
    }

    useEffect(() => {

        fetch()

    }, [])



    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Grid container>
                <Grid item>

                    {/* {data[0].deptcategories.map(a=>{
                        return(
                            a.cataname
                        )
                    })} */} 

                    {data.map(a => {
                        return (
                            a.deptname
                        )
                    })}

                    {data[0].deptname}
                    {console.log(data)}

                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    jkrnf
                </Grid>
            </Grid>


        </div>
    )
}

export default Error
