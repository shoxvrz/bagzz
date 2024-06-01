import React from 'react'
import './Navbar.scss'
import filterIcon from '../../assets/Group 36.svg'
import profileIcon from '../../assets/profile-icon-design-free-vector.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__left">
                <img src={filterIcon} alt="" className="filterIcon" />
                <h1>bagzz</h1>
        </div>
        <div className="navbar__right">
            <img src={profileIcon} alt="" className='profileIcon' />
        </div>
    </div>
  )
}

export default Navbar