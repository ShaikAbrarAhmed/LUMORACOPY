"use client"

import { motion } from "framer-motion"
import { 
  BookOpen, Cpu, Users, Rocket, Sparkles, 
  Code2, Trophy, Compass, GitMerge, Target, 
  ArrowRight
} from "lucide-react"
import { useMembership } from "@/components/auth/MembershipContext"

// --- Custom Social Media Icons ---
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.002-2.632-1.023-5.106-2.887-6.974-1.864-1.868-4.339-2.898-6.973-2.9-5.442 0-9.87 4.413-9.873 9.847-.001 1.777.472 3.511 1.37 5.048L1.762 21.6l5.885-1.546zm11.233-6.52c-.29-.145-1.716-.847-1.982-.944-.266-.097-.46-.145-.654.145-.194.29-.753.944-.923 1.138-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.336-1.442-.864-.77-1.448-1.72-1.618-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.34.436-.51.145-.17.194-.29.29-.485.097-.194.048-.364-.024-.51-.073-.145-.654-1.576-.896-2.158-.236-.569-.475-.491-.654-.5-.17-.008-.364-.01-.558-.01-.194 0-.51.073-.777.364-.266.29-1.02 1.02-1.02 2.487s1.07 2.915 1.216 3.109c.145.194 2.105 3.213 5.099 4.505.713.308 1.27.491 1.704.629.716.228 1.368.196 1.884.119.574-.085 1.716-.701 1.958-1.378.242-.676.242-1.258.17-1.378-.073-.12-.266-.194-.558-.34z" />
  </svg>
)

const DiscordIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.075 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

// --- Social Media Premium Platform Card ---
interface PlatformCardProps {
  title: string
  bullet1: string
  bullet2: string
  icon: React.ReactNode
  accentColor: string
  href: string
}

function PlatformCard({ title, bullet1, bullet2, icon, accentColor, href }: PlatformCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="group flex flex-col p-5 bg-card/25 backdrop-blur-xs border border-border/30 hover:border-primary/20 rounded-2xl transition-all duration-300 text-left hover:shadow-sm"
    >
      <div className="flex items-center gap-3.5 mb-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 ${accentColor}`}>
          {icon}
        </div>
        <h4 className="text-sm font-semibold text-headings group-hover:text-primary transition-colors">
          {title}
        </h4>
      </div>
      <ul className="space-y-1.5 pl-1.5">
        <li className="flex items-center gap-2 text-[11px] text-muted-foreground font-light">
          <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
          <span>{bullet1}</span>
        </li>
        <li className="flex items-center gap-2 text-[11px] text-muted-foreground font-light">
          <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
          <span>{bullet2}</span>
        </li>
      </ul>
    </motion.a>
  )
}

