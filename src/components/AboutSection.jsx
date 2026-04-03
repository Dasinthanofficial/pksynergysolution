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
          title="Vision & Mission"
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
         

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

           
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;