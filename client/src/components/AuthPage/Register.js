import './Auth.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


const RegisForm = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const url = 'http://localhost:3001/user';

    const[data, setData] = useState({
        username: "", 
        password: "", 
        point: "",
        level: "",
        confirmPassword: ""
    });
    let [usernameErr, setUsernameErr] = useState("");
    let [passwordErr, setPasswordErr] = useState("");
    const navigate = useNavigate();
    const alphanumeric = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/i;
   

    const validation = () =>{
        const result = alphanumeric.test(data.username)
        console.log(result )

        if(!result && (data.password !== data.confirmPassword)){
            console.log(result)
            setUsernameErr('*Your username contain space or not start with alphabet');
            setPasswordErr('*Your password and confirmation doesnt match');
            return false
            
        }
        if(!result){
            console.log(result)
            setUsernameErr('*Your username contain space or not combination of alphabet and numaric');
            return false
            
        }
        if (data.password !== data.confirmPassword){
            setPasswordErr('*Your password and confirmation doesnt match');
            return false
        }
        return true;
    }

    function submit(e){
        e.preventDefault();
        if(validation()){
            Axios.post(url, {
                username: data.username,
                password: data.password, 
                point: 0, 
                level: 'NOVICE'
            })
            .then(res => {
                console.log(res.data)
            })
            navigate('/login')
        }
    }
    function handle(e){
        const newData ={...data};
        newData[e.target.id] = e.target.value;
        setData(newData)
        // console.log(newData)

    }

    return (
        <div className='Register'>
            <div className='d-flex justify-content-center align-items-center'>
                <Form className='rounded pb-5' onSubmit={(e) => submit(e)}>
                    <h3 className='text-center py-5 fw-bold'>REGISTER</h3>
                    
                    <Form.Group className="mb-3 mx-4 fw-bold" >
                        <Form.Control type="text"  minLength={3} maxLength={20} name='username' onChange={(e) => handle(e)} id='username' value={data.username} placeholder="Insert your username" required/>
                        <p className='text-secondary mb-0 fw-light'>{usernameErr}</p>
                    </Form.Group>

                    <Form.Group  className="mb-3 mx-4 fw-bold" >
                        <Form.Control type="password" minLength={6} name='password' onChange={(e) => handle(e)} id='password' value={data.password} placeholder="Insert your password" required/>
                    </Form.Group>

                    <Form.Group  className="mb-3 mx-4 fw-bold" >
                        <Form.Control type='password' placeholder="Confirm your password" name='confirmPassword' minLength={6} onChange={(e) => handle(e)} id='confirmPassword' value={data.confirmPassword} required/>
                        <p className='text-secondary mb-0 fw-light'>{passwordErr}</p>
                    </Form.Group>

                    <div className='d-flex justify-content-center'>
                        <Button variant="warning" className='fw-bold text-white mb-4 w-100 mx-4 p-2' type="submit">
                            REGISTER
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegisForm;