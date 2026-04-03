import { motion } from "framer-motion";
import {
  Blocks,
  BriefcaseBusiness,
  Cpu,
  LeafyGreen,
} from "lucide-react";
import Container from "./Container";

const iconMap = {
  "Estate Management": BriefcaseBusiness,
  "Tech Integration": Cpu,
  "Sustainable Cultivation": LeafyGreen,
  "Project Consultancy": Blocks,
};

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#04281b] via-[#063626] to-[#0b4a33]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(circle_at_top_left,rgba(213,243,111,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_20%)]" />

      <Container>
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
            Full Suite of Services
          </span>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Complete Ecosystem
            <br />
            Management
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            A refined service framework designed to optimize
            operations with strategy, technology, sustainability, and oversight.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.title] || BriefcaseBusiness;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/8"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-white/10 p-4 text-lime-300">
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-white/72">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;