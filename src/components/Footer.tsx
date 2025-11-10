import { Linkedin, MessageCircle, Facebook, Twitter, Youtube, Github, Mail } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'bn';
}

const Footer = ({ language }: FooterProps) => {
  const footerData = {
    social: {
      title: {
        en: 'Connect with me',
        bn: 'আমার সাথে যুক্ত হোন',
      },
      links: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          ),
          href: 'https://www.google.com/search?q=Md+Ridoan+Mahmud+Zisan',
          color: 'hover:text-blue-500',
        },
        {
          icon: <Linkedin size={24} />,
          href: 'https://www.linkedin.com/in/ridoan-zisan',
          color: 'hover:text-blue-400',
        },
        {
          icon: <Github size={24} />,
          href: 'https://github.com/RidoanDev',
          color: 'hover:text-blue-600',
        },
        {
          icon: <Facebook size={24} />,
          href: 'https://www.facebook.com/rid0anzisan',
          color: 'hover:text-blue-500',
        },
        {
          icon: <Youtube size={24} />,
          href: 'https://youtube.com/@ridoan-zisan',
          color: 'hover:text-red-500',
        },
        {
          icon: <Mail size={24} />,
          href: 'mailto:ridoan.zisan@gmail.com',
          color: 'hover:text-blue-600',
        },
        {
          icon: <Twitter size={24} />,
          href: 'https://x.com/ridoan_zisan',
          color: 'hover:text-sky-400',
        },
        {
          icon: <MessageCircle size={24} />,
          href: 'https://wa.me/8801712525910',
          color: 'hover:text-green-400',
        },
      ],
    },
  };

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
                <Mail className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {footerData.social.title[language]}
              </h2>
            </div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {footerData.social.links.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${social.color} transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20`}
                aria-label={`Social link ${index}`}
              >
                <div className="transform transition-transform duration-200 group-hover:scale-110">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
