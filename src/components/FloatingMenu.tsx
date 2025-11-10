import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Ghost,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { format } from 'date-fns';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface FloatingMenuProps {
  language?: 'en' | 'bn';
}

const FloatingMenu = ({ language = 'en' }: FloatingMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [particleEffect, setParticleEffect] = useState(false);
  const [isGhostHovering, setIsGhostHovering] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Ghost floating animation variants
  const ghostVariants = {
    hover: {
      y: [0, -10, 0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Message animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Enhanced constant replies with more information
  const getConstantReply = (userInput: string): string | null => {
    const lowerInput = userInput.toLowerCase();

    // Developer/Creator information
    if (
      lowerInput.includes('developer') ||
      lowerInput.includes('creator') ||
      lowerInput.includes('who made you') ||
      lowerInput.includes('your creator') ||
      lowerInput.includes('zisan') ||
      lowerInput.includes('ridoan')
    ) {
      return language === 'en' 
        ? `I was created by Md Ridoan Mahmud Zisan, a passionate web developer and student from Bogura, Bangladesh. 
      \n\nHere's some info about him:
      \n- 📫 Contact: ridoan.zisan@gmail.com
      \n- 📞 Phone: +8801712525910
      \n- 📍 Location: Bogura, Bangladesh
      \n- 🔗 LinkedIn: https://linkedin.com/in/ridoan2007
      \n- 🩸 Blood Group: B+
      \n- 🎂 Date of Birth: December 31, 2007
      \n- 🌐 Religion: Humanity`
        : `আমাকে তৈরি করেছেন মো: রিদওয়ান মাহমুদ জিসান, একজন আগ্রহী ওয়েব ডেভেলপার এবং শিক্ষার্থী বগুড়া, বাংলাদেশ থেকে।
      \n\nতার সম্পর্কে কিছু তথ্য:
      \n- 📫 যোগাযোগ: ridoan.zisan@gmail.com
      \n- 📞 ফোন: +8801712525910
      \n- 📍 অবস্থান: বগুড়া, বাংলাদেশ
      \n- 🔗 লিঙ্কডইন: https://linkedin.com/in/ridoan2007
      \n- 🩸 রক্তের গ্রুপ: বি পজিটিভ
      \n- 🎂 জন্ম তারিখ: ৩১ ডিসেম্বর, ২০০৭
      \n- 🌐 ধর্ম: মানবতা`;
    }

    // Education information
    if (
      lowerInput.includes('education') ||
      lowerInput.includes('study') ||
      lowerInput.includes('school') ||
      lowerInput.includes('college')
    ) {
      return language === 'en'
        ? `Md Ridoan Mahmud Zisan's Education:
      \n🎓 Higher Secondary Certificate (HSC)
      \n- Institution: Karatoa Multimedia School and College
      \n- Year: 2023-2024
      \n- GPA: 5.00/5.00 (Science)
      \n- Major: Higher Mathematics
      \n\n🎓 Secondary School Certificate (SSC)
      \n- Institution: Dhunat Govt N.U. Pilot Model High School
      \n- Year: 2021-2022
      \n- GPA: 5.00/5.00 (Science)
      \n- Group: Science
      \n- Major: Higher Mathematics`
        : `মো: রিদওয়ান মাহমুদ জিসানের শিক্ষাগত যোগ্যতা:
      \n🎓 উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)
      \n- প্রতিষ্ঠান: করতোয়া মাল্টিমিডিয়া স্কুল অ্যান্ড কলেজ
      \n- বছর: ২০২৩-২০২৪
      \n- জিপিএ: ৫.০০/৫.০০ (বিজ্ঞান)
      \n- প্রধান বিষয়: উচ্চতর গণিত
      \n\n🎓 মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)
      \n- প্রতিষ্ঠান: ধুনট সরকারি এন. ইউ. পাইলট মডেল উচ্চ বিদ্যালয়
      \n- বছর: ২০২১-২০২২
      \n- জিপিএ: ৫.০০/৫.০০ (বিজ্ঞান)
      \n- গ্রুপ: বিজ্ঞান
      \n- প্রধান বিষয়: উচ্চতর গণিত`;
    }

    // Skills information
    if (
      lowerInput.includes('skill') ||
      lowerInput.includes('expertise') ||
      lowerInput.includes('what can you do') ||
      lowerInput.includes('ability')
    ) {
      return language === 'en'
        ? `Md Ridoan Mahmud Zisan's Skills:
      \n💻 Technical Skills:
      \n- Web Development (HTML, CSS, JavaScript)
      \n- React.js, Firebase
      \n- AI & Machine Learning basics
      \n\n🗣️ Language Skills:
      \n- Bengali (Fluent)
      \n- English (Professional)
      \n\n🏆 Core Professional Skills:
      \n- MS Office Suite
      \n- Email Communication
      \n- Team Collaboration
      \n- Time Management
      \n- Problem Solving
      \n- Professional Ethics
      \n\n🎨 Additional Skills:
      \n- Canva/Photoshop
      \n- Social Media Management
      \n- Customer Service
      \n- Basic Troubleshooting`
        : `মো: রিদওয়ান মাহমুদ জিসানের দক্ষতা:
      \n💻 প্রযুক্তিগত দক্ষতা:
      \n- ওয়েব ডেভেলপমেন্ট (HTML, CSS, JavaScript)
      \n- React.js, Firebase
      \n- AI ও মেশিন লার্নিং বেসিক
      \n\n🗣️ ভাষাগত দক্ষতা:
      \n- বাংলা (সাবলীল)
      \n- ইংরেজি (পেশাদার)
      \n\n🏆 মূল পেশাদার দক্ষতা:
      \n- MS Office স্যুট
      \n- ইমেইল যোগাযোগ
      \n- দলগত সহযোগিতা
      \n- সময় ব্যবস্থাপনা
      \n- সমস্যা সমাধান
      \n- পেশাদার নীতি
      \n\n🎨 অতিরিক্ত দক্ষতা:
      \n- Canva/Photoshop
      \n- সোশ্যাল মিডিয়া ব্যবস্থাপনা
      \n- গ্রাহক সেবা
      \n- বেসিক ট্রাবলশুটিং`;
    }

    // Projects information
    if (
      lowerInput.includes('project') ||
      lowerInput.includes('work') ||
      lowerInput.includes('build') ||
      lowerInput.includes('developed')
    ) {
      return language === 'en'
        ? `Md Ridoan Mahmud Zisan's Notable Projects:
      \n🩸 BOBDO (Bogura Online Blood Donation Organization)
      \n- React + Firebase blood management system
      \n- Real-time donor database
      \n- Serves 68k+ community members
      \n- Reduced response time by 40%
      \n- Link: https://bobdo.netlify.app
      \n\n📐 UniConverter
      \n- Unit converter supporting 50+ measurement categories
      \n- Progressive Web App (PWA) functionality
      \n- Link: https://uniconverter.netlify.app
      \n\n💻 DevHub
      \n- Portfolio showcasing all projects
      \n- Link: https://devhub-i.netlify.app`
        : `মো: রিদওয়ান মাহমুদ জিসানের উল্লেখযোগ্য প্রকল্প:
      \n🩸 BOBDO (বগুড়া অনলাইন ব্লাড ডোনেশন অর্গানাইজেশন)
      \n- React + Firebase রক্ত ব্যবস্থাপনা সিস্টেম
      \n- রিয়েল-টাইম ডোনার ডাটাবেস
      \n- ৬৮ হাজারের বেশি কমিউনিটি সদস্যকে সেবা দেয়
      \n- ৪০% রেসপন্স টাইম কমিয়েছে
      \n- লিঙ্ক: https://bobdo.netlify.app
      \n\n📐 UniConverter
      \n- ৫০+ পরিমাপ বিভাগ সমর্থনকারী ইউনিট কনভার্টার
      \n- প্রগ্রেসিভ ওয়েব অ্যাপ (PWA) কার্যকারিতা
      \n- লিঙ্ক: https://uniconverter.netlify.app
      \n\n💻 DevHub
      \n- সমস্ত প্রকল্প প্রদর্শনকারী পোর্টফোলিও
      \n- লিঙ্ক: https://devhub-i.netlify.app`;
    }

    // Certificates information
    if (
      lowerInput.includes('certificate') ||
      lowerInput.includes('certification') ||
      lowerInput.includes('achievement') ||
      lowerInput.includes('award') ||
      lowerInput.includes('olympiad')
    ) {
      return language === 'en'
        ? `Md Ridoan Mahmud Zisan's Certifications & Achievements:
      \n🏅 Academic Olympiads:
      \n- Zero Olympiad (UN SDGs & climate action) - Semi-Final
      \n- Bangladesh AI Olympiad - Semi-Final
      \n- ICT Olympiad Bangladesh - Semi-Final
      \n- Math Olympiad - Selective Round
      
      \n📜 Professional Certifications:
      \n- AI, Machine Learning & Cyber Security (Simplilearn)
      \n- Complete Web Development (Programming Hero)
      \n- Digital Marketing (HubSpot Academy)
      \n- Corporate Skills (10 Minute School)`
        : `মো: রিদওয়ান মাহমুদ জিসানের সার্টিফিকেশন ও অর্জন:
      \n🏅 একাডেমিক অলিম্পিয়াড:
      \n- জিরো অলিম্পিয়াড (UN SDGs ও জলবায়ু কর্ম) - সেমি-ফাইনাল
      \n- বাংলাদেশ AI অলিম্পিয়াড - সেমি-ফাইনাল
      \n- ICT অলিম্পিয়াড বাংলাদেশ - সেমি-ফাইনাল
      \n- গণিত অলিম্পিয়াড - নির্বাচিত রাউন্ড
      
      \n📜 পেশাদার সার্টিফিকেশন:
      \n- AI, মেশিন লার্নিং ও সাইবার সিকিউরিটি (Simplilearn)
      \n- সম্পূর্ণ ওয়েব ডেভেলপমেন্ট (Programming Hero)
      \n- ডিজিটাল মার্কেটিং (HubSpot Academy)
      \n- কর্পোরেট স্কিলস (১০ মিনিট স্কুল)`;
    }

    // Contact information
    if (
      lowerInput.includes('contact') ||
      lowerInput.includes('email') ||
      lowerInput.includes('phone') ||
      lowerInput.includes('address') ||
      lowerInput.includes('reach') ||
      lowerInput.includes('connect')
    ) {
      return language === 'en'
        ? `You can contact Md Ridoan Mahmud Zisan through:
      \n📧 Email: ridoan.zisan@gmail.com
      \n📞 Phone: +8801712525910
      \n📍 Location: Bogura, Bangladesh
      \n🔗 LinkedIn: https://linkedin.com/in/ridoan2007
      \n\nYou can also use the email button in the bottom right corner to send him a message directly.`
        : `আপনি মো: রিদওয়ান মাহমুদ জিসানের সাথে যোগাযোগ করতে পারেন:
      \n📧 ইমেইল: ridoan.zisan@gmail.com
      \n📞 ফোন: +8801712525910
      \n📍 অবস্থান: বগুড়া, বাংলাদেশ
      \n🔗 লিঙ্কডইন: https://linkedin.com/in/ridoan2007
      \n\nআপনি সরাসরি বার্তা পাঠানোর জন্য নিচের ডান কোণায় ইমেইল বাটনও ব্যবহার করতে পারেন।`;
    }

    // Volunteer work
    if (
      lowerInput.includes('volunteer') ||
      lowerInput.includes('blood') ||
      lowerInput.includes('donation') ||
      lowerInput.includes('bobdo')
    ) {
      return language === 'en'
        ? `Md Ridoan Mahmud Zisan's Volunteer Work:
      \n🩸 Bogura Online Blood Donation Organization
      \n- Role: Volunteer & Developer (2023-Present)
      \n- Responsibilities:
      \n  • Developed blood donor platform serving 68k+ members
      \n  • Implemented digital system reducing response time by 40%
      \n  • First aid and CPR training
      \n  • Organizing donation campaigns
      \n\n🔗 Blood Management App: https://bobdo.netlify.app`
        : `মো: রিদওয়ান মাহমুদ জিসানের স্বেচ্ছাসেবক কাজ:
      \n🩸 বগুড়া অনলাইন ব্লাড ডোনেশন অর্গানাইজেশন
      \n- ভূমিকা: স্বেচ্ছাসেবক ও ডেভেলপার (২০২৩-বর্তমান)
      \n- দায়িত্ব:
      \n  • ৬৮ হাজারের বেশি সদস্যের জন্য রক্তদাতা প্ল্যাটফর্ম তৈরি
      \n  • ৪০% রেসপন্স টাইম কমানোর ডিজিটাল সিস্টেম বাস্তবায়ন
      \n  • ফার্স্ট এইড ও সিপিআর প্রশিক্ষণ
      \n  • দান অভিযান আয়োজন
      \n\n🔗 রক্ত ব্যবস্থাপনা অ্যাপ: https://bobdo.netlify.app`;
    }

    // Family information
    if (
      lowerInput.includes('family') ||
      lowerInput.includes('father') ||
      lowerInput.includes('mother') ||
      lowerInput.includes('parent') ||
      lowerInput.includes('sibling')
    ) {
      return language === 'en'
        ? `Md Ridoan Mahmud Zisan's Family:
      \n👨‍👩‍👧‍👦 Family Members:
      \n- Father: Md Rokibul Hasan Shekh
      \n- Mother: Mst. Zosna Khatun
      \n- Siblings: 1 Younger Sister`
        : `মো: রিদওয়ান মাহমুদ জিসানের পরিবার:
      \n👨‍👩‍👧‍👦 পরিবারের সদস্য:
      \n- বাবা: মো: রকিবুল হাসান শেখ
      \n- মা: মোসাঃ জোসনা খাতুন
      \n- ভাইবোন: ১ ছোট বোন`;
    }

    // Basic greetings
    if (
      lowerInput.includes('hello') ||
      lowerInput.includes('hi') ||
      lowerInput.includes('hey')
    ) {
      return language === 'en'
        ? "Hello there! I'm Ghost AI, here to tell you about Md Ridoan Mahmud Zisan. How can I help you today?\n\nYou can ask about:\n- His education\n- Skills\n- Projects\n- Certifications\n- Volunteer work\n- Contact information\n- Or anything else!"
        : "হ্যালো! আমি Ghost AI, মো: রিদওয়ান মাহমুদ জিসান সম্পর্কে আপনাকে জানানোর জন্য এখানে আছি। আজ আমি আপনাকে কিভাবে সাহায্য করতে পারি?\n\nআপনি জিজ্ঞাসা করতে পারেন:\n- তার শিক্ষা\n- দক্ষতা\n- প্রকল্প\n- সার্টিফিকেশন\n- স্বেচ্ছাসেবক কাজ\n- যোগাযোগের তথ্য\n- বা অন্য কিছু!";
    }

    // Thank you responses
    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return language === 'en'
        ? "You're welcome! Let me know if you need any more information about Md Ridoan Mahmud Zisan."
        : "আপনাকে স্বাগতম! মো: রিদওয়ান মাহমুদ জিসান সম্পর্কে আপনার আরও তথ্যের প্রয়োজন হলে আমাকে জানান।";
    }

    // Age information
    if (
      lowerInput.includes('age') ||
      lowerInput.includes('old') ||
      lowerInput.includes('birth')
    ) {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return language === 'en'
        ? `Md Ridoan Mahmud Zisan is ${age} years old (born December 31, 2007).`
        : `মো: রিদওয়ান মাহমুদ জিসানের বয়স ${age} বছর (জন্ম ৩১ ডিসেম্বর, ২০০৭)।`;
    }

    // Blood group
    if (lowerInput.includes('blood') && lowerInput.includes('group')) {
      return language === 'en'
        ? "Md Ridoan Mahmud Zisan's blood group is B+ (B positive)."
        : "মো: রিদওয়ান মাহমুদ জিসানের রক্তের গ্রুপ বি পজিটিভ (B+)।";
    }

    return null;
  };

  // API call function
  const callAPI = async (prompt: string): Promise<string> => {
    const constantReply = getConstantReply(prompt);
    if (constantReply) {
      return constantReply;
    }

    try {
      const apiUrl =
        'https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5HUEtMSjJkakVjcF9IQ0M0VFhRQ0FmSnNDSHNYTlJSblE0UXo1Q3RBcjFPcl9YYy1OZUhteDZWekxHdWRLM1M1alNZTkJMWEhNOWd4S1NPSDBTWC12M0U2UGc9PQ==';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      return data.status === 'success'
        ? data.text
        : language === 'en'
        ? 'Sorry, I could not process your request.'
        : 'দুঃখিত, আমি আপনার অনুরোধ প্রক্রিয়া করতে পারিনি।';
    } catch (error) {
      console.error('API Error:', error);
      return language === 'en'
        ? 'Sorry, there was an error processing your request.'
        : 'দুঃখিত, আপনার অনুরোধ প্রক্রিয়া করতে একটি ত্রুটি হয়েছে।';
    }
  };

  // Enhanced AI Chat functionality with typing effect and API integration
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setIsThinking(true);
    setParticleEffect(true);

    try {
      const thinkingTime = Math.min(Math.max(input.length * 20, 800), 2000);
      await new Promise(resolve => setTimeout(resolve, thinkingTime));
      
      const response = await callAPI(userMessage.content);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '',
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsThinking(false);
      
      for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 10));
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessage.id 
            ? { ...msg, content: response.slice(0, i + 1) }
            : msg
        ));
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: language === 'en' 
          ? 'Sorry, I encountered an error. Please try again.'
          : 'দুঃখিত, আমি একটি ত্রুটির সম্মুখীন হয়েছি। অনুগ্রহ করে আবার চেষ্টা করুন।',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsThinking(false);
    } finally {
      setIsLoading(false);
      setParticleEffect(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  // Particle effect component
  const ParticleEffect = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full"
          initial={{ 
            x: Math.random() * 300, 
            y: 300,
            opacity: 1,
            scale: 1
          }}
          animate={{ 
            y: -100,
            opacity: 0,
            scale: 0,
            x: Math.random() * 300 - 150
          }}
          transition={{ 
            duration: 1.5, 
            delay: i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="floating-menu">
      {/* Ghost AI Chat Button */}
      <motion.button
        onClick={handleToggleMenu}
        className={`fixed bottom-6 right-6 z-[60] p-4 rounded-full shadow-2xl transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'} 
          border-2 ${isOpen ? 'border-red-400' : 'border-purple-400'}`}
        whileHover={{ scale: 1.05, rotate: isOpen ? 90 : 0 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? 'hover' : 'float'}
        variants={ghostVariants}
        onHoverStart={() => setIsGhostHovering(true)}
        onHoverEnd={() => setIsGhostHovering(false)}
        aria-label={isOpen ? (language === 'en' ? 'Close Ghost AI' : 'Ghost AI বন্ধ করুন') : (language === 'en' ? 'Open Ghost AI' : 'Ghost AI খুলুন')}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <Ghost className="w-6 h-6 text-white" />
            {isGhostHovering && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </motion.div>
            )}
          </div>
        )}
      </motion.button>

      {/* Ghost AI Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[59]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ghost className="w-5 h-5 text-white" />
                  <h3 className="text-white font-semibold">
                    {language === 'en' ? 'Ghost AI Assistant' : 'Ghost AI সহায়ক'}
                  </h3>
                </div>
                <button
                  onClick={handleToggleMenu}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={language === 'en' ? 'Close' : 'বন্ধ করুন'}
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="h-[500px] flex flex-col">
              {particleEffect && <ParticleEffect />}
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.length === 0 && (
                  <motion.div
                    className="text-center text-gray-500 py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Ghost className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                    <p className="text-lg font-medium mb-2">
                      {language === 'en' ? 'Hello!' : 'হ্যালো!'}
                    </p>
                    <p className="text-sm">
                      {language === 'en' 
                        ? 'Ask me anything about Md Ridoan Mahmud Zisan!'
                        : 'মো: রিদওয়ান মাহমুদ জিসান সম্পর্কে যেকোনো প্রশ্ন করুন!'}
                    </p>
                  </motion.div>
                )}

                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {format(message.timestamp, 'HH:mm')}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isThinking && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                      <span className="text-sm text-gray-600">
                        {language === 'en' ? 'Thinking...' : 'চিন্তা করছি...'}
                      </span>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={language === 'en' ? 'Ask me anything...' : 'যেকোনো প্রশ্ন করুন...'}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <span className="font-medium">{language === 'en' ? 'Send' : 'পাঠান'}</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingMenu;
