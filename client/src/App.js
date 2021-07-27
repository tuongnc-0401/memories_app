import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import PostDetails from './components/PostDetails/PostDetails';


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
                    <Route path="/posts" exact component={Home} />
                    <Route path="/posts/search" exact component={Home} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                </Switch>
            </Container>

        </BrowserRouter>

    )
}

export default App;