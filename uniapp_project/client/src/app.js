import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Questions from './components/Questions/questions.js';
import Form from './components/Form/form.js'
import UniAppImage from './images/UniAppImage.jpeg';

const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Uni App</Typography>
                <img src={UniAppImage} alt='UniApp' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Questions />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;