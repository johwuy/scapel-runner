import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [audienceType, setAudienceType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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

        <form onSubmit={handleSubmit} className="text-left">
          <div className="mb-7">
            <label className="block text-[0.9rem] font-semibold mb-[0.6rem] font-inter tracking-[0.02em]">
              Email Address
            </label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              placeholder="your@email.com"
              className="w-full py-4 px-5 text-[1.05rem] border-2 border-[#ddd] rounded-[4px] outline-none font-inter transition-[border-color] duration-200 bg-white focus:border-(--color-brand)"
            />
          </div>

          <div className="mb-8">
            <label className="block text-[0.9rem] font-semibold mb-[0.6rem] font-inter tracking-[0.02em]">
              I'm reaching out as...
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'ngo', label: 'An NGO / Medical Mission' },
                { value: 'hospital', label: 'A Hospital / Donor' },
                { value: 'volunteer', label: 'A Volunteer' },
                { value: 'other', label: 'General Interest' },
              ].map(opt => (
                <label key={opt.value} className={`py-[0.9rem] px-4 border-2 rounded-[4px] cursor-pointer flex items-center gap-[0.6rem] transition-all duration-200 ${audienceType === opt.value ? 'border-(--color-brand) bg-(--color-brand-light)' : 'border-[#ddd] bg-white'}`}>
                  <input type="radio" name="type" value={opt.value} checked={audienceType === opt.value} onChange={e => setAudienceType(e.target.value)} className="accent-(--color-brand)" />
                  <span className="text-[0.9rem] font-inter font-medium">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className={`w-full py-[1.15rem] text-[1.05rem] font-bold tracking-[0.04em] text-white border-none rounded-[4px] cursor-pointer font-inter transition-colors duration-200 uppercase ${submitted ? 'bg-[#2a7a3b]' : 'bg-(--color-brand) hover:bg-(--color-brand-dark)'}`}>
            {submitted ? '✓ You\'re on the list' : 'Stay Informed'}
          </button>
        </form>
      </div>
    </section>
  );
}
