import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core'
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js'
import { useDispatch } from 'react-redux';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Pagination from '../Pagination';
import ChipInput from 'material-ui-chip-input'
import { useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles'
function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function Home(props) {
    const [currentId, setCurrentId] = useState(null);
    const query = useQuery();
    const dispatch = useDispatch();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const handleKeyPRESS = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    }
    const handleAdd = (tag) => setTags([...tags, tag]);
    const handleDelete = (tagToDelete) => setTags(tags.filter((t) => t !== tagToDelete));
    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            history.push('/')
        }
    }
    useEffect(() => {
        dispatch(getPosts());
        console.log(" App : " + currentId);
    }, [currentId, dispatch]);
    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justifyContent="space-between" alignitem="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField name="search" variant="outlined" label="Search Memories" fullWidth value={search}
                                onKeyPress={handleKeyPRESS}
                                onChange={(e) => { setSearch(e.target.value) }}
                            ></TextField>
                            <ChipInput style={{ margin: '10px 0' }} value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search Tags"
                                variant="outlined"

                            ></ChipInput>
                            <Button onClick={searchPost}
                                className={classes.searchButton}
                                color="primary"
                                variant="contained">Search</Button>
                        </AppBar>
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