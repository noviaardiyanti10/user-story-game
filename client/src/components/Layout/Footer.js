import './Footer.css';
import { Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className='d-flex justify-content-center '>
                <ul className=' d-flex d-inline'>
                    <li className='px-3'>
                        <Link to={''} className='text-decoration-none'>MAIN</Link>
                     </li>
                     <li className='px-3'>
                     <Link to={''} className='text-decoration-none'>ABOUT</Link>
                        
                     </li>
                      <li className='px-3'>
                      <Link to={''} className='text-decoration-none'>GAME FEATURES</Link>
        
                    </li>
                    <li className='px-3'>
                    <Link to={''} className='text-decoration-none'>SYSTEM REQUIREMENTS</Link>
                    </li >
                    <li className='px-3'>
                    <Link to={''} className='text-decoration-none'>QUOTES</Link>
            
                    </li>
                </ul>
            </div>
            
            <hr/>
           
            <div className='d-flex'>
                <div className='p1'>
                    <p> © 2018 Your Games, Inc. All Rights Reserved</p>
                </div>
                <div className='p2'>
                    <p className="text-white p2 "> PRIVACY POLICY | TERMS OF SERVICES | CODE OF CONDUCT </p>

                </div>

            </div>
        </div>
        
        
    )
}

export default Footer;