import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createQuestion } from "../../api/index.js";

import useStyles from "./styles.js";


const Form = () => {
    const [questionData, setQuestionData] = useState({
        questionCreator: '',
        questionTitle: '',
        questionMessage: '',
        questionTags: '',
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(createQuestion(questionData));
    };
    const clear = () => {

    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating New Question</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={questionData.questionCreator} onChange={(e) => setQuestionData({ ...questionData, questionCreator: e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={questionData.questionTitle} onChange={(e) => setQuestionData({ ...questionData, questionTitle: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={questionData.questionMessage} onChange={(e) => setQuestionData({ ...questionData, questionMessage: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={questionData.questionTags} onChange={(e) => setQuestionData({ ...questionData, questionTags: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;