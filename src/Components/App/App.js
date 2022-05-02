import React from 'react';
import { Link } from "react-router-dom";
import rdcep from './../../rdcep+sig2.png'
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import NavBar from '../NavBar'
function App() {
  return (
    <Container maxWidth="xl" className="App">
      <Paper style={{textAlign: 'center'}}>
        <NavBar className="nav-bar"/>
        <a href="https://rdcep.org" target="_blank" rel="noreferrer" className='img-anchor'>
            <img src={rdcep} className="App-logo" alt="logo" />
        </a>
        <Typography variant="h4" component="h1" gutterBottom className="title">
          Energy Infrastructure API
        </Typography>
        <br></br>
        <Container className='home-content'>
          <Paper elevation={12}>
            <Typography variant='subtitle2' component='subtitle2' gutterBottom>
              Documentation for the Energy Infrastructure API, from the Center for Robust Decision Making on Climate and Energy Policy
          </Typography>
          <br></br>
          <a href="https://twitter.com/rdceporg" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
            <Button variant="contained" color="secondary">
              Twitter
            </Button>
          </a>
          <a href="https://github.com/RDCEP" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
            <Button variant="contained" color="secondary">
              Github
            </Button>  
          </a>
          <Link to='/introduction' style={{textDecoration: "none"}}>
            {/* Kill the button shadow!!! */}
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Link>
        </Paper>
        </Container>
      </Paper>
    </Container>
  );
}

export default App;