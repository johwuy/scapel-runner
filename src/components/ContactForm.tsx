import { useState } from 'react';

const inputClass = "w-full py-4 px-5 text-[1.05rem] border-2 border-[#ddd] rounded-[4px] outline-none font-inter transition-[border-color] duration-200 bg-white focus:border-(--color-brand)";
const labelClass = "block text-[0.9rem] font-semibold mb-[0.6rem] font-inter tracking-[0.02em]";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  ?? (import.meta.env.DEV ? "33069c99-9d68-4c41-9d00-9f2f81aa7f14" : "1e73894d-fcc9-4da3-b78e-2370e90dcf7f");

export default function ContactForm() {
  const [result, setResult] = useState<"" | "Success!" | "Error">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("");
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.success ? "Success!" : "Error");
      if (data.success) form.reset();
    } catch {
      setResult("Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-8 bg-[#f9f6f2]">
      <div className="max-w-[700px] mx-auto text-center">
        <p className="text-xs tracking-[0.22em] uppercase text-(--color-brand) font-bold font-inter mb-4">Get Involved</p>
        <h2 className="font-playfair text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em] mb-6">
          Join the Mission
        </h2>
        <p className="text-[1.2rem] leading-[1.75] text-[#555] max-w-[560px] mx-auto mt-0 mb-14">
          Whether you're a hospital with surplus instruments, an NGO in need, or someone who believes every surgical team deserves the right tools—we want to hear from you.
        </p>

        <form onSubmit={onSubmit} className="text-left">
          <div className="mb-7">
            <label htmlFor="contact-name" className={labelClass}>
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div className="mb-7">
            <label htmlFor="contact-email" className={labelClass}>
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>

          <div className="mb-8">
            <label className={labelClass}>
              I'm reaching out as...
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'ngo', label: 'An NGO / Medical Mission' },
                { value: 'hospital', label: 'A Hospital / Donor' },
                { value: 'volunteer', label: 'A Volunteer' },
                { value: 'other', label: 'General Interest' },
              ].map(opt => (
                <label key={opt.value} className="py-[0.9rem] px-4 border-2 border-[#ddd] rounded-[4px] cursor-pointer flex items-center gap-[0.6rem] transition-all duration-200 bg-white has-[:checked]:border-(--color-brand) has-[:checked]:bg-(--color-brand-light)">
                  <input type="radio" name="type" value={opt.value} className="accent-(--color-brand)" />
                  <span className="text-[0.9rem] font-inter font-medium">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              placeholder="Tell us how you'd like to get involved..."
              rows={4}
              className={`${inputClass} resize-y min-h-[120px]`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-[1.15rem] text-[1.05rem] font-bold tracking-[0.04em] text-white border-none rounded-[4px] cursor-pointer font-inter transition-colors duration-200 uppercase disabled:opacity-70 disabled:cursor-not-allowed ${result === "Success!" ? 'bg-[#2a7a3b]' : 'bg-(--color-brand) hover:bg-(--color-brand-dark)'}`}
          >
            {isSubmitting ? 'Sending...' : result === "Success!" ? '✓ Sent' : 'Send message'}
          </button>

          {result && (
            <p className={`mt-3 text-[1rem] font-inter ${result === "Success!" ? 'text-[#2a7a3b]' : 'text-red-600'}`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
