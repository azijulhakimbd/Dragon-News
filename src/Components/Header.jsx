import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div>
             <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[360px]' src="https://i.postimg.cc/2Sb6r1gf/logo.png" alt="Dragon News" />
            <p className='text-accent'>Journalism without Fear and Favour</p>
            
            <p> 
           {format(new Date(), "EEEE,MMMM MM, yyyy")}
            </p>

        </div>
        </div>
    );
};

export default Header;