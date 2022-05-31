import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PurchaseForm from './PurchaseForm';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const { image, name, availableQuantity, price, details, minOrderQuantity} = tool;
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const [quantity, setQuantity] = useState(minOrderQuantity);
    const [user] = useAuthState(auth);
    const [userInputData, setuserInputData] = useState({});

    useEffect(() => {
        fetch(`https://intense-everglades-32006.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id, tool])

    //handle quantity change
    const handleQuantity = e => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        if (inputQuantity > availableQuantity) {
            toast.error('We dont have enough quantity');
        } else if (inputQuantity < minOrderQuantity) {
            toast.error(`Minimum order quantity is ${minOrderQuantity}`);
        } else {

            setQuantity(inputQuantity)

        }
        e.target.quantity.value = '';

    }

    //handle submit
    const handleSubmitParam = (data, e) => {

        const userName = user?.displayName;
        const userInput = {
            userName,
            email: user?.email,
            number: data?.number,
            address: data?.address,
            quantity: quantity,
            price: quantity * price,
            image,
            productName: name,
            details,
        }
        setuserInputData(userInput);

        //post quantity to database
        if (!quantity) {
            toast.error("Quantity field can't be empty.");
        } else {
            const newQuantity = parseInt(availableQuantity) - parseInt(quantity)
            const newQuantityObj = { newQuantity }
            fetch(`https://intense-everglades-32006.herokuapp.com/tools/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantityObj)
            })
                .then(res => res.json())
                .then(data => {

                    toast.success('Purchase Successful')
                    e.target.reset()
                })

            //post order to database
            fetch('https://intense-everglades-32006.herokuapp.com/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInput)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mb-20 py-16 mt-10">
            <div className='md:w-1/2 md:px-10'>
                <figure><img className='w-2/3' src={image} alt="Album" /></figure>
                <h2 className="card-title mx-64 pb-4">{name}</h2>
                <p className='p-4'>{details}</p>
                <p className='p-4'>Price: ${price}</p>
                <p className='p-4'> Stock: {availableQuantity}</p>
                <form className='p-4' onSubmit={handleQuantity}>
                    <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered input-secondary w-full max-w-xs"
                        required=""
                    />
                    <button type='submit' className=" text-white bg-gradient-to-r from-success to-success border-2 border-success hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-bold hover:font-bold px-5 py-[10px] rounded-md ml-2">Proceed</button>
                </form>
            </div>
            <div className="card-body">
                <PurchaseForm handleSubmitParam={handleSubmitParam} tool={tool} quantity={quantity}></PurchaseForm>

            </div>
        </div>
    );
};

export default Purchase;