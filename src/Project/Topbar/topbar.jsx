import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./topbar.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MyContext } from '../../MyContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';




function Topbar (){
  const {badge, setBadge} = useContext(MyContext);


    return(
      <>
      <Container>
        <Navbar className="bg-body-tertiary">
        <Navbar.Brand href="#">
            Cynosure's Book Store
          </Navbar.Brand>
          {/* <InputGroup> */}
          <InputGroup className="d-flex justify-content center">
            <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </InputGroup>
          {/* </InputGroup> */}         
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center "
            style={{ maxHeight: '100px', width: '100%' }}
            navbarScroll
          >
            <Nav.Link href="#" >
              <div>
                <div className='cart-div  d-flex justify-content-end'>
                <Link to='/Cart'><FontAwesomeIcon icon={faCartShopping} className='cart' /></Link> <Badge bg="danger" className='cart-badge' >{badge}</Badge>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link href="#" >
              <Button className='signin-btn' variant="primary" size="lg">
                Sign up
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
         </Navbar>
         </Container>
         </>
        //  {/* <Navbar expand="lg" className="bg-body-tertiary">
        //     <Container>
        //       <Row>
        //       <Col><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Col>
        //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //       <Navbar.Collapse id="basic-navbar-nav">
        //        <Col>
                
        //        </Col>
        //       </Navbar.Collapse>
        //       </Row>
             
        //     </Container>
        //   </Navbar> */}


         
   

    );
}

export default Topbar;