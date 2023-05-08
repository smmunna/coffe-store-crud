import React from 'react';
import './AddCoffe.css'

const AddCoffe = () => {
    return (
        <div className='addCoffe py-3'>
            <div className='text-center mt-4 px-4'>
                <h3 className='display-4'>Add New Coffe</h3>
                <p className='fs-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <hr />
            <div className='d-flex justify-content-center'>
                <form>
                    <div className="d-lg-flex justify-content-center gap-5">
                        <div>
                            <label htmlFor="name" class="form-label fs-5">Name</label>
                            <input type="text" className='form-control' name='name' required /> <br />

                            <label htmlFor="supplier" class="form-label fs-5">Supplier</label>
                            <input type="text" className='form-control' name='supplier' required />
                            <br />
                            <label htmlFor="category" class="form-label fs-5">Category</label>
                            <input type="text" className='form-control' name='category' required />


                        </div>
                        <br />
                        <div>
                            <label htmlFor="name" class="form-label fs-5">Chef</label>
                            <input type="text" className='form-control' name='chef' required />
                            <br />
                            <label htmlFor="name" class="form-label fs-5">Taste</label>
                            <input type="text" className='form-control' name='taste' required />
                            <br />
                            <label htmlFor="details" class="form-label fs-5">Details</label>
                            <input type="text" className='form-control' name='details' required />
                        </div>
                    </div>
                    <br />
                    <label htmlFor="photo" class="form-label fs-5">Photo Url</label>
                    <input type="text" className='form-control myform-control' name='photo' required />
                    <button type="submit" className='addbtn mt-4 fs-5'>Add Coffe</button>
                </form>
            </div>
        </div>
    );
}

export default AddCoffe;
