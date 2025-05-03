import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
       <div className='w-11/12 mx-auto flex justify-between p-8 items-center'>
       <div className=''></div>
       {/* Navlink */}
       <div className='flex gap-5 text-accent'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/About'}>About</NavLink>
        <NavLink to={'/Career'}>Career</NavLink>
       </div>
       {/* Login Section */}
       <div className='flex gap-5'>
       <img src='https://i.postimg.cc/wvHL15dN/user.png' alt="" />
        <button className='btn btn-primary px-10'>Login</button>
       </div>
       </div>
    );
};

export default Navbar;