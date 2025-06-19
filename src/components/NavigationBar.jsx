import { Container, Nav, Navbar } from 'react-bootstrap'
import icon from '../assets/react.svg'
import {Link} from 'react-router-dom'

function NavigationBar() {
  return (
    <>
        <Navbar className="bg-light">
        <Container>
          <Navbar.Brand as={Link} to="">
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            ITV-Movies
          </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link  as={Link} to="add-movie">Add Movie</Nav.Link>
            </Nav>        
          </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar