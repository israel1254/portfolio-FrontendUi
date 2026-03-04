import React, { useRef, useState } from 'react';
import { projects } from '../../data/projects';
import { BriefCase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft } from 'lucide-react';

const Projects = () => {

    const [activeCategory, setActiveCategory] = useState('All')
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const filteredProjectS = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;
      container.scrollTo({
        left: cardWidth * index,
        behavior:'smooth'
      })
    }
  }

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjectS.length - 3);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  }

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  }

  const categoryIcons = {
    'All': Target,
    'Web Apps': Globe,
    'UI Components': Palette,
    'Full Stack':Zap,
  }
  return (
    <div>
      Projects
    </div>
  );
}

export default Projects