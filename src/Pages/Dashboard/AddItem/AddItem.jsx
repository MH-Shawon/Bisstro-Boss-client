import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const img_hosting_api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;

const img_hosting_api_link = `https://api.imgbb.com/1/upload?key=${img_hosting_api_key}`;

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_hosting_api_link, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        toast.success(`${data.name} added to the menu`)

      }
    }
  };
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading="what's new?"
        heading="ADD AN ITEM"
      ></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[740px] mx-auto  "
      >
        <div className="col-span-1 px-12 py-6 bg-[#F3F3F3] rounded shadow-md space-y-6">
          <h2>Recipe Name*</h2>
          <input
            placeholder="Recipe name"
            {...register("name", { required: true })}
            className="border border-gray-300 rounded-md px-2 py-1  focus:outline-none focus:ring-1 mt-2 w-full"
          />
          {errors.recipeName && (
            <span className="error">Recipe Name is required</span>
          )}

          <div className="flex w-full gap-6">
            <div className="w-1/2">
              <h2>Category*</h2>
              <select
                {...register("category", { required: true })}
                className="border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 w-full mt-2"
              >
                <option value="">Select Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soups">Soups</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
                <option value="popular">Popular</option>
              </select>
              {errors.category && (
                <span className="error">Category is required</span>
              )}
            </div>

            <div className="w-1/2">
              <h2>Price*</h2>
              <input
                placeholder="Price"
                {...register("price", { required: true })}
                className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1  w-full mt-2"
              />
              {errors.price && <span className="error">Price is required</span>}
            </div>
          </div>

          <h2>Recipe Details*</h2>
          <textarea
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1  mt-2 w-full h-[100px]"
          />
          {errors.recipeDetails && (
            <span className="error">Recipe Details are required</span>
          )}

          <input
            type="file"
            {...register("image", { required: true })}
            className="block w-full p-3 text-base font-normal text-gray-700 bg-white bg-clip-border border-gray-300 rounded transition ease-in-out focus:outline-none file:mr-4 file:py-2 file:px-3 file:rounded-full file:bg-blue-500 file:text-white  cursor-pointer"
          />

          <button
            type="submit"
            className="flex gap-1 font-bold text-white items-center justify-center text-[20px] bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-1"
          >
            Add Item <FaUtensils></FaUtensils>
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddItem;
