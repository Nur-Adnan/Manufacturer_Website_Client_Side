import { faBan, faCheck, faShippingFast, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ManageTable = ({ o, index, refetch, sendEvent, setModal }) => {
    const { _id, isDeliverd, transactionId, paid, image, productName, userName, email, number, price, quantity, address } = o
    const [user] = useAuthState(auth);
    const makeShip = () => {
        fetch(`https://intense-everglades-32006.herokuapp.com/ship/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ isDeliverd: true })
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('In Transit to Deliver')
                }
                else {
                    toast.error(`Unable to Ship`)
                }
            })

    }
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{address}</td>
            <td>{number}</td>
            <td>{
                transactionId ? <span className='text-amber-700 font-bold'>{transactionId}</span>
                    :
                    <span className='text-xl sp-style text-red-700'>Not yet able to receive the Money</span>
            }</td>
            {
                paid ? <>
                    <td>
                        <p className='text-xl font-bold text-green-700 sp-style'>Money Received
                            <FontAwesomeIcon className='pl-2' icon={faCheck}></FontAwesomeIcon>
                        </p>
                    </td>
                    <td>
                        {
                            isDeliverd ? <p className='text-xl font-bold text-blue-700 sp-style'>Completed Shipping
                                <FontAwesomeIcon className='pl-2' icon={faCheck}></FontAwesomeIcon>
                            </p> : <button onClick={makeShip} className="text-white bg-success  font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Ship
                                <FontAwesomeIcon className='pl-2' icon={faShippingFast}></FontAwesomeIcon>
                            </button>
                        }
                    </td>
                </>
                    :
                    <>
                        <td>
                            <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-primary btn modal-button">Delete
                                <FontAwesomeIcon className='pl-2' icon={faTrashRestoreAlt}></FontAwesomeIcon>
                            </label></td>
                        <td>
                            <p className='text-xl font-bold text-red-700 sp-style'>Not Paid Yet
                                <FontAwesomeIcon className='pl-2' icon={faBan}></FontAwesomeIcon>
                            </p>
                        </td>

                    </>
            }

        </tr>
    );
};

export default ManageTable;