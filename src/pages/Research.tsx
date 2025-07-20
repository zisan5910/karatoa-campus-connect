import { Element } from 'react-scroll';
import { BookOpen, Download, Calendar, User, Tag, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import { researchPapers, ResearchPaper } from '../data/researchData';

interface ResearchProps {
  language: 'en' | 'bn';
}

const Research = ({ language = 'en' }: ResearchProps) => {
  const pageTitle = {
    en: 'Research Publications',
    bn: 'গবেষণা প্রকাশনা'
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
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
              >
                <BookOpen className="w-8 h-8 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{pageTitle[language]}</h1>
            </div>

            {/* Research Papers */}
            <div className="space-y-8">
              {researchPapers.map((paper: ResearchPaper, index: number) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Paper Header */}
                  <div className="bg-primary/5 border-b border-border p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                          {paper.title[language]}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{paper.author[language]}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(paper.date).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                              {paper.category[language]}
                            </span>
                          </div>
                          {paper.doi && (
                            <div className="flex items-center gap-2">
                              <Hash className="w-4 h-4" />
                              <span className="font-mono text-xs">DOI: {paper.doi}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm">
                        <Download className="w-4 h-4" />
                        PDF
                      </button>
                    </div>
                  </div>

                  {/* Paper Content */}
                  <div className="p-6 space-y-8">
                    {/* Keywords */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-primary" />
                        {sections[language].keywords}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords[language].map((keyword, idx) => (
                          <span key={idx} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Abstract */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                        {sections[language].abstract}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {paper.abstract[language]}
                      </p>
                    </div>

                    {/* Introduction */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                        {sections[language].introduction}
                      </h3>
                      <div className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                        {paper.introduction[language]}
                      </div>
                    </div>

                    {/* Methodology */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                        {sections[language].methodology}
                      </h3>
                      <div className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                        {paper.methodology[language]}
                      </div>
                    </div>

                    {/* Findings */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                        {sections[language].findings}
                      </h3>
                      <div className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                        {paper.findings[language]}
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                        {sections[language].conclusion}
                      </h3>
                      <div className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                        {paper.conclusion[language]}
                      </div>
                    </div>

                    {/* References */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                        {sections[language].references}
                      </h3>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        {paper.references[language].map((ref, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-primary font-medium min-w-[2rem]">[{idx + 1}]</span>
                            <span className="text-justify">{ref}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Research;