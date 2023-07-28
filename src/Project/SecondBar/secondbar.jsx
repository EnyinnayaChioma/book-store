import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';
function Secondbar () {
    return(
    <>
    <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to='/About' >About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  as={Link} to='/Contact'>Contact</Nav.Link>
          </Nav.Item>
          <Dropdown as={NavItem}>
      <Link><Dropdown.Toggle as={NavLink}>Pages</Dropdown.Toggle></Link>
      <Dropdown.Menu>
        <Dropdown.Item  as={Link} to = '/Signin'>Signin</Dropdown.Item>
        <Dropdown.Item as={Link} to = '/Cart'>Cart</Dropdown.Item>
        <Dropdown.Item as={Link} to = '/Contact'>Contact</Dropdown.Item>
        <Dropdown.Item as={Link} to = '/Productdetails'>Bookdetails</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
    </>
    )
}

export default Secondbar;