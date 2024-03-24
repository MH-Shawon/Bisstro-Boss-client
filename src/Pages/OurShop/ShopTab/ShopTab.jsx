import ShopFoodCard from "../../../Components/FoodCard/ShopFoodCard";

const ShopTab=({items})=>{
    return(
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {
                items.map(item=><ShopFoodCard key={item._id} item={item}></ShopFoodCard>)
            }
        </div>
    )}
export default ShopTab;