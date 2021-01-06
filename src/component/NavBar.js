import React from 'react'
import './NavBar.scss';
import cuhublogo from '../res/cuhublogo.png'
function Navbar() {
    return (
        <div className='nav-bar'>
            <nav >
                <ul>
                    <li>
                        <img width='200px' src={cuhublogo} />
                    </li>
                    <li>
                        <a href='/event/?eventid=0001&type=checkin'>Home</a>
                    </li>
                    <li>
                        <a href='/event/?eventid=0001&type=register'>register</a>
                    </li>
                    <li>
                        <a href='/event/?eventid=0001&type=failed&num=0865500108'>failed1</a>
                    </li>
                    <li>
                        <a href='/event/?eventid=0001&type=failed&num=0865500109'>failed2</a>
                    </li>
                    <li>
                        <a href='/event/?eventid=0001&type=success&num=0865500107'>success</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar