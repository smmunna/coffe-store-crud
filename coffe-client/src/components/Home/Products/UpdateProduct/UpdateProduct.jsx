import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const navigate = useNavigate();

    const data = useLoaderData()

    const handleSubmitProduct = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photourl = form.photourl.value;

        const products = { name, supplier, category, chef, taste, details, photourl }

        fetch(`http://localhost:5000/coffe/edit/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product item hasbeen Updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                }
            })
    }

    return (
        <div>
            <div className='addCoffe py-3'>
                <div className='text-center mt-4 px-4'>
                    <h3 className='display-4'>Update the Coffe</h3>
                </div>
                <hr />
                <div className='d-flex justify-content-center'>
                    <form onSubmit={handleSubmitProduct}>
                        <div className="d-lg-flex justify-content-center gap-5">
                            <div>
                                <label htmlFor="name" className="form-label fs-5">Name</label>
                                <input type="text" className='form-control' defaultValue={data.name} name='name' required /> <br />

                                <label htmlFor="supplier" className="form-label fs-5">Supplier</label>
                                <input type="text" className='form-control' defaultValue={data.supplier} name='supplier' required />
                                <br />
                                <label htmlFor="category" className="form-label fs-5">Category</label>
                                <input type="text" className='form-control' defaultValue={data.category} name='category' required />


                            </div>
                            <br />
                            <div>
                                <label htmlFor="name" className="form-label fs-5">Chef</label>
                                <input type="text" className='form-control' defaultValue={data.chef} name='chef' required />
                                <br />
                                <label htmlFor="name" className="form-label fs-5">Taste</label>
                                <input type="text" className='form-control' defaultValue={data.taste} name='taste' required />
                                <br />
                                <label htmlFor="details" className="form-label fs-5">Details</label>
                                <input type="text" className='form-control' defaultValue={data.details} name='details' required />
                            </div>
                        </div>
                        <br />
                        <label htmlFor="photo" className="form-label fs-5">Photo Url</label>
                        <input type="text" className='form-control myform-control' defaultValue={data.photourl} name='photourl' required />
                        <button type="submit" className='addbtn mt-4 fs-5'>Add Coffe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
