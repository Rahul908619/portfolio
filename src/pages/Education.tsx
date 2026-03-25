import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Aug 2023 – Present",
    grade: "CGPA: 7.11",
    gradeType: "cgpa",
    status: "Ongoing",
    highlights: [
      "Specialization in Full Stack Development & AI/ML",
      "Active member of coding clubs and hackathons",
      "Coursework: Data Structures, Algorithms, DBMS, OS, CN",
      "Project-based learning with real-world applications",
    ],
    color: "primary",
    icon: "🎓",
  },
  {
    degree: "Intermediate (12th Grade)",
    field: "Science Stream (PCM)",
    institution: "Proton Academy Senior Secondary School",
    location: "Jaipur, Rajasthan",
    duration: "June 2019 – Mar 2021",
    grade: "Percentage: 93.50%",
    gradeType: "percent",
    status: "Completed",
    highlights: [
      "Science stream with Physics, Chemistry, Mathematics",
      "Secured 93.50% in board examination",
      "Strong foundation in analytical and logical thinking",
      "Active participation in science exhibitions",
    ],
    color: "secondary",
    icon: "📚",
  },
  {
    degree: "Matriculate (10th Grade)",
    field: "Secondary Education",
    institution: "Government Secondary School",
    location: "Jaipur, Rajasthan",
    duration: "June 2017 – Mar 2019",
    grade: "Percentage: 75.50%",
    gradeType: "percent",
    status: "Completed",
    highlights: [
      "Core subjects: Mathematics, Science, Social Studies",
      "Developed discipline and academic fundamentals",
      "Foundation for higher studies in Science stream",
    ],
    color: "blue",
    icon: "🏫",
  },
];

const trainingData = [
  {
    title: "Cyber Security & Ethical Hacking Training Program",
    organization: "The Drop Organization",
    duration: "4 Months",
    date: "Nov 2025",
    description:
      "Completed a comprehensive foundational training in Cybersecurity and Ethical Hacking, covering basic concepts of network security, system vulnerabilities, malware awareness, secure coding, and ethical hacking principles.",
    skills: [
      "Kali Linux tools",
      "Reconnaissance & Scanning",
      "Password Testing",
      "Network Security",
      "Firewalls & Encryption",
      "Intrusion Detection",
    ],
    color: "green",
    icon: "🔐",
  },
];

export default function Education() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* Page Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono text-primary/60 tracking-widest uppercase mb-3">Academic Journey</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">
                Education
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-sm leading-relaxed">
              My academic background has provided a strong foundation in Computer Science, 
              problem-solving, and building real-world software.
            </p>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 mb-20"
          >
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className={`glass-card rounded-2xl p-8 border border-white/10 transition-all duration-300 ${
                  edu.color === "primary"
                    ? "hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]"
                    : edu.color === "secondary"
                    ? "hover:border-secondary/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
                    : "hover:border-blue-400/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 ${
                    edu.color === "primary" ? "bg-primary/10" : edu.color === "secondary" ? "bg-secondary/10" : "bg-blue-500/10"
                  }`}>
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h2 className={`text-xl md:text-2xl font-bold font-display ${
                          edu.color === "primary" ? "text-primary" : edu.color === "secondary" ? "text-secondary" : "text-blue-400"
                        }`}>
                          {edu.degree}
                        </h2>
                        <p className="text-foreground font-semibold mt-0.5">{edu.field}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        edu.status === "Ongoing"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-white/10 text-white/60 border-white/20"
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <GraduationCap size={14} className={edu.color === "primary" ? "text-primary" : edu.color === "secondary" ? "text-secondary" : "text-blue-400"} />
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {edu.duration}
                      </span>
                    </div>

                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-5 ${
                      edu.color === "primary" ? "bg-primary/10 text-primary" : edu.color === "secondary" ? "bg-secondary/10 text-secondary" : "bg-blue-500/10 text-blue-400"
                    }`}>
                      <Star size={14} />
                      <span className="font-bold text-sm">{edu.grade}</span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className={`mt-1 text-[10px] ${
                            edu.color === "primary" ? "text-primary" : edu.color === "secondary" ? "text-secondary" : "text-blue-400"
                          }`}>▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Training Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-glow-purple">
                Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Programs</span>
              </h2>
              <div className="w-16 h-1 bg-secondary mt-4 mx-auto rounded-full"></div>
            </motion.div>

            {trainingData.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-3xl flex-shrink-0">
                    {t.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between gap-3 mb-3">
                      <div>
                        <h2 className="text-xl font-bold font-display text-green-400">{t.title}</h2>
                        <p className="text-foreground font-semibold mt-0.5">{t.organization}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                          {t.date}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">{t.duration}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.description}</p>

                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Skills Covered</p>
                      <div className="flex flex-wrap gap-2">
                        {t.skills.map((s, j) => (
                          <span key={j} className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </main>
    </div>
  );
}
