import HeroSection from "@/components/Home/HeroSection"
import OurCategories from "@/components/Home/OurCategories"
import OurProviders from "@/components/Home/OurProviders"

const Home = () => {
    return (
        <div className="container">
            <HeroSection />
            <OurCategories />
            <OurProviders />
        </div>
    )
}

export default Home
