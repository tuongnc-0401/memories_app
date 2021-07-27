import React from 'react';
import Post from './Post/Post.js';

import { useSelector } from 'react-redux';

import useStyles from './styles.js'
import { CircularProgress, Grid } from '@material-ui/core';


const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts)
    console.log("hello", posts);
    const classes = useStyles();

    console.log(posts + ' Rendering');
    return (
        !posts.length ? <CircularProgress></CircularProgress> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                    </Grid>
                ))}
            </Grid>
        )
    );
}
export default Posts;