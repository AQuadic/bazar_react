import ExploreArrow from '../icons/Home/ExploreArrow'
import HeroImg from '/images/Home/HeroImg.png'
const Slider = () => {
    return (
        <section>
            <div className="w-full md:h-[551px] bg-[#D8B772] rounded-2xl flex lg:flex-row flex-col items-center justify-between px-6">
                <div>
                    <h1 className='md:w-[588px] text-[#FEFEFE] md:text-5xl text-2xl font-semibold mt-4 lg:mt-0 leading-[150%]'>Because you are special , Welcome to Grand Bazaar. </h1>
                    <p className='md:w-[588px] text-[#FEFEFE] md:text-xl text-base font-medium mt-4'>Our bazaar is your one-stop destination for all your daily needs. From groceries, household items, and personal care products to clothing, electronics, and more – we’ve got everything under one roof. Whatever you&apos;re looking for, you&apos;ll find it here!</p>
                    <button className='md:w-[363px] md:h-14 p-3 md:p-0 bg-[#101010] rounded-2xl flex items-center justify-center mt-[31px]'>
                        <p className='text-[#FEFEFE] text-lg font-bold'>Explore Now</p>
                        <ExploreArrow />
                    </button>
                </div>
                <div>
                    <img src={HeroImg} alt="Hero image" />
                </div>
            </div>
        </section>
    )
}

export default Slider
