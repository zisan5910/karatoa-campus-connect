import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  theme?: 'profile' | 'education' | 'courses' | 'experience' | 'certificates' | 'skills' | 'family' | 'contact';
  className?: string;
}

const SectionHeader = ({ 
  icon, 
  title, 
  subtitle, 
  theme = 'profile', 
  className = '' 
}: SectionHeaderProps) => {
  const getThemeStyles = (theme: string) => {
    const themes = {
      profile: 'bg-[hsl(var(--section-profile))]',
      education: 'bg-[hsl(var(--section-education))]',
      courses: 'bg-[hsl(var(--section-courses))]',
      experience: 'bg-[hsl(var(--section-experience))]',
      certificates: 'bg-[hsl(var(--section-certificates))]',
      skills: 'bg-[hsl(var(--section-skills))]',
      family: 'bg-[hsl(var(--section-family))]',
      contact: 'bg-[hsl(var(--section-contact))]',
    };
    return themes[theme as keyof typeof themes] || themes.profile;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`flex items-center gap-4 mb-8 ${className}`}
    >
      {/* Large Round Icon Container - Olympiad Style */}
      <motion.div
        className={`flex-shrink-0 p-5 rounded-full shadow-2xl ${getThemeStyles(theme)}`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <div className="text-white flex items-center justify-center">
          {icon}
        </div>
      </motion.div>
      
      {/* Section Title and Subtitle */}
      <div className="flex-1">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="text-slate-600 mt-1 text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeader;