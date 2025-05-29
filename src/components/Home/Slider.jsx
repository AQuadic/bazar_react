import ExploreArrow from '../icons/Home/ExploreArrow'
import HeroImg from '/images/Home/HeroImg.png'
const Slider = () => {
    return (
        <section>
            <div className="w-full md:h-[551px] h-[173px] bg-[#D8B772] rounded-2xl flex items-center justify-between px-6">
                <div>
                    <h1 className='md:w-[588px] text-[#FEFEFE] md:text-5xl text-base font-semibold lg:leading-[150%]'>Because you are special , <br /> Welcome to Grand Bazaar. </h1>
                    <p className='md:hidden w-[200px] text-[#FEFEFE] md:text-xl text-[10px] font-medium lg:mt-4'>
                        Our bazaar is your one-stop destination for all your daily needs. From groceries, household items, and personal care products to clothing.
                    </p>

                    <p className='md:block hidden w-[588px] text-[#FEFEFE] md:text-xl text-[10px] font-medium lg:mt-4'>
                        Our bazaar is your one-stop destination for all your daily needs. From groceries, household items, and personal care products to clothing, electronics, and more – we’ve got everything under one roof. Whatever you&apos;re looking for, you&apos;ll find it here!
                    </p>
                    <button className='md:w-[363px] w-[170px] md:h-14 h-[40px] p-3 md:p-0 bg-[#101010] rounded-2xl flex items-center justify-center lg:mt-[31px] mt-2'>
                        <p className='text-[#FEFEFE] text-lg font-bold'>Explore Now</p>
                        <ExploreArrow />
                    </button>
                </div>
                <div>
                    <img src={HeroImg} className='lg:w-[556px] w-[124px] lg:h-[486px] h-[171px]' alt="Hero image" />
                </div>
            </div>
        </section>
    )
}

export default Slider
