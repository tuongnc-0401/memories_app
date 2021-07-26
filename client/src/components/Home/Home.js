import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@material-ui/core'
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js'
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Pagination from '../Pagination';

Home.propTypes = {

};

function Home(props) {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
        console.log(" App : " + currentId);
    }, [currentId, dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignitem="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Pagination></Pagination>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;