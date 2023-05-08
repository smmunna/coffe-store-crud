import React from 'react';
import { Col } from 'react-bootstrap';
import IMG1 from '../../../assets/images/1.png'
import VIEW from '../../../assets/images/icons/eye.png'
import DELETE from '../../../assets/images/icons/delete.png'
import EDIT from '../../../assets/images/icons/edit.png'

const Products = () => {
    return (
        <Col>
            <div className='d-flex justify-content-center align-items-center gap-3 mb-2' style={{ backgroundColor: "#ECEAE3", borderRadius: "20px" }}>
                <div>
                    <img src={IMG1} className='img-fluid' alt="" />
                </div>
                <div>
                    <p>Name:Munna</p>
                    <p>Chef:Munna</p>
                    <p>Price:890 Taka</p>
                </div>
                <div>
                    <p>
                        <img src={VIEW} width={20} alt="" />
                    </p>
                    <p>
                        <img src={EDIT} width={20} alt="" />
                    </p>
                    <p>
                        <img src={DELETE} width={20} alt="" />
                    </p>
                </div>
            </div>
        </Col>
    );
}

export default Products;
