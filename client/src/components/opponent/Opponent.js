import './Opp.css';
import NavHead from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import {Button, Row, Col, Container} from 'react-bootstrap';
import BioOpponent from './BioOpponent';
import OpponentData from '../assets/opponents.json'
import { useEffect, useState} from 'react';



const OpponentPage = () => {

    const [Opponents, setOpppnents] = useState([]);
    const [opponentLevel, setOppLevel] = useState("GRAND MASTER");

    useEffect (() => {
        setOpppnents(OpponentData.filter(u => u.level === opponentLevel));
    }, [opponentLevel])
    
    
    return (
        <div className='Opponent'>
            <NavHead/>
            <Container> 
            <div className='content mx-5 mb-5'>
            
                <div className=' mb-2 d-flex justify-content-start'>
                    <h5 className='text-white fw-bold'>CHOOSE YOUR OPPONENT</h5>
                </div>
                <div className='d-flex d-inline mb-4 btn-control'>
                    <Button type='submit' className= {opponentLevel === "NOVICE" ? 'btn-click' : 'btn-down'} onClick={() => setOppLevel('NOVICE')}>NOVICE</Button>
                    <Button type='submit' className= {opponentLevel === "CLASS A" ? 'btn-click' : 'btn-down'}  onClick={() => setOppLevel('CLASS A')}>CLASS A</Button>
                    <Button type='submit' className= {opponentLevel === "CLASS B" ? 'btn-click' : 'btn-down'} onClick={() => setOppLevel('CLASS B')}>CLASS B</Button>
                    <Button type='submit' className= {opponentLevel === "CLASS C" ? 'btn-click' : 'btn-down'} onClick={() => setOppLevel('CLASS C')}>CLASS C</Button>
                    <Button type='submit' className= {opponentLevel === "CLASS D" ? 'btn-click' : 'btn-down'} onClick={() => setOppLevel('CLASS D')}>CLASS D</Button>
                    <Button type='submit' className= {opponentLevel === "CANDIDATE MASTER" ? 'btn-click' : 'btn-down'} onClick={() => setOppLevel('CANDIDATE MASTER')}>CANDIDATE MASTER</Button>
                    <Button type='submit' className= {opponentLevel === "GRAND MASTER" ? 'btn-click' : 'btn-down'} onClick={() => setOppLevel('GRAND MASTER')}>GRAND MASTER</Button>
                </div>
                
                <Row >
                    {Opponents.map(us => (
                    <Col md={3} key={us.id} className='mb-3' >
                        <BioOpponent us = {us}/>
                    </Col>
                    ))}
                    
                </Row>
            
            </div>

            <div className='footer-layout'>
                <Footer/>
            </div>
         </Container>
               
    </div>
        
    )
}

export default OpponentPage;