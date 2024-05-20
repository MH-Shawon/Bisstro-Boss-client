import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured=()=>{
    
    return(
        <section className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle heading="our Featured"
                subHeading="Check it out" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    
                    <p className="uppercase">Where can i get some?</p>
                    <p>At Foody Moody, We Believe In Crafting Culinary Experiences That Tantalize The Senses And Nourish The Soul. Our Chef's Passion For Fresh, Locally Sourced Ingredients And Innovative Techniques Drives Every Dish. We're Committed To Fostering A Dining Atmosphere Where Guests Feel Welcomed, Valued, And Inspired With Each Bite.</p>
                    <Link to='/shop/salad'><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
                    
                </div>
                </div>
        </section>
    )}
export default Featured;