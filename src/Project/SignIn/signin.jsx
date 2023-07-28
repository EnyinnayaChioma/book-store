import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './signin.css'


function Signin () {
 return (
    <>
    <Container>
        <div className="signin-holder d-flex justify-content-center" >
            <div style={{width: "50%"}} >
        <Row>
          <Col>
          <h2 className="d-flex justify-content-center mt-5">Sign in</h2>
          </Col>
        </Row>
        <Row> 
          <Col>
           <p className="d-flex justify-content-center">Enter Login details to get access</p>
          </Col>
          </Row>
          <Row>
            <Col className="mb-4 mt-4">
                    <Form.Label >Username or Email Address</Form.Label>
            <Form.Control
                type="email"
                id="email"
                aria-describedby="passwordHelpBlock"
                placeholder= "Username / Email address"
            />
      
            </Col>
          </Row>

          <Row >
            <Col className="mb-4 mt-2">
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                aria-describedby="passwordHelpBlock"
                placeholder= "Enter Password"
            />
      
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={9} className="mt-4">
                <p>Don't have an account? <Link as={Link} to='/Signup'>Sign Up</Link> here
                </p>
            </Col>
            <Col>
            <Button variant="primary">Sign in</Button>
            </Col>

          </Row>
          </div>
        </div>
    </Container>
    </>
 )   
}


export default Signin;