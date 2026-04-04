import { motion } from "framer-motion";
import { ArrowRight, MapPin, Cpu } from "lucide-react";
import Container from "./Container";
import heroImage from "../assets/hero-farm.jpeg";

const HeroSection = ({ data, onOpenInquiry }) =>  {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-28 sm:pt-32">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* readability overlays */}
      <div className="absolute inset-0 -z-10 bg-black/35 sm:bg-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/10 sm:from-black/75 sm:via-black/45 sm:to-transparent" />

      {/* ambient glow */}
      <div className="absolute left-[-6rem] top-[-4rem] -z-10 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[radial-gradient(circle_at_top_left,rgba(214,243,109,0.12),transparent_32%)]" />

      <Container className="relative z-10 max-w-[96rem]">
        <div className="flex min-h-[calc(100svh-7rem)] items-center py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-[46rem]"
          >
            <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-lime-300 backdrop-blur">
              Remote Estate Visibility
            </span>

            <h1 className="max-w-[10ch] text-[clamp(3.4rem,8vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              Control.
              <br />
              Security.
              <br />
              <span className="italic text-lime-300">Peace of Mind.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/90 drop-shadow-md sm:text-lg">
              {data.executiveSummary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(13,74,51,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Get free property health check
                <ArrowRight size={18} />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 grid max-w-2xl gap-4 rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:grid-cols-2 sm:p-6"
            >
              <div className="flex items-start gap-3 rounded-2xl bg-black/10 p-4">
                <MapPin size={22} className="mt-0.5 shrink-0 text-lime-300" />
                <div className="text-sm leading-6 text-white">
                  Your Property in Kilinochchi, Right at Your Fingertips.
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-black/10 p-4">
                <Cpu size={22} className="mt-0.5 shrink-0 text-lime-300" />
                <div className="text-sm leading-6 text-white/85">
                  Bridging time-honored expertise with cutting-edge technology
                  for productivity and lasting sustainability.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;