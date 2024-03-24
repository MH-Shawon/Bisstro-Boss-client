import { Helmet } from "react-helmet-async";
import menuBanner from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import CoverImg from "../Shared/CoverImg/CoverImg";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../hooks/useMenu";
const OurMenu=()=>{
    const [menu] = useMenu();
    
    const offered = menu.filter(item => item.category === 'offered');
 
    
    const desserts = menu.filter(item=>item.category ==='dessert')
    const pizza = menu.filter(item=>item.category ==='pizza')
    const salads = menu.filter(item=>item.category ==='salad')
    const soups = menu.filter(item=>item.category ==='soup')
    return(
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
             <CoverImg img={menuBanner} title = "Our Menu" />
             <SectionTitle heading="today's offer" subHeading="Don't miss"></SectionTitle>
             <MenuCategory items={offered}></MenuCategory>
             <MenuCategory items={desserts} img={dessertImg} title={"desserts"}></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
            <MenuCategory items={salads} img={saladImg} title={"salads"}></MenuCategory>
            <MenuCategory items={soups} img={soupImg} title={"soups"}></MenuCategory>
        </div>
    )}
export default OurMenu;