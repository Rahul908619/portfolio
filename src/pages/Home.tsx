import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { ThreeScene } from "@/components/ThreeScene";
import { Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Terminal } from "lucide-react";
import { FloatingChatbot } from "@/components/FloatingChatbot";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll configuration
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const fadeInUP = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <FloatingChatbot />
      <ParticleBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col space-y-6"
            >
              <motion.div variants={fadeInUP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 w-max">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-primary tracking-wider uppercase">Open to Opportunities</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUP} className="text-5xl md:text-7xl font-bold font-display">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-gradient-x text-glow-cyan">
                  Rahul Kumawat
                </span>
              </motion.h1>

              <motion.p variants={fadeInUP} className="text-xs md:text-sm font-mono text-primary/70 tracking-widest uppercase">
                Full Stack Developer · Data Science Student · AI Builder
              </motion.p>
              
              <motion.div variants={fadeInUP} className="text-xl md:text-2xl font-medium text-muted-foreground h-8">
                <Typewriter
                  words={["Full Stack Developer", "Data Science Student", "AI Systems Builder", "Python Developer", "Data Science Enthusiast", "Problem Solver"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </motion.div>

              <motion.div variants={fadeInUP} className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/10">
                <div>
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">4+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects Built</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">4+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Certifications</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">6+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Technologies</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Open</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">To Work 🟢</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUP} className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="px-8 py-3 rounded-md font-semibold bg-primary text-background hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300"
                >
                  View Projects
                </a>
                <a 
                  href="#" 
                  className="px-8 py-3 rounded-md font-semibold glass border border-white/20 hover:border-secondary hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={18} /> Download CV
                </a>
              </motion.div>
              
              <motion.div variants={fadeInUP} className="flex gap-4 pt-4">
                <a href="https://github.com/Rahul908619" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/rahulkumawat/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:rahulkumawat8619@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary transition-all duration-300">
                  <Mail size={20} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center h-full"
              style={{ perspective: "1000px" }}
            >
              {/* Deep background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse pointer-events-none" />

              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full pointer-events-none"
                style={{ border: "1.5px dashed rgba(0,255,255,0.25)" }}
              />
              {/* Inner rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full pointer-events-none"
                style={{ border: "1.5px dashed rgba(168,85,247,0.25)" }}
              />

              {/* Orbiting dots on outer ring */}
              {[0, 120, 240].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full pointer-events-none"
                  style={{
                    background: i % 2 === 0 ? "#00ffff" : "#a855f7",
                    boxShadow: `0 0 10px ${i % 2 === 0 ? "#00ffff" : "#a855f7"}`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                  initial={{ rotate: deg }}
                >
                  <span
                    className="absolute block w-3 h-3 rounded-full"
                    style={{
                      top: "-130px",
                      left: "0",
                    }}
                  />
                </motion.div>
              ))}

              {/* 3D tilt photo card */}
              <motion.div
                whileHover={{ rotateY: 8, rotateX: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative z-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glowing border frame */}
                <div
                  className="absolute -inset-[3px] rounded-2xl z-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #00ffff, #a855f7, #3b82f6, #00ffff)",
                    backgroundSize: "300% 300%",
                    animation: "gradient-shift 4s ease infinite",
                    filter: "blur(2px)",
                  }}
                />

                {/* Photo container — passport-style crop: show face & shoulders */}
                <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden z-10"
                  style={{ background: "#0a051e" }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/rahul-photo.png`}
                    alt="Rahul Kumawat"
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: "50% 8%" }}
                  />
                  {/* Subtle cyan tint overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-sm pointer-events-none" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-secondary rounded-tr-sm pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-secondary rounded-bl-sm pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-sm pointer-events-none" />
                </div>

                {/* Floating name badge */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass border border-primary/40 whitespace-nowrap z-20"
                  style={{ boxShadow: "0 0 12px rgba(0,255,255,0.3)" }}
                >
                  <span className="text-xs font-bold text-primary font-display tracking-widest">B.Tech CSE · LPU</span>
                </motion.div>
              </motion.div>

              {/* Floating skill chips */}
              {[
                { label: "React", color: "#00ffff", x: "-80px", y: "20px" },
                { label: "Python", color: "#a855f7", x: "calc(100% + 10px)", y: "30px" },
                { label: "AI/ML", color: "#3b82f6", x: "-70px", y: "calc(100% - 60px)" },
                { label: "Java", color: "#a855f7", x: "calc(100% + 5px)", y: "calc(100% - 70px)" },
              ].map(({ label, color, x, y }, i) => (
                <motion.div
                  key={label}
                  className="absolute z-20 px-3 py-1 rounded-full text-[10px] font-bold font-mono hidden md:block"
                  style={{
                    left: x,
                    top: y,
                    color,
                    border: `1px solid ${color}40`,
                    background: `${color}15`,
                    boxShadow: `0 0 8px ${color}40`,
                  }}
                  animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  {label}
                </motion.div>
              ))}

              {/* 3D Sphere moved to corner */}
              <div className="absolute -right-14 -top-14 w-40 h-40 z-20 hidden lg:block">
                <ThreeScene />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-card/30 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUP}
              className="text-center mb-16"
            >
              <p className="text-xs font-mono text-primary/60 tracking-widest uppercase mb-3">Get to know me</p>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-glow-purple">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Top: Bio + Code card */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start mb-14">

              {/* Bio */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}
                className="lg:col-span-3 space-y-5"
              >
                <h3 className="text-2xl md:text-3xl font-bold font-display">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Rahul Kumawat</span>
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  I'm a <span className="text-foreground font-medium">Computer Science Engineering student</span> at Lovely Professional University, Punjab, with a strong passion for building practical, impactful software. I specialise in <span className="text-primary font-medium">Full Stack Web Development</span> and <span className="text-secondary font-medium">AI-powered systems</span> — turning real-world problems into clean, working solutions.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  I've built a range of projects — from a <span className="text-foreground font-medium">secure online examination platform</span> using Java &amp; Spring Boot, to an <span className="text-foreground font-medium">AI voice-controlled PC assistant</span> in Python, to a <span className="text-foreground font-medium">real-time auction system</span>. I love working across the full stack and am always excited to learn new technologies.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Outside of code, I'm passionate about <span className="text-foreground font-medium">Cybersecurity</span>, having completed a 4-month ethical hacking training, and I hold certifications from Google, NPTEL, and Coursera.
                </p>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: "Name", value: "Rahul Kumawat" },
                    { label: "Location", value: "Jaipur, Rajasthan" },
                    { label: "University", value: "LPU, Punjab" },
                    { label: "Degree", value: "B.Tech CSE (2023–Present)" },
                    { label: "Email", value: "rahulkumawat8619@gmail.com" },
                    { label: "Status", value: "Open to Opportunities ✅" },
                  ].map((item) => (
                    <div key={item.label} className="glass-card p-3 rounded-xl">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Code card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 glass-card rounded-2xl overflow-hidden neon-border-purple"
              >
                <div className="flex items-center gap-2 bg-black/40 px-4 py-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs font-mono text-muted-foreground">rahul.profile.js</span>
                </div>
                <div className="p-5 font-mono text-xs leading-6 overflow-x-auto">
                  <pre className="whitespace-pre-wrap">
                    <span className="text-purple-400">const</span> <span className="text-yellow-200">rahul</span> <span className="text-white/50">=</span> {'{'}
                    {'\n'}  <span className="text-cyan-300">name:</span> <span className="text-green-300">"Rahul Kumawat"</span>,
                    {'\n'}  <span className="text-cyan-300">role:</span> <span className="text-green-300">"Full Stack Dev & AI Builder"</span>,
                    {'\n'}  <span className="text-cyan-300">stack:</span> [
                    {'\n'}    <span className="text-green-300">"Java"</span>, <span className="text-green-300">"Spring Boot"</span>,
                    {'\n'}    <span className="text-green-300">"React.js"</span>, <span className="text-green-300">"Node.js"</span>,
                    {'\n'}    <span className="text-green-300">"Python"</span>, <span className="text-green-300">"MySQL"</span>,
                    {'\n'}  ],
                    {'\n'}  <span className="text-cyan-300">softSkills:</span> [
                    {'\n'}    <span className="text-green-300">"Problem Solving"</span>,
                    {'\n'}    <span className="text-green-300">"Team Player"</span>,
                    {'\n'}    <span className="text-green-300">"Adaptability"</span>,
                    {'\n'}  ],
                    {'\n'}  <span className="text-cyan-300">currentlyLearning:</span>
                    {'\n'}    <span className="text-green-300">"Advanced AI Systems"</span>,
                    {'\n'}  <span className="text-cyan-300">goal:</span>
                    {'\n'}    <span className="text-green-300">"Build impactful products"</span>,
                    {'\n'}  <span className="text-cyan-300">openToWork:</span> <span className="text-orange-300">true</span>
                    {'\n'}{'}'};
                  </pre>
                </div>
              </motion.div>
            </div>

            {/* What I do — 3 service cards */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: "🌐",
                  title: "Full Stack Development",
                  color: "primary",
                  points: [
                    "End-to-end web apps (Java, Spring Boot, React)",
                    "RESTful APIs with layered architecture",
                    "Authentication, CRUD, Admin dashboards",
                    "Responsive UI with HTML/CSS/JavaScript",
                  ],
                },
                {
                  icon: "🤖",
                  title: "AI & Automation",
                  color: "secondary",
                  points: [
                    "Voice-controlled desktop assistants (Python)",
                    "NLP & SpeechRecognition integration",
                    "AI advisory engines for real-world use cases",
                    "Task automation & system scripting",
                  ],
                },
                {
                  icon: "🔐",
                  title: "Security & Cloud",
                  color: "green",
                  points: [
                    "Ethical Hacking & Kali Linux fundamentals",
                    "Network security & intrusion detection",
                    "Cloud Computing certified (NPTEL)",
                    "Google Networking certified",
                  ],
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUP}
                  whileHover={{ y: -6 }}
                  className={`glass-card p-6 rounded-2xl border border-white/10 transition-all duration-300 ${
                    card.color === "primary"
                      ? "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]"
                      : card.color === "secondary"
                      ? "hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                      : "hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                  }`}
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h4 className={`text-lg font-bold font-display mb-4 ${
                    card.color === "primary" ? "text-primary" : card.color === "secondary" ? "text-secondary" : "text-green-400"
                  }`}>{card.title}</h4>
                  <ul className="space-y-2">
                    {card.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`mt-1 text-[10px] ${
                          card.color === "primary" ? "text-primary" : card.color === "secondary" ? "text-secondary" : "text-green-400"
                        }`}>▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display text-glow-cyan">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
                <h3 className="text-2xl font-display font-semibold text-secondary">Languages & Core</h3>
                <div className="space-y-4">
                  <SkillBar name="HTML/CSS" percent={90} />
                  <SkillBar name="JavaScript" percent={85} />
                  <SkillBar name="Python" percent={82} />
                  <SkillBar name="SQL" percent={75} />
                  <SkillBar name="Java" percent={65} />
                  <SkillBar name="C++" percent={60} />
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
                <h3 className="text-2xl font-display font-semibold text-primary">Frameworks, AI & Tools</h3>
                <div className="space-y-4">
                  <SkillBar name="React.js / Node.js" percent={85} color="primary" />
                  <SkillBar name="Scikit-learn / ML" percent={75} color="primary" />
                  <SkillBar name="Pandas & NumPy" percent={78} color="primary" />
                  <SkillBar name="Socket.io" percent={72} color="primary" />
                  <SkillBar name="Git & GitHub" percent={85} color="primary" />
                  <SkillBar name="MySQL / MongoDB" percent={80} color="primary" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 bg-card/30 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display text-glow-purple">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Online Examination System"
                subtitle="Secure Full Stack Exam Platform"
                date="July 2025"
                category="Full Stack / Java"
                description="A complete web-based examination platform that enables secure student registration, login, and timer-based exam attempts. Includes automatic result calculation, admin question management, and a clean exam interface."
                features={[
                  "User authentication (register & login)",
                  "Timer-based exam interface with auto-submit",
                  "Automatic scoring & result generation",
                  "Admin dashboard: manage questions & users",
                  "RESTful API with layered architecture",
                ]}
                tech={["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"]}
                github="https://github.com/Rahul908619"
                badge="Latest"
                badgeColor="primary"
                icon="📝"
              />
              <ProjectCard
                title="BidBazar"
                subtitle="Real-Time Online Auction Platform"
                date="Nov 2024"
                category="Full Stack / Web"
                description="An online auction platform where users can list products and place live bids. Built with real-time dynamic price updates, user authentication, bidding history, and a clean dashboard for managing listings."
                features={[
                  "Real-time bidding with dynamic price updates",
                  "User login & registration system",
                  "Product listing and bidding history",
                  "Highest bidder displayed in real-time",
                  "Secure user sessions & data management",
                ]}
                tech={["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"]}
                github="https://github.com/Rahul908619"
                badge="Featured"
                badgeColor="secondary"
                icon="🏷️"
              />
              <ProjectCard
                title="Weather Forecast Website"
                subtitle="Real-Time Weather App"
                date="Mar 2025"
                category="Frontend / API"
                description="A responsive weather forecasting web app that fetches live weather data from the OpenWeather API. Users can search any city and instantly view temperature, humidity, wind speed, and weather conditions with a clean UI."
                features={[
                  "Live weather data via OpenWeather API",
                  "Search any city worldwide",
                  "Temperature, humidity & wind details",
                  "Weather condition icons & description",
                  "Responsive, mobile-friendly design",
                ]}
                tech={["HTML", "CSS", "JavaScript", "OpenWeather API"]}
                github="https://github.com/Rahul908619"
                badge="Live"
                badgeColor="green"
                icon="🌦️"
              />
              <ProjectCard
                title="AI PC Assistant"
                subtitle="Voice-Controlled Desktop Assistant"
                date="2024"
                category="AI / Python"
                description="A Python-based AI assistant that listens to voice commands and performs system tasks hands-free. Can open applications, search files, execute system operations, and interact using natural language — boosting daily productivity."
                features={[
                  "Voice command recognition (Speech-to-Text)",
                  "Open applications and files by voice",
                  "Perform system operations automatically",
                  "Text-to-Speech responses",
                  "Basic AI interaction & task automation",
                ]}
                tech={["Python", "SpeechRecognition", "Pyttsx3", "OS Module", "Subprocess"]}
                github="https://github.com/Rahul908619"
                badge="AI Powered"
                badgeColor="orange"
                icon="🤖"
              />
            </div>
          </div>
        </section>

        {/* EDUCATION & TRAINING */}
        <section id="education" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Education Timeline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.div variants={fadeInUP} className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold font-display text-glow-cyan">Education</h2>
                  <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
                </motion.div>
                
                <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-10">
                  <TimelineItem 
                    title="B.Tech Computer Science"
                    subtitle="Lovely Professional University, Punjab"
                    date="Aug 2023 - Present"
                    desc="CGPA: 7.11"
                    active
                  />
                  <TimelineItem 
                    title="Intermediate (12th)"
                    subtitle="Proton Academy Senior Secondary School"
                    date="June 2019 - Mar 2021"
                    desc="Percentage: 93.50%"
                  />
                  <TimelineItem 
                    title="Matriculate (10th)"
                    subtitle="Government Secondary School"
                    date="June 2017 - Mar 2019"
                    desc="Percentage: 75.50%"
                  />
                </div>
              </motion.div>

              {/* Training & Certifications */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.div variants={fadeInUP} className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold font-display text-glow-purple">Certifications</h2>
                  <div className="w-16 h-1 bg-secondary mt-4 rounded-full"></div>
                </motion.div>

                <div className="space-y-6">
                  <motion.div variants={fadeInUP} className="glass-card p-6 rounded-2xl neon-border-purple relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-bl-xl">Nov 2025</div>
                    <h3 className="text-xl font-bold text-foreground">Cyber Security & Ethical Hacking</h3>
                    <p className="text-secondary font-medium text-sm mt-1 mb-3">The Drop Organization (4 Months)</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Network security, system vulnerabilities, malware awareness, and secure coding. Hands-on exposure to Kali Linux tools for reconnaissance.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <CertCard title="Cloud Computing" org="NPTEL" date="Apr 2025" />
                    <CertCard title="Generative AI" org="Outskill" date="Nov 2025" />
                    <CertCard title="Computer Networking" org="Google" date="Sep 2024" />
                    <CertCard title="Communications" org="Coursera" date="Sep 2024" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-card/30 backdrop-blur-sm border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display text-glow-cyan">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}
                className="lg:col-span-2 space-y-6"
              >
                <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:rahulkumawat8619@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">rahulkumawat8619@gmail.com</a>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Phone</p>
                    <a href="tel:+918619181791" className="text-foreground font-medium hover:text-secondary transition-colors">+91-8619181791</a>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-foreground font-medium">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}
                className="lg:col-span-3 glass-card p-8 rounded-2xl neon-border-cyan"
              >
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submission simulated!"); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Your Name</label>
                      <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Your Email</label>
                      <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Subject</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Job Opportunity" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea rows={5} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Hello Rahul..." required></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 border-t border-white/10 text-center glass">
          <p className="text-muted-foreground">
            &copy; 2025 <span className="text-primary font-display font-medium">Rahul Kumawat</span>. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

// SUBCOMPONENTS 

function SkillBar({ name, percent, color = "secondary" }: { name: string, percent: number, color?: "primary" | "secondary" }) {
  const bgColor = color === "primary" ? "bg-primary" : "bg-secondary";
  const glow = color === "primary" ? "shadow-[0_0_10px_#00ffff]" : "shadow-[0_0_10px_#a855f7]";
  
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-foreground text-sm">{name}</span>
        <span className="text-muted-foreground text-sm">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full ${bgColor} ${glow} rounded-full`}
        />
      </div>
    </div>
  );
}

