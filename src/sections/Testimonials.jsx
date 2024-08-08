import React, { useState, useRef, useEffect } from 'react';
import { arrowLeft, arrowRight } from '../assets/icons';
import { testimonials } from '../constants';
import TestimonialsCard from '../components/TestimonialsCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    const updateCardWidth = () => {
      const card = container.querySelector('.testimonial-card');
      if (!card) return;
      const newCardWidth = card.clientWidth + 16; // Adjusting the gap between cards
      setCardWidth(newCardWidth); // Update cardWidth without accumulating
    };
  
    const resizeObserver = new ResizeObserver(updateCardWidth);
    const card = container.querySelector('.testimonial-card');
    if (card) {
      resizeObserver.observe(card);
    }
  
    // Initial setting of card width
    updateCardWidth();
  
    return () => {
      resizeObserver.disconnect();
    };
  }, []);  

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - 1));
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
          <button onClick={handleNextClick} disabled={currentIndex >= testimonials.length - 2}>
            <img src={arrowRight} alt="Next" className={`${currentIndex >= testimonials.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="transition-transform duration-[1000ms] flex gap-4"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          ref={containerRef}
        >
          {testimonials.map((test, index) => (
            <div
              key={test.key}
              className="testimonial-card flex-shrink-0 max-w-full md:w-[calc(50%-8px)] xl:max-w-[610px]"
            >
              <TestimonialsCard {...test} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
