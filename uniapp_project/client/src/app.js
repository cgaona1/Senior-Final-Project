import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Questions from './components/Questions/questions.js';
import Form from './components/Form/form.js';
import UniAppImage from './images/UniAppImage.jpeg';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { getQuestions } from './actions/questions.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getQuestions());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Uni App</Typography>
                <img className={classes.image} src={UniAppImage} alt='UniApp' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Questions setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;