import { useState } from 'react';
import AdsStore from '/images/Home/AdsStore.png'
import Azza from '/images/Home/Azza.png'
import Telofill from '/images/Home/Telofill.png'
import Mala from '/images/Home/Mala.png'
import LeftArrow from '@/components/icons/categories/LeftArrow';
import RightArrow from '@/components/icons/categories/RightArrow';
import Heart from '@/components/icons/Home/Heart';
import { Link } from 'react-router';

const providers = [
    { id: 1, title: 'ADS Store', img: AdsStore, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 2, title: 'Azza Ice Cream', img: Azza, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 3, title: 'Telofill', img: Telofill, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 4, title: 'Mala', img: Mala, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 5, title: 'ADS Store', img: AdsStore, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 6, title: 'Azza Ice Cream', img: Azza, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 7, title: 'Telofill', img: Telofill, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 8, title: 'Mala', img: Mala, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
];
const Providers = () => {
    const [activePage, setActivePage] = useState(1);

    const pages = [1, 2, 3, 4, 5];

    return (
        <section className="container mt-10">
            <h1 className="text-[#101010] md:text-[40px] text-2xl font-semibold">Our Providers</h1>
            <Link to='/store'>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center sm:justify-between justify-center gap-2 mt-8">
                    {providers.map(({ id, title, img, description }) => (
                        <div key={id} className="flex flex-col mt-8 relative mx-auto">
                            <img src={img} alt={title} className="w-[100px] h-[100px] mx-auto" />
                            <div className="absolute top-24 right-0">
                                <Heart />
                            </div>
                            <h2 className="text-[#101010] text-xl font-semibold text-center mt-14">{title}</h2>
                            <p className="w-[220px] text-[#101010] text-sm font-medium text-center mt-3 leading-[150%]">{description}</p>
                            <div>
                                <button className="w-[248px] h-14 bg-[#101010] rounded-2xl mt-8 text-[#FEFEFE] text-lg font-bold">Explore Us</button>
                            </div>
                        </div>
                    ))}
                </div>
            </Link>

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

export default Providers;
