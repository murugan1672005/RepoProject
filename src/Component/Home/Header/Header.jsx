import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Header = ({setLogin}) => {
  const navigate = useNavigate();
  const LogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  }
  return (
      <header>
      <h1 onClick={()=>navigate('/home')}>Jackson Academy</h1>
      <ul>
        <li> <Button className='btn' >  <Link  className='link' to="/home">Home</Link>  </Button> </li>
        <li> <Button className='btn'><Link   className='link' to="/about">About us</Link> </Button>  </li>
        <li> <Button className='btn'><Link  className='link' to="/contact">Contact</Link></Button></li>
        <li> <Button className='btn'><Link className='link' to="/courses">Courses</Link></Button></li>
        <li><Button className='btn'><Link className='link' to ="/profile" >Profile</Link></Button></li>
        <li><Button className='btn' onClick={LogOut}><Link className='link' to ="/profile" >Logout</Link></Button></li>
            </ul>
    </header>
  )
}

export default Header
