"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FileText, Code2, Database, Terminal, Layout, Server, Shield, Zap, Rocket, LucideIcon } from "lucide-react";
import type { Program } from "@/data/programs";
import { useState } from "react";
import { JoinProgramModal } from "./JoinProgramModal";

const IconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  shield: Shield,
  code2: Code2,
  terminal: Terminal,
  zap: Zap,
  rocket: Rocket,
};

export function ProgramHero({ program }: { program: Program }) {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const handleJoin = () => setIsJoinModalOpen(true);
  const handleClose = () => setIsJoinModalOpen(false);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 w-full flex flex-col items-center text-center z-10 border-b border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-fancy font-light tracking-tight text-white leading-[1.08] mb-8">
          {program.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-8">
          {program.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-300 font-medium mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            {program.duration}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            {program.schedule}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            {program.mode}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            {program.fee}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button
            onClick={handleJoin}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-md hover:-translate-y-0.5 text-center text-sm"
          >
            Join Program
          </button>
          {program.brochureUrl && (
            <a
              href={program.brochureUrl}
              download
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2 group"
            >
              Download Brochure
              <FileText className="w-4 h-4 text-slate-400 transition-colors group-hover:text-white" />
            </a>
          )}
        </div>
      </motion.div>
      <JoinProgramModal isOpen={isJoinModalOpen} onClose={handleClose} program={program} />
    </section>
  );
}

export function ProgramMedia({ program }: { program: Program }) {
  const mentor = program.mentors?.[0];

  return (
    <section className="py-16 md:py-28 px-6 w-full relative z-10 border-t border-white/5 bg-[#050505]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT COLUMN: Program Media */}
        <div className="w-full flex items-center justify-center">
          {program.promotionalGraphic ? (
            <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-white/5 flex items-center justify-center">
              <Image
                src={program.promotionalGraphic}
                alt={`${program.title} program by LumoraSpace`}
                width={1200}
                height={1200}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          ) : program.demoVideo?.url ? (
            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-white/5 flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                controls
                poster={program.demoVideo.thumbnail}
                preload="none"
              >
                <source src={program.demoVideo.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}
        </div>

        {/* RIGHT COLUMN: Mentor Profile */}
        {mentor && (
          <div className="w-full flex flex-col items-start text-left">
            <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-8 block">
              Mentor
            </span>
            
            <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-3">
              {mentor.name}
            </h2>
            
            <p className="text-lg text-slate-300 font-medium mb-3">
              {mentor.role}
            </p>

            <p className="text-sm text-slate-400 font-light mb-8">
              {mentor.expertise}
            </p>
            
            {mentor.quote && (
              <blockquote className="border-l-2 border-white/10 pl-6 py-2">
                <p className="text-xl md:text-2xl text-white/90 font-fancy italic leading-relaxed">
                  “{mentor.quote}”
                </p>
              </blockquote>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export function ProgramOverview({ program }: { program: Program }) {
  return (
    <section className="py-16 md:py-24 px-6 w-full relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Overview</span>
          <h2 className="text-3xl font-fancy font-light text-white tracking-tight">The Program</h2>
        </div>
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">What Is It?</h3>
            <p className="text-slate-400 font-light leading-relaxed">{program.overview.whatIsIt}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">What You&apos;ll Work On</h3>
            <p className="text-slate-400 font-light leading-relaxed">{program.overview.whatYouWorkOn}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">The Learning Experience</h3>
            <p className="text-slate-400 font-light leading-relaxed">{program.overview.learningExperience}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramCompetencies({ program }: { program: Program }) {
  return (
    <section className="py-16 md:py-24 px-6 w-full relative z-10 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Outcomes</span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight">What You&apos;ll Achieve</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {program.competencies.map((comp, idx) => {
            const Icon = IconMap[comp.icon] || FileText;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-[24px] bg-[#111214] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-3">{comp.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{comp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



export function ProgramProjects({ program }: { program: Program }) {
  return (
    <section className="py-16 md:py-24 px-6 w-full relative z-10 bg-[#111214] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight">What You Will Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Timeline connecting line for desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 hidden md:block" />
          
          {program.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-black border border-white/10 rounded-3xl p-8 relative z-10 shadow-xl"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-500 font-medium mb-6 uppercase tracking-wider">{project.stage}</p>
              <p className="text-slate-400 font-light leading-relaxed mb-8">{project.description}</p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-500" />
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramGenAI({ program }: { program: Program }) {
  if (!program.genAI) return null;
  
  return (
    <section className="py-16 md:py-24 px-6 w-full relative z-10 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Modern Engineering</span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
            Build with AI. <br/> Understand what you ship.
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
            {program.genAI.description}
          </p>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-sm font-bold text-white mb-2">Integration</h4>
            <p className="text-sm text-slate-400 font-light">{program.genAI.integration}</p>
          </div>
        </div>
        
        <div className="bg-black/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 text-center">Tools & Platforms Covered</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {program.genAI.tools.map((tool, i) => (
              <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 font-medium">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramCareerPrep({ program }: { program: Program }) {
  if (!program.careerPrep) return null;
  
  return (
    <section className="py-16 md:py-24 px-6 w-full relative z-10 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Outcomes</span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight">Career Preparation</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {program.careerPrep.map((item, idx) => (
            <div key={idx} className="p-6 bg-transparent border-t border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramFAQ({ program }: { program: Program }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!program.faqs || program.faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 px-6 w-full relative z-10 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-fancy font-light text-white tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {program.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left py-4"
                >
                  <span className="text-base font-medium text-white pr-8">{faq.question}</span>
                  <div className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-slate-400 font-light leading-relaxed pb-4 pt-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProgramFinalCTA({ program }: { program: Program }) {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const handleJoin = () => setIsJoinModalOpen(true);
  const handleClose = () => setIsJoinModalOpen(false);

  return (
    <section className="py-24 md:py-32 px-6 w-full relative z-10 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Call to Action */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-5xl md:text-7xl font-fancy font-light text-white tracking-tight mb-6 leading-[1.1]">
            Ready to build?
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
            {program.duration}. Real projects. Modern engineering.
          </p>
        </div>

        {/* Right Side: Fee & Actions */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left md:border-l md:border-white/10 md:pl-16 lg:pl-24">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-4 block">
            Program Fee
          </span>
          <p className="text-5xl md:text-6xl text-white font-fancy tracking-tight mb-4">
            {program.fee}
          </p>
          <p className="text-base text-slate-400 font-light mb-12">
            One-time program fee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={handleJoin}
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-xl text-base"
            >
              Join Program
            </button>
            {program.brochureUrl && (
              <a
                href={program.brochureUrl}
                download
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 text-sm flex justify-center items-center"
              >
                Download Brochure
              </a>
            )}
          </div>
        </div>

      </div>
      <JoinProgramModal isOpen={isJoinModalOpen} onClose={handleClose} program={program} />
    </section>
  );
}
