import { motion, type Variants } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

type CertColor = "primary" | "secondary" | "green" | "orange" | "blue";

const certificates = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr 2025",
    category: "Cloud & Infrastructure",
    description:
      "Completed the NPTEL Cloud Computing course covering cloud service models (IaaS, PaaS, SaaS), virtualization, cloud security, and deployment strategies.",
    skills: ["Cloud Architecture", "IaaS/PaaS/SaaS", "Virtualization", "Cloud Security"],
    link: "https://nptel.ac.in/",
    color: "primary" as CertColor,
    icon: "☁️",
    verified: true,
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Nov 2025",
    category: "Artificial Intelligence",
    description:
      "Mastered Generative AI concepts including large language models, prompt engineering, AI ethics, and practical applications of generative models in real-world scenarios.",
    skills: ["LLMs", "Prompt Engineering", "AI Ethics", "Generative Models"],
    link: "https://outskill.com/",
    color: "secondary" as CertColor,
    icon: "🤖",
    verified: true,
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Sep 2024",
    category: "Networking",
    description:
      "Google-certified course covering TCP/IP model, DNS, DHCP, network troubleshooting, and modern networking fundamentals including cloud networking.",
    skills: ["TCP/IP", "DNS & DHCP", "Network Protocols", "Troubleshooting"],
    link: "https://grow.google/certificates/",
    color: "blue" as CertColor,
    icon: "🌐",
    verified: true,
  },
  {
    title: "Computer Communications Specialization",
    issuer: "Coursera",
    date: "Sep 2024",
    category: "Networking",
    description:
      "Coursera specialization covering data communications, network architectures, internet protocols, and distributed systems fundamentals.",
    skills: ["Data Communications", "Network Architecture", "Internet Protocols", "Distributed Systems"],
    link: "https://www.coursera.org/",
    color: "green" as CertColor,
    icon: "📡",
    verified: true,
  },
  {
    title: "Cyber Security & Ethical Hacking",
    issuer: "The Drop Organization",
    date: "Nov 2025",
    category: "Security",
    description:
      "4-month intensive training covering ethical hacking principles, Kali Linux tools, network security, vulnerability assessment, and defensive security concepts.",
    skills: ["Kali Linux", "Ethical Hacking", "Network Security", "Vulnerability Assessment"],
    link: "#",
    color: "orange" as CertColor,
    icon: "🔐",
    verified: true,
  },
];

const colorMap: Record<CertColor, {
  border: string;
  shadow: string;
  bg: string;
  text: string;
  badge: string;
  tag: string;
  btn: string;
}> = {
  primary: {
    border: "hover:border-primary/50",
    shadow: "hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]",
    bg: "bg-primary/10",
    text: "text-primary",
    badge: "bg-primary/20 text-primary border-primary/30",
    tag: "bg-primary/10 text-primary",
    btn: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
  },
  secondary: {
    border: "hover:border-secondary/50",
    shadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
    bg: "bg-secondary/10",
    text: "text-secondary",
    badge: "bg-secondary/20 text-secondary border-secondary/30",
    tag: "bg-secondary/10 text-secondary",
    btn: "bg-secondary/10 text-secondary border-secondary/30 hover:bg-secondary/20",
  },
  green: {
    border: "hover:border-green-500/50",
    shadow: "hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]",
    bg: "bg-green-500/10",
    text: "text-green-400",
    badge: "bg-green-500/20 text-green-400 border-green-500/30",
    tag: "bg-green-500/10 text-green-400",
    btn: "bg-green-500/10 text-green-400 border-green-500/30 hover:bg-green-500/20",
  },
  orange: {
    border: "hover:border-orange-500/50",
    shadow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.2)]",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    tag: "bg-orange-500/10 text-orange-400",
    btn: "bg-orange-500/10 text-orange-400 border-orange-500/30 hover:bg-orange-500/20",
  },
  blue: {
    border: "hover:border-blue-400/50",
    shadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    tag: "bg-blue-500/10 text-blue-400",
    btn: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
  },
};

export default function Certificates() {
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
            <p className="text-xs font-mono text-primary/60 tracking-widest uppercase mb-3">Credentials & Achievements</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">
                Certificates
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-sm leading-relaxed">
              Verified certifications from leading platforms and organizations, demonstrating 
              expertise across Cloud, AI, Networking, and Cybersecurity.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-3 gap-4 mb-16"
          >
            {[
              { value: `${certificates.length}`, label: "Certificates" },
              { value: "4+", label: "Platforms" },
              { value: "2024–25", label: "Timeline" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-5 text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {stat.value}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certificate Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certificates.map((cert, i) => {
              const c = colorMap[cert.color];
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`glass-card rounded-2xl p-6 border border-white/10 flex flex-col transition-all duration-300 ${c.border} ${c.shadow}`}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-2xl`}>
                        {cert.icon}
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${c.badge}`}>
                          {cert.category}
                        </span>
                      </div>
                    </div>
                    {cert.verified && (
                      <div className="flex items-center gap-1 text-green-400 text-xs font-medium">
                        <Award size={12} />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className={`text-lg font-bold font-display mb-1 ${c.text}`}>{cert.title}</h2>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building size={11} />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {cert.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.map((s, j) => (
                      <span key={j} className={`text-xs px-2 py-1 rounded-full ${c.tag}`}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Open Link Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2.5 text-sm font-semibold rounded-xl border flex items-center justify-center gap-2 transition-all duration-200 ${c.btn}`}
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </main>
    </div>
  );
}
