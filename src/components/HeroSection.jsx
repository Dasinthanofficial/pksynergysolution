import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import Container from "./Container";
import heroImage from "../assets/hero-farm.webp";

const HeroSection = ({ data }) => {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20 lg:min-h-[92vh]">
      <div className="absolute left-0 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-[360px] w-[360px] rounded-full bg-emerald-900/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            <span className="mb-6 inline-flex rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand shadow-sm backdrop-blur">
              Company Profile
            </span>

            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-slate-950 sm:text-7xl lg:text-[6.15rem]">
              Precision.
              <br />
              Growth.
              <br />
              <span className="italic text-brand">Sustainability.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
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
                className="inline-flex items-center rounded-2xl border border-emerald-900/10 bg-white/80 px-6 py-3.5 text-sm font-semibold text-brand backdrop-blur transition duration-300 hover:bg-white"
              >
                View Profile
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 inline-flex max-w-xl items-center gap-3 rounded-2xl border border-white/70 bg-white/75 px-5 py-4 text-sm text-slate-700 shadow-lg backdrop-blur"
            >
              <ShieldCheck size={18} className="shrink-0 text-brand" />
              <span className="leading-6">
                Bridging time-honored expertise with cutting-edge technology for
                productivity and lasting sustainability.
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/50 bg-white/20 shadow-[0_40px_120px_rgba(10,25,18,0.18)]">
              <img
                src={heroImage}
                alt="Modern agricultural estate landscape"
                className="h-[620px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/35 via-transparent to-lime-200/15" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="absolute -left-4 top-8 max-w-xs rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-2xl backdrop-blur-xl sm:-left-10"
            >
              <div className="mb-3 flex items-center gap-2 text-brand">
                <Sparkles size={18} />
                <h3 className="font-semibold">Vision</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">{data.vision}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6 }}
              className="absolute -right-3 bottom-10 max-w-xs rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-2xl backdrop-blur-xl sm:-right-8"
            >
              <div className="mb-3 flex items-center gap-2 text-brand">
                <Leaf size={18} />
                <h3 className="font-semibold">Mission</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">{data.mission}</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;