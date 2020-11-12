import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Jumbotron, Container } from 'react-bootstrap'

function Home() {
    return(
        <div>
           <Jumbotron fluid>
                <Container>
                <h1 className="jumb"><strong>Home Page</strong></h1>
                    <p className="jumb">
                    Hey there! You're succesfully logged<br></br>in! This is the home page.
                    </p>
                </Container>
            </Jumbotron> 
        </div>
    );
};

export default Home;