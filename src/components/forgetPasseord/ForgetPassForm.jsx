import { Link } from "react-router"

const ForgetPassForm = () => {
    return (
        <section className="">
            <h2 className="text-[#101010] text-5xl font-semibold leading-[150%] text-center lg:mt-0 mt-10">Forget Password</h2>
            <p className="text-[#5D5D5D] text-xl font-medium mt-4 text-center">Please enter your email to reset your <br /> password.</p>
            <form className="mt-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-[#101010] text-xl font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="md:w-[504px] w-full h-14 border border-[#EEEEEE] rounded-[8px] mt-3 focus:outline-none px-2"
                        placeholder="Enter your Email" />
                </div>

                <button className="md:w-[504px] w-full h-14 bg-[#101010] rounded-[8px] text-[#FEFEFE] text-lg font-bold mt-6">Send OTP</button>

                <div className="mt-6 text-center">
                    <p className="text-[#101010] text-base font-medium leading-[100%]">Don’t receive code?</p>
                    <p className="text-[#5D5D5D] text-base font-medium my-4">You may request a new code in <span className="text-[#101010]">1:00</span></p>
                    <Link to='' className="text-[#101010] text-base font-semibold underline">Send again</Link>

                </div>
            </form>
        </section>
    )
}

export default ForgetPassForm
