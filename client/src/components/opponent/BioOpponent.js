import './Opp.css'
import {Card, Row, Col, Image, Button} from 'react-bootstrap';
import Ellipse from '../assets/img/Ellipse.png'

const BioOpponent = ({us}) =>{
    return (
        <Card className='bg-dark'>
            <Card.Body className='bio'>
                <Row>
                    <Col md={3}>
                    <Image src={Ellipse} alt='eclipse' className='eclipse' />
                    <Image src={us.avatar} alt='profil-avatar' className='profil-op' roundedCircle/>
                    </Col>
                    <Col md={8}>
                        <p className='text-warning mb-0 name'>{us.name}</p>
                        <p className='text-secondary mb-0 level'>{us.level}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className='text-white fw-light op-bio mb-2'>{us.bio}</p>
                        <p className='text-secondary level'>{us.createdAt}</p>
                    </Col>
                    <Col md={12}>
                        <Button className='btn-warning text-white px-4 fw-bold'>FIGHT</Button>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}

export default BioOpponent;