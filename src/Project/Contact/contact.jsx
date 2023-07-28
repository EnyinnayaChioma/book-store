import { Container, Row, Col, Button} from "react-bootstrap";
import "./contact.css";
import Topbar from "../Topbar/topbar";
import Secondbar from "../SecondBar/secondbar";
import Form from 'react-bootstrap/Form';

function Contact() {
    return(
        <>
        <Container>
            <Topbar />
            <Secondbar />
            <Row>
                <Col>
                    <div className="background bg-danger mt-5">
                    <h1 className="d-flex justify-content-center text-align-center ">
                        CONTACT
                    </h1>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={6} className="mt-4">
                 <h3>
                    Get in Touch
                 </h3>
                 <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={7} placeholder="Enter Text" />
                 </Form.Group>
                </Col>
                
            </Row>
            <Row>
                <Col xs={3}>
                <Form.Control  type="text" placeholder="Enter your name" />
                </Col>
                <Col xs={3}>
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Control  type="text" placeholder="Enter Subject" className="mt-4" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant="primary" className="mt-3 mb-3">Send</Button>
                </Col>
            </Row>
        </Container>
        </>
        
    )
}

export default Contact;