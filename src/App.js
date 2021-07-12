import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import cloud from "./images/cloud.png";
import useStyles from './styles';
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null); //Güncelleme işlemi için kullanılacak olan değişkenler null değeri ile atanır.

    useEffect(() => {
        dispatch(getPosts()); //action/post.js den export ediliyor. App.js --> actions/posts.js --> reducers/posts.js
    }, [currentId,dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align= "center">My Cloud</Typography>
                <img className={classes.image} src={cloud} alt="mycloud" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className = {classes.mainContainer} container justify ="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;