/* eslint-disable eqeqeq */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTool from '../../Hooks/useTool';

const UpdateTool = () => {
    const { id } = useParams()
    const { part } = useTool(id)
    const { register, handleSubmit,formState: { errors }} = useForm();
    const imageSotrageKey = `0ca5c9cdb23add3ecfaff014d8e4ad9c`

    const handleAddProduct = async (data, e) => {
        const image = data.image[0]
        const url = `https://api.imgbb.com/1/upload?key=${imageSotrageKey}`
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    console.log(img, 'img-url');
                    const tools = {
                        name: data.name,
                        price: data.price,
                        availableQuantity: data.availableQuantity,
                        minOrderQuantity: data.minOrderQuantity,
                        details: data.details,
                        image: img
                    }
                    //send data to db
                    fetch(`https://intense-everglades-32006.herokuapp.com/tools/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted, 'inser');
                            if (inserted.modifiedCount > 0) {
                                toast.success(`Tools Updated SuccessFully`);

                                e.target.reset()
                            }
                            else {
                                toast.error('Failed to add a tools')
                            }
                        })
                }
                console.log('imgbb', result);
            })
    }
    return (
        <>
            <h1 className='mt-10 text-4xl text-center text-success font-extrabold sp-style'>Update Your Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 m-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={part.image} alt="Shoes"/></figure>
                    <div className="card-body ">
                        <h2 className="card-title mx-auto pb-4">{part.name}</h2>
                        <p className="mx-auto">{part.details}</p>
                        <p className="mx-auto">Price: ${part.price}</p>
                        <p className="mx-auto">In Stock: {part.availableQuantity}</p>
                        <p className="mx-auto">In Minimum Order: {part.minOrderQuantity}</p>
                    </div>
                </div>
                <form className='m-5' onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {

                            })}
                        />
                        <label className="label">
                            {errors.name?.type == 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type == 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Available Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type == 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">MinOrder Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="MinOrder Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minOrderQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type == 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea
                            row={5} col={20}
                            type="number"
                            placeholder="Details"
                            className="input input-bordered w-full max-w-xs"
                            {...register("details", {
                                required: {
                                    value: true,
                                    message: 'Details is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type == 'required' && <span className="label-text-alt text-red-800">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type == 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <input className='btn w-full max-w-xs text-white bg-cyan-700' type="submit" value="Update" />
                </form>
            </div>
        </>

    );
};
export default UpdateTool;