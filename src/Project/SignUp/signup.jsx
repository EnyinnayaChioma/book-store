import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './signup.css'
function Signup (){
    return (
        <>
    <Container>
        <div className="signin-holder d-flex justify-content-center" >
            <div style={{width: "50%"}} >
        <Row>
          <Col>
          <h2 className="d-flex justify-content-center mt-5">Sign Up</h2>
          </Col>
        </Row>
        <Row> 
          <Col>
           <p className="d-flex justify-content-center">Create your account to get full access</p>
          </Col>
          </Row>
          <Row>
            <Col className="mb-4 mt-4">
                    <Form.Label >Full Name</Form.Label>
            <Form.Control
                type="text"
                id="text"
                aria-describedby="passwordHelpBlock"
                placeholder= "Enter Full Name"
            />
      
            </Col>
          </Row>

          <Row >
            <Col className="mb-4 mt-2">
                    <Form.Label htmlFor="inputPassword5">Email Address</Form.Label>
            <Form.Control
                type="email"
                id="email"
                aria-describedby="passwordHelpBlock"
                placeholder= "Enter email address"
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
          <Row >
            <Col className="mb-4 mt-2">
                    <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                aria-describedby="passwordHelpBlock"
                placeholder= "Confirm Password"
            />
      
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={9} className="mt-4">
                <p>Already have an account?<Link as={Link} to='/Signin'>Sign in</Link>  here
                </p>
            </Col>
            <Col>
            <Button variant="primary">Sign Up</Button>
            </Col>

          </Row>
          </div>
        </div>
    </Container>
    </>
    )
}

export default Signup;