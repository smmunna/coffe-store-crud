import React from 'react';
import LOGO1 from '../../assets/images/more/logo1.png'
import { FaFacebookF,FaTwitter,FaInstagramSquare,FaYoutube,FaBlenderPhone } from 'react-icons/fa';
import { BsEnvelopeAtFill,BsFillHouseAddFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='p-5'>
            <div>
                <div>
                    <img src={LOGO1} width={50} alt="" />
                </div>
                <h3>Espresso Emporium</h3>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='d-flex gap-3'>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaInstagramSquare/>
                    <FaYoutube/>
                </div>
                <h3>Get in Touch</h3>
                <p><FaBlenderPhone/> +8801611765966</p>
                <p><BsEnvelopeAtFill/> info@gmail.com</p>
                <p><BsFillHouseAddFill/> 72, Wall street, King Road, Dhaka</p>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Footer;
