import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <ul style={{ display: 'flex' }}>
                <li className='link' style={{ marginRight: '15px' }}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='link' style={{ marginRight: '15px' }}>
                    <NavLink to='/about'>About</NavLink>

                </li>
                <li className='link' style={{ marginRight: '15px' }}>
                    <NavLink to='/contact'>Contact</NavLink>

                </li>
                <li className='link' style={{ marginRight: '15px' }}>
                    <NavLink to="/blog">blog</NavLink>
                </li>
                <li className='link' style={{ marginRight: '15px' }}>
                    <NavLink to='/list'>List</NavLink>

                </li>
            </ul>
        </div>
    )
}

export default Navbar