import Facebook from '../icons/footer/Facebook'
import Instagram from '../icons/footer/Instagram'
import Whatsapp from '../icons/footer/Whatsapp'
import RedHeart from '../icons/store/RedHeart'
import storeImg from '/images/store/StoreImg.png'
const StoreDetails = () => {
    return (
        <section className='flex lg:flex-row flex-col items-center lg:items-start justify-between'>
            <img src={storeImg} alt="Store Image" />
            <div className='mt-8 lg:mt-0'>
                <h2 className='text-[#101010] text-5xl font-semibold'>ADS Store</h2>
                <p className='xl:w-[600px] w-[500px] text-[#101010] text-sm font-medium mt-3'>Lorem ipsum dolor sit amet consectetur. Amet diam tortor purus enim quisque pellentesque convallis rhoncus eleifend. Mauris nunc amet porta dui ac habitant erat. Tristique lectus eget consectetur tincidunt velit et commodo risus tempor.</p>
                <p className='text-[#101010] text-xl font-semibold mt-10'>Follow Us</p>
                <div className='flex  items-center gap-3 mt-6'>
                    <Facebook />
                    <p className='text-[#000000] text-base font-medium'>https://www.instagram.com/grandbazaar_mayadaahisham/?hl=ar</p>
                </div>
                <div className='flex  items-center gap-3 mt-6'>
                    <Whatsapp />
                    <p className='text-[#000000] text-base font-medium'>https://www.instagram.com/grandbazaar_mayadaahisham/?hl=ar</p>
                </div>
                <div className='flex  items-center gap-3 mt-6'>
                    <Instagram />
                    <p className='text-[#000000] text-base font-medium'>https://www.instagram.com/grandbazaar_mayadaahisham/?hl=ar</p>
                </div>
            </div>
            <RedHeart />
        </section>
    )
}

export default StoreDetails
