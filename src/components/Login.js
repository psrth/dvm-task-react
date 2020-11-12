import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Jumbotron, Container, Button } from 'react-bootstrap'

function Login() {
    return(
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1 className="jumb"><strong>Login Page</strong></h1>
                    <p className="jumb">
                    Welcome to the login page!<br></br>
                    Please login to access our service.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Login;