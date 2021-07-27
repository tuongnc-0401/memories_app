import { Container, Grid, Grow, Paper, AppBar, TextField, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts, getPostsBySearch } from '../../actions/posts'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import Pagination from '../Pagination/Pagination.jsx'
import ChipInput from 'material-ui-chip-input'
import { useHistory, useLocation } from 'react-router-dom'
import useStyles from './styles'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null)

    const [search, setSearch] = useState('')

    const [tags, setTags] = useState([])

    const classes = useStyles()

    const dispatch = useDispatch();

    const query = useQuery();

    const history = useHistory();

    const page = query.get('page') || 1;

    const searchQuery = query.get('searchQuery')

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost()
        }
    }

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            history.push('/')
        }
    }

    const handleAdd = (addedTag) => setTags([...tags, addedTag])

    const handleDelete = (deletedTag) => setTags(tags.filter((tag) => tag !== deletedTag))

    useEffect(() => {
        dispatch(getPosts());

    }, [dispatch]);
    return (
        <Grow in>
            <Container maxWidth="lg">
                <Grid container justifyContent="space-between" alignitem="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Memories"
                                fullWidth
                                value={search}
                                onKeyPress={handleKeyPress}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search Tags"
                                variant="outlined"
                            />
                            <Button onClick={searchPost} variant="contained" className={classes.searchButton} color="primary">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Pagination />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow >
    )
}

export default Home;
