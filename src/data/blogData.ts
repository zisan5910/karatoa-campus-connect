// Define BlogPost interface
export interface BlogPost {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  date: string;
  author: {
    en: string;
    bn: string;
  };
  type: string;
  imageUrl?: string;
  embeddedContent?: {
    type: string;
    src: string;
    width?: number;
    height?: number;
  };
  projectLinks?: Array<{
    url: string;
    label: {
      en: string;
      bn: string;
    };
  }>;
}

export const blogData: BlogPost[] = [
    {
    id: "linkedin-post-2",
    title: {
      en: "",
      bn: ""
    },
    content: {
      en: "",
      bn: ""
    },
    date: "2024-03-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    embeddedContent: {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7353463814165544962",
      width: 504,
      height: 880
    }
  },
  {
    id: "linkedin-post-1",
    title: {
      en: "",
      bn: ""
    },
    content: {
      en: "",
      bn: ""
    },
    date: "2024-03-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    embeddedContent: {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7287825227651153920",
      width: 504,
      height: 983
    }
  },
    {
    id: "facebook-video-1",
    title: {
      en: "",
      bn: ""
    },
    content: {
      en: "",
      bn: ""
    },
    date: "2024-03-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    embeddedContent: {
      type: "facebook",
      src: "https://www.facebook.com/plugins/video.php?height=247&href=https%3A%2F%2Fwww.facebook.com%2FFaatihaAayatOfficial%2Fvideos%2F1354348278887913%2F&show_text=true&width=560",
      width: 560,
      height: 462
    }
  },
    {
    id: "linkedin-post-3",
    title: {
      en: "",
      bn: ""
    },
    content: {
      en: "",
      bn: ""
    },
    date: "2024-03-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    embeddedContent: {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7353716507916345348",
      width: 504,
      height: 3710
    }
  },
   {
    id: "facebook-post-1",
    title: {
      en: "",
      bn: ""
    },
    content: {
      en: "",
      bn: ""
    },
    date: "2024-03-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    embeddedContent: {
      type: "facebook",
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBOBDO.B5800%2Fposts%2Fpfbid0X18pcYTvt8wbaFT1AiLCUCiUYVtPTuRUVEPrkosnyYRCyjGCmAccifi1n4j1rNUml&show_text=true&width=500",
      width: 500,
      height: 712
    }
  },
    {
    id: "post",
    title: {
      en: "",
      bn: ""
    },
    content: {
      en: `The holy scriptures, no matter who wrote them, do not contain a single word without purpose. Every sentence is light and guidance for life. 🤍✨
🌼 What does religion teach us? 🌼
Religions may be different, but the core message is the same—humanity. Every religion has some eternal teachings. Let's take a quick look—
🕌 Islam teaches:
– To uphold justice
– To stand by the poor and the weak
– To be patient and forgiving
– To maintain honesty and trustworthiness
🕉️ Hinduism teaches:
– To perform one's duties with dedication
– To accept the consequences of one's actions (karma)
– Non-violence, compassion, and tolerance
– Self-restraint and self-knowledge
☸️ Buddhism teaches:
– To follow the middle path (moderation)
– To calm the mind through meditation
– To show compassion to all living beings
– To understand the cause of suffering and seek the path to liberation
✝️ Christianity teaches:
– To spread selfless love, even to enemies
– To stand by the helpless and the oppressed
– To stay away from pride
– Self-sacrifice and empathy
✡️ Judaism teaches:
– To uphold justice and morality
– To value family and society
– To pursue knowledge and education
– To learn from the past and move forward
🪯 Sikhism teaches:
– To work hard on the righteous path
– To selflessly help others
– To remain humble and modest
– To see everyone as equal
🌍 Final Words:
All religions teach us how to be good people.
Honesty, kindness, compassion, humility, tolerance—these are our true identity.
🧡 Let humanity be our ultimate religion.

#ridoan2007 #humanity #islam #hinduism #buddhism #christianity #judaism #sikhism`,
      bn: `পবিত্র গ্রন্থগুলো যেই লিখেছেন না কেন, সেখানে একটি শব্দও অকারণ নেই। প্রতিটি বাক্যই জীবনের জন্য আলো আর পথনির্দেশনা। 🤍✨
🌼 ধর্ম আমাদের কী শেখায়? 🌼
ধর্ম ভিন্ন হতে পারে, কিন্তু মূল বার্তাটা একটাই—মানবতা। প্রতিটি ধর্মেই আছে কিছু চিরন্তন শিক্ষা। একবার চোখ বুলিয়ে দেখা যাক—
🕌 ইসলাম শেখায়:
– ন্যায়বিচার করা
– দরিদ্র ও দুর্বলদের পাশে দাঁড়ানো
– ধৈর্য ধরা ও ক্ষমা করা
– সততা ও বিশ্বাসযোগ্যতা বজায় রাখা
🕉️ হিন্দুধর্ম শেখায়:
– কর্তব্য নিষ্ঠার সাথে পালন করা
– কর্মফল মেনে নেওয়া
– অহিংসা, সহানুভূতি ও সহনশীলতা
– আত্মসংযম ও আত্মজ্ঞান
☸️ বৌদ্ধধর্ম শেখায়:
– মধ্যপন্থা অবলম্বন করা
– ধ্যানের মাধ্যমে মন শান্ত রাখা
– সব জীবের প্রতি দয়া দেখানো
– দুঃখের কারণ বুঝে মুক্তির পথ খোঁজা
✝️ খ্রিষ্টধর্ম শেখায়:
– নিঃস্বার্থ ভালোবাসা ছড়ানো, এমনকি শত্রুকেও
– অসহায় ও নিপীড়িতদের পাশে থাকা
– অহংকার থেকে দূরে থাকা
– আত্মত্যাগ ও সহমর্মিতা
✡️ ইহুদি ধর্ম শেখায়:
– ন্যায়নীতি ও নৈতিকতা বজায় রাখা
– পরিবার ও সমাজকে মূল্য দেওয়া
– জ্ঞান ও শিক্ষার চর্চা
– অতীত থেকে শিক্ষা নিয়ে এগিয়ে চলা
🪯 শিখ ধর্ম শেখায়:
– সৎ পথে কঠোর পরিশ্রম করা
– নিঃস্বার্থভাবে মানুষের উপকার করা
– বিনয়ী ও নম্র থাকা
– সবাইকে সমান চোখে দেখা
🌍 শেষ কথা:
সব ধর্মই আমাদের শেখায় কিভাবে ভালো মানুষ হওয়া যায়।
সততা, দয়া, সহানুভূতি, বিনয়, সহনশীলতা—এসবই আমাদের আসল পরিচয়।
🧡 মানবতাই হোক আমাদের সর্বোচ্চ ধর্ম।
#ridoan2007 #humanity #islam #hinduism #buddhism #christianity #judaism #sikhism`
    },
    date: "2024-12-01",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/500309008_122239238312025261_1807884880160033095_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iP3ru2h3KLAQ7kNvwEcDkbB&_nc_oc=AdmlD-UXYoDOncdeqnWZEaxdbEgr-KkXCk13SS_z49FPp6VqUafRKzE2GIO_n9Oo53s&_nc_zt=23&_nc_ht=scontent.fdac139-1.fna&_nc_gid=yCalgLcSMNB9B_NbEdbydA&oh=00_AfYjWwXYZXjcc01qnBDHj-5sgqXP6Yxv6B-89eD579gHzA&oe=68DA0D5A",
  },
  {
    id: "portfolio",
    title: {
      en: "Personal Portfolio",
      bn: "পার্সোনাল পোর্টফোলিও"
    },
    content: {
      en: `My personal portfolio website showcasing my skills, projects and experience as a web developer. This responsive website features modern design principles and demonstrates my capabilities in frontend development. Built with HTML, CSS, JavaScript and modern frameworks, it serves as a comprehensive showcase of my work and achievements in the web development field.`,
      bn: `ওয়েব ডেভেলপার হিসেবে আমার দক্ষতা, প্রকল্প এবং অভিজ্ঞতা প্রদর্শনকারী আমার ব্যক্তিগত পোর্টফোলিও ওয়েবসাইট। এই রেসপনসিভ ওয়েবসাইটটি আধুনিক ডিজাইন নীতির বৈশিষ্ট্য প্রদর্শন করে এবং ফ্রন্টএন্ড ডেভেলপমেন্টে আমার সক্ষমতা প্রদর্শন করে। HTML, CSS, JavaScript এবং আধুনিক ফ্রেমওয়ার্ক দিয়ে তৈরি, এটি ওয়েব ডেভেলপমেন্ট ক্ষেত্রে আমার কাজ এবং অর্জনের একটি ব্যাপক প্রদর্শনী হিসেবে কাজ করে।`
    },
    date: "2024-12-01",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://github.com/RidoanDev.png",
    projectLinks: [
      {
        url: "https://ridoan-zisan.netlify.app",
        label: {
          en: "Visit Portfolio",
          bn: "পোর্টফোলিও দেখুন"
        }
      }
    ]
  },
  {
    id: "dhunathub",
    title: {
      en: "DhunatHub - Local Help Directory",
      bn: "ধুনাটহাব - স্থানীয় সাহায্য ডিরেক্টরি"
    },
    content: {
      en: `DhunatHub is a comprehensive local help directory web application that connects people with local services and resources. This platform helps community members find reliable service providers, local businesses, and essential resources in their area. The application features user reviews, service categories, and an intuitive interface that makes finding local help effortless and efficient.`,
      bn: `ধুনাটহাব একটি ব্যাপক স্থানীয় সাহায্য ডিরেক্টরি ওয়েব অ্যাপ্লিকেশন যা মানুষকে স্থানীয় সেবা এবং সম্পদের সাথে সংযুক্ত করে। এই প্ল্যাটফর্মটি সম্প্রদায়ের সদস্যদিকে তাদের এলাকায় নির্ভরযোগ্য সেবা প্রদানকারী, স্থানীয় ব্যবসা এবং প্রয়োজনীয় সম্পদ খুঁজে পেতে সাহায্য করে। অ্যাপ্লিকেশনটিতে ব্যবহারকারীর পর্যালোচনা, সেবা বিভাগ এবং একটি স্বজ্ঞাত ইন্টারফেস রয়েছে যা স্থানীয় সাহায্য খুঁজে পাওয়া সহজ এবং দক্ষ করে তোলে।`
    },
    date: "2024-11-20",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/KvXCcTcg/dhunathub.png",
    projectLinks: [
      {
        url: "https://dhunat.netlify.app",
        label: {
          en: "Explore Directory",
          bn: "ডিরেক্টরি এক্সপ্লোর করুন"
        }
      }
    ]
  },
  {
    id: "zupramart", 
    title: {
      en: "ZupraMart - E-commerce Platform",
      bn: "ZupraMart - ই-কমার্স প্ল্যাটফর্ম"
    },
    content: {
      en: `ZupraMart is a complete e-commerce web application featuring product listings, shopping cart system, and secure checkout process. This platform provides a seamless shopping experience with user authentication, product categories, search functionality, and order management. Built with modern web technologies, it demonstrates my ability to create complex, user-friendly e-commerce solutions.`,
      bn: `ZupraMart একটি সম্পূর্ণ ই-কমার্স ওয়েব অ্যাপ্লিকেশন যাতে পণ্য তালিকা, শপিং কার্ট সিস্টেম এবং নিরাপদ চেকআউট প্রক্রিয়া রয়েছে। এই প্ল্যাটফর্মটি ব্যবহারকারী প্রমাণীকরণ, পণ্য বিভাগ, অনুসন্ধান কার্যকারিতা এবং অর্ডার ব্যবস্থাপনার সাথে একটি নিরবিচ্ছিন্ন শপিং অভিজ্ঞতা প্রদান করে। আধুনিক ওয়েব প্রযুক্তি দিয়ে তৈরি, এটি জটিল, ব্যবহারকারী-বান্ধব ই-কমার্স সমাধান তৈরি করার আমার সক্ষমতা প্রদর্শন করে।`
    },
    date: "2024-11-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://zupramart.netlify.app/ZupraMart.jpg",
    projectLinks: [
      {
        url: "https://zupramart.netlify.app",
        label: {
          en: "Shop Now",
          bn: "এখনই কিনুন"
        }
      }
    ]
  },
  {
    id: "bobdo",
    title: {
      en: "BOBDO - Blood Donation Organization",
      bn: "বোবডো - রক্তদান সংগঠন"
    },
    content: {
      en: `BOBDO is a blood donation organization web application that connects blood donors with recipients in need. This life-saving platform helps reduce response time for blood requests by 40% and has served over 68,000 community members. The application features donor registration, blood request management, and real-time matching between donors and recipients, potentially saving countless lives.`,
      bn: `বোবডো একটি রক্তদান সংগঠন ওয়েব অ্যাপ্লিকেশন যা রক্তদাতাদের প্রয়োজনীয় গ্রহীতাদের সাথে সংযুক্ত করে। এই জীবনরক্ষাকারী প্ল্যাটফর্মটি রক্তের অনুরোধের জন্য প্রতিক্রিয়ার সময় 40% কমাতে সাহায্য করে এবং 68,000+ সম্প্রদায়ের সদস্যদের সেবা প্রদান করেছে। অ্যাপ্লিকেশনটিতে দাতা নিবন্ধন, রক্ত অনুরোধ ব্যবস্থাপনা এবং দাতা ও গ্রহীতাদের মধ্যে রিয়েল-টাইম ম্যাচিংয়ের বৈশিষ্ট্য রয়েছে, যা সম্ভাব্যভাবে অগণিত জীবন বাঁচায়।`
    },
    date: "2024-11-10",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/FH2r1Q8D/bobdo-removebg-preview.png",
    projectLinks: [
      {
        url: "https://bobdo.vercel.app",
        label: {
          en: "Donate Blood",
          bn: "রক্তদান করুন"
        }
      }
    ]
  },
  {
    id: "zpad",
    title: {
      en: "Zpad - Note Taking Application",
      bn: "জেডপ্যাড - নোট টেকিং অ্যাপ্লিকেশন"
    },
    content: {
      en: `Zpad is a feature-rich note-taking application with markdown support and comprehensive organizational tools. This productivity app helps users create, organize, and manage their notes efficiently with features like categories, tags, search functionality, and cloud synchronization. The markdown support allows for rich text formatting while maintaining simplicity and focus on content creation.`,
      bn: `জেডপ্যাড একটি বৈশিষ্ট্যসমৃদ্ধ নোট টেকিং অ্যাপ্লিকেশন যাতে মার্কডাউন সমর্থন এবং ব্যাপক সাংগঠনিক সরঞ্জাম রয়েছে। এই উৎপাদনশীলতা অ্যাপটি ব্যবহারকারীদের বিভাগ, ট্যাগ, অনুসন্ধান কার্যকারিতা এবং ক্লাউড সিঙ্ক্রোনাইজেশনের মতো বৈশিষ্ট্যগুলির সাথে তাদের নোটগুলি দক্ষতার সাথে তৈরি, সংগঠিত এবং পরিচালনা করতে সহায়তা করে। মার্কডাউন সমর্থন সামগ্রী তৈরির উপর সরলতা এবং ফোকাস বজায় রেখে সমৃদ্ধ টেক্সট ফরম্যাটিংয়ের অনুমতি দেয়।`
    },
    date: "2024-11-05",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/vBkkVgWk/zpad.png",
    projectLinks: [
      {
        url: "https://zpad.netlify.app",
        label: {
          en: "Start Noting",
          bn: "নোট নেওয়া শুরু করুন"
        }
      }
    ]
  },
  {
    id: "youthhope",
    title: {
      en: "YouthHopeBD - Youth Organization Platform",
      bn: "ইয়ুথহোপবিডি - যুব সংগঠন প্ল্যাটফর্ম"
    },
    content: {
      en: `YouthHopeBD is a website for a youth organization focused on community development and social activities. This platform serves as a hub for youth engagement, featuring event management, volunteer opportunities, community projects, and educational resources. The website helps connect young people with meaningful social initiatives and provides tools for community organizing and youth development.`,
      bn: `ইয়ুথহোপবিডি একটি যুব সংগঠনের ওয়েবসাইট যা সম্প্রদায় উন্নয়ন এবং সামাজিক কার্যক্রমে মনোনিবেশ করে। এই প্ল্যাটফর্মটি ইভেন্ট ব্যবস্থাপনা, স্বেচ্ছাসেবক সুযোগ, সম্প্রদায় প্রকল্প এবং শিক্ষামূলক সম্পদ বৈশিষ্ট্যযুক্ত যুব সংযুক্তির একটি হাব হিসেবে কাজ করে। ওয়েবসাইটটি তরুণদের অর্থপূর্ণ সামাজিক উদ্যোগের সাথে সংযুক্ত করতে সাহায্য করে এবং সম্প্রদায় সংগঠন এবং যুব উন্নয়নের জন্য সরঞ্জাম প্রদান করে।`
    },
    date: "2024-10-28",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/rskLpzPD/IMG-20250916-021919.jpg",
    projectLinks: [
      {
        url: "https://youthhope-bd.netlify.app",
        label: {
          en: "Visit Website",
          bn: "ওয়েবসাইট দেখুন"
        }
      }
    ]
  },
  {
    id: "uniconverter",
    title: {
      en: "UniConverter - Universal Conversion Tool",
      bn: "ইউনিকনভার্টার - সর্বজনীন রূপান্তর সরঞ্জাম"
    },
    content: {
      en: `UniConverter is a universal converter web application supporting multiple measurement types and units. This utility tool provides conversion capabilities for length, weight, temperature, currency, and various other measurement systems. The intuitive interface and comprehensive unit coverage make it an essential tool for students, professionals, and anyone needing quick and accurate conversions in their daily work or studies.`,
      bn: `ইউনিকনভার্টার একটি সর্বজনীন কনভার্টার ওয়েব অ্যাপ্লিকেশন যা একাধিক পরিমাপের ধরন এবং ইউনিট সমর্থন করে। এই ইউটিলিটি টুলটি দৈর্ঘ্য, ওজন, तापমাত্রा, মুদ্রা এবং বিভিন্ন অন্যান্য পরিমাপ সিস্টেমের জন্য রূপান্তর ক্ষমতা প্রদান করে। স্বজ্ঞাত ইন্টারফেস এবং ব্যাপক ইউনিট কভারেজ এটিকে শিক্ষার্থী, পেশাদার এবং যে কেউ তাদের দৈনন্দিন কাজ বা পড়াশোনায় দ্রুত এবং সঠিক রূপান্তরের প্রয়োজন জন্য একটি অপরিহার্য সরঞ্জাম করে তোলে।`
    },
    date: "2024-10-22",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান مাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/qqKYXJwR/uniconverter.png",
    projectLinks: [
      {
        url: "https://uniconverter.netlify.app",
        label: {
          en: "Convert Now",
          bn: "এখনই রূপান্তর করুন"
        }
      }
    ]
  },
  {
    id: "hscian",
    title: {
      en: "HSCian - E-learning Platform for Students",
      bn: "এইচএসসিয়ান - শিক্ষার্থীদের জন্য ই-লার্নিং প্ল্যাটফর্ম"
    },
    content: {
      en: `HSCian is an e-learning web application specifically designed for HSC students, providing comprehensive study materials and educational resources. This platform offers chapter-wise preparation guides, smart study tips, built-in HTML and C compilers for practical learning, and a wealth of educational content. Completely non-profit, HSCian aims to make quality education accessible to all students regardless of their economic background.`,
      bn: `এইচএসসিয়ান একটি ই-লার্নিং ওয়েব অ্যাপ্লিকেশন যা বিশেষভাবে এইচএসসি শিক্ষার্থীদের জন্য ডিজাইন করা হয়েছে, যা ব্যাপক অধ্যয়ন সামগ্রী এবং শিক্ষামূলক সম্পদ প্রদান করে। এই প্ল্যাটফর্মটি অধ্যায়ভিত্তিক প্রস্তুতির গাইড, স্মার্ট অধ্যয়নের টিপস, ব্যবহারিক শেখার জন্য অন্তর্নিহিত HTML এবং C কম্পাইলার এবং শিক্ষামূলক সামগ্রীর প্রাচুর্য অফার করে। সম্পূর্ণ অলাভজনক, এইচএসসিয়ান তাদের অর্থনৈতিক পটভূমি নির্বিশেষে সকল শিক্ষার্থীর জন্য মানসম্মত শিক্ষা প্রবেশযোগ্য করার লক্ষ্য রাখে।`
    },
    date: "2024-10-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/KjfkwDnN/HSCian-20250922-011814-0000.png",
    projectLinks: [
      {
        url: "https://hscian.netlify.app",
        label: {
          en: "Start Learning",
          bn: "শেখা শুরু করুন"
        }
      }
    ]
  },
  // Additional projects from the provided image URLs
  {
    id: "sound-memory-game",
    title: {
      en: "Sound Memory Game",
      bn: "সাউন্ড মেমরি গেম"
    },
    content: {
      en: `A fun and interactive sound memory game that challenges players to match pairs of sounds. This game tests auditory memory and concentration skills with increasing difficulty levels. Features include multiple sound themes, score tracking, and a timer to enhance the gaming experience.`,
      bn: `একটি মজাদার এবং ইন্টারেক্টিভ সাউন্ড মেমরি গেম যা খেলোয়াড়দেরকে শব্দের জোড়া মেলানোর চ্যালেঞ্জ দেয়। এই গেমটি ক্রমবর্ধমান কঠিন স্তরগুলির সাথে শ্রবণ স্মৃতি এবং একাগ্রতা দক্ষতা পরীক্ষা করে। বৈশিষ্ট্যগুলির মধ্যে একাধিক সাউন্ড থিম, স্কোর ট্র্যাকিং এবং গেমিং অভিজ্ঞতা বাড়ানোর জন্য একটি টাইমার অন্তর্ভুক্ত।`
    },
    date: "2024-09-10",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/qvxP57T6/memorygame.png",
    projectLinks: [
      {
        url: "https://mindgame-i.netlify.app",
        label: {
          en: "Play Game",
          bn: "গেম খেলুন"
        }
      }
    ]
  },
  {
    id: "snake-game",
    title: {
      en: "Snake Game",
      bn: "স্নেক গেম"
    },
    content: {
      en: `A classic snake game implementation with modern features. Control the snake to eat food and grow longer without hitting the walls or yourself. Features include score tracking, increasing difficulty, and responsive controls for a smooth gaming experience on any device.`,
      bn: `আধুনিক বৈশিষ্ট্য সহ একটি ক্লাসিক স্নেক গেম বাস্তবায়ন। দেয়াল বা নিজেকে আঘাত না করে খাবার খেতে এবং লম্বা হতে সাপটি নিয়ন্ত্রণ করুন। বৈশিষ্ট্যগুলির মধ্যে স্কোর ট্র্যাকিং, ক্রমবর্ধমান কঠিনতা এবং যেকোনো ডিভাইসে মসৃণ গেমিং অভিজ্ঞতার জন্য প্রতিক্রিয়াশীল নিয়ন্ত্রণ অন্তর্ভুক্ত।`
    },
    date: "2024-09-05",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/Jhh2YcxS/snakegame.png",
    projectLinks: [
      {
        url: "https://snake-i.netlify.app/",
        label: {
          en: "Play Game",
          bn: "গেম খেলুন"
        }
      }
    ]
  },
  {
    id: "thetacode",
    title: {
      en: "ThetaCode - Programming Platform",
      bn: "থিটাকোড - প্রোগ্রামিং প্ল্যাটফর্ম"
    },
    content: {
      en: `ThetaCode is a programming platform designed to help developers learn and practice coding skills. It offers coding challenges, tutorials, and a built-in code editor for multiple programming languages. The platform supports collaborative coding and provides real-time feedback on code quality and performance.`,
      bn: `থিটাকোড是一個 প্রোগ্রামিং প্ল্যাটফর্ম যা ডেভেলপারদের কোডিং দক্ষতা শিখতে এবং অনুশীলন করতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। এটি একাধিক প্রোগ্রামিং ভাষার জন্য কোডিং চ্যালেঞ্জ, টিউটোরিয়াল এবং একটি অন্তর্নির্মিত কোড এডিটর অফার করে। প্ল্যাটফর্মটি সহযোগিতামূলক কোডিং সমর্থন করে এবং কোডের গুণমান এবং কর্মক্ষমতার উপর রিয়েল-টাইম ফিড백 প্রদান করে।`
    },
    date: "2024-08-20",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/kMRkdsCm/thetacode.png",
    projectLinks: [
      {
        url: "https://thetacode.netlify.app/",
        label: {
          en: "Visit Platform",
          bn: "প্ল্যাটফর্ম দেখুন"
        }
      }
    ]
  },
  {
    id: "tiktaktoe",
    title: {
      en: "TikTakToe - Classic Game",
      bn: "টিকট্যাকটো - ক্লাসিক গেম"
    },
    content: {
      en: `A digital implementation of the classic Tic-Tac-Toe game with enhanced features. Play against the computer or a friend with multiple difficulty levels and an intuitive interface. The game includes score tracking, game history, and the option to customize player tokens.`,
      bn: `উন্নত বৈশিষ্ট্য সহ ক্লাসিক টিক-ট্যাক-টো গেমের একটি ডিজিটাল বাস্তবায়ন। একাধিক কঠিনতা স্তর এবং একটি স্বজ্ঞাত ইন্টারফেস সহ কম্পিউটার বা বন্ধুর বিরুদ্ধে খেলুন। গেমটিতে স্কোর ট্র্যাকিং, গেম ইতিহাস এবং খেলোয়াড় টোকেন কাস্টমাইজ করার বিকল্প অন্তর্ভুক্ত।`
    },
    date: "2024-08-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/g2m58PZz/tiktaktoe.png",
    projectLinks: [
      {
        url: "https://xox-i.netlify.app/",
        label: {
          en: "Play Game",
          bn: "গেম খেলুন"
        }
      }
    ]
  },
  {
    id: "toolhub",
    title: {
      en: "ToolHub - Developer Utilities",
      bn: "টুলহাব - ডেভেলপার ইউটিলিটিজ"
    },
    content: {
      en: `ToolHub is a collection of essential developer tools and utilities in one convenient platform. It includes code formatters, validators, converters, and other helpful tools that streamline the development workflow. The platform is designed to save developers time by providing quick access to commonly needed utilities.`,
      bn: `টুলহাব একটি সুবিধাজনক প্ল্যাটফর্মে প্রয়োজনীয় ডেভেলপার টুল এবং ইউটিলিটির সংগ্রহ। এতে কোড ফরম্যাটার, বৈধতা পরীক্ষক, কনভার্টার এবং অন্যান্য সহায়ক টুল অন্তর্ভুক্ত রয়েছে যা ডেভেলপমেন্ট ওয়ার্কফ্লোকে প্রবাহিত করে। প্ল্যাটফর্মটি সাধারণভাবে প্রয়োজনীয় ইউটিলিটিগুলির দ্রুত অ্যাক্সেস প্রদান করে ডেভেলপারদের সময় বাঁচানোর জন্য ডিজাইন করা হয়েছে।`
    },
    date: "2024-08-10",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/vZyRhVpd/toolhub.png",
    projectLinks: [
      {
        url: "https://toolhub-i.netlify.app/",
        label: {
          en: "Explore Tools",
          bn: "টুলগুলি এক্সপ্লোর করুন"
        }
      }
    ]
  },
  {
    id: "typing-test",
    title: {
      en: "Typing Test - Speed Assessment",
      bn: "টাইপিং টেস্ট - গতি মূল্যায়ন"
    },
    content: {
      en: `A typing test application that measures typing speed and accuracy. Users can practice with various text samples and track their progress over time. The application provides detailed statistics including words per minute (WPM), accuracy percentage, and error analysis to help improve typing skills.`,
      bn: `একটি টাইপিং টেস্ট অ্যাপ্লিকেশন যা টাইপিং গতি এবং নির্ভুলতা পরিমাপ করে। ব্যবহারকারীরা বিভিন্ন টেক্সট নমুনা দিয়ে অনুশীলন করতে পারে এবং সময়ের সাথে সাথে তাদের অগ্রগতি ট্র্যাক করতে পারে। অ্যাপ্লিকেশনটি বিস্তারিত পরিসংখ্যান প্রদান করে including words per minute (WPM), নির্ভুলতা শতাংশ এবং ত্রুটি বিশ্লেষণ টাইপিং দক্ষতা উন্নত করতে সাহায্য করার জন্য।`
    },
    date: "2024-08-05",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article",
    imageUrl: "https://i.postimg.cc/fRCPvgcx/typingtest.png",
    projectLinks: [
      {
        url: "https://typing-i.netlify.app/",
        label: {
          en: "Take Test",
          bn: "টেস্ট নিন"
        }
      }
    ]
  }
];
