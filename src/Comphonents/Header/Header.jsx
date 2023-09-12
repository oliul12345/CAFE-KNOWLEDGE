import profile from '../images/profile.png'
import React from 'react';
const Header = () => {
    return (
        <div className='flex justify-between  items-center  max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;