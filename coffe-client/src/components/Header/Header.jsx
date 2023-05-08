import React from 'react';
import { Nav } from 'react-bootstrap'
import Logo1 from '../../assets/images/more/logo1.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <Nav className="justify-content-center header py-1">
                <div className='d-flex align-items-center gap-3'>
                    <img src={Logo1} className='img-fluid' width={30} alt="Logos" />
                    <span className='h4 mt-3'>Espresso Emperium</span>
                </div>
            </Nav>
        </>
    );
}

export default Header;
