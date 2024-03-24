import { Helmet } from "react-helmet-async";
import menuBanner from '../../assets/menu/banner3.jpg'
import CoverImg from "../Shared/CoverImg/CoverImg";
const OurMenu=()=>{
    return(
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
             <CoverImg img={menuBanner} title = "Our Menu" />
        </div>
    )}
export default OurMenu;