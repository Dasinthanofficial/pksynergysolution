import { motion } from "framer-motion";
import { Brain, Building2, Sprout } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const AboutSection = ({ data }) => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="The Foundation"
          title="The Future of Estate and Agricultural Management"
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            custom={0.1}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark p-8 text-white shadow-[0_30px_80px_rgba(13,74,51,0.25)] sm:p-10"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-white/10 p-3">
              <Sprout size={22} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">Executive Summary</h3>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/85 sm:text-base">
              {data.executiveSummary}
            </p>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              custom={0.2}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-brand-soft p-3 text-brand">
                <Brain size={22} />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">Vision & Mission</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-800">Vision:</span> {data.vision}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-800">Mission:</span> {data.mission}
              </p>
            </motion.div>

            <motion.div
              custom={0.3}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-brand-soft p-3 text-brand">
                <Building2 size={22} />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">Our Positioning</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                PK Synergy Solution works at the intersection of agriculture,
                construction, and estate management, with a focus on modernizing
                farming through strategy, sustainability, and technology.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;