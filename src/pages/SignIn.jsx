import SignInForm from '@/components/signin/SignInForm'
import signBG from '/images/sign/signBG.png'

const SignIn = () => {
    return (
        <section className="container flex flex-wrap items-center lg:justify-between justify-center mt-20">
            <img src={signBG} alt="BG" />
            <SignInForm />
        </section>
    )
}

export default SignIn
