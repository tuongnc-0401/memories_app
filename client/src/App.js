import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './images/memories.png'

import { useDispatch, useSelector } from 'react-redux';

import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'

import { getPosts } from './actions/posts.js'

import useStyles from './styles.js'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());

    }, [dispatch]);
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" >
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" ></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignitem="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

    )
}

export default App;