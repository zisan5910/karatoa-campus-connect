import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import {
  Languages,
  Target,
  MessageSquare,
  PlusCircle,
  Star,
  ChevronRight,
  Code,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

interface SkillsProps {
  language: 'en' | 'bn';
}

// Premium Section Layout
const PremiumSection = ({ children, title, icon, theme = 'skills', className = '' }: {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  theme?: 'profile' | 'education' | 'courses' | 'experience' | 'certificates' | 'skills' | 'family' | 'contact';
  className?: string;
}) => {
  const getBackgroundGradient = (theme: string) => {
    const gradients = {
      profile: 'from-blue-50/20 via-white to-cyan-50/20',
      education: 'from-emerald-50/20 via-white to-teal-50/20',
      courses: 'from-purple-50/20 via-white to-indigo-50/20', 
      experience: 'from-orange-50/20 via-white to-amber-50/20',
      certificates: 'from-cyan-50/20 via-white to-blue-50/20',
      skills: 'from-pink-50/20 via-white to-rose-50/20',
      family: 'from-red-50/20 via-white to-pink-50/20',
      contact: 'from-blue-50/20 via-white to-cyan-50/20'
    };
    return gradients[theme as keyof typeof gradients] || gradients.skills;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`premium-section bg-gradient-to-br ${getBackgroundGradient(theme)} ${className}`}
    >
      <div className="premium-content">
        <SectionHeader 
          icon={icon}
          title={title}
          theme={theme}
        />
        {children}
      </div>
    </motion.section>
  );
};

const Skills = ({ language }: SkillsProps) => {
  const skillsData = {
    languages: {
      title: {
        en: 'Languages',
        bn: 'ভাষা',
      },
      skills: [
        {
          name: {
            en: 'Bengali (Fluent)',
            bn: 'বাংলা (সাবলীল)',
          },
          level: 5,
        },
        {
          name: {
            en: 'English (Professional)',
            bn: 'ইংরেজি (পেশাদার)',
          },
          level: 4,
        },
      ],
    },
    professional: {
      title: {
        en: 'Core Professional Skills',
        bn: 'মূল পেশাদার দক্ষতা',
      },
      skills: [
        { en: 'MS Office Suite', bn: 'এমএস অফিস' },
        { en: 'Email Communication', bn: 'ইমেইল যোগাযোগ' },
        { en: 'Team Collaboration', bn: 'দলগত সমন্বয়' },
        { en: 'Time Management', bn: 'সময় ব্যবস্থাপনা' },
        { en: 'Problem Solving', bn: 'সমস্যা সমাধান' },
        { en: 'Professional Ethics', bn: 'পেশাদার নীতি' },
      ],
      color: 'bg-green-100',
      hoverColor: 'hover:bg-green-200',
      iconColor: 'text-green-600',
    },
    communication: {
      title: {
        en: 'Communication Skills',
        bn: 'যোগাযোগ দক্ষতা',
      },
      skills: [
        { en: 'Report Writing', bn: 'রিপোর্ট লেখা' },
        { en: 'Active Listening', bn: 'সক্রিয় শোনা' },
        { en: 'Presentation', bn: 'প্রেজেন্টেশন' },
        { en: 'Professional Email', bn: 'পেশাদার ইমেইল' },
      ],
      color: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200',
      iconColor: 'text-blue-600',
    },
    additional: {
      title: {
        en: 'Additional Skills',
        bn: 'অতিরিক্ত দক্ষতা',
      },
      skills: [
        { en: 'Canva/Photoshop', bn: 'ক্যানভা/ফটোশপ' },
        { en: 'Social Media', bn: 'সোশ্যাল মিডিয়া' },
        { en: 'Web and App Development', bn: 'ওয়েব এবং এ্যাপ ডেভেলপমেন্ট' },
        { en: 'The concept of AI', bn: 'AI এর ধারণা' },
      ],
      color: 'bg-purple-100',
      hoverColor: 'hover:bg-purple-200',
      iconColor: 'text-purple-600',
    },
  };

  const renderLanguageSkill = (skill: any, index: number) => {
    const totalStars = skill.level === 5 ? 10 : 8;
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="group"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700 group-hover:text-gray-900 transition-colors flex items-center gap-2 font-medium">
            <ChevronRight size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            {skill.name[language]}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalStars }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + i * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Star
                  size={16}
                  className="text-yellow-500 fill-yellow-500"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderSkillCard = (skill: any, index: number, section: any) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`${section.color} ${section.hoverColor} p-3 rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2`}
    >
      <ChevronRight size={14} className={`${section.iconColor} opacity-70`} />
      {skill[language]}
    </motion.div>
  );

  return (
    <Element name="skills">
      <PremiumSection
        title={language === 'en' ? 'Skills & Competencies' : 'দক্ষতা ও সক্ষমতা'}
        icon={<Code className="text-white" size={24} />}
        theme="skills"
      >

        <div className="space-y-8">
          {/* Language Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg flex items-center gap-3 mb-4 text-gray-700">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Languages size={20} className="text-blue-600" />
              </div>
              {skillsData.languages.title[language]}
            </h3>
            <div className="space-y-4 pl-2">
              {skillsData.languages.skills.map(renderLanguageSkill)}
            </div>
          </motion.div>

          {/* Other Skills Sections */}
          {[
            skillsData.professional,
            skillsData.communication,
            skillsData.additional,
          ].map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-bold text-lg flex items-center gap-3 mb-4 text-gray-700">
                <div className={`p-2 ${section.color} rounded-lg`}>
                  {sectionIndex === 0 ? (
                    <Target size={20} className={section.iconColor} />
                  ) : sectionIndex === 1 ? (
                    <MessageSquare size={20} className={section.iconColor} />
                  ) : (
                    <PlusCircle size={20} className={section.iconColor} />
                  )}
                </div>
                {section.title[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.skills.map((skill, skillIndex) =>
                  renderSkillCard(skill, skillIndex, section)
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </PremiumSection>
    </Element>
  );
};

export default Skills;
