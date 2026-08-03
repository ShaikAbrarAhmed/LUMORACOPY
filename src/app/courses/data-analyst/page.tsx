"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { 
  Database, 
  Check, 
  ArrowRight, 
  Clock, 
  Users, 
  BookOpen,
  Target,
  BarChart3,
  Zap,
  Award
} from "lucide-react"
import Link from "next/link"

export default function DataAnalystPage() {
  const curriculum = [
    {
      week: "Week 1-2",
      title: "Data Fundamentals",
      topics: [
        "Introduction to Data Analysis",
        "Data Types & Structures",
        "Excel for Data Analysis",
        "Data Cleaning Basics"
      ]
    },
    {
      week: "Week 3-4",
      title: "SQL & Databases",
      topics: [
        "SQL Fundamentals",
        "Querying & Filtering Data",
        "Joins & Relationships",
        "Aggregation & Grouping"
      ]
    },
    {
      week: "Week 5-6",
      title: "Data Visualization",
      topics: [
        "Visualization Principles",
        "Creating Charts & Graphs",
        "Dashboard Design",
        "Storytelling with Data"
      ]
    },
    {
      week: "Week 7-8",
      title: "Statistical Analysis",
      topics: [
        "Descriptive Statistics",
        "Probability Distributions",
        "Hypothesis Testing",
        "Correlation & Regression"
      ]
    },
    {
      week: "Week 9-10",
      title: "Real-World Projects",
      topics: [
        "Exploratory Data Analysis",
        "Business Intelligence Reports",
        "Predictive Modeling Basics",
        "Final Capstone Project"
      ]
    }
  ]

  const mentors = [
    {
      name: "Purva Kabra",
      role: "Product Manager & Mentor",
      company: "LumberFi",
      expertise: "Product Management • Data Analysis • Business Intelligence",
      image: "/mentors/Purva.png",
      linkedin: "https://www.linkedin.com/in/purva-kabra-pk"
    }
  ]

  const features = [
    {
      icon: Users,
      title: "Small Cohort Size",
      desc: "Limited to 20 students per cohort for personalized attention"
    },
    {
      icon: Clock,
      title: "10-Week Program",
      desc: "Structured timeline with weekly milestones and deliverables"
    },
    {
      icon: BookOpen,
      title: "Hands-on Projects",
      desc: "Build 5+ real-world data analysis projects"
    },
    {
      icon: Target,
      title: "Case Studies",
      desc: "Work on real business cases from partner companies"
    },
    {
      icon: BarChart3,
      title: "Tool Mastery",
      desc: "Master Excel, SQL, and visualization tools"
    },
    {
      icon: Award,
      title: "Certificate",
      desc: "Receive a verified certificate upon successful completion"
    }
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-white/15 overflow-x-hidden">
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-white/[0.01] blur-[140px] rounded-full" />
        <div className="absolute top-[25%] right-[-10%] w-[700px] h-[700px] bg-white/[0.015] blur-[165px] rounded-full" />
        <div className="absolute top-[50%] left-[-10%] w-[600px] h-[600px] bg-white/[0.01] blur-[150px] rounded-full" />
        <div className="absolute top-[75%] right-[-15%] w-[700px] h-[700px] bg-white/[0.015] blur-[160px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 px-6 w-full flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            <Database className="w-3.5 h-3.5 text-slate-400" />
            Coming Soon
          </div>

          <h1 className="text-5xl md:text-7xl font-fancy font-light tracking-tight text-white leading-[1.08] mb-8">
            Data Analyst
            <br />
            <span className="text-slate-400 italic">
              Unlock Insights From Data
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Learn how to work with data, uncover insights, and develop analytical thinking. 
            Master the tools and techniques used by professional data analysts to drive business decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link
              href="/cohorts"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-md hover:-translate-y-0.5 text-center text-sm"
            >
              Join Waitlist
            </Link>
            <button
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-background border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2 group"
            >
              View Curriculum
              <ArrowRight className="w-4 h-4 text-slate-400 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-20 px-6 w-full border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Overview</span>
            <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
              What You'll Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 md:p-8 rounded-[24px] bg-[#111214]/60 border border-white/5 shadow-xl hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 md:py-20 px-6 w-full border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
              10-Week Learning Journey
            </h2>
          </div>

          <div className="space-y-6">
            {curriculum.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-[24px] bg-[#111214] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {module.week}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4">
                      {module.title}
                    </h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIdx) => (
                        <li key={topicIdx} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-white/50 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 md:py-20 px-6 w-full border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Mentors</span>
            <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
              Learn From Industry Experts
            </h2>
          </div>

          <div className="space-y-8">
            {mentors.map((mentor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-[24px] bg-[#111214] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3">
                      {mentor.role} at {mentor.company}
                    </p>
                    <div className="mb-4">
                      <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">
                        Expertise
                      </span>
                      <p className="text-sm text-slate-300 mt-1">
                        {mentor.expertise}
                      </p>
                    </div>
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white font-semibold tracking-wider uppercase transition-colors"
                    >
                      <span>LinkedIn Profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-fancy font-light tracking-tight text-white leading-[1.08]">
            Ready to Become a
            <br />
            <span className="text-slate-400 italic">
              Data Analyst?
            </span>
          </h2>

          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
            Join the waitlist to be notified when enrollment opens. Limited spots available for the first cohort.
          </p>

          <Link
            href="/cohorts"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-md hover:-translate-y-0.5 text-sm"
          >
            Join Waitlist
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