type BadgeColor = "primary" | "secondary" | "green" | "orange";

function ProjectCard({ title, subtitle, date, category, description, features, tech, github, badge, badgeColor, icon }: {
  title: string;
  subtitle: string;
  date: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  badge: string;
  badgeColor: BadgeColor;
  icon: string;
}) {
  const badgeStyles: Record<BadgeColor, string> = {
    primary: "bg-primary/20 text-primary border-primary/30",
    secondary: "bg-secondary/20 text-secondary border-secondary/30",
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };

  const techColors: Record<BadgeColor, string> = {
    primary: "text-primary bg-primary/10",
    secondary: "text-secondary bg-secondary/10",
    green: "text-green-400 bg-green-500/10",
    orange: "text-orange-400 bg-orange-500/10",
  };

  const glowStyles: Record<BadgeColor, string> = {
    primary: "hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:border-primary/50",
    secondary: "hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:border-secondary/50",
    green: "hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] hover:border-green-500/50",
    orange: "hover:shadow-[0_0_25px_rgba(249,115,22,0.2)] hover:border-orange-500/50",
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`glass-card rounded-2xl p-6 flex flex-col h-full group border border-white/10 transition-all duration-300 ${glowStyles[badgeColor]}`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-display">{title}</h3>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap ml-2">{date}</span>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/70 rounded border border-white/20">{category}</span>
        <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${badgeStyles[badgeColor]}`}>{badge}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-1 mb-5 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
            <span className={`mt-0.5 text-[10px] ${badgeColor === "primary" ? "text-primary" : badgeColor === "secondary" ? "text-secondary" : badgeColor === "green" ? "text-green-400" : "text-orange-400"}`}>▹</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t, i) => (
          <span key={i} className={`text-xs px-2 py-1 rounded-md ${techColors[badgeColor]}`}>{t}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto">
        <a href={github} target="_blank" rel="noreferrer" className="flex-1 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg flex items-center justify-center gap-2 transition-all">
          <Github size={16} /> GitHub
        </a>
        <a href="#" className={`flex-1 py-2 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all border ${badgeStyles[badgeColor]}`}>
          <ExternalLink size={16} /> Demo
        </a>
      </div>
    </motion.div>
  );
}

function TimelineItem({ title, subtitle, date, desc, active = false }: { title: string, subtitle: string, date: string, desc: string, active?: boolean }) {
  return (
    <div className="relative">
      <div className={`absolute -left-[45px] w-5 h-5 rounded-full border-4 ${active ? 'border-primary bg-background shadow-[0_0_10px_#00ffff]' : 'border-white/20 bg-background'} transition-colors duration-300`}></div>
      <div className="glass-card p-5 rounded-xl">
        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
          <h4 className={`text-lg font-bold ${active ? 'text-primary' : 'text-foreground'}`}>{title}</h4>
          <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">{date}</span>
        </div>
        <h5 className="text-sm font-medium text-secondary mb-2">{subtitle}</h5>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function CertCard({ title, org, date }: { title: string, org: string, date: string }) {
  return (
    <div className="glass-card p-4 rounded-xl flex flex-col justify-between hover:border-primary/50 transition-all cursor-pointer group">
      <div>
        <h5 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">{title}</h5>
        <p className="text-xs text-muted-foreground mt-1">{org}</p>
      </div>
      <p className="text-[10px] font-mono text-white/40 mt-3">{date}</p>
    </div>
  );
}
