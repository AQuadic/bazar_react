import { Link } from "react-router";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import AdsStore from '/images/Home/AdsStore.png';
import Azza from '/images/Home/Azza.png';
import Telofill from '/images/Home/Telofill.png';
import Mala from '/images/Home/Mala.png';
import Heart from "../icons/Home/Heart";

const providers = [
    {
        id: 1,
        title: 'ADS Store',
        img: AdsStore,
        description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.'
    },
    {
        id: 2,
        title: 'Azza Ice Cream',
        img: Azza,
        description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.'
    },
    {
        id: 3,
        title: 'Telofill',
        img: Telofill,
        description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.'
    },
    {
        id: 4,
        title: 'Mala',
        img: Mala,
        description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.'
    },
];

const OurProviders = () => {
    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: "free",
        slides: {
            perView: 2,
            spacing: 20,
        },
        breakpoints: {
            "(min-width: 300px)": {
                slides: { perView: 1.3, spacing: 30 },
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
                <h1 className="text-[#101010] md:text-[40px] text-2xl font-semibold">Our Providers</h1>
                <Link to="/providers" className="text-[#101010] text-2xl font-medium">See All</Link>
            </div>

            <div ref={sliderRef} className="keen-slider mt-10">
                {providers.map(({ id, title, img, description }) => (
                    <div key={id} className="keen-slider__slide flex flex-col relative items-center">
                        <img src={img} alt={title} className="w-[100px] h-[100px]" />
                        <Link to='/signin' className="absolute top-2 right-2">
                            <Heart />
                        </Link>
                        <h2 className="text-[#101010] text-xl font-semibold text-center mt-14">{title}</h2>
                        <p className="w-[220px] text-[#101010] text-sm font-medium text-center mt-3 leading-[150%]">{description}</p>
                        <button className="w-[248px] h-14 bg-[#101010] rounded-2xl mt-8 text-[#FEFEFE] text-lg font-bold">Explore Us</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurProviders;
