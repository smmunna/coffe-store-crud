import React from 'react';
import Cover from './Cover/Cover';
import './Home.css'
import Features from './Features/Features';

const Home = () => {
    return (
        <>
            <div className='cover-bg'>
                <Cover />
            </div>

            <div style={{ backgroundColor: "#ECEAE3" }}>
                <Features />
            </div>

        </>

    );
}

export default Home;
