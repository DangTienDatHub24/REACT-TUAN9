import { useState } from 'react'
import './DiscoverModal.css'

import slide1 from '../../assets/3_Data/Lab_01/Image 72.png'
import slide2 from '../../assets/3_Data/Lab_01/Image 73.png'
import slide3 from '../../assets/3_Data/Lab_01/Image 93.png'

const slides = [
  { id: 0, src: slide1, alt: 'Gourmet dishes flatlay' },
  { id: 1, src: slide2, alt: 'Chef cooking' },
  { id: 2, src: slide3, alt: 'Healthy food bowls' },
]

function DiscoverModal({ onClose }) {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1)
    } else {
      onClose()
    }
  }

  const handleSkip = () => {
    onClose()
  }

  return (
    <div className="discover-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="discover-modal">
        {/* Close button */}
        <button className="discover-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Title */}
        <h2 className="discover-title">Discover Chefify</h2>
        <p className="discover-subtitle">
          Easy and delicious cooking instructions right here. Start exploring now!
        </p>

        {/* Image Slider */}
        <div className="discover-slider">
          {slides.map((slide, idx) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              className={`discover-slide ${idx === current ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="discover-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`discover-dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button className="discover-next-btn" onClick={handleNext}>
          {current < slides.length - 1 ? 'Next' : 'Get Started'}
        </button>

        {/* Skip */}
        <button className="discover-skip" onClick={handleSkip}>
          Skip
        </button>
      </div>
    </div>
  )
}

export default DiscoverModal
