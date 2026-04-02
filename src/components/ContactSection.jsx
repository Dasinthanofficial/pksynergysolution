import { motion } from "framer-motion";
import { ArrowUpRight, BadgeInfo, Building2 } from "lucide-react";
import Container from "./Container";

const ContactSection = ({ companyName }) => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-28"
    >
      <div className="absolute left-0 top-10 -z-10 h-72 w-72 rounded-full bg-lime-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-emerald-900/10 blur-3xl" />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="mb-5 inline-flex rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand shadow-sm backdrop-blur">
                Contact Information
              </span>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl">
                Ready to Connect with
                <br />
                PK Synergy Solution?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Below is the verified company information available in the
                provided profile.
              </p>
            </div>

            <div className="mt-10">
              <div className="group rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(12,20,16,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1">
                <div className="mb-5 inline-flex rounded-2xl bg-brand-soft p-4 text-brand">
                  <Building2 size={24} />
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Company Name
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {companyName}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_30px_90px_rgba(12,20,16,0.08)] backdrop-blur sm:p-10"
          >
            <div className="mb-5 inline-flex rounded-2xl bg-brand p-4 text-white shadow-lg">
              <BadgeInfo size={22} />
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Important Note
            </h3>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              The provided PDF includes placeholders for office address, email,
              phone number, and website link.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Since those details were not specified in the source file, they
              are intentionally not displayed here to ensure the website
              contains only correct and verified information.
            </p>

            <div className="mt-8 rounded-[1.6rem] bg-gradient-to-r from-brand to-brand-dark p-6 text-white shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <p className="max-w-md text-sm leading-7 text-white/85 sm:text-base">
                  This section is ready for future backend integration such as a
                  dynamic contact form, CRM, or admin-managed company data.
                </p>
                <ArrowUpRight className="shrink-0 text-white/80" size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;