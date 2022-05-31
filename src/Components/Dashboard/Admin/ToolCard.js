import { useNavigate } from 'react-router-dom';

const ToolCard = ({ o, index, sendEvent, refetch, setModal }) => {
    const { _id, image, name, price, minOrderQuantity
        , availableQuantity, details
    } = o
    const navigate = useNavigate()
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>{minOrderQuantity}</td>
            <td>
                <p title={details} className="text-sm opacity-50">{details.slice(0, 30)}...</p>
            </td>
            <td>
                <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-error text-white border-0 btn modal-button uppercase">Delete</label></td>
            <td> <button onClick={() => navigate(`/dashboard/tools/${_id}`)} className="text-white bg-green-600  font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2 uppercase">Update</button></td>
        </tr>
    );
};
export default ToolCard;