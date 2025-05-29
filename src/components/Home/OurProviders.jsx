import { Link } from "react-router"
import AdsStore from '/images/Home/AdsStore.png'
import Azza from '../../../public/images/Home/Azza.png'
import Telofill from '../../../public/images/Home/Telofill.png'
import Mala from '../../../public/images/Home/Mala.png'
import Heart from "../icons/Home/Heart";
const providers = [
    { id: 1, title: 'ADS Store', img: AdsStore, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 2, title: 'Azza Ice Cream', img: Azza, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 3, title: 'Telofill', img: Telofill, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
    { id: 4, title: 'Mala', img: Mala, description: 'Lorem ipsum dolor sit amet consectetur. Sagittis cursus dictum mattis condimentum risus.' },
];

const OurProviders = () => {
    return (
        <section className="mt-20">
            <div className="flex items-center justify-between">
                <h1 className="text-[#101010] md:text-[40px] text-2xl font-semibold">Our Providers</h1>
                <Link to='/providers' className="text-[#101010] text-2xl font-medium">See All</Link>
            </div>
            <Link to='/store'>
                <div className="flex flex-wrap items-center sm:justify-between justify-center mt-8">

                    {providers.map(({ id, title, img, description }) => (
                        <div key={id} className="flex flex-col mt-8 relative">
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
        </section>
    )
}

export default OurProviders
