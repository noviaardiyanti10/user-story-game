import './Auth.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import users from '../assets/user.json'
import { Link, useNavigate } from 'react-router-dom';
import LogAuth from '../Authentication/auth';



const LoginForm = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const findUser = users.User.find(user => user.username === username)
        
       
        if(findUser === undefined){
            setMessage("Username not found! ")
        }else{
            if(findUser.username === username){
                if(findUser.password === password){
                    localStorage.setItem('logged in', "true")
                    localStorage.setItem('user', findUser.username)
                    localStorage.setItem('point', findUser.point)
                    localStorage.setItem('level', findUser.level)
                    navigate('/')
                }else{
                    setMessage("Password Wrong!")
                }   
            }else{
                setMessage("Username not found! ")
            }
        }
      
    }
    
   return( 
       <LogAuth>
           <div className='Login'>
                    <div className='d-flex justify-content-center align-items-center'>
                            <Form className='rounded pb-5' onSubmit={handleSubmit}>
                                <h3 className='text-center pt-5 fw-bold mb-0'>LOGIN</h3>
                                <p className='text-center mb-0 text-danger'>{message}</p>
                                
                                <Form.Group className="mb-3 mx-4 pt-5 fw-bold" controlId="formBasicUsername" >
                                    <Form.Control type="text"  minLength={3} maxLength={20} name='username' onChange={(e) => setUsername(e.target.value)}  placeholder="Insert your username" required/>
                                </Form.Group>

                                <Form.Group  className="mb-3 mx-4 fw-bold" controlId="formBasicPassword">
                                    <Form.Control type="password" minLength={6} name='password' onChange={(e) => setPassword(e.target.value)}  placeholder="Insert your password" required/>
                                </Form.Group>

                                <div className='d-flex justify-content-center'>
                                    <Button variant="warning" className='fw-bold text-white w-100 mx-4 p-2' type="submit">
                                        LOGIN
                                    </Button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Link to={'/register'} className='text-decoration-none'><p className='text-secondary text-center?'>Register</p></Link>
                                </div>
                                
                            </Form>
                        </div>
                </div>

       </LogAuth>

   )

}


export default LoginForm;