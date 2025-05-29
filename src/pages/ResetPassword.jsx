import ResetPassForm from '@/components/resetPassword/ResetPassForm'
import signBG from '/images/sign/signBG.png'

const ResetPassword = () => {
    return (
        <section className="container flex flex-wrap items-center lg:justify-between justify-center mt-20">
            <img src={signBG} alt="BG" />
            <ResetPassForm />
        </section>
    )
}

export default ResetPassword
