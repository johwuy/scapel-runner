export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-[#111] text-white text-center">
      <div className="max-w-[1200px] mx-auto">
        <img src="/logo.svg" alt="Scalpel Runners" className="h-8 w-auto mx-auto mb-3 opacity-80 brightness-0 invert" />
        <div className="font-playfair text-[1.3rem] font-extrabold text-(--color-brand) mb-[0.4rem]">Scalpel Runners</div>
        <div className="text-xs tracking-[0.25em] uppercase text-white/40 mb-7 font-inter">Cut. Stitch. Heal.</div>
        <p className="text-[0.85rem] text-white/35 m-0 font-inter">
          © 2025 Scalpel Runners · Not-for-Profit · 501(c)(3) Application Pending
        </p>
      </div>
    </footer>
  );
}
