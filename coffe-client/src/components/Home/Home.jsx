import React from 'react';
import Cover from './Cover/Cover';
import './Home.css'
import Features from './Features/Features';
import { Row } from 'react-bootstrap';
import Products from './Products/Products';

const Home = () => {
    return (
        <>
            <div className='cover-bg'>
                <Cover />
            </div>

            <div style={{ backgroundColor: "#ECEAE3" }}>
                <Features />
            </div>

            {/* Items list with Mapping; */}
           <div className='container mt-5'>
           <Row xs={1} md={2} className="">
                <Products/>
                <Products/>
                <Products/>
                <Products/>
            </Row>
           </div>

        </>

    );
}

export default Home;
