/* eslint-disable eqeqeq */
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';
import ProfileCard from './ProfileCard';

const MyProfile = () => {
    const [signedUser, loading] = useAuthState(auth);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    if (loading) {
        return <Loader></Loader>
    }
    const getItems = async () => {
        const email = signedUser?.email
        const url = `https://intense-everglades-32006.herokuapp.com/user/${email}`
        try {
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setUser(data)

        } catch (error) {
            if (error.response.status == 403 || error.response.status == 401) {
                signOut(auth)
                navigate('/login')
            }
        }
    }
    getItems()
    return (
        <div className='mt-10 md:mt-0'>
            {
                user?.map(singleUser => <ProfileCard singleUser={singleUser} key={singleUser._id}></ProfileCard>)
            }
        </div>
    );
};

export default MyProfile;