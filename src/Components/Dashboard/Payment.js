import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51L4QrVEx4ruvmUStUz2i3GtYdizhGv2ss3H6A5lNet9DqjtZojWl67Bw7jetTmGtgSvorfiWsg05hjcS4uhEm5xq00ynP4ezCZ');
const Payment = () => {
    const { id } = useParams()
    const url = `https://intense-everglades-32006.herokuapp.com/payment/${id}`
    const { data: myOrder, isLoading } = useQuery(['myOrder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 p-20'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-52">
                <div className="card-body">
                    <p className="text-amber-700 font-bold text-4xl sp-style p-2">Hello, {myOrder.userName
                    }</p>
                    <h2 className="sp-style text-2xl p-2">
                        Please complete payment :- <span className="text-error"> {myOrder.productName}</span>
                    </h2>

                    <p className="text-xl sp-style font-bold p-2">First, please pay: ${myOrder.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <PaymentForm myOrder={myOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;