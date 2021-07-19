import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles.js';
import memories from '../../images/memories.png'
Navbar.propTypes = {

};

function Navbar(props) {
    const classes = useStyles();
    const user = null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" >
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" ></img>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;