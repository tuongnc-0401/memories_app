import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PostDetails from './components/PostDetails/PostDetails.jsx'




const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
            <Container maxidth="xl">
                <Navbar />


                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts"></Redirect>}></Route>
                    <Route path='/posts' exact component={Home}></Route>
                    <Route path='/posts/search' exact component={Home}></Route>
                    <Route path='posts/:id' component={PostDetails}></Route>
                    <Route path="/auth" exact component={() => { !user ? <Auth></Auth> : <Redirect to="/posts"></Redirect> }}></Route>
                </Switch>



            </Container>
        </BrowserRouter>

    )
}

export default App;