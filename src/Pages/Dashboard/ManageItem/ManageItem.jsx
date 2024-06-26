import Swal from "sweetalert2";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(
          `/menu/${item._id}`
        );

        console.log(res.data);
        
        if (res.data.deletedCount > 0) {
            refetch();
          toast.success(`${item.name} is successfully deleted from DB`);

        }
      }
    });
  };
  return (
    <div className="bg-[#F6F6F6]">
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="my cart"
      ></SectionTitle>
      <div className="bg-[#FFF] w-[800px] min-h-screen ml-[130px] static top-0">
        <div className="font-cinzel pl-8 pt-12 font-bold text-3xl text-[#151515]">
          <h4>TOTAL MENU:{menu.length}</h4>
        </div>

        <div className=" rounded-lg overflow-x-auto mt-9 w-[740px] mx-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] h-[72px] rounded-lg">
              <tr className="uppercase text-center text-white">
                <th></th>
                <th>item image</th>
                <th>item Name</th>
                <th>price</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {menu.map((item, index) => (
                <tr className="text-center" key={item._id}>
                  <th>{index + 1}</th>
                  <td className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
<Link to={`/dashboard/updateItem/${item._id}`}>
                              <button className="bg-[#D1A054] text-white text-xl px-3 py-1 rounded w-[40px] h-[40px]">
                                  <FiEdit />
                              </button>
</Link>

                    
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-[#B91C1C] text-white px-3 py-1 rounded text-xl w-[40px] h-[40px]"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ManageItem;
