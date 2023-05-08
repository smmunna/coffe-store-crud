import React from 'react';
import { Col } from 'react-bootstrap';
import IMG1 from '../../../assets/images/1.png'
import VIEW from '../../../assets/images/icons/eye.png'
import DELETE from '../../../assets/images/icons/delete.png'
import EDIT from '../../../assets/images/icons/edit.png'
import { Link } from 'react-router-dom';

const Products = ({ product, handleDelete }) => {
    const { _id, name, chef, taste, photourl } = product;
    // deleting the Image;


    return (
        <Col>
            <div className='d-flex justify-content-center align-items-center gap-4 mb-2' style={{ backgroundColor: "antiquewhite", borderRadius: "20px" }}>
                <div>
                    <img src={photourl} className='img-fluid' alt="" />
                </div>
                <div>
                    <p>Name:<span className='fw-bold'> {name}</span></p>
                    <p>Chef:<span className='fw-bold'> {chef}</span></p>
                    <p>Taste:<span className='fw-bold'> {taste}</span></p>
                </div>
                <div>
                    <Link to={`/addcoffe/${_id}`}>
                        <p>
                            <img src={VIEW} width={20} alt="" />
                        </p>
                    </Link>
                    <Link to={`/addcoffe/edit/${_id}`}>
                        <p>
                            <img src={EDIT} width={20} alt="" />
                        </p>
                    </Link>

                    <p onClick={() => handleDelete(_id)}>
                        <img src={DELETE} width={20} alt="" />
                    </p>
                </div>
            </div>
        </Col>
    );
}

export default Products;
