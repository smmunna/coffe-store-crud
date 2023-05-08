import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OneProduct = () => {
    const data = useLoaderData();
    return (
        <div>
            <h3 className='text-center py-4'>Product Details</h3>
            <hr />
            <div className='text-center'>
                <p>Name: <span className='fs-4 fw-semibold'>{data.name}</span></p>
                <p>Category: <span className='fs-4 fw-semibold'>{data.category}</span></p>
                <p>Taste: <span className='fs-4 fw-semibold'>{data.taste}</span></p>
                <div>
                    <img src={data.photourl} alt="" />
                </div>
            </div>

        </div>
    );
}

export default OneProduct;
