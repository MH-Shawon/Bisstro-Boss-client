import { RiDeleteBin5Fill, RiDeleteBin5Line } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(1)
    return (
        <div className="bg-[#F6F6F6]">
            <SectionTitle
                heading="WANNA ADD MORE?"
                subHeading="my cart"
            ></SectionTitle>
            <div className="bg-[#FFF] w-[800px] h-[973px] ml-[130px]">
                <div className="font-cinzel flex justify-around pt-12 font-bold text-3xl text-[#151515]">
                    <h4>TOTAL ORDERS:{cart.length}</h4>
                    <h4>TOTAL price:${totalPrice}</h4>
                    <button className="bg-[#D1A054] text-[20px] rounded-lg text-white pb-1 px-4">pay</button>
                </div>

                <div className=" rounded-lg overflow-x-auto mt-9 w-[740px] mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] h-[72px] rounded-lg">
                            <tr className="uppercase text-white">
                                <th></th>
                                <th>item image</th>
                                <th>item Name</th>
                                <th>price</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((item, index) => (<tr key={item._id}>
                                    <th>{index+1}</th>
                                    <td><img src={item.image} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td className="text-center"><button className="bg-[#B91C1C] text-white px-3 py-1 rounded w-[40px] h-[40px]"><RiDeleteBin5Line /></button></td>
                                </tr>))
                            }
                            
                            
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
            
        </div>
    );
};

export default Cart;