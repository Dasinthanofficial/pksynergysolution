import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import {
  ArrowUpRight,
  MessageSquareMore,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import Container from "./Container";

const ContactSection = ({ companyName }) => {
  const [phone, setPhone] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (!phone) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your phone number.",
      });
      return;
    }

    if (!isPossiblePhoneNumber(phone)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid phone number.",
      });
      return;
    }

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Use .set() instead of .append() to strictly avoid duplicate fields
    formData.set("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.set("from_name", companyName || "PK Synergy Solutions");
    formData.set("phone", phone ?? "");

    // Convert FormData to JSON (Recommended by Web3Forms for React)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll be in touch.",
        });
        form.reset();
        setPhone(undefined);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-28"
    >
      <div className="absolute left-0 top-10 -z-10 h-72 w-72 rounded-full bg-lime-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-900/10 blur-3xl" />

      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex min-w-0 flex-col justify-between"
          >
            <div>
              <span className="mb-5 inline-flex rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand shadow-sm backdrop-blur">
                Contact Information
              </span>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Ready to Connect with
                <br />
                {companyName}?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Reach out to us to discuss how we can support your needs. Our
                team is ready to provide customized solutions for your unique
                requirements.
              </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(12,20,16,0.08)] backdrop-blur">
              <div className="mb-4 inline-flex rounded-2xl bg-brand-soft p-4 text-brand">
                <MessageSquareMore size={24} />
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {companyName}
              </h3>

              <div className="mt-8 flex flex-col gap-5">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <MapPin size={16} />
                  </span>
                  <span className="pt-1 leading-relaxed">
                    39, Vivekananthanagar west
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Mail size={16} />
                  </span>
                  <a
                    href="mailto:info@pksynergy.lk"
                    className="font-medium transition hover:text-brand"
                  >
                    info@pksynergy.lk
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Phone size={16} />
                  </span>
                  <a
                    href="tel:0751771778"
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
                    className="font-medium transition hover:text-brand"
                  >
                    www.pksynergy.lk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="min-w-0 rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_30px_90px_rgba(12,20,16,0.08)] backdrop-blur sm:p-8 lg:p-10"
          >
            <div className="mb-6">
              <span className="inline-flex rounded-2xl bg-brand p-4 text-white shadow-lg">
                <ArrowUpRight size={22} />
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Send an Inquiry
            </h3>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Fill out the form below and our team will get back to you promptly.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              {/* Row 1 */}
              <div className="grid gap-5 md:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-emerald-900/10 bg-[#f7faf8] px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-emerald-900/10 bg-[#f7faf8] px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-5 md:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone Number
                  </label>

                  <PhoneInput
                    id="phone"
                    defaultCountry="LK"
                    international
                    withCountryCallingCode
                    countryCallingCodeEditable={false}
                    value={phone}
                    onChange={setPhone}
                    required
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    className="phone-input-shell"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Enter subject"
                    className="w-full rounded-2xl border border-emerald-900/10 bg-[#f7faf8] px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="min-w-0">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-emerald-900/10 bg-[#f7faf8] px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10"
                />
              </div>

              {submitStatus && (
                <div
                  className={`rounded-xl p-4 text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(13,74,51,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark sm:w-auto disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;