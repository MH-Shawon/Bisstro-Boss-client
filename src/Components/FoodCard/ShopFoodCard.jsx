import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

const ShopFoodCard = ({ item }) => {

  const { image, name, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        image,
        name,
        price,
      };
      axios.post("https://bistro-boss-server-wine-omega.vercel.app/carts", cartItem).then((res) => {

        if (res.data.insertedId) {
          toast.success(`${name} added to your cart`);
          refetch();
        }

      });

    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please! Login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please! Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
  };
  return (
    <div className="w-[320px] mx-auto mt-12 rounded-lg shadow-md bg-white overflow-hidden relative">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="px-6 py-4 text-center">
        <div className="font-semibold text-[#151515] text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{recipe}</p>
        <div className="flex items-center justify-center mt-4">
          <span className="absolute top-3 right-3 px-3 py-1 text-white font-bold bg-[#111827] rounded-md">
            ${price}
          </span>
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShopFoodCard;
