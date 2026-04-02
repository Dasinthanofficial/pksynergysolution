import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Container from "./Container";
import heroImage from "../assets/hero-farm.webp";

const HeroSection = ({ data }) => {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-32 sm:pt-36"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* dark gradient only on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      {/* soft glow accents */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-lime-300/10 blur-3xl" />
      <div className="absolute left-1/3 bottom-0 h-[320px] w-[320px] rounded-full bg-emerald-400/10 blur-3xl" />

      <Container>
        <div className="relative z-10 flex min-h-[88vh] items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-4xl"
          >
          
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-7xl lg:text-[6.25rem]">
              Precision.
              <br />
              Growth.
              <br />
              <span className="italic text-lime-300">Sustainability.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              {data.executiveSummary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(13,74,51,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/15"
              >
                View Profile
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 inline-flex max-w-xl items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm text-white/90 shadow-lg backdrop-blur"
            >
              <ShieldCheck size={18} className="shrink-0 text-lime-300" />
              <span className="leading-6">
                Bridging time-honored expertise with cutting-edge technology for
                productivity and lasting sustainability.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;