import {Navbar, Container, Nav, Modal, Card, Row, Col, Image} from 'react-bootstrap';
import { useState } from 'react';
import Ellipse from '../assets/img/Ellipse.png'
import PhotoUser from '../assets/img/image.jpg'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';



const  NavHead= () => {
  const navigate = useNavigate(); 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }
  return(
      <Navbar bg="dark" variant="dark">
      <Container className='Nav'>
      <Navbar.Brand className='fw-bold' >SUIT GAME</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      {localStorage.getItem('logged in') === 'true' ? 
      <div className='d-flex d-inline'>
        <Nav.Link className='text-white' onClick={handleShow}>{ localStorage.getItem('user')}</Nav.Link>
          <Modal show={show} onHide={handleClose} className="border-0" size='sm'>
              <Card className='bg-dark bio-card'>
                <Card.Body className='p-2'>
                    <Row>
                        <Col md={3}>
                        <Image src={Ellipse} alt='eclipse' className='eclipse' />
                        <Image src={PhotoUser} alt='profil-avatar' className='profil-op' roundedCircle/>
                        </Col>
                        <Col md={8}>
                            <p className='text-warning mb-0 name'>{ localStorage.getItem('user')}</p>
                            <p className='text-secondary mb-0 level'>{ localStorage.getItem('level')}</p>
                            <p className='text-white fw-light mb-0 points'>{ localStorage.getItem('point')} Points</p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col md={12}>
                        <Nav.Link className='text-white text-center' onClick={handleLogout} >LOGOUT</Nav.Link> 
                        <p className='text-secondary mb-0 level'>*Select any to close this</p>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Modal>
        
      </div> :
       <div className='d-flex d-inline'>
         <Nav.Link className='text-white' href="/login" >LOGIN</Nav.Link> 
         <Nav.Link className='text-white' href="/register" >REGISTER</Nav.Link> 
     </div>}
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavHead ;