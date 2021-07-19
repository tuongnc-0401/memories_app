import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';





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