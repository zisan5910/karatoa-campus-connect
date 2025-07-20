import { Element } from 'react-scroll';
import { Home, Globe, Download, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { researchPapers, ResearchPaper } from '../data/researchData';

interface ResearchProps {
  language: 'en' | 'bn';
  onLanguageToggle: () => void;
  onNavigateHome: () => void;
}

const Research = ({ language = 'en', onLanguageToggle, onNavigateHome }: ResearchProps) => {
  const pageTitle = {
    en: 'Research',
    bn: 'গবেষণা'
  };

  const sections = {
    en: {
      abstract: 'Abstract',
      introduction: 'Introduction',
      methodology: 'Methodology',
      findings: 'Findings',
      conclusion: 'Conclusion',
      references: 'References',
      keywords: 'Keywords'
    },
    bn: {
      abstract: 'সারসংক্ষেপ',
      introduction: 'ভূমিকা',
      methodology: 'পদ্ধতি',
      findings: 'ফলাফল',
      conclusion: 'উপসংহার',
      references: 'তথ্যসূত্র',
      keywords: 'মূল শব্দ'
    }
  };

  return (
    <Element name="research">
      <div className="min-h-screen bg-background">
        {/* Custom Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            {/* Home Icon */}
            <button 
              onClick={onNavigateHome}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Home className="w-5 h-5 text-primary" />
            </button>

            {/* Page Title */}
            <h1 className="text-xl font-semibold text-foreground">{pageTitle[language]}</h1>

            {/* Language Toggle */}
            <button 
              onClick={onLanguageToggle}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{language === 'en' ? 'বাং' : 'EN'}</span>
            </button>
          </div>
        </div>

        <div className="pt-16">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Research Papers */}
            <div className="space-y-6">
              {researchPapers.map((paper: ResearchPaper, index: number) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-6"
                >
                  {/* Research Title */}
                  <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4 leading-tight">
                      {paper.title[language]}
                    </h1>
                    <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-blue-700 dark:text-blue-300">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{paper.author[language]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(paper.date).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}</span>
                      </div>
                      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        <Download className="w-4 h-4" />
                        PDF
                      </button>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h2 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      {sections[language].keywords}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords[language].map((keyword, idx) => (
                        <span key={idx} className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">
                      {sections[language].abstract}
                    </h2>
                    <p className="text-green-800 dark:text-green-200 leading-relaxed text-justify">
                      {paper.abstract[language]}
                    </p>
                  </div>

                  {/* Introduction */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                    <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                      {sections[language].introduction}
                    </h2>
                    <div className="text-amber-800 dark:text-amber-200 leading-relaxed text-justify whitespace-pre-line">
                      {paper.introduction[language]}
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
                    <h2 className="text-xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
                      {sections[language].methodology}
                    </h2>
                    <div className="text-cyan-800 dark:text-cyan-200 leading-relaxed text-justify whitespace-pre-line">
                      {paper.methodology[language]}
                    </div>
                  </div>

                  {/* Findings */}
                  <div className="bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
                    <h2 className="text-xl font-bold text-rose-900 dark:text-rose-100 mb-4">
                      {sections[language].findings}
                    </h2>
                    <div className="text-rose-800 dark:text-rose-200 leading-relaxed text-justify whitespace-pre-line">
                      {paper.findings[language]}
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
                    <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                      {sections[language].conclusion}
                    </h2>
                    <div className="text-indigo-800 dark:text-indigo-200 leading-relaxed text-justify whitespace-pre-line">
                      {paper.conclusion[language]}
                    </div>
                  </div>

                  {/* References */}
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                      {sections[language].references}
                    </h2>
                    <ol className="space-y-3 text-sm">
                      {paper.references[language].map((ref, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-slate-600 dark:text-slate-400 font-bold min-w-[2rem]">[{idx + 1}]</span>
                          <span className="text-slate-700 dark:text-slate-300 text-justify">{ref}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Research;