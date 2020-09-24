import React, { useState, useEffect } from 'react';
import { Select, Button, Avatar, Typography, Paper, Grid, makeStyles, TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker } from "@material-ui/pickers";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { DropzoneArea } from 'material-ui-dropzone';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 20,
        marginTop: 10,
        textAlign: "center",
        alignItems: "center"
    },

    textfield: {
        width: 300,
        marginLeft: 'auto',
        margin: 10
    },
    textfield_long: {
        width: '100%',
        margin: 10,

    },
    button: {
        width: 300,
        margin: 10
    },
    buttonsave: {
        width: 200,
        margin: 30
    },
    title: {
        fontSize: 25,
        margin: 5
    },
    sub_title: {
        fontSize: 20,
        margin: 5
    },
    select: {
        minWidth: 200
    },
    filedrop: {
        margin: 20
    }

});



export default function PostalForm() {
    
    const postaltypes =[
        {key:1, nalue:'Letter'},
        {key:2, nalue:'Cheque'},
        {key:3, nalue:'Electronic'}
    ]

    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [state, setState] = React.useState({
        pastRef: '',
        postalType: 'LETTER',
        resMode: 'REGISTER_POST',
        title: '',
        senderName: '',
        senderAddress: '',
        senderTp: '',
        senderFax: '',
        senderEmail: '',
        senderPOC: '',
        senderPON: '',
        recName: '',
        open: false,
        files: []
    });

       const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });

        if (name == 'fileUpload') {

        }
    };





    return (
        <form className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={0} sm={1}>
                </Grid>
                <Grid item xs={12} sm={10}  >
                    <Typography className={classes.sub_title}>Postal Information</Typography>
                    <Paper elevation={3} className={classes.paper} >
                        <Grid container>
                            <Grid item xs={12} sm={3}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        normal
                                        name="resDate"
                                        variant="normal"
                                        format="MM/dd/yyyy"
                                        id="date-picker-dialog"
                                        label="Recived Date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl className={classes.select} >
                                    <InputLabel id="lbl-postal-type">Postal Type</InputLabel>
                                    <Select
                                        labelId="postal"
                                        id="postalType"
                                        value={state.postalType}
                                        name="postalType"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'LETTER'}>Letter</MenuItem>
                                        <MenuItem value={'CHEQUE'}>Cheque </MenuItem>
                                        <MenuItem value={'ELECTRONIC'}>Electronic </MenuItem>
                                    </Select>
                                </FormControl>


                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl className={classes.select} >
                                    <InputLabel id="demo-simple-select-label">Received Mode</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={state.resMode}
                                        name="resMode"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'REGISTER_POST'}>Register Post</MenuItem>
                                        <MenuItem value={'NORMAL_POST'}>Normal Post </MenuItem>
                                        <MenuItem value={'FAX'}>Fax</MenuItem>
                                        <MenuItem value={'EMAIL'}>Email</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    id="pastRef"
                                    label="Past Reference"
                                    size="small"
                                    name="pastRef"
                                    value={state.pastRef}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                        </Grid>

                        <Grid container  >
                            <Grid item xs={12} sm={11}  >
                                <TextField
                                    label="Title"
                                    className={classes.textfield_long}
                                    name="title"
                                    value={state.title}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid container  >
                            <Grid item xs={12} sm={5}  >
                                <TextField
                                    label="Receiver Name"
                                    className={classes.textfield_long}
                                    name="recName"
                                    value={state.recName}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid container  >
                            <Grid item xs={12} sm={5}  >
                                <TextField
                                    label="Sender Name"
                                    className={classes.textfield_long}
                                    name="senderName"
                                    value={state.senderName}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={1}  ></Grid>
                            <Grid item xs={12} sm={5}  >
                                <TextField
                                    label="Sender Address"
                                    className={classes.textfield_long}
                                    name="senderAddress"
                                    value={state.senderAddress}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid container  >
                            <Grid item xs={12} sm={2}  >
                                <TextField
                                    label="Sender Telephone"
                                    className={classes.textfield_long}
                                    name="senderTp"
                                    value={state.senderTp}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={1}  ></Grid>
                            <Grid item xs={12} sm={2}  >
                                <TextField
                                    label="Sender Fax"
                                    className={classes.textfield_long}
                                    name="senderFax"
                                    value={state.senderFax}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={1}  ></Grid>
                            <Grid item xs={12} sm={4}  >
                                <TextField
                                    label="Sender Email"
                                    className={classes.textfield_long}
                                    name="senderEmail"
                                    value={state.senderEmail}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid container  >
                            <Grid item xs={12} sm={2}  >
                                <TextField
                                    label="Sender Post Office Code"
                                    className={classes.textfield_long}
                                    name="senderPOC"
                                    value={state.senderPOC}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={1}  ></Grid>
                            <Grid item xs={12} sm={3}  >
                                <TextField
                                    label="Sender Post Office Name"
                                    className={classes.textfield_long}
                                    name="senderPON"
                                    value={state.senderPON}
                                    onChange={handleChange}
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={1}  ></Grid>
                            <Grid item xs={12} sm={4}  >

                            </Grid>
                        </Grid>
                        <Grid container style={{ margin: 20 }} >
                            <Grid item xs={12} sm={2}  ></Grid>
                            <Grid item xs={12} sm={8}  >
                                <DropzoneArea className={classes.filedrop}
                                    name="fileUpload"
                                    acceptedFiles={['image/*', 'application/pdf']}
                                    //onChange={this.handleChange.bind(this)}
                                    showFileNames
                                    dropzoneText="Drag and Drop File here"
                                    showAlerts={false}
                                    filesLimit={2}
                                />
                            </Grid>
                        </Grid>
                        <Grid container  >
                            <Grid item xs={12} sm={9
                            }  ></Grid>
                            <Grid item xs={12} sm={2}  >
                                <Button className={classes.buttonsave} variant="contained" color="primary">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={0} sm={1}>
                </Grid>
            </Grid>
        </form >

    )
}

