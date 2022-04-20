import React from "react";
import Question from "./Question/question.js";
import { useSelector } from "react-redux";

import useStyles from "./styles.js";

const Questions = () => {
    const questions = useSelector((state) => state.questions);
    const classes = useStyles();

    console.log(questions);

    return (
        <>
            <h1>QUESTIONS</h1>
            <Question />
            <Question />
        </>
    );
}

export default Questions;