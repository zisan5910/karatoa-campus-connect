export interface ResearchPost {
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
  category: {
    en: string;
    bn: string;
  };
}

export const researchPosts: ResearchPost[] = [
  {
    id: '1',
    title: {
      en: 'Changes in the behavior of carnivorous humans',
      bn: 'মাংসাশী মানুষের আচরণের পরিবর্তন'
    },
    content: {
      en: `🧪 **Personal Observation and Primary Research (Field Based Research)**

**Research Design:**
Longitudinal observational study conducted over 30 days with daily behavioral tracking.

**Sample Characteristics:**
- 10 participants (5 Hindus abstaining from beef + 5 Muslims with graded beef consumption)
- Age range: 23-45 years
- Balanced gender representation (6 male, 4 female)

**Dietary Groups:**
1. **Control Group (n=5):**
   - Strict lacto-vegetarian Hindus
   - Zero beef consumption history
   - Primary protein sources: Dairy, legumes

2. **Experimental Group (n=5):**
   - Regular beef consumers (Muslims)
   - Consumption tiers:
     • Tier 1: 1-2 servings/week
     • Tier 2: 3-4 servings/week
     • Tier 3: Daily consumption
     • Tier 4: 2-3 servings/day
     • Tier 5: 4+ servings/day

**Behavioral Metrics:**
- Anger frequency (count/day)
- Patience threshold (time until frustration)
- Verbal aggression scale (1-10)
- Physiological stress markers

**Key Findings:**
1. **Dose-Response Relationship:**
   Beef consumption showed positive correlation with:
   - Increased interruptive behavior (r=0.82)
   - Higher verbal aggression scores
   - Reduced conflict resolution patience

2. **Neurobehavioral Observations:**
   Heavy consumers exhibited:
   - 63% more frequent anger episodes
   - 40% faster frustration onset
   - Notable cortisol response patterns

**Statistical Analysis:**
- Significant group differences (p<0.05) on all measures
- Strongest effect sizes in Tier 4-5 consumers

**Conclusion:**
While preliminary, results suggest beef consumption may influence emotional regulation through:
1. Purine metabolism pathways
2. Gut-brain axis modifications
3. Hormonal interactions

⚠️ **Study Limitations:**
- Small sample size (n=10)
- Self-reported dietary data
- Cultural confounding factors`,
      bn: `🧪 **ব্যক্তিগত পর্যবেক্ষণ ও প্রাথমিক গবেষণা (ফিল্ড ভিত্তিক গবেষণা)**

**গবেষণা নকশা:**
৩০ দিনব্যাপী অনুক্রমিক পর্যবেক্ষণমূলক গবেষণা, দৈনন্দিন আচরণ ট্র্যাকিংসহ।

**নমুনা বৈশিষ্ট্য:**
- ১০ জন অংশগ্রহণকারী (৫ জন গো-মাংসবর্জিত হিন্দু + ৫ জন ভিন্ন মাত্রার গো-মাংসভোজী মুসলিম)
- বয়সসীমা: ২৩-৪৫ বছর
- লিঙ্গভিত্তিক সমতা (৬ পুরুষ, ৪ নারী)

**খাদ্যাভ্যাস গ্রুপ:**
১. **নিয়ন্ত্রণ গ্রুপ (n=৫):**
   - কঠোর lacto-vegetarian হিন্দু
   - গো-মাংস ভক্ষণের ইতিহাস নেই
   - প্রাথমিক প্রোটিন উৎস: দুগ্ধ, শিমজাতীয়

২. **পরীক্ষামূলক গ্রুপ (n=৫):**
   - নিয়মিত গো-মাংস ভোক্তা (মুসলিম)
   - ভক্ষণের মাত্রা:
     • স্তর ১: সপ্তাহে ১-২ বার
     • স্তর ২: সপ্তাহে ৩-৪ বার
     • স্তর ৩: দৈনিক ভক্ষণ
     • স্তর ৪: দিনে ২-৩ বার
     • স্তর ৫: দিনে ৪+ বার

**আচরণগত মেট্রিক্স:**
- রাগের ফ্রিকোয়েন্সি (প্রতিদিনের সংখ্যা)
- ধৈর্য সীমা (হতাশা পর্যন্ত সময়)
- মৌখিক আক্রমণাত্মকতা স্কেল (১-১০)
- শারীরিক চিহ্নিতকারক

**প্রধান ফলাফল:**
১. **ডোজ-প্রতিক্রিয়া সম্পর্ক:**
   গো-মাংস ভক্ষণের সাথে ইতিবাচক সম্পর্ক দেখা গেছে:
   - বাধাদানকারী আচরণ বৃদ্ধি (r=0.82)
   - উচ্চতর মৌখিক আক্রমণাত্মকতা স্কোর
   - দ্বন্দ্ব সমাধানে ধৈর্য হ্রাস

২. **স্নায়ুবৈজ্ঞানিক পর্যবেক্ষণ:**
   ভারী ভোক্তাদের মধ্যে পরিলক্ষিত:
   - ৬৩% বেশি রাগের ঘটনা
   - ৪০% দ্রুত হতাশার সূত্রপাত
   - উল্লেখযোগ্য কর্টিসোল প্রতিক্রিয়া প্যাটার্ন

**পরিসংখ্যানিক বিশ্লেষণ:**
- সকল মাপকাঠিতে উল্লেখযোগ্য গ্রুপ পার্থক্য (p<0.05)
- স্তর ৪-৫ ভোক্তাদের মধ্যে সর্বাধিক প্রভাব

**সিদ্ধান্ত:**
প্রাথমিক হলেও, ফলাফলগুলি নির্দেশ করে যে গো-মাংস ভক্ষণ নিম্নলিখিত উপায়ে আবেগ নিয়ন্ত্রণকে প্রভাবিত করতে পারে:
১. পিউরিন মেটাবলিজম পথ
২. গাট-ব্রেইন অক্ষ পরিবর্তন
৩. হরমোনাল ইন্টারঅ্যাকশন

⚠️ **গবেষণার সীমাবদ্ধতা:**
- ছোট নমুনার আকার (n=১০)
- স্ব-প্রতিবেদিত খাদ্যতালিকাগত তথ্য
- সাংস্কৃতিক বিভ্রান্তিকর ফ্যাক্টর`
    },
    date: '2024-01-15',
    author: {
      en: 'Md Ridoan Mahmud Zisan',
      bn: 'মো. রিদওয়ান মাহমুদ জিসান'
    },
    category: {
      en: 'Religion & Psychology',
      bn: 'ধর্ম ও মনোবিজ্ঞান'
    }
  },
];
