import React from "react";
import useStyles from "./styles.js";
import moment from 'moment';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core/";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Question = ({ question }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} title={question.questionTitle}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{question.questionCreator}</Typography>
                <Typography variant="body2">{moment(question.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{question.questionTags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom component="h2">{question.questionTitle}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{question.questionMessage}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    Up Vote
                    {question.upVoteCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Question;