export default function CommunitySection() {
  const { requireMembership } = useMembership()

  return (
    <section id="community" className="relative py-20 md:py-24 overflow-hidden bg-transparent">
      {/* Reduced decorative background lights (70% less density) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-secondary/2 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-headings leading-tight"
          >
            Learn Together. Build Together. Grow Together.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light"
          >
            Lumora brings builders, creators, and developers together in one high-agency ecosystem designed for mutual transformation.
          </motion.p>
        </div>

        {/* Two-Column Grid: Journey (Left) & Why Join (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
          
          {/* ================= LEFT COLUMN: Journey ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Compact Core Hub Intro */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <motion.div
                  animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.05, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-primary/20 blur-md"
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border border-primary/20"
                />
                <div className="relative w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center shadow-xs">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                </div>
              </div>
              <div className="text-left">
                <h4 className="font-heading font-bold text-foreground text-xs tracking-wider uppercase">
                  Ecosystem Journey
                </h4>
                <p className="text-[11px] text-muted-foreground font-light">
                  Follow the chronological path to scale your skills and products.
                </p>
              </div>
            </div>

            {/* Vertical Timeline Journey Track */}
            <div className="relative pl-6 space-y-3 text-left">
              {/* Subtle vertical animated progress line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-[1px] pointer-events-none z-0">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <motion.line
                    x1="0" y1="0" x2="0" y2="100%"
                    stroke="url(#vertical-progress-grad)"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    animate={{ strokeDashoffset: [0, -16] }}
                    transition={{
                      pathLength: { duration: 1.2, ease: "easeOut" },
                      strokeDashoffset: { repeat: Infinity, duration: 2, ease: "linear" }
                    }}
                  />
                  <defs>
                    <linearGradient id="vertical-progress-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="70%" stopColor="#818CF8" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Step 1: LEARN */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="group relative bg-card/20 backdrop-blur-xs border border-border/20 hover:border-primary/20 rounded-xl py-2.5 px-4 transition-all duration-300 hover:shadow-xs flex gap-3.5"
              >
                <div className="absolute left-[-18.5px] top-[18px] w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 z-10" />
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-headings">01 / Learn</h4>
                    <span className="text-[9px] font-semibold text-primary/85">Master Next-Gen Tech</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 font-light">
                    Master modern systems architectures and production-level design patterns.
                  </p>
                </div>
              </motion.div>

              {/* Step 2: BUILD */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative bg-card/20 backdrop-blur-xs border border-border/20 hover:border-primary/20 rounded-xl py-2.5 px-4 transition-all duration-300 hover:shadow-xs flex gap-3.5"
              >
                <div className="absolute left-[-18.5px] top-[18px] w-2 h-2 rounded-full bg-indigo-500/40 group-hover:bg-[#6366F1] group-hover:scale-125 transition-all duration-300 z-10" />
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-[#6366F1] shrink-0 group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-300">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-headings">02 / Build</h4>
                    <span className="text-[9px] font-semibold text-[#6366F1]/85">Ship Production Code</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 font-light">
                    Ship real, deployable codebases and scale products alongside peers.
                  </p>
                </div>
              </motion.div>

              {/* Step 3: CONNECT */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="group relative bg-card/20 backdrop-blur-xs border border-border/20 hover:border-primary/20 rounded-xl py-2.5 px-4 transition-all duration-300 hover:shadow-xs flex gap-3.5"
              >
                <div className="absolute left-[-18.5px] top-[18px] w-2 h-2 rounded-full bg-secondary/40 group-hover:bg-secondary group-hover:scale-125 transition-all duration-300 z-10" />
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-headings transition-all duration-300">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-headings">03 / Connect</h4>
                    <span className="text-[9px] font-semibold text-secondary">Form Alliance Squads</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 font-light">
                    Form high-agency squads and conduct peer architectural code reviews.
                  </p>
                </div>
              </motion.div>

              {/* Step 4: LAUNCH */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative bg-card/20 backdrop-blur-xs border border-border/20 hover:border-primary/20 rounded-xl py-2.5 px-4 transition-all duration-300 hover:shadow-xs flex gap-3.5"
              >
                <div className="absolute left-[-18.5px] top-[18px] w-2 h-2 rounded-full bg-emerald-500/40 group-hover:bg-emerald-500 group-hover:scale-125 transition-all duration-300 z-10" />
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Rocket className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-headings">04 / Launch</h4>
                    <span className="text-[9px] font-semibold text-emerald-500">Accelerate to Market</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5 font-light">
                    Showcase finished projects and pitch products to startup accelerators.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Why Join Lumora? ================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-headings">
                Why Join Community?
              </h3>
              <p className="text-xs text-muted-foreground font-light">
                Accelerate your growth inside a community built for high-performance software creators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Benefit 1: Build Real Projects */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="p-4 bg-card/25 backdrop-blur-xs border border-border/30 hover:border-primary/20 rounded-2xl flex gap-3.5 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Code2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-headings mb-0.5">Build Real Projects</h5>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                    Architect and ship production-grade, open-source codebases.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 2: Join Hackathons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-4 bg-card/25 backdrop-blur-xs border border-border/30 hover:border-primary/20 rounded-2xl flex gap-3.5 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-500">
                  <Trophy className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-headings mb-0.5">Join Hackathons</h5>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                    Sprint in time-boxed challenges to build and launch working MVPs.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 3: Learn from Mentors */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="p-4 bg-card/25 backdrop-blur-xs border border-border/30 hover:border-primary/20 rounded-2xl flex gap-3.5 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-headings mb-0.5">Learn from Mentors</h5>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                    Get direct code feedback and architectural reviews from veteran leads.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 4: Collaborate with Builders */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 bg-card/25 backdrop-blur-xs border border-border/30 hover:border-primary/20 rounded-2xl flex gap-3.5 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 text-[#6366F1]">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-headings mb-0.5">Collaborate with Builders</h5>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                    Ship alongside high-agency peers who keep you focused and accountable.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 5: Expand Your Network */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="p-4 bg-card/25 backdrop-blur-xs border border-border/30 hover:border-primary/20 rounded-2xl flex gap-3.5 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-500">
                  <GitMerge className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-headings mb-0.5">Expand Your Network</h5>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                    Establish deep professional ties with software founders and tech leads.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 6: Access Future Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-4 bg-card/25 backdrop-blur-xs border border-border/30 hover:border-primary/20 rounded-2xl flex gap-3.5 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0 text-pink-500">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-headings mb-0.5">Access Future Opportunities</h5>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                    Unlock fast-track referrals, startup backing, and career placement paths.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

        {/* Dedicated "Join The Community" social section */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-border/40">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-headings">
              Join The Community
            </h3>
            <p className="text-xs text-muted-foreground font-light">
              Connect directly with our active builders, mentors, and creators across our official platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {/* Discord Server */}
            <PlatformCard
              title="Discord"
              bullet1="Real-time discussions"
              bullet2="Community collaboration"
              icon={<DiscordIcon />}
              accentColor="bg-[#5865F2] shadow-sm shadow-[#5865F2]/20"
              href="https://discord.gg/lumora" // placeholder
            />

            {/* WhatsApp Group */}
            <PlatformCard
              title="WhatsApp"
              bullet1="Daily conversations"
              bullet2="Instant updates"
              icon={<WhatsAppIcon />}
              accentColor="bg-emerald-500 shadow-sm shadow-emerald-500/20"
              href="https://chat.whatsapp.com/" // placeholder
            />

            {/* Instagram Page */}
            <PlatformCard
              title="Instagram"
              bullet1="Announcements"
              bullet2="Community highlights"
              icon={<InstagramIcon />}
              accentColor="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-xs"
              href="https://instagram.com/lumoraspace" // placeholder
            />
          </div>
        </div>

        {/* Unified Conversion Primary CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 md:mt-16 text-center flex flex-col items-center justify-center gap-3"
        >
          {/* <button
            onClick={() => {
              requireMembership("join_community", () => {
                alert("Welcome! You have successfully joined the Lumora Community ecosystem.")
              })
            }}
            className="group inline-flex items-center justify-center gap-2.5 btn-primary px-8 py-4 text-xs font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <motion.span
                className="absolute inset-0 rounded-full bg-secondary/80"
                animate={{
                  scale: [1, 2.5],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 0.6,
                }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary shadow-[0_0_8px_rgba(129,140,248,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_14px_rgba(129,140,248,0.9)] transition-all duration-300" />
            </span>
            <span>Join Lumora</span>
          </button> */}
          <p className="text-[10px] text-slate-400 font-light uppercase tracking-wider">
            Final conversion point • Secure your place in community
          </p>
        </motion.div>

      </div>
    </section>
  )
}