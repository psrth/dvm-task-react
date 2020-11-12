import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Jumbotron, Container } from 'react-bootstrap'

function About() {
    return(
        <div>
            <Jumbotron fluid>
                <Container>
                <h1 className="jumb"><strong>About Page</strong></h1>
                    <p className="jumb">
                    Hey there! You're succesfully logged<br></br>in! This is the about page.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default About;