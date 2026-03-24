import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const RAHUL_QA: Record<string, string> = {
  default:
    "Hi! I'm Rahul's AI assistant 🤖 Ask me anything about Rahul — his skills, projects, education, or how to contact him!",
  greeting:
    "Hey there! 👋 I'm here to tell you all about Rahul Kumawat. What would you like to know?",
  skills:
    "Rahul is skilled in:\n• Languages: JavaScript, Python, Java, HTML/CSS, SQL, C++\n• Frameworks: React.js, Node.js, Spring Boot, Express.js\n• AI/ML: SpeechRecognition, NLP, Scikit-learn\n• Tools: Git, MySQL, MongoDB, Linux, Power BI",
  projects:
    "Rahul has built 4 solid projects:\n1. 📝 Online Examination System (Java, Spring Boot, MySQL)\n2. 🏷️ BidBazar – Real-Time Auction Platform (HTML/JS/Java)\n3. 🌦️ Weather Forecast Website (JS, OpenWeather API)\n4. 🤖 AI PC Assistant (Python, SpeechRecognition)",
  education:
    "Rahul's education:\n🎓 B.Tech CSE at LPU, Punjab (CGPA: 7.11, Since 2023)\n📚 Intermediate – 93.5% (Proton Academy, Jaipur)\n📚 Matriculate – 75.5% (Govt. School, Jaipur)",
  contact:
    "You can reach Rahul at:\n📧 rahulkumawat8619@gmail.com\n📱 +91-8619181791\n🔗 linkedin.com/in/rahulkumawat\n💻 github.com/Rahul908619",
  certifications:
    "Rahul's certifications:\n☁️ Cloud Computing – NPTEL (Apr 2025)\n🤖 Generative AI Mastermind – Outskill (Nov 2025)\n🌐 Bits & Bytes of Networking – Google (Sep 2024)\n📡 Computer Communications – Coursera (Sep 2024)",
  training:
    "Rahul completed a 4-month Cyber Security & Ethical Hacking training at The Drop Organization (Nov 2025), covering Kali Linux, network security, firewalls, and intrusion detection.",
  location:
    "Rahul is from Jaipur, Rajasthan, India 📍 and is currently studying at Lovely Professional University in Punjab.",
  hire:
    "Rahul is actively open to opportunities! 🚀 He's looking for roles in Full Stack Development, AI/ML, and software engineering. Reach him at rahulkumawat8619@gmail.com",
  github:
    "Rahul's GitHub: github.com/Rahul908619 — check out his repositories and projects there!",
  linkedin:
    "Rahul's LinkedIn: linkedin.com/in/rahulkumawat — feel free to connect!",
  java:
    "Yes! Rahul works with Java and Spring Boot — he built the Online Examination System and BidBazar auction platform using Java, Spring Boot, and MySQL.",
  python:
    "Rahul loves Python! 🐍 He built an AI PC Assistant using Python, SpeechRecognition, and Pyttsx3. He also uses Python for data science with Pandas, NumPy, and Scikit-learn.",
  react:
    "Rahul is proficient in React.js for building interactive frontend applications. He uses it alongside Node.js/Express for full-stack MERN development.",
  experience:
    "Rahul is a final-year B.Tech CSE student with 2+ years of hands-on project experience in full-stack development, AI, and automation.",
};

function getResponse(input: string): string {
  const q = input.toLowerCase().trim();
  if (q.match(/hi|hello|hey|what's up|sup/)) return RAHUL_QA.greeting;
  if (q.match(/skill|know|tech|stack|language|framework/)) return RAHUL_QA.skills;
  if (q.match(/project|built|build|work|portfolio/)) return RAHUL_QA.projects;
  if (q.match(/educat|degree|cgpa|grade|university|lpu|school|college/)) return RAHUL_QA.education;
  if (q.match(/contact|email|phone|mobile|reach|connect/)) return RAHUL_QA.contact;
  if (q.match(/certif|nptel|google|coursera|outskill/)) return RAHUL_QA.certifications;
  if (q.match(/training|cyber|security|hacking|kali/)) return RAHUL_QA.training;
  if (q.match(/location|from|city|jaipur|india|rajasthan/)) return RAHUL_QA.location;
  if (q.match(/hire|job|opportun|looking|open|recruit|employ/)) return RAHUL_QA.hire;
  if (q.match(/github/)) return RAHUL_QA.github;
  if (q.match(/linkedin/)) return RAHUL_QA.linkedin;
  if (q.match(/java|spring/)) return RAHUL_QA.java;
  if (q.match(/python/)) return RAHUL_QA.python;
  if (q.match(/react/)) return RAHUL_QA.react;
  if (q.match(/experience|year/)) return RAHUL_QA.experience;
  return "I'm not sure about that, but I know a lot about Rahul! Try asking about his skills, projects, education, certifications, or how to hire him. 😊";
}

const QUICK_PROMPTS = [
  "What are his skills?",
  "Show me his projects",
  "How to contact him?",
  "Is he open to work?",
];

export function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "bot", text: RAHUL_QA.default },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  let nextId = useRef(1);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: nextId.current++, role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const response = getResponse(trimmed);
      setMessages((prev) => [...prev, { id: nextId.current++, role: "bot", text: response }]);
      setTyping(false);
    }, 800 + Math.random() * 400);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.5),0_0_40px_rgba(168,85,247,0.3)] bg-gradient-to-br from-primary to-secondary text-background"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Ping ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-primary/40 pointer-events-none" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-[998] w-[340px] max-h-[520px] flex flex-col rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6),0_0_20px_rgba(0,255,255,0.2)]"
            style={{ background: "rgba(10,5,30,0.95)", border: "1px solid rgba(0,255,255,0.2)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground font-display">Rahul's AI Assistant</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-[10px] text-muted-foreground">Online · Ask me anything</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${
                    msg.role === "bot"
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "bg-secondary/20 text-secondary border border-secondary/30"
                  }`}>
                    {msg.role === "bot" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-wrap ${
                      msg.role === "bot"
                        ? "bg-white/5 border border-white/10 text-foreground rounded-tl-none"
                        : "bg-primary/20 border border-primary/20 text-primary rounded-tr-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl rounded-tl-none flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-white/5">
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="flex-shrink-0 text-[10px] px-2 py-1 rounded-full border border-primary/30 text-primary/70 hover:bg-primary/10 hover:text-primary transition-all whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 px-4 py-3 border-t border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask about Rahul..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background disabled:opacity-40 hover:shadow-[0_0_10px_rgba(0,255,255,0.4)] transition-all flex-shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
