import { Link } from "react-router";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SkinCare from '/images/Home/SkinCare.png';
import Makeup from '/images/Home/Makeup.png';
import Accessories from '/images/Home/Accessories.png';
import Bags from '/images/Home/Bags.png';

const categories = [
    { id: 1, title: 'Skin Care', img: SkinCare },
    { id: 2, title: 'Make Up', img: Makeup },
    { id: 3, title: 'Accessories', img: Accessories },
    { id: 4, title: 'Bags', img: Bags },
];

const OurCategories = () => {
    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: "free",
        slides: {
            perView: 2,
            spacing: 20,
        },
        breakpoints: {
            "(min-width: 300px)": {
                slides: { perView: 4, spacing: 30 },
            },
            "(min-width: 768px)": {
                slides: { perView: 3, spacing: 30 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 40 },
            },
        },
    });
    return (
        <section className="mt-20">
            <div className="flex items-center justify-between">
                <h1 className="text-[#101010] md:text-[40px] text-2xl font-semibold">Our Categories</h1>
                <Link to="/categories" className="text-[#101010] text-2xl font-medium">See All</Link>
            </div>

            <div ref={sliderRef} className="keen-slider mt-8">
                {categories.map(({ id, title, img }) => (
                    <div key={id} className="keen-slider__slide">
                        <img src={img} alt={title} className="md:w-[276px] w-[74px] md:h-[267px] h-[74px]" />
                        <h2 className="text-[#101010] md:text-xl text-base font-medium text-center md:mt-6 mt-2">{title}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurCategories;
