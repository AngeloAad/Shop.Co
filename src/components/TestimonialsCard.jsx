import React, { useState, useRef, useEffect } from 'react';
import { arrowLeft, arrowRight } from '../assets/icons';
import { testimonials } from '../constants';
import TestimonialsCard from '../components/TestimonialsCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector('.testimonial-card');
        if (card) {
          setCardWidth(card.clientWidth + 8); // Adding a gap of 2 (8px)
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);

    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="pt-20 font-montserrat">
      <div className="flex w-full justify-between pb-12">
        <div className="flex justify-start items-start">
          <h2 className="sm:text-[48px] text-[32px] font-black">OUR HAPPY CUSTOMERS</h2>
        </div>
        <div className="flex gap-4 justify-end">
          <button onClick={handlePrevClick} disabled={currentIndex === 0}>
            <img src={arrowLeft} alt="Previous" className={`${currentIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
          </button>
          <button onClick={handleNextClick} disabled={currentIndex >= testimonials.length - 1}>
            <img src={arrowRight} alt="Next" className={`${currentIndex >= testimonials.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden w-full">
        <div
          className="transition-transform duration-1000ms flex gap-2"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          ref={containerRef}
        >
          {/* TODO: you are looping over the same data instead of taking them from props
            then you are calling the TestimonialsCard, which you are in currently in
            which makes an inifite loop */}
          {testimonials.map((test, index) => (
            <div key={test.key} className="testimonial-card flex-shrink-0 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.5rem)]">
              <TestimonialsCard {...test} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
