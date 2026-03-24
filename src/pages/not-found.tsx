import { Link } from "wouter";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <ParticleBackground />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 rounded-3xl text-center max-w-lg mx-4 relative z-10 neon-border-cyan"
      >
        <h1 className="text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 text-glow-cyan">404</h1>
        <h2 className="text-2xl font-bold mb-4">System Anomaly Detected</h2>
        <p className="text-muted-foreground mb-8">
          The sector of the network you're trying to access doesn't exist or has been moved to an archived timeline.
        </p>
        
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all">
          <Home size={18} />
          Return to Base
        </Link>
      </motion.div>
    </div>
  );
}
