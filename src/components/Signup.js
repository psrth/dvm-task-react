import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Jumbotron, Container } from 'react-bootstrap'

function Signup() {
    return(
        <div>
            <Jumbotron fluid>
                <Container>
                <h1 className="jumb"><strong>SignUp Page</strong></h1>
                    <p className="jumb">
                    Welcome to the signup page!<br></br>
                    If you already have an account, login!
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Signup;