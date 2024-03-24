
import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');
    return (
        <section>
            <SectionTitle heading="from our menu"
                subHeading="Check it out" />
            <div className="grid md:grid-cols-2 gap-5 px-24 mb-5">
                {
                    popularItems.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link className="flex justify-center ">
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </Link>
        </section>
    )
}
export default PopularMenu;