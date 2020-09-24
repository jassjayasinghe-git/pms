import { Paper, Grid, makeStyles, TextField, Avatar, Typography, Button } from '@material-ui/core';
import { Autorenew, CenterFocusStrong, StayPrimaryLandscape } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 20,
        marginTop: 100,
        textAlign: "center",
        alignItems: "center"

    },
    avatar: {
        color: '#ffffff',
        backgroundColor: '#767676',
        height: 100,
        width: 100,
        margin: 10
    },

    textfield: {
        width: 300,
        margin: 10
    },
    button: {
        width: 300,
        margin: 10
    },
    title: {
        fontSize: 25,
        margin: 5
    },
    sub_title: {
        fontSize: 20,
        margin: 5
    }
});

export default function LoginForm() {
    const classes = useStyles();
    const [state, setState] = React.useState(
        {
            userName: '',
            password: ''
        }
    );

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    }

    const loginClicked = (event) =>{
       
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={0} sm={4}>
                </Grid>
                <Grid item xs={12} sm={4} alignItems="center" >
                    <Paper elevation={3} className={classes.paper} >
                        <Grid container justify="center">
                            <Grid item xs={12} align="center"><Avatar className={classes.avatar}></Avatar></Grid>
                            <Grid item xs={12}>
                                <Typography
                                    className={classes.title}
                                >
                                    Login
                                </Typography></Grid>
                            <Grid item xs={12}>
                                <Typography
                                    className={classes.sub_title}
                                >
                                    Postal Management System
                            </Typography>
                            </Grid>
                            <Grid item xs={12}> <TextField
                                id="userName"
                                label="User Name"
                                color="primary"
                                size="small"
                                className={classes.textfield}
                                value={state.userName}
                                name="userName"
                                onChange={handleChange}
                            />
                            </Grid>
                            <Grid item xs={12}> <TextField
                                id="outlined-secondary"
                                label="password"
                                color="primary"
                                type="password"
                                size="small"
                                className={classes.textfield}
                                value={state.password}
                                name="password"
                                onChange={handleChange}
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={loginClicked}
                                >
                                    Login
                                </Button></Grid>
                        </Grid>


                    </Paper>
                </Grid>

                <Grid item xs={0} sm={4}>

                </Grid>
            </Grid>
        </div>
    );

}