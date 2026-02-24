export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] py-5 px-8 bg-white/[0.96] backdrop-blur-[12px] border-b border-black/[0.08] [animation:slideDown_0.5s_ease-out]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-[0.85rem]">
          <img src="/logo.svg" alt="Scalpel Runners" className="h-10 w-auto" />
          <div>
            <span className="font-playfair text-[1.4rem] font-extrabold text-(--color-brand) tracking-[-0.01em]">
              Scalpel Runners
            </span>
            <span className="ml-3 text-[0.8rem] tracking-[0.2em] uppercase text-[#888] font-inter">
              Cut. Stitch. Heal.
            </span>
          </div>
        </div>
        <a href="#contact"
          className="py-[0.7rem] px-[1.4rem] bg-(--color-brand) text-white no-underline rounded-[3px] text-[0.9rem] font-semibold font-inter tracking-[0.02em] transition-colors duration-200 hover:bg-(--color-brand-dark)"
        >
          Get Involved
        </a>
      </div>
    </nav>
  );
}
