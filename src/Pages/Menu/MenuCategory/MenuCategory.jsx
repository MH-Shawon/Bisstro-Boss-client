import { Link } from "react-router-dom";
import CoverImg from "../../Shared/CoverImg/CoverImg";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title,img }) => {
  return (
      <div className='pt-8'>
          {title && <CoverImg title={title} img={img}></CoverImg>}
      <div className="grid md:grid-cols-2 gap-10 mt-16 mb-5 px-24">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
          <Link to={`/shop/${title}`} className="flex justify-center ">
              <button className="btn btn-outline border-0 border-b-4 mb-12 mt-4">Order Your Favourite Food</button>
          </Link>

    </div>
  );
};
export default MenuCategory;
