import ForgetPassForm from '@/components/forgetPasseord/ForgetPassForm'
import signBG from '/images/sign/signBG.png'

const ForgetPassword = () => {
    return (
        <section className="container flex flex-wrap items-center lg:justify-between justify-center mt-20">
            <img src={signBG} alt="BG" />
            <ForgetPassForm />
        </section>
    )
}

export default ForgetPassword
