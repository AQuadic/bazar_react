import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import Slider from './Slider'

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        }
    )

    return (
        <div className="mt-12 relative">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide"><Slider /></div>
                <div className="keen-slider__slide"><Slider /></div>
                <div className="keen-slider__slide"><Slider /></div>
            </div>

            {loaded && instanceRef.current && (
                <div className="flex justify-center mt-4 gap-2">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`w-[29px] h-[12px] rounded-full transition-colors duration-300 ${currentSlide === idx ? 'bg-black' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default HeroSection
