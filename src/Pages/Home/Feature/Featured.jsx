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
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <Link to='/shop/salad'><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
                    
                </div>
                </div>
        </section>
    )}
export default Featured;