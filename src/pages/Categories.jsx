import { useState } from 'react';
import SkinCare from '/images/Home/SkinCare.png';
import Makeup from '/images/Home/Makeup.png';
import Accessories from '/images/Home/Accessories.png';
import Bags from '/images/Home/Bags.png';
import LeftArrow from '@/components/icons/categories/LeftArrow';
import RightArrow from '@/components/icons/categories/RightArrow';

const categories = [
    { id: 1, title: 'Skin Care', img: SkinCare },
    { id: 2, title: 'Make Up', img: Makeup },
    { id: 3, title: 'Accessories', img: Accessories },
    { id: 4, title: 'Bags', img: Bags },
    { id: 5, title: 'Skin Care', img: SkinCare },
    { id: 6, title: 'Make Up', img: Makeup },
    { id: 7, title: 'Accessories', img: Accessories },
    { id: 8, title: 'Bags', img: Bags },
];

const Categories = () => {
    const [activePage, setActivePage] = useState(1);

    const pages = [1, 2, 3, 4, 5];

    return (
        <section className="container mt-10">
            <h1 className="text-[#101010] md:text-[40px] text-2xl font-semibold">Our Categories</h1>

            <div className="flex flex-wrap items-center justify-center gap-10 mt-8">
                {categories.map(({ id, title, img }) => (
                    <div key={id}>
                        <img src={img} alt={title} className="w-[276px] h-[267px]" />
                        <h2 className="text-[#101010] text-xl font-medium text-center mt-6">{title}</h2>
                    </div>
                ))}
            </div>

            <div>
                <ul className="flex items-center justify-center mt-10 gap-3">
                    <li className='w-[46px] h-[46px] border border-[#C5C5C5] rounded-[8px] flex items-center justify-center cursor-pointer'>
                        <LeftArrow />
                    </li>
                    {pages.map((page) => (
                        <li
                            key={page}
                            className={`w-[46px] h-[46px] border border-[#C5C5C5] rounded-[8px] flex items-center justify-center cursor-pointer 
                            ${activePage === page ? 'bg-black text-white' : 'text-[#C5C5C5]'}`}
                            onClick={() => setActivePage(page)}
                        >
                            {page}
                        </li>
                    ))}
                    <li className='w-[46px] h-[46px] border border-[#C5C5C5] rounded-[8px] flex items-center justify-center cursor-pointer'>
                        <RightArrow />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Categories;
