import React from 'react';
import LOGO1 from '../../assets/images/more/logo1.png'
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaYoutube, FaBlenderPhone } from 'react-icons/fa';
import { BsEnvelopeAtFill, BsFillHouseAddFill } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
    return (
        <div className=' footer-part pb-3'>
            <div className='fs-5 footer-left'>
                <div>
                    <img src={LOGO1} width={50} alt="" />
                </div>
                <h3 className='my-2'>Espresso Emporium</h3>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='d-flex gap-3 my-2'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagramSquare />
                    <FaYoutube />
                </div>
                <hr />
                <h3>Get in Touch</h3>
                <div className='mt-1'><FaBlenderPhone /> +8801611765966</div>
                <div className='mt-1'><BsEnvelopeAtFill /> info@gmail.com</div>
                <div className='mt-1'><BsFillHouseAddFill /> 72, Wall street, King Road, Dhaka</div>

                <div className='mt-5'>
                    <div>Espresso Emporium, Copyright 2023 &copy;</div>
                    <div>Designed & Developed by Munna</div>
                </div>
            </div>
            <div>
                <div className='footer-right'>
                    <h3>Contact with us</h3>
                    <label htmlFor="name" class="form-label fs-5">Name</label>
                    <input type="text" className='form-control foot-formcontrol' name='name' required /> <br />

                    <label htmlFor="supplier" class="form-label fs-5">Email</label>
                    <input type="text" className='form-control foot-formcontrol' name='supplier' required />
                    <br />
                    <label htmlFor="supplier" class="form-label fs-5">Message</label>
                    <input type="text" className='form-control foot-formcontrol foot-sms-box' name='supplier' required />
                    <br />
                    <button className='btn btn-primary w-50'>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
