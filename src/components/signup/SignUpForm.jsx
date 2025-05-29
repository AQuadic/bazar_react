import { Link } from "react-router"
import Eye from "../icons/sign/Eye"
import Google from "../icons/sign/Google"
import Facebook from "../icons/sign/Facebook"

const SignUpForm = () => {
    return (
        <section className="">
            <h2 className="text-[#101010] text-5xl font-semibold leading-[150%] text-center lg:mt-0 mt-10">Sign Up</h2>
            <p className="text-[#5D5D5D] text-xl font-medium mt-4 text-center">Sign in to continue your stylish journey.</p>
            <form className="mt-8">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-[#101010] text-xl font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="md:w-[504px] w-full h-14 border border-[#EEEEEE] rounded-[8px] mt-3 focus:outline-none px-2"
                        placeholder="Enter your name" />
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-[#101010] text-xl font-medium mt-4">Password</label>
                    <div className="relative mt-3">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="md:w-[504px] w-full h-14 border border-[#EEEEEE] rounded-[8px] focus:outline-none px-4 pr-12"
                            placeholder="Enter your password"
                        />
                        <div className="absolute inset-y-0 ltr:right-4 rtl:left-4 flex items-center cursor-pointer">
                            <Eye />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-[#101010] text-xl font-medium mt-4">Confirm Password</label>
                    <div className="relative mt-3">
                        <input
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            className="md:w-[504px] w-full h-14 border border-[#EEEEEE] rounded-[8px] focus:outline-none px-4 pr-12"
                            placeholder="Enter your password"
                        />
                        <div className="absolute inset-y-0 ltr:right-4 rtl:left-4 flex items-center cursor-pointer">
                            <Eye />
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-4 mt-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#101010] bg-[#101010] border-[#101010] rounded-sm focus:ring-0 focus:ring-[#101010]" />
                    <label htmlFor="default-checkbox" className="ms-2 text-base font-medium text-[#101010]">Remember me</label>
                </div>

                <button className="md:w-[504px] w-full h-14 bg-[#101010] rounded-[8px] text-[#FEFEFE] text-lg font-bold">Sign Up</button>

                <div className="mt-6 flex items-center gap-2">
                    <div className="md:w-[227px] w-full h-px bg-[#5D5D5D]"></div>
                    <p className="text-[#5D5D5D] text-xl font-medium">OR</p>
                    <div className="md:w-[227px] w-full h-px bg-[#5D5D5D]"></div>
                </div>

                <div>
                    <div className="md:w-[504px] h-14 border border-[#EEEEEE] rounded-[8px] mt-6 flex items-center justify-center gap-4">
                        <Google />
                        <p className="text-[#5D5D5D] text-base font-medium">Continue with Google</p>
                    </div>
                    <div className="md:w-[504px] h-14 border border-[#EEEEEE] rounded-[8px] mt-6 flex items-center justify-center gap-4">
                        <Facebook />
                        <p className="text-[#5D5D5D] text-base font-medium">Continue with FaceBook</p>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2">
                    <p className="text-[#5D5D5D] text-lg">You don’t have an account?</p>
                    <Link to='/signin' className="text-[#101010] text-lg font-semibold underline">Sign In</Link>
                </div>

            </form>
        </section>
    )
}

export default SignUpForm
