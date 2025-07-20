export interface ResearchPaper {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  abstract: {
    en: string;
    bn: string;
  };
  introduction: {
    en: string;
    bn: string;
  };
  methodology: {
    en: string;
    bn: string;
  };
  findings: {
    en: string;
    bn: string;
  };
  conclusion: {
    en: string;
    bn: string;
  };
  references: {
    en: string[];
    bn: string[];
  };
  keywords: {
    en: string[];
    bn: string[];
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
  doi?: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: '1',
    title: {
      en: 'The Origins of Religion: A Comprehensive Analysis of Religious Genesis',
      bn: 'ধর্মের উৎপত্তি: ধর্মীয় সৃষ্টির একটি বিস্তৃত বিশ্লেষণ'
    },
    abstract: {
      en: `This research paper examines the historical and anthropological origins of religion across human civilizations. Through extensive analysis of archaeological evidence, ancient texts, and comparative religious studies, this work traces the emergence of religious consciousness from prehistoric animism to organized monotheistic traditions. The study investigates when, where, how, and through whom religious systems developed, offering insights into the fundamental human need for spiritual understanding and divine connection.`,
      bn: `এই গবেষণাপত্রে মানব সভ্যতায় ধর্মের ঐতিহাসিক ও নৃতাত্ত্বিক উৎপত্তি পরীক্ষা করা হয়েছে। প্রত্নতাত্ত্বিক প্রমাণ, প্রাচীন গ্রন্থ এবং তুলনামূলক ধর্মীয় অধ্যয়নের বিস্তৃত বিশ্লেষণের মাধ্যমে, এই কাজ প্রাগৈতিহাসিক অ্যানিমিজম থেকে সংগঠিত একেশ্বরবাদী ঐতিহ্যে ধর্মীয় চেতনার উত্থানের সন্ধান করে। গবেষণায় কখন, কোথায়, কীভাবে এবং কার মাধ্যমে ধর্মীয় ব্যবস্থার বিকাশ ঘটেছে তা অনুসন্ধান করা হয়েছে, যা আধ্যাত্মিক বোঝাপড়া এবং ঐশ্বরিক সংযোগের জন্য মানুষের মৌলিক প্রয়োজনের অন্তর্দৃষ্টি প্রদান করে।`
    },
    introduction: {
      en: `Religion has been a defining characteristic of human civilization since the earliest recorded history. The question of religious origins has fascinated scholars, theologians, and anthropologists for centuries. This study seeks to understand the fundamental questions surrounding religious genesis: When did religion first emerge? Where did it originate? How did early humans develop religious consciousness? Through whom were these beliefs transmitted and institutionalized? 

Archaeological evidence suggests that religious behavior emerged during the Middle Paleolithic period (300,000-30,000 years ago), evidenced by ritual burials and symbolic artifacts. The transition from animistic beliefs to organized religion marks a crucial evolutionary step in human cognitive and social development.`,
      bn: `ধর্ম প্রাচীনতম রেকর্ডকৃত ইতিহাস থেকেই মানব সভ্যতার একটি নির্ধারক বৈশিষ্ট্য। ধর্মীয় উৎপত্তির প্রশ্ন শতাব্দী ধরে পণ্ডিত, ধর্মতত্ত্ববিদ এবং নৃতত্ত্ববিদদের মুগ্ধ করেছে। এই গবেষণায় ধর্মীয় সৃষ্টির চারপাশের মৌলিক প্রশ্নগুলি বোঝার চেষ্টা করা হয়েছে: ধর্ম প্রথম কখন আবির্ভূত হয়েছিল? এটি কোথায় উৎপত্তি হয়েছিল? প্রাথমিক মানুষরা কীভাবে ধর্মীয় চেতনা বিকশিত করেছিল? কার মাধ্যমে এই বিশ্বাসগুলি প্রেরিত এবং প্রাতিষ্ঠানিক হয়েছিল?

প্রত্নতাত্ত্বিক প্রমাণ নির্দেশ করে যে ধর্মীয় আচরণ মধ্য প্যালিওলিথিক যুগে (৩,০০,০০০-৩০,০০০ বছর আগে) আবির্ভূত হয়েছিল, যা আচার-অনুষ্ঠানিক কবর এবং প্রতীকী নিদর্শন দ্বারা প্রমাণিত। অ্যানিমিস্টিক বিশ্বাস থেকে সংগঠিত ধর্মে রূপান্তর মানুষের জ্ঞানীয় এবং সামাজিক বিকাশে একটি গুরুত্বপূর্ণ বিবর্তনীয় পদক্ষেপ চিহ্নিত করে।`
    },
    methodology: {
      en: `This research employs a multidisciplinary approach combining:

1. **Historical Analysis**: Examination of ancient texts including Vedas, Torah, Bible, Quran, and archaeological inscriptions
2. **Anthropological Study**: Cross-cultural analysis of religious practices across civilizations
3. **Archaeological Evidence**: Analysis of ritual sites, burial practices, and religious artifacts
4. **Comparative Religion**: Systematic comparison of major world religions and their foundational narratives
5. **Linguistic Analysis**: Study of religious terminology evolution across languages
6. **Sociological Framework**: Understanding the role of social structures in religious development

Data collection involved extensive review of peer-reviewed academic sources, primary religious texts, and archaeological findings from major civilizations including Mesopotamian, Egyptian, Indus Valley, Chinese, and Mesoamerican cultures.`,
      bn: `এই গবেষণায় একটি বহুবিষয়ক পদ্ধতি ব্যবহার করা হয়েছে যা নিম্নলিখিত বিষয়গুলি অন্তর্ভুক্ত করে:

১. **ঐতিহাসিক বিশ্লেষণ**: বেদ, তওরাত, বাইবেল, কুরআন এবং প্রত্নতাত্ত্বিক শিলালিপি সহ প্রাচীন গ্রন্থের পরীক্ষা
২. **নৃতাত্ত্বিক অধ্যয়ন**: সভ্যতা জুড়ে ধর্মীয় অনুশীলনের আন্তঃসাংস্কৃতিক বিশ্লেষণ
৩. **প্রত্নতাত্ত্বিক প্রমাণ**: আচার-অনুষ্ঠানের স্থান, কবরের প্রথা এবং ধর্মীয় নিদর্শনের বিশ্লেষণ
৪. **তুলনামূলক ধর্ম**: প্রধান বিশ্ব ধর্ম এবং তাদের মৌলিক আখ্যানের পদ্ধতিগত তুলনা
৫. **ভাষাগত বিশ্লেষণ**: ভাষা জুড়ে ধর্মীয় পরিভাষার বিবর্তনের অধ্যয়ন
৬. **সমাজতাত্ত্বিক কাঠামো**: ধর্মীয় উন্নয়নে সামাজিক কাঠামোর ভূমিকা বোঝা

তথ্য সংগ্রহে মেসোপটেমীয়, মিশরীয়, সিন্ধু উপত্যকা, চীনা এবং মেসোআমেরিকান সংস্কৃতি সহ প্রধান সভ্যতার পিয়ার-রিভিউ একাডেমিক উৎস, প্রাথমিক ধর্মীয় গ্রন্থ এবং প্রত্নতাত্ত্বিক আবিষ্কারের ব্যাপক পর্যালোচনা জড়িত ছিল।`
    },
    findings: {
      en: `**1. Temporal Origins (When)**
- Earliest religious behavior: ~300,000 years ago (Neanderthal burial practices)
- Organized religious systems: ~10,000-5,000 BCE (Agricultural Revolution)
- Major monotheistic traditions: 2000-600 BCE

**2. Geographic Origins (Where)**
- Mesopotamia: Earliest temple complexes (~9000 BCE)
- Indus Valley: Sophisticated religious iconography (~2500 BCE)
- Egypt: Elaborate afterlife beliefs (~3000 BCE)
- Levant: Monotheistic innovations (~2000 BCE)

**3. Mechanisms of Development (How)**
- Transition from animism to polytheism to monotheism
- Role of agricultural settlements in religious institutionalization
- Development of priestly classes and religious hierarchies
- Codification of beliefs through written texts

**4. Key Figures and Transmitters (Through Whom)**
- Prophetic traditions: Abraham, Moses, Jesus, Muhammad
- Philosophical founders: Buddha, Confucius, Laozi
- Religious reformers and institutional builders
- Oral tradition keepers and scribal communities`,
      bn: `**১. সময়গত উৎপত্তি (কখন)**
- প্রাচীনতম ধর্মীয় আচরণ: ~৩,০০,০০০ বছর আগে (নিয়ান্ডারথাল কবরের প্রথা)
- সংগঠিত ধর্মীয় ব্যবস্থা: ~১০,০০০-৫,০০০ খ্রিস্টপূর্বাব্দ (কৃষি বিপ্লব)
- প্রধান একেশ্বরবাদী ঐতিহ্য: ২০০০-৬০০ খ্রিস্টপূর্বাব্দ

**২. ভৌগোলিক উৎপত্তি (কোথায়)**
- মেসোপটেমিয়া: প্রাচীনতম মন্দির কমপ্লেক্স (~৯০০০ খ্রিস্টপূর্বাব্দ)
- সিন্ধু উপত্যকা: অত্যাধুনিক ধর্মীয় প্রতিমাবিদ্যা (~২৫০০ খ্রিস্টপূর্বাব্দ)
- মিশর: বিস্তৃত পরকালীন বিশ্বাস (~৩০০০ খ্রিস্টপূর্বাব্দ)
- লেভান্ত: একেশ্বরবাদী উদ্ভাবন (~২০০০ খ্রিস্টপূর্বাব্দ)

**৩. উন্নয়নের প্রক্রিয়া (কীভাবে)**
- অ্যানিমিজম থেকে বহুঈশ্বরবাদ থেকে একেশ্বরবাদে রূপান্তর
- ধর্মীয় প্রাতিষ্ঠানিকীকরণে কৃষি বসতির ভূমিকা
- পুরোহিত শ্রেণী এবং ধর্মীয় শ্রেণিবিন্যাসের বিকাশ
- লিখিত গ্রন্থের মাধ্যমে বিশ্বাসের সংহিতাকরণ

**৪. মূল ব্যক্তিত্ব এবং প্রেরণকারী (কার মাধ্যমে)**
- নবীদের ঐতিহ্য: ইব্রাহিম, মূসা, ঈসা, মুহাম্মদ
- দার্শনিক প্রতিষ্ঠাতা: বুদ্ধ, কনফুসিয়াস, লাওজি
- ধর্মীয় সংস্কারক এবং প্রাতিষ্ঠানিক নির্মাতা
- মৌখিক ঐতিহ্য রক্ষক এবং লিপিকার সম্প্রদায়`
    },
    conclusion: {
      en: `This comprehensive analysis reveals that religion emerged as a complex evolutionary adaptation serving multiple functions: social cohesion, moral guidance, existential meaning, and cultural transmission. The origins of religion cannot be attributed to a single source but rather represent a convergent evolution of human spiritual consciousness across diverse civilizations.

The evidence suggests that while the capacity for religious thought emerged with early Homo sapiens, organized religious systems developed alongside agricultural societies, urbanization, and the need for complex social coordination. The transmission of religious ideas through charismatic leaders, institutional structures, and written traditions created the diverse religious landscape we observe today.

Future research should focus on the neurobiological basis of religious experience and the role of environmental factors in shaping religious evolution. Understanding religious origins provides crucial insights into human nature, social organization, and the persistent human quest for transcendent meaning.`,
      bn: `এই বিস্তৃত বিশ্লেষণ প্রকাশ করে যে ধর্ম একাধিক কার্যকারিতা পরিবেশনকারী একটি জটিল বিবর্তনীয় অভিযোজন হিসেবে আবির্ভূত হয়েছে: সামাজিক সংহতি, নৈতিক নির্দেশনা, অস্তিত্বগত অর্থ এবং সাংস্কৃতিক সংক্রমণ। ধর্মের উৎপত্তি একটি একক উৎসের জন্য দায়ী করা যায় না বরং বিভিন্ন সভ্যতা জুড়ে মানুষের আধ্যাত্মিক চেতনার একটি অভিসারী বিবর্তনের প্রতিনিধিত্ব করে।

প্রমাণ নির্দেশ করে যে যদিও ধর্মীয় চিন্তার ক্ষমতা প্রাথমিক হোমো সেপিয়েন্সের সাথে আবির্ভূত হয়েছিল, সংগঠিত ধর্মীয় ব্যবস্থা কৃষি সমাজ, নগরায়ণ এবং জটিল সামাজিক সমন্বয়ের প্রয়োজনের পাশাপাশি বিকশিত হয়েছিল। ক্যারিশম্যাটিক নেতা, প্রাতিষ্ঠানিক কাঠামো এবং লিখিত ঐতিহ্যের মাধ্যমে ধর্মীয় ধারণার সংক্রমণ আজ আমরা যে বৈচিত্র্যময় ধর্মীয় ল্যান্ডস্কেপ পর্যবেক্ষণ করি তা তৈরি করেছে।

ভবিষ্যত গবেষণায় ধর্মীয় অভিজ্ঞতার স্নায়ুজৈবিক ভিত্তি এবং ধর্মীয় বিবর্তন গঠনে পরিবেশগত কারণগুলির ভূমিকার উপর ফোকাস করা উচিত। ধর্মীয় উৎপত্তি বোঝা মানব প্রকৃতি, সামাজিক সংগঠন এবং অতিক্রমকারী অর্থের জন্য ক্রমাগত মানুষের অনুসন্ধানে গুরুত্বপূর্ণ অন্তর্দৃষ্টি প্রদান করে।`
    },
    references: {
      en: [
        "Armstrong, K. (2009). The Case for God. New York: Knopf.",
        "Bellah, R. N. (2011). Religion in Human Evolution. Cambridge: Harvard University Press.",
        "Boyer, P. (2001). Religion Explained: The Evolutionary Origins of Religious Thought. New York: Basic Books.",
        "Eliade, M. (1987). The Sacred and the Profane: The Nature of Religion. Orlando: Harcourt.",
        "James, W. (1902). The Varieties of Religious Experience. New York: Longmans.",
        "Lewis-Williams, D. (2010). Conceiving God: The Cognitive Origin and Evolution of Religion. London: Thames & Hudson.",
        "Norenzayan, A. (2013). Big Gods: How Religion Transformed Cooperation and Conflict. Princeton: Princeton University Press.",
        "Otto, R. (1923). The Idea of the Holy. London: Oxford University Press.",
        "Pals, D. L. (2014). Nine Theories of Religion. New York: Oxford University Press.",
        "Wilson, D. S. (2002). Darwin's Cathedral: Evolution, Religion, and the Nature of Society. Chicago: University of Chicago Press."
      ],
      bn: [
        "আর্মস্ট্রং, কে. (২০০৯)। ঈশ্বরের পক্ষে যুক্তি। নিউ ইয়র্ক: নফ।",
        "বেল্লাহ, আর. এন. (২০১১)। মানব বিবর্তনে ধর্ম। কেমব্রিজ: হার্ভার্ড ইউনিভার্সিটি প্রেস।",
        "বয়ার, পি. (২০০১)। ধর্ম ব্যাখ্যা করা হয়েছে: ধর্মীয় চিন্তার বিবর্তনীয় উৎপত্তি। নিউ ইয়র্ক: বেসিক বুকস।",
        "ইলিয়াদে, এম. (১৯৮৭)। পবিত্র এবং অপবিত্র: ধর্মের প্রকৃতি। অরল্যান্ডো: হারকোর্ট।",
        "জেমস, ডাব্লিউ. (১৯০২)। ধর্মীয় অভিজ্ঞতার বৈচিত্র্য। নিউ ইয়র্ক: লংম্যানস।",
        "লুইস-উইলিয়ামস, ডি. (২০১০)। ঈশ্বরের ধারণা: ধর্মের জ্ঞানীয় উৎপত্তি এবং বিবর্তন। লন্ডন: টেমস অ্যান্ড হাডসন।",
        "নরেনজায়ান, এ. (২০১৩)। বড় ঈশ্বর: কীভাবে ধর্ম সহযোগিতা এবং দ্বন্দ্বকে রূপান্তরিত করেছে। প্রিন্সটন: প্রিন্সটন ইউনিভার্সিটি প্রেস।",
        "অটো, আর. (১৯২৩)। পবিত্রতার ধারণা। লন্ডন: অক্সফোর্ড ইউনিভার্সিটি প্রেস।",
        "পালস, ডি. এল. (২০১৪)। ধর্মের নয়টি তত্ত্ব। নিউ ইয়র্ক: অক্সফোর্ড ইউনিভার্সিটি প্রেস।",
        "উইলসন, ডি. এস. (২০০২)। ডারউইনের ক্যাথিড্রাল: বিবর্তন, ধর্ম এবং সমাজের প্রকৃতি। শিকাগো: শিকাগো বিশ্ববিদ্যালয় প্রেস।"
      ]
    },
    keywords: {
      en: ["religion", "origins", "anthropology", "evolution", "spirituality", "monotheism", "polytheism", "animism", "religious consciousness", "human civilization"],
      bn: ["ধর্ম", "উৎপত্তি", "নৃতত্ত্ব", "বিবর্তন", "আধ্যাত্মিকতা", "একেশ্বরবাদ", "বহুঈশ্বরবাদ", "অ্যানিমিজম", "ধর্মীয় চেতনা", "মানব সভ্যতা"]
    },
    date: '2024-01-15',
    author: {
      en: 'Md Ridoan Mahmud Zisan',
      bn: 'মো. রিদওয়ান মাহমুদ জিসান'
    },
    category: {
      en: 'Religious Studies & Anthropology',
      bn: 'ধর্মীয় অধ্যয়ন ও নৃতত্ত্ব'
    },
    doi: '10.1000/nature2024.origins'
  }
];
