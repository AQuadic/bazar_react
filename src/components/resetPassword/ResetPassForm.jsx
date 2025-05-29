import Eye from '../icons/sign/Eye'

const ResetPassForm = () => {
    return (
        <section className="">
            <h2 className="text-[#101010] text-5xl font-semibold leading-[150%] text-center lg:mt-0 mt-10">Reset Password</h2>
            <p className="text-[#5D5D5D] text-xl font-medium mt-4 text-center">Please enter your new password.</p>
            <form className="mt-4">
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

                <button className="md:w-[504px] w-full h-14 bg-[#101010] rounded-[8px] text-[#FEFEFE] text-lg font-bold mt-6">Confirm Password</button>
            </form>
        </section>
    )
}

export default ResetPassForm
