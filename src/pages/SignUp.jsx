import SignUpForm from '@/components/signup/SignUpForm'
import signBG from '/images/sign/signBG.png'
const SignUp = () => {
    return (
        <section className="container flex flex-wrap items-center lg:justify-between justify-center mt-10">
            <img src={signBG} alt="BG" />
            <SignUpForm />
        </section>
    )
}

export default SignUp
