/* eslint-disable eqeqeq */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import unknownAvatar from '../../Assets/Images/unknown.jpg';
import Loader from '../Loader/Loader';

const ProfileCard = ({ singleUser }) => {
    const { displayName, email, photoURL, role, number, address, institute } = singleUser;
    const navigate = useNavigate()

    if (!singleUser) {
        return <Loader></Loader>
    }
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="card profile-card mt-20 p-2">
                {
                    photoURL ? <img className='mx-auto p-4 m-5 rounded-full' src={photoURL} alt="John" style={{ width: "50%" }} /> 
                    : 
                    <img className='mx-auto p-4 m-5 rounded-full' src={unknownAvatar} alt="John" style={{ width: "50%" }} />
                }
                <h1 className='mx-auto mb-2'>Name: {displayName}</h1>
                <h1 className='mx-auto mb-2'>Email: {email}</h1>
                <h1 className='mx-auto mb-2'>Institute: {
                    institute ? institute : "N/A"
                }</h1>
                <h1 className='mx-auto mb-2'>Number: {
                    number ? number : "N/A"
                }</h1>
                <h1 className='mx-auto mb-2'>Address: {
                    address ? address : "N/A"
                }</h1>
                <p className="title mx-auto mb-2">Role: {
                    role == 'admin' ? 'Admin' : 'General User'
                }</p>
                <div className="title mx-auto mb-2">
                    <Link className='mx-2' to="#">
                        <i className="fa fa-dribbble" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-twitter" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-linkedin" />
                    </Link>
                    <Link className='mx-2' to="#">
                        <i className="fa fa-facebook" />
                    </Link>
                </div>
                <p>
                    <button className='mt-4' onClick={() => navigate(`/dashboard/my-profile/edit-profile`)}>Update Your Profile</button>
                </p>
            </div>
        </>
    );
};

export default ProfileCard;