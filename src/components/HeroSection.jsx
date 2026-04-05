import { motion } from "framer-motion";
import { ArrowRight, MapPin, Cpu } from "lucide-react";
import Container from "./Container";
import heroImage from "../assets/hero-farm.jpeg";

const HeroSection = ({ data, onOpenInquiry }) => {
  return (
    <section className="relative isolate overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-[1.03] object-cover object-center sm:scale-[1.05] sm:object-[38%_center] lg:object-[40%_center]"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/40 sm:bg-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/82 via-black/58 to-black/18 sm:from-black/75 sm:via-black/45 sm:to-transparent" />

      <div className="absolute left-[-6rem] top-[-4rem] -z-10 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[radial-gradient(circle_at_top_left,rgba(214,243,109,0.12),transparent_32%)]" />

      <Container className="relative z-10 max-w-[96rem]">
        <div className="flex min-h-[calc(100dvh-5.5rem)] items-center py-12 sm:min-h-[calc(100dvh-7rem)] sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="w-full max-w-3xl lg:max-w-[46rem]"
          >
            <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300 backdrop-blur min-[390px]:text-[11px]">
              Remote Estate Visibility
            </span>

            <h1 className="max-w-[10ch] text-[clamp(2.8rem,12vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              Control.
              <br />
              Security.
              <br />
              <span className="italic text-lime-300">Peace of Mind.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 drop-shadow-md sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              {data.executiveSummary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(13,74,51,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark sm:w-auto"
              >
                Get free property health check
                <ArrowRight size={18} />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 grid max-w-3xl gap-3 rounded-[1.35rem] border border-white/15 bg-white/10 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:mt-10 sm:grid-cols-2 sm:gap-4 sm:rounded-[1.75rem] sm:p-6"
            >
              <div className="flex items-start gap-3 rounded-2xl bg-black/10 p-3.5 sm:p-4">
                <MapPin size={22} className="mt-0.5 shrink-0 text-lime-300" />
                <div className="text-sm leading-6 text-white">
                  Your Property in Kilinochchi, Right at Your Fingertips.
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-black/10 p-3.5 sm:p-4">
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