import { useForm } from "react-hook-form";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateItem = () => {
  const { _id, name, recipe, category, price } = useLoaderData();
    

    
    const axiosSecure=useAxiosSecure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    
      
        const updateItem = {
            name:data.name,
            category:data.category,
            price:data.price,
            recipe:data.recipe
        }
        const res = await axiosSecure.put(`/menu/${_id}`, updateItem)
        if(res.data.modifiedCount>0){
          reset()
          toast.success(`${name} has been updated successfully`)
        }

      

  };
  return (
    <div className=" mb-12">
      <h1 className="text-[40px] text-center mt-12 mb-16 uppercase">
        update item
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[740px] mx-auto  ">
        <div className="col-span-1 px-12 py-6 bg-[#F3F3F3] rounded shadow-md space-y-6">
          <h2>Recipe Name*</h2>
          <input
          defaultValue={name}
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
              defaultValue={category}
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
              defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1  w-full mt-2"
              />
              {errors.price && <span className="error">Price is required</span>}
            </div>
          </div>

          <h2>Recipe Details*</h2>
          <textarea
          defaultValue={recipe}
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1  mt-2 w-full h-[100px]"
          />
          {errors.recipeDetails && (
            <span className="error">Recipe Details are required</span>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="min-w-[300px] font-bold text-white text-[20px] bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-1"
            >
              Update items
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateItem;
