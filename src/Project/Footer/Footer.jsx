import {Container, Row, Col, Form, Button, InputGroup, Dropdown,Nav} from 'react-bootstrap';
import { useState } from 'react';
import './Footer.css';
import img1 from '../Footer/socialImg/image1.png';
import img2 from '../Footer/socialImg/image2.webp';
import img3 from '../Footer/socialImg/image3.png';
import img4 from '../Footer/socialImg/image4.png';
import img5 from '../Footer/socialImg/image5.svg';
// import {Link} from 'react-router-dom';

function Footer(){
    const [email, setEmail] = useState([]);
    const [emailArray, setEmailArray] = useState([]);
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handleButton = () =>{
        setEmailArray((emailArray) => [...emailArray, email])
        setEmail('');
    }

    return (
        <footer>
            <Container className='footerContainer '>
                <Row className='top-footer'>
                    <Col className = 'col-12'>
                        <h6 className='text-center footer-header'>Cynosure bookstore</h6>
                    </Col>
                </Row>
                <Row className ="main-footer">
                    <Col className = "col-4 text-center footer-column my-2">Contact
                        <div className='footer-contact'>Street : Salvation Street</div>
                        <div className='footer-contact'>City: Birmingham</div>
                        <div className='footer-contact'>State : United Kingdom</div>
                        <div className='footer-contact'>Zip Code : 35068</div>
                        <div className='footer-contact'>Phone Number : 205-254-2000</div>
                        <div className='footer-contact'>Mobile Number : 205-255-1100</div>
                    </Col>
                    <Col className = "col-4 text-center footer-column my-2 ">Menu
                        <div  >
                            <Nav.Link  className='footerLink'>Home</Nav.Link>
                            <Nav.Link  className='footerLink'>About</Nav.Link>
                            <Nav.Link  className='footerLink'>Contact</Nav.Link>
                        </div>
                    </Col>
                    <Col className = "col-4 text-center footer-column my-2 ">NewsLetter
                    <div className=' text-center'>
                        <InputGroup className="my-2 footer-inputgroup" size='sm' style={{width: "80%"}} >
                            <Form.Control
                            onChange={handleEmail}
                            type='text'
                            value={email}
                            placeholder="Enter a valid email"
                            aria-label='Small'
                            aria-describedby="inputGroup-sizing-sm"
                            />
                            <Button size='sm' className='footer-button' variant="outline-secondary" onClick={handleButton} >
                                Enter
                            </Button>
                        </InputGroup>
                    </div>
                    <div>
                        <img src ={img1} alt = 'pinintrest' className='footer-social-image'/>
                        <img src ={img2} alt = 'linkedIn' className='footer-social-image'/>
                        <img src ={img3} alt = 'instagram' className='footer-social-image'/>
                        <img src ={img4} alt = 'twitter' className='footer-social-image'/>
                        <img src ={img5} alt = 'facebook' className='footer-social-image'/>
                    </div>
                    </Col>
                    </Row>
                    <Row className='top-footer'>
                        <Col className='col-12'>
                            <Dropdown className='text-center mt-2'><span className='footer-terms'>Terms and Conditions</span> 
                                <Dropdown.Toggle className='footer-toggle' size='sm' variant="dark" id="dropdown-basic">
                                     Privacy
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <p className='footer-dropdown text-center '>
                                            On our site,we collect and process your data to better understand
                                                <br></br>
                                            how it is used.We always ask for your consent to do it.To view your privacy
                                                <br></br> 
                                            settings,click on the sign up button at the top.
                                        </p>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col className='col-12 text-center footer-copyright my-1'>
                            Copright 2023 D-prime UK Inc. All rights reserved.  
                        </Col>
                    </Row>
                      
            </Container>
        </footer>
    );
}

export default Footer;