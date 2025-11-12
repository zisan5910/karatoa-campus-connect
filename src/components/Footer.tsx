import { Linkedin, MessageCircle, Facebook, Twitter, Youtube, Github, Mail, Chrome } from 'lucide-react';

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
          icon: <Chrome size={20} />,
          href: 'https://www.google.com/search?q=Md+Ridoan+Mahmud+Zisan',
          color: 'hover:text-blue-400',
        },
        {
          icon: <Linkedin size={20} />,
          href: 'https://www.linkedin.com/in/ridoan-zisan',
          color: 'hover:text-blue-400',
        },
        {
          icon: <Github size={20} />,
          href: 'https://github.com/RidoanDev',
          color: 'hover:text-slate-300',
        },
        {
          icon: <Facebook size={20} />,
          href: 'https://www.facebook.com/rid0anzisan',
          color: 'hover:text-blue-500',
        },
        {
          icon: <Youtube size={20} />,
          href: 'https://youtube.com/@ridoan-zisan',
          color: 'hover:text-red-500',
        },
        {
          icon: <Mail size={20} />,
          href: 'mailto:ridoan.zisan@gmail.com',
          color: 'hover:text-slate-300',
        },
        {
          icon: <Twitter size={20} />,
          href: 'https://x.com/ridoan_zisan',
          color: 'hover:text-sky-400',
        },
        {
          icon: <MessageCircle size={20} />,
          href: 'https://wa.me/8801712525910',
          color: 'hover:text-green-400',
        },
      ],
    },
  };

  return (
    <footer className="relative py-8 overflow-hidden bg-slate-900 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium mb-4 text-slate-300">
            {footerData.social.title[language]}
          </h2>
          
          <div className="flex justify-center flex-wrap gap-3">
            {footerData.social.links.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${social.color} transition-all duration-200 hover:bg-white/20`}
                aria-label={`Social link ${index}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
