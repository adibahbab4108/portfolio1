import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero'

const Main = () => {
    return (
        <div className="bg-gradient-to-r from-[#0a0214] via-[rgb(39,15,85)] via-80% to-[#0a0214]">
            <Navbar />
            <div className="container mx-auto">
                <Hero />
            </div>

        </div>
    );
};

export default Main;