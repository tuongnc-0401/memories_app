import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './images/memories.png'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'



import useStyles from './styles.js'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {

    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar />


                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/auth" exact component={Auth}></Route>

                </Switch>



            </Container>
        </BrowserRouter>

    )
}

export default App;