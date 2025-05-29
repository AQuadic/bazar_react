import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

const HeroSection = () => {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
        [
            // add plugins here
        ]
    )
    return (
        <div>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">1</div>
                <div className="keen-slider__slide">2</div>
                <div className="keen-slider__slide">3</div>
            </div>
        </div>
    )
}

export default HeroSection
