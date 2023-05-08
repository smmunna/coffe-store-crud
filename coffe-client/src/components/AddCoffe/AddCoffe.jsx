import React from 'react';
import './AddCoffe.css'
import Swal from 'sweetalert2'

const AddCoffe = () => {

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

        // sending the Data to the server;
        fetch('http://localhost:5000/coffe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product item hasbeen added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })
    }


    return (
        <div className='addCoffe py-3'>
            <div className='text-center mt-4 px-4'>
                <h3 className='display-4'>Add New Coffe</h3>
                <p className='fs-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <hr />
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmitProduct}>
                    <div className="d-lg-flex justify-content-center gap-5">
                        <div>
                            <label htmlFor="name" className="form-label fs-5">Name</label>
                            <input type="text" className='form-control' name='name' required /> <br />

                            <label htmlFor="supplier" className="form-label fs-5">Supplier</label>
                            <input type="text" className='form-control' name='supplier' required />
                            <br />
                            <label htmlFor="category" className="form-label fs-5">Category</label>
                            <input type="text" className='form-control' name='category' required />


                        </div>
                        <br />
                        <div>
                            <label htmlFor="name" className="form-label fs-5">Chef</label>
                            <input type="text" className='form-control' name='chef' required />
                            <br />
                            <label htmlFor="name" className="form-label fs-5">Taste</label>
                            <input type="text" className='form-control' name='taste' required />
                            <br />
                            <label htmlFor="details" className="form-label fs-5">Details</label>
                            <input type="text" className='form-control' name='details' required />
                        </div>
                    </div>
                    <br />
                    <label htmlFor="photo" className="form-label fs-5">Photo Url</label>
                    <input type="text" className='form-control myform-control' name='photourl' required />
                    <button type="submit" className='addbtn mt-4 fs-5'>Add Coffe</button>
                </form>
            </div>
        </div>
    );
}

export default AddCoffe;
