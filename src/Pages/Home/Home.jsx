import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header';
import LeftAside from '../../Components/HomeLayout/LeftAside';
import RightAside from '../../Components/HomeLayout/RightAside';

const Home = () => {
    return (
        <div>
            {/* Header Section */}
           <header>
            <Header></Header>
           </header>
         
           {/* Main Section */}
           <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
            <aside className='col-span-3'>
                <LeftAside></LeftAside>
            </aside>
            <section className="nav_main col-span-6">
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
           </main>
          
        </div>
    );
};

export default Home;