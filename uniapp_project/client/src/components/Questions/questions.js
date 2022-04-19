import React from "react";
import Question from "./Question/question.js";
import useStyles from "./styles.js";

const Questions = () => {
    const classes = useStyles();

    return (
        <>
            <h1>QUESTIONS</h1>
            <Question />
            <Question />
        </>
    );
}

export default Questions;