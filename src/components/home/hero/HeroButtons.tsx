import React, { useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import { trackEvent } from '../../../utils/analytics';

export default function HeroButtons() {
  const navigate = useNavigate();

  const handleExploreServices = useCallback(() => {
    trackEvent('hero_button_click', { button: 'explore_services' });
    
    // Using smooth scroll with fallback
    try {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        window.scrollTo({
          top: servicesSection.offsetTop - 64, // Account for header height
          behavior: 'smooth'
        });
      }
    } catch (error) {
      // Fallback for older browsers
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        window.scrollTo(0, servicesSection.offsetTop - 64);
      }
    }
  }, []);

  const handlePartnerWithUs = useCallback(() => {
    trackEvent('hero_button_click', { button: 'partner_with_us' });
    navigate('/partnerships');
  }, [navigate]);

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Button
        variant="primary"
        size="lg"
        onClick={handleExploreServices}
        icon={<ArrowRight />}
        iconPosition="right"
        className="w-full sm:w-auto"
        id="explore-services-button"
      >
        Explore Our Services
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={handlePartnerWithUs}
        className="w-full sm:w-auto"
        id="partner-with-us-button"
      >
        Partner With Us
      </Button>
    </div>
  );
}