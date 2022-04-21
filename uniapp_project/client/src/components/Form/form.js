import { TextField, Button, Typography, Paper } from "@material-ui/core";

import React, { useState } from "react";
import useStyles from "./styles.js";

const Form = () => {
    const [questionData, setQuestionData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
    });
    const classes = useStyles();

    const handleSubmit = () => {

    }
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating New Question</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={questionData.creator} onChange={(e) => setQuestionData({ ...questionData, creator: e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={questionData.title} onChange={(e) => setQuestionData({ ...questionData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={questionData.message} onChange={(e) => setQuestionData({ ...questionData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={questionData.tags} onChange={(e) => setQuestionData({ ...questionData, tags: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;