import React, { useState } from 'react';
import Cover from './Cover/Cover';
import './Home.css'
import Features from './Features/Features';
import { Row } from 'react-bootstrap';
import Products from './Products/Products';
import CoofeImg from '../../assets/images/icons/1.png'
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Home = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState(data)

    // Deleting the Products;
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your Product has been deleted.',
                            'success'
                        )

                        // DELETE OPERATION WILL DONE HERE;
                        fetch(`http://localhost:5000/coffe/${id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    const newProducts = products.filter(p => p._id !== id)
                                    setProducts(newProducts)
                                }
                            })

                    }
                })

            }
        })
    }

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
                    <Link to="/addcoffe"><button className='text-center'>Add Coffe <img src={CoofeImg} width={20} alt="" /></button></Link>
                </div>
                <Row xs={1} md={2} className="">
                    {products.length < 0 ? <p>No data hasbeen</p> :
                        products.map(product => <Products
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                        />)
                    }
                </Row>
            </div>

        </>

    );
}

export default Home;
