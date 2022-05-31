/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../../Loader/Loader';
import Modal from '../Modal';
import ManageTable from './ManageTable';
const ManageOrder = () => {
    const [modal, setModal] = useState({})
    const { data: allorders, isLoading, refetch } = useQuery('allorders', () => fetch(`https://intense-everglades-32006.herokuapp.com/orders`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }
    const orderDelete = (id) => {
        fetch(`https://intense-everglades-32006.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch()
                    setModal({})
                    toast.success('Order Delete Successfully')
                }
            })
    }
    return (
        <div className='px-14'>
            {allorders?.length ? 
                <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>Below is the {allorders?.length} {allorders?.length == 1 ? 'order' : 'orders'}
                :-</h1>:<h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>There is no Order</h1>}
                {
                    modal?._id && <Modal
                        modal={modal}
                        setModal={setModal}
                        sendEvent={orderDelete}
                    ></Modal>
                }
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gears Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th colSpan='5'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allorders?.map((o, index) => <ManageTable
                                key={o._id}
                                o={o}
                                index={index}
                                refetch={refetch}
                                sendEvent={orderDelete}
                                setModal={setModal}
                            ></ManageTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;