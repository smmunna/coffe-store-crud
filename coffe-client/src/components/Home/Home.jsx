import React from 'react';
import Cover from './Cover/Cover';
import './Home.css'
import Features from './Features/Features';
import { Row } from 'react-bootstrap';
import Products from './Products/Products';
import CoofeImg from '../../assets/images/icons/1.png'

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
            <div className='text-center my-4'>
                <h3 className='display-5'>Our Popular Products </h3>
                <button className='text-center'>Add Coffe <img src={CoofeImg} width={20} alt="" /></button>
            </div>
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
