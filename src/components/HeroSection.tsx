export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 sm:pt-28 px-5 sm:px-8 pb-20 bg-[linear-gradient(160deg,#fff_55%,#f4eded_100%)] relative overflow-hidden">
      {/* decorative cross */}
      <div className="absolute right-[8%] top-[75%] -translate-y-1/2 opacity-[0.04] text-[14rem] sm:text-[28rem] leading-none select-none text-(--color-brand) font-black [animation:float_18s_ease-in-out_infinite]">✚</div>

      <div className="max-w-[820px] mx-auto relative z-[1]">
        <div className="text-[0.8rem] tracking-[0.2em] uppercase text-(--color-brand) mb-7 font-bold font-inter [animation:fadeUp_0.7s_ease-out_0.2s_backwards]">
          Not-for-Profit · Global Surgical Access
        </div>

        <h1 className="font-playfair font-black text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] tracking-[-0.03em] mb-8 [animation:fadeUp_0.7s_ease-out_0.35s_backwards]">
          Essential Surgical Equipment.<br />
          <span className="text-(--color-brand)">Wherever Care Can't Wait.</span>
        </h1>

        <div className="h-px max-w-[400px] bg-(--color-brand) mb-8 [animation:fadeUp_0.7s_ease-out_0.4s_backwards]" />

        <p className="text-[1.4rem] italic leading-[1.75] text-[#333] max-w-[660px] mb-6 [animation:fadeUp_0.7s_ease-out_0.5s_backwards]">
          Scalpel Runners provides surgical instruments and logistical support to humanitarian NGOs operating in conflict zones and underserved communities—at no cost.
        </p>

        <div className="text-sm tracking-[0.35em] uppercase text-(--color-brand) font-inter font-bold mt-6 [animation:fadeUp_0.7s_ease-out_0.65s_backwards]">
          — Cut. Stitch. Heal.
        </div>
      </div>
    </section>
  );
}
