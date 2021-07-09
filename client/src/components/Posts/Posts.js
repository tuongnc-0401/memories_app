import React from 'react';
import Post from './Post/Post.js';

import { useSelector } from 'react-redux';

import useStyles from './styles.js'
const Posts = () => {

    const posts = useSelector((state) => state.posts)

    const classes = useStyles();

    console.log(posts + ' Rendering');
    return (
        <>
            <h1>POSTS</h1>
            <Post></Post>
            <Post></Post>
        </>
    );
}
export default Posts;