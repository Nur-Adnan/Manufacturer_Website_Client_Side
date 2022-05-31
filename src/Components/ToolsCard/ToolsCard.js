import React from 'react';

const ToolsCard = ({ tool, handlePurchase }) => {
    const { image, name, availableQuantity, price, details, minOrderQuantity, _id } = tool;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className='pb-2' src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title mx-auto pb-2">Name: {name}</h2>
                <p className='text-sm text-gray-800'>{details}</p>
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <p className='text-lg font-semibold'>Stock: {availableQuantity}</p>
                <div className="card-actions justify-end mb-5">
                    <button onClick={() => handlePurchase(_id)} className="text-white bg-gradient-to-r from-success to-success border-0 border-success hover:border-2 hover:border-white hover:bg-gradient hover:from-success hover:to-success hover:text-dark transition-all transition-duration:150ms w-full font-bold hover:font-bold px-5 py-4 rounded-3xl">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;