const ShopFoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
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
                  <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
              </div>
          </div>
      </div>
  );
};
export default ShopFoodCard;
