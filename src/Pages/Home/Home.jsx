import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category/Category";
import Featured from "./Feature/Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home=()=>{
    return(
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
             <Banner />
             <Category />
             <PopularMenu />
             <Featured />
             <Testimonial />
        </div>
    )}
export default Home;