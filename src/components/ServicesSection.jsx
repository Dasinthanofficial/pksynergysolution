import { motion } from "framer-motion";
import {
  Blocks,
  BriefcaseBusiness,
  Cpu,
  LeafyGreen,
  ArrowUpRight,
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
    <section
      id="services"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Premium dark background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#031a12_0%,#072d1f_45%,#0d4a33_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_top_left,rgba(213,243,111,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_22%)]" />
      <div className="absolute left-10 top-20 -z-10 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="absolute right-10 bottom-10 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 max-w-4xl"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            Our Services
          </span>

          <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Complete Ecosystem
            <br />
            Management
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            We offer a full suite of services designed to optimize agricultural
            operations through strategic oversight, advanced technology, and
            sustainable cultivation practices.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.title] || BriefcaseBusiness;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-lime-300/20 hover:bg-white/[0.08]"
              >
                {/* subtle glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime-300/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex rounded-2xl bg-white/10 p-4 text-lime-300 ring-1 ring-white/10">
                      <Icon size={24} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-white/40 transition duration-300 group-hover:text-lime-300"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-white/72">
                    {service.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />

                  <div className="mt-5">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/60">
                      Tailored Approach
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;