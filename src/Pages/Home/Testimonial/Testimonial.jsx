import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    return (
        <section >
            <SectionTitle
                heading="Testimonials"
                subHeading="What Our Client Say"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>



                        <div className=" flex flex-col items-center justify-center mx-24">
                            <Rating className="text-center"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <FaQuoteLeft className="text-6xl mt-8 mb-8" />


                            <p className=" mx-auto">{review.details}</p>
                            <p className="text-center text-[#CD9003] text-3xl font-medium mt-1">
                                {review.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default Testimonial;
