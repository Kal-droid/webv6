import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { financialServices } from '../../../data/services';
import ServiceSlide from './ServiceSlide';
import SlideControls from './SlideControls';
import SlideIndicators from './SlideIndicators';

export default function ServiceSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % financialServices.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + financialServices.length) % financialServices.length);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Services slideshow"
    >
      {/* Slides Container */}
      <div className="relative aspect-[16/9] bg-primary/5 rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          {financialServices.map((service, index) => (
            <ServiceSlide
              key={service.id}
              service={service}
              isActive={currentSlide === index}
            />
          ))}
        </AnimatePresence>

        {/* Navigation Controls */}
        <SlideControls
          onPrev={prevSlide}
          onNext={nextSlide}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
      </div>

      {/* Slide Indicators */}
      <SlideIndicators
        total={financialServices.length}
        current={currentSlide}
        onChange={setCurrentSlide}
      />
    </div>
  );
}