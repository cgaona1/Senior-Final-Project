import React from "react";
import Question from "./Question/question.js";
import { useSelector } from "react-redux";

import useStyles from "./styles.js";
import { CircularProgress, Grid } from "@material-ui/core";

const Questions = () => {
    const questions = useSelector((state) => state.questions);
    const classes = useStyles();

    console.log(questions);

    return (
        !questions.length ? <CircularProgress/> : (
            <Grid className={classes.mainContainer} container spacing={2} alignItems="stretch">
                {questions.map((question) => (
                    <Grid key={question._id} item xs={12} sm={6}>
                        <Question question={question}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Questions;