import { motion } from "framer-motion";
import { Eye, Goal } from "lucide-react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const highlightPhrase = (text, phrase) => {
  if (!text || !phrase || !text.includes(phrase)) return text;

  const parts = text.split(phrase);

  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 && (
        <span className="rounded-md bg-brand/10 px-2 py-1 font-semibold text-brand shadow-sm">
          {phrase}
        </span>
      )}
    </span>
  ));
};

const AboutSection = ({ data }) => {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionTitle eyebrow="The Foundation" title="Vision & Mission" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative isolate mx-auto overflow-hidden rounded-[2rem] border border-emerald-900/5 bg-white shadow-[0_20px_60px_rgba(13,74,51,0.08)] sm:rounded-[2.5rem]"
        >
          <div className="absolute inset-0 -z-20 bg-white" />

          <div className="absolute inset-0 -z-10 md:hidden bg-[linear-gradient(180deg,#0d4a33_0%,#062c1e_49%,#ffffff_49%,#ffffff_100%)]" />

          <div
            className="absolute inset-0 -z-10 hidden bg-gradient-to-br from-brand via-brand to-[#062c1e]
              md:block
              md:[clip-path:polygon(0_0,55%_0,43%_100%,0_100%)]
              lg:[clip-path:polygon(0_0,54%_0,46%_100%,0_100%)]"
          />

          <div className="relative z-10 grid md:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
              <div className="max-w-none md:max-w-[22rem]">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-sm sm:h-16 sm:w-16">
                  <Eye size={28} strokeWidth={1.6} />
                </div>

                <h3 className="text-[clamp(2.2rem,10vw,3.25rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-white drop-shadow-md">
                  Our
                  <br />
                  Vision
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/88 sm:text-base sm:leading-8">
                  {data.vision}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
              <div className="max-w-none md:ml-auto md:max-w-[22rem]">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand/10 bg-brand-soft text-brand shadow-lg sm:h-16 sm:w-16">
                  <Goal size={28} strokeWidth={1.6} />
                </div>

                <h3 className="text-[clamp(2.2rem,10vw,3.25rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-brand drop-shadow-sm">
                  Our
                  <br />
                  Mission
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {highlightPhrase(data.mission, "at the fingertips")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;