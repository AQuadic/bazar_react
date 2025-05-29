import { Link } from 'react-router'
import footerLogo from '/images/footer/FooterLogo.png'
import Location from '../icons/footer/Location'
import Email from '../icons/footer/Email'
import Phone from '../icons/footer/Phone'

const Footer = () => {
    return (
        <footer className="w-full h-[540px] bg-[#FDFCF9] mt-20 py-12">
            <section className="container flex flex-wrap justify-between">
                <div>
                    <img src={footerLogo} alt="Logo" />
                    <p className='md:w-[379px] text-[#5D5D5D] text-base font-medium mt-4'>Lorem ipsum dolor sit amet consectetur. Amet laoreet faucibus at blandit tincidunt enim in tincidunt. Arcu neque in eu viverra elit risus.</p>
                    <h2 className='text-[#121212] text-2xl font-medium mt-8'>Keep in touch with us </h2>
                    <div className='mt-6 flex flex-col'>
                        <label htmlFor="email" className='text-[#121212] text-xl font-medium'>Email</label>
                        <div className="relative mt-3 md:w-[379px]">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className='w-full h-14 md:pr-[120px] border border-[#101010] rounded-2xl px-2 focus:outline-none'
                                placeholder='Enter your email'
                            />
                            <button
                                className='absolute right-0 top-1/2 transform -translate-y-1/2 w-[113.46px] h-14 bg-[#101010] rounded-2xl text-[#FEFEFE] cursor-pointer'
                                type="button"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 mt-4 md:mt-0'>
                    <h2 className='text-[#101010] text-2xl font-bold'>Links</h2>
                    <Link to='/' className='text-[#121212] text-xl font-medium'>Home</Link>
                    <Link to='/' className='text-[#121212] text-xl font-medium'>Categories</Link>
                    <Link to='/' className='text-[#121212] text-xl font-medium'>Best Seller</Link>
                    <Link to='/' className='text-[#121212] text-xl font-medium'>Offers</Link>
                </div>

                <div className='flex flex-col gap-6 mt-4 md:mt-0'>
                    <h2 className='text-[#101010] text-2xl font-bold'>Company</h2>
                    <Link to='/' className='text-[#121212] text-xl font-medium'>About Us</Link>
                    <Link to='/' className='text-[#121212] text-xl font-medium'>Contact Us</Link>
                    <Link to='/' className='text-[#121212] text-xl font-medium'>Privacy Policy </Link>
                    <Link to='/' className='text-[#121212] text-xl font-medium'>Terms & Conditions</Link>
                </div>

                <div className='flex flex-col gap-6 mt-4 md:mt-0'>
                    <h2 className='text-[#101010] text-2xl font-bold'>Contact Us</h2>
                    <a href='#' className='text-[#121212] text-base font-medium flex items-center gap-1'>
                        <Location />
                        San Stefano , Alexandria
                    </a>
                    <a href='#' className='text-[#121212] text-base font-medium flex items-center gap-1'>
                        <Email />
                        company@gmail.com
                    </a>
                    <a href='#' className='text-[#121212] text-base font-medium flex items-center gap-1'>
                        <Phone />
                        +20123654789
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer
