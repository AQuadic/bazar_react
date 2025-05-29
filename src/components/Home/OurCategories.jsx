import { Link } from "react-router";
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
    return (
        <section className="mt-20">
            <div className="flex items-center justify-between">
                <h1 className="text-[#101010] md:text-[40px] text-2xl font-semibold">Our Categories</h1>
                <Link to='/categories' className="text-[#101010] text-2xl font-medium">See All</Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 mt-8">
                {categories.map(({ id, title, img }) => (
                    <div key={id}>
                        <img src={img} alt={title} className="w-[276px] h-[267px]" />
                        <h2 className="text-[#101010] text-xl font-medium text-center mt-6">{title}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurCategories;
