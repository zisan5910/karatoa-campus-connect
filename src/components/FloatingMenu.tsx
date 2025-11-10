import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Mail,
  Search,
  PenTool,
  Phone,
  Linkedin,
  Download,
  Send,
  Calendar,
  Globe,
  Coffee,
  Github,
  Facebook,
  Youtube,
  Twitter,
  MessageCircle,
  Chrome,
  Ghost,
  Sparkles,
  Zap,
  Brain,
  Loader2,
  Heart,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { format } from 'date-fns';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface FloatingMenuProps {
  navigationItems?: Array<{
    id: string;
    icon: JSX.Element;
    target?: string;
  }>;
  activeSection?: string;
  scrollToSection?: (section: string) => void;
  language?: 'en' | 'bn';
  currentPage?: string;
}

const FloatingMenu = ({ 
  activeSection = '', 
  scrollToSection = () => {}, 
  language = 'en'
}: FloatingMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'nav' | 'chat' | 'social'>('nav');
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

  // Enhanced constant replies with more information (LiveChat style)
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

  // API call function (same as LiveChat)
  const callAPI = async (prompt: string): Promise<string> => {
    // Check for constant replies first
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
      // Simulate AI thinking time based on query complexity
      const thinkingTime = Math.min(Math.max(input.length * 20, 800), 2000);
      await new Promise(resolve => setTimeout(resolve, thinkingTime));
      
      const response = await callAPI(userMessage.content);
      
      // Typewriter effect for AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '',
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsThinking(false);
      
      // Simulate typing effect
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
    if (activeTab === 'chat') {
      scrollToBottom();
    }
  }, [messages, activeTab]);

  // Social links data
  const socialLinks = [
    {
      name: 'Google',
      icon: <Chrome size={20} />,
      url: 'https://www.google.com/search?q=Md+Ridoan+Mahmud+Zisan',
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/ridoan-zisan',
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/RidoanDev',
      color: 'text-gray-800 hover:text-gray-900',
      bgColor: 'bg-gray-50 hover:bg-gray-100'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      url: 'https://www.facebook.com/rid0anzisan',
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={20} />,
      url: 'https://youtube.com/@ridoan-zisan',
      color: 'text-red-600 hover:text-red-700',
      bgColor: 'bg-red-50 hover:bg-red-100'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:ridoan.zisan@gmail.com',
      color: 'text-green-600 hover:text-green-700',
      bgColor: 'bg-green-50 hover:bg-green-100'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://x.com/ridoan_zisan',
      color: 'text-sky-600 hover:text-sky-700',
      bgColor: 'bg-sky-50 hover:bg-sky-100'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      url: 'https://wa.me/8801712525910',
      color: 'text-green-600 hover:text-green-700',
      bgColor: 'bg-green-50 hover:bg-green-100'
    }
  ];

  // Quick navigation items
  const quickNavItems = [
    { id: 'profile', icon: <User size={16} />, label: language === 'en' ? 'Profile' : 'প্রোফাইল' },
    { id: 'education', icon: <GraduationCap size={16} />, label: language === 'en' ? 'Education' : 'শিক্ষা' },
    { id: 'experience', icon: <Briefcase size={16} />, label: language === 'en' ? 'Experience' : 'অভিজ্ঞতা' },
    { id: 'skills', icon: <Code size={16} />, label: language === 'en' ? 'Skills' : 'দক্ষতা' },
    { id: 'certificates', icon: <Award size={16} />, label: language === 'en' ? 'Certificates' : 'সার্টিফিকেট' },
    { id: 'contact', icon: <Mail size={16} />, label: language === 'en' ? 'Contact' : 'যোগাযোগ' },
    { id: 'research', icon: <Search size={16} />, label: language === 'en' ? 'Research' : 'গবেষণা' },
    { id: 'blog', icon: <PenTool size={16} />, label: language === 'en' ? 'Blog' : 'ব্লগ' },
  ];

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
    <>
      {/* Enhanced Floating Trigger Button with pulse effect */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.85 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(124, 58, 237, 0.7)",
            "0 0 0 15px rgba(124, 58, 237, 0)",
            "0 0 0 0 rgba(124, 58, 237, 0)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)',
          backgroundSize: '200% 200%',
          color: 'white'
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Ghost size={24} />
        </motion.div>
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles size={12} className="text-yellow-300" />
        </motion.div>
      </motion.button>

      {/* Enhanced Floating Panel with LiveChat size */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Main Panel with LiveChat dimensions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100, y: 100, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100, y: 100, rotate: 10 }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 300,
                mass: 0.8
              }}
              className="fixed bottom-5 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-xl border border-slate-200 z-50 flex flex-col max-h-[440px]"
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(124, 58, 237, 0.1)'
              }}
            >
              {particleEffect && <ParticleEffect />}
              
              {/* Enhanced Header */}
              <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <motion.div
                    variants={ghostVariants}
                    animate={isGhostHovering ? 'hover' : 'float'}
                    onMouseEnter={() => setIsGhostHovering(true)}
                    onMouseLeave={() => setIsGhostHovering(false)}
                  >
                    <Ghost className="w-5 h-5" />
                  </motion.div>
                  <h2 className="font-semibold">Ghost AI</h2>
                </div>
                <div className="flex items-center gap-2">
                  {/* Enhanced Tab Navigation */}
                  <div className="flex gap-1">
                    {[
                      { id: 'nav', label: language === 'en' ? 'Nav' : 'নেভ', icon: <Globe size={14} /> },
                      { id: 'chat', label: language === 'en' ? 'Chat' : 'চ্যাট', icon: <Brain size={14} /> },
                      { id: 'social', label: language === 'en' ? 'Social' : 'সোশ্যাল', icon: <Coffee size={14} /> }
                    ].map(tab => (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab.icon}
                        <span>{tab.label}</span>
                      </motion.button>
                    ))}
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="flex-1 overflow-hidden">
                {/* Enhanced Navigation Tab */}
                {activeTab === 'nav' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3 space-y-3 h-full overflow-y-auto"
                  >
                    <h3 className="font-semibold text-slate-800 text-sm mb-2 flex items-center gap-2">
                      <Sparkles size={14} className="text-purple-500" />
                      {language === 'en' ? 'Quick Navigation' : 'দ্রুত নেভিগেশন'}
                    </h3>
                    <div className="grid grid-cols-2 gap-1.5">
                      {quickNavItems.map(item => (
                        <motion.button
                          key={item.id}
                          onClick={() => {
                            scrollToSection(item.id);
                            setIsOpen(false);
                          }}
                          className={`flex items-center gap-1.5 p-2 rounded-lg text-xs transition-all relative overflow-hidden group ${
                            activeSection === item.id
                              ? 'bg-purple-100 text-purple-700 border border-purple-200 shadow-md'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                          }`}
                          whileHover={{ 
                            scale: 1.02,
                            y: -2
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-1.5">
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    
                    {/* Enhanced Quick Actions */}
                    <div className="mt-3 space-y-1.5">
                      <h4 className="font-semibold text-slate-700 text-xs flex items-center gap-1">
                        <Zap size={12} className="text-yellow-500" />
                        {language === 'en' ? 'Quick Actions' : 'দ্রুত কর্ম'}
                      </h4>
                      <motion.a
                        href="/Resume.pdf"
                        download="Md Ridoan Mahmud Zisan.pdf"
                        className="flex items-center gap-1.5 p-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all duration-300 text-xs border border-green-200 group"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Download size={14} />
                        <span className="font-medium">{language === 'en' ? 'Download CV' : 'সিভি ডাউনলোড'}</span>
                      </motion.a>
                    </div>
                  </motion.div>
                )}

                {/* Enhanced Chat Tab - LiveChat Style */}
                {activeTab === 'chat' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
                      {messages.length === 0 && (
                        <motion.div
                          className="text-center text-gray-500 mt-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <motion.div variants={ghostVariants} animate="float">
                            <Ghost className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                          </motion.div>
                          <p className="text-lg">
                            {language === 'en' ? 'Hello!' : 'হ্যালো!'}
                          </p>
                          <p className="text-sm mt-2">
                            {language === 'en' 
                              ? 'Ask me about Md Ridoan Mahmud Zisan - his education, skills, projects, or anything else!'
                              : 'মো: রিদওয়ান মাহমুদ জিসান সম্পর্কে আমাকে জিজ্ঞাসা করুন - তার শিক্ষা, দক্ষতা, প্রকল্প বা অন্য কিছু!'
                            }
                          </p>
                          <div className="mt-4 text-xs text-gray-400">
                            <p>{language === 'en' ? 'Try asking:' : 'জিজ্ঞাসা করার চেষ্টা করুন:'}</p>
                            <p>{language === 'en' ? '"What are his skills?"' : '"তার দক্ষতা কি?"'}</p>
                            <p>{language === 'en' ? '"Tell me about his education"' : '"তার শিক্ষা সম্পর্কে বলুন"'}</p>
                            <p>{language === 'en' ? '"Show me his projects"' : '"তার প্রকল্প দেখান"'}</p>
                          </div>
                        </motion.div>
                      )}

                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          className={`flex items-start gap-3 ${
                            message.role === 'user' ? 'flex-row-reverse' : ''
                          }`}
                          variants={messageVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              message.role === 'user' ? 'bg-blue-500' : 'bg-gray-600'
                            }`}
                          >
                            {message.role === 'user' ? (
                              <User className="w-5 h-5 text-white" />
                            ) : (
                              <Ghost className="w-5 h-5 text-white" />
                            )}
                          </div>
                          <div
                            className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                              message.role === 'user'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap">
                              {message.content}
                            </p>
                            <p className="text-xs mt-1 opacity-70">
                              {format(message.timestamp, 'HH:mm')}
                            </p>
                          </div>
                        </motion.div>
                      ))}

                      {isThinking && (
                        <motion.div
                          className="flex items-start gap-3"
                          variants={messageVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                            <Ghost className="w-5 h-5 text-white" />
                          </div>
                          <div className="bg-gray-100 rounded-2xl px-4 py-2">
                            <motion.div
                              animate={{
                                rotate: 360,
                                transition: {
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: 'linear',
                                },
                              }}
                            >
                              <Loader2 className="w-5 h-5 text-gray-500" />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                    
                    {/* Enhanced Chat Input */}
                    <div className="border-t p-4">
                      <form onSubmit={handleChatSubmit} className="flex gap-2">
                        <input
                          ref={inputRef}
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder={language === 'en' ? 'Ask about Md Ridoan Mahmud Zisan...' : 'মো: রিদওয়ান মাহমুদ জিসান সম্পর্কে জিজ্ঞাসা করুন...'}
                          disabled={isLoading}
                          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        />
                        <motion.button
                          type="submit"
                          disabled={!input.trim() || isLoading}
                          className="bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                          whileHover={!isLoading && input.trim() ? { scale: 1.05 } : {}}
                          whileTap={!isLoading && input.trim() ? { scale: 0.95 } : {}}
                        >
                          <Send className="w-4 h-4" />
                        </motion.button>
                      </form>
                    </div>
                  </motion.div>
                )}

                {/* Enhanced Social Tab */}
                {activeTab === 'social' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 space-y-4 h-full overflow-y-auto"
                  >
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-purple-500" />
                      {language === 'en' ? 'Social Links' : 'সামাজিক লিঙ্ক'}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center justify-center p-3 rounded-2xl transition-all duration-300 ${social.bgColor} ${social.color} hover:scale-105 border border-slate-200 relative overflow-hidden`}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2
                          }}
                          whileTap={{ scale: 0.95 }}
                          title={social.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>

                    {/* Enhanced Contact Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200"
                    >
                      <h4 className="font-semibold text-slate-700 mb-2 text-xs flex items-center gap-1">
                        <Zap size={12} className="text-green-500" />
                        {language === 'en' ? 'Quick Contact' : 'দ্রুত যোগাযোগ'}
                      </h4>
                      <div className="space-y-1.5 text-xs">
                        <motion.div 
                          className="flex items-center gap-1.5"
                          whileHover={{ x: 5 }}
                        >
                          <Phone size={12} className="text-green-600" />
                          <span>+8801712525910</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-1.5"
                          whileHover={{ x: 5 }}
                        >
                          <Mail size={12} className="text-blue-600" />
                          <span>ridoan.zisan@gmail.com</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-1.5"
                          whileHover={{ x: 5 }}
                        >
                          <MapPin size={12} className="text-purple-600" />
                          <span>{language === 'en' ? 'Bogura, Bangladesh' : 'বগুড়া, বাংলাদেশ'}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMenu;
