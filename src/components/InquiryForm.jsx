import { useState } from "react";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import { ArrowUpRight } from "lucide-react";

const InquiryForm = ({ companyName }) => {
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

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setSubmitStatus({
        type: "error",
        message: "Form is not configured properly.",
      });
      return;
    }

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("access_key", accessKey);
    formData.set("from_name", companyName || "PK Synergy Solutions");
    formData.set("phone", phone ?? "");

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
    <div className="min-w-0 rounded-[1.5rem] border border-white/60 bg-white/95 p-5 shadow-[0_30px_90px_rgba(12,20,16,0.08)] backdrop-blur sm:rounded-[2rem] sm:p-8 lg:p-10">
      <div className="mb-6">
        <span className="inline-flex rounded-2xl bg-brand p-4 text-white shadow-lg">
          <ArrowUpRight size={22} />
        </span>
      </div>

      <h3
        id="inquiry-title"
        className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl lg:text-3xl"
      >
        Send an Inquiry
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
        Fill out the form below and our team will get back to you promptly.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
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

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
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
            rows={5}
            placeholder="Write your message..."
            className="w-full resize-none rounded-2xl border border-emerald-900/10 bg-[#f7faf8] px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10"
          />
        </div>

        {submitStatus && (
          <div
            aria-live="polite"
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
          className="inline-flex w-full items-center justify-center rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(13,74,51,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;