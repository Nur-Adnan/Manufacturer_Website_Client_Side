/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../../Loader/Loader';
import Modal from '../Modal';
import ToolCard from './ToolCard';

const ManageTools = () => {
    const [modal, setModal] = useState({})
    const { data: allParts, isLoading, refetch } = useQuery('allParts', () => fetch(`https://intense-everglades-32006.herokuapp.com/tools`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }
    const partsDelete = (id) => {
        fetch(`https://intense-everglades-32006.herokuapp.com/tools/${id}`, {
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
                    toast.success('Product deletion was successful')
                }
            })
    }
    return (
        <div>
            {allParts?.length ? <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>Below is the {allParts?.length} {allParts?.length == 1 ? 'Tool' : 'Tools'}:-</h1> : <h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>There is no Tools.Add Some Tools</h1>}
            {
                modal?._id && <Modal
                    modal={modal}
                    setModal={setModal}
                    sendEvent={partsDelete}
                ></Modal>
            }
            <div className=" mt-10 mb-10">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th className='p-3'>No.</th>
                            <th className='p-3'>Image</th>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>price</th>
                            <th className='p-3'>Stock</th>
                            <th className='p-3'>Minimum-Order</th>
                            <th className='p-3'>Details</th>
                            <th colSpan='2'>Manage Gears</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allParts?.map((o, index) => <ToolCard
                                key={o._id}
                                o={o}
                                index={index}
                                refetch={refetch}
                                sendEvent={partsDelete}
                                setModal={setModal}
                            ></ToolCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTools;