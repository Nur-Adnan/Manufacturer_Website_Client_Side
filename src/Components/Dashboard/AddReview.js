import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import StarRating from './Review/StarRating';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [customRating, setCustomRating] = React.useState(0);
    const { register, handleSubmit, reset } = useForm();

    const onSubmitReview = data => {
        const userReview = {
            customRating,
            review: data.review,
            user
        }
        fetch('https://intense-everglades-32006.herokuapp.com/reviews/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(res => {
                toast.success('Thanks for your feedback')
                reset()
            });
    }
    
    return (
        <div className='text-center mt-10 md:mt-0'>
            <h1 className='mb-4'>Please Provide Feedback.</h1>
            <StarRating setCustomRating={setCustomRating}></StarRating>
            <form onSubmit={handleSubmit(onSubmitReview)}>
                <textarea className="textarea textarea-bordered w-4/5 md:w-1/2" placeholder="Your Review"
                    {...register("review", { required: true })}
                ></textarea>
                <div className='text-center'>
                    <input type="submit" className='btn btn-outline btn-primary mx-auto w-32 mt-4' />
                </div>
            </form>
        </div>
    );
};
export default AddReview;