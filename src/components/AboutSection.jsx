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
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <Container>
        <SectionTitle eyebrow="The Foundation" title="Vision & Mission" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative isolate mx-auto overflow-hidden rounded-[2.5rem] border border-emerald-900/5 bg-white shadow-[0_20px_60px_rgba(13,74,51,0.08)]"
        >
          <div className="absolute inset-0 -z-20 bg-white" />

          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-brand via-brand to-[#062c1e]
              [clip-path:polygon(0_0,100%_0,100%_44%,0_58%)]
              md:[clip-path:polygon(0_0,55%_0,43%_100%,0_100%)]
              lg:[clip-path:polygon(0_0,54%_0,46%_100%,0_100%)]"
          />

          <div className="relative z-10 grid min-h-[38rem] md:min-h-[34rem] md:grid-cols-2">
            {/* Vision */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <div className="max-w-[22rem]">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-sm">
                  <Eye size={30} strokeWidth={1.6} />
                </div>

                <h3 className="text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-white drop-shadow-md sm:text-5xl">
                  Our
                  <br />
                  Vision
                </h3>

                <p className="mt-6 text-sm leading-8 text-white/88 sm:text-base">
                  {data.vision}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <div className="max-w-[22rem] md:ml-auto">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-brand/10 bg-brand-soft text-brand shadow-lg">
                  <Goal size={30} strokeWidth={1.6} />
                </div>

                <h3 className="text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-brand drop-shadow-sm sm:text-5xl">
                  Our
                  <br />
                  Mission
                </h3>

                <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
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