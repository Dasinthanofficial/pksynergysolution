import { motion } from "framer-motion";
import {
  MessageSquareMore,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import Container from "./Container";
import InquiryForm from "./InquiryForm";

const ContactSection = ({ companyName }) => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28"
    >
      <div className="absolute left-0 top-10 -z-10 h-72 w-72 rounded-full bg-lime-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-900/10 blur-3xl" />

      <Container>
        <div className="grid gap-8 lg:gap-10 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex min-w-0 flex-col justify-between"
          >
            <div>
              <span className="mb-5 inline-flex rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand shadow-sm backdrop-blur sm:text-xs">
                Contact Information
              </span>

              <h2 className="max-w-3xl text-[clamp(2rem,8vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950">
                Ready to Connect with
                <br />
                {companyName}?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                Reach out to us to discuss how we can support your needs. Our
                team is ready to provide customized solutions for your unique
                requirements.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/60 bg-white/80 p-5 shadow-[0_20px_60px_rgba(12,20,16,0.08)] backdrop-blur sm:mt-10 sm:rounded-[2rem] sm:p-6">
              <div className="mb-4 inline-flex rounded-2xl bg-brand-soft p-4 text-brand">
                <MessageSquareMore size={24} />
              </div>

              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                {companyName}
              </h3>

              <div className="mt-6 flex flex-col gap-5 sm:mt-8">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <MapPin size={16} />
                  </span>
                  <span className="pt-1 leading-relaxed font-medium ">
                    39, Vivekananthanagar west
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Mail size={16} />
                  </span>
                  <a
                    href="mailto:info@pksynergy.lk"
                    className="min-w-0 break-all font-medium transition hover:text-brand"
                  >
                    info@pksynergy.lk
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Phone size={16} />
                  </span>
                  <a
                    href="tel:+94751771778"
                    className="font-medium transition hover:text-brand"
                  >
                    075 177 1778
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Globe size={16} />
                  </span>
                  <a
                    href="https://www.pksynergy.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 break-all font-medium transition hover:text-brand"
                  >
                    www.pksynergy.lk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="min-w-0"
          >
            <InquiryForm companyName={companyName} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;