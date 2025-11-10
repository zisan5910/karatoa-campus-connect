import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingMenuProps {
  language?: 'en' | 'bn';
}

const FloatingMenu = ({ language = 'en' }: FloatingMenuProps) => {
  const handleChatClick = () => {
    window.open('https://wa.me/8801712525910', '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.button
        onClick={handleChatClick}
        className="group relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        aria-label={language === 'en' ? 'Chat with us' : 'আমাদের সাথে চ্যাট করুন'}
      >
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
        
        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          {language === 'en' ? 'Chat on WhatsApp' : 'WhatsApp এ চ্যাট করুন'}
        </span>
      </motion.button>
    </motion.div>
  );
};

export default FloatingMenu;
