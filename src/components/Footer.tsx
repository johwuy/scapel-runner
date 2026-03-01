export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-[#111] text-white text-center">
      <div className="max-w-[1200px] mx-auto">
        <img src="/SR Logo 2.svg" alt="Scalpel Runners" className="h-8 w-auto mx-auto mb-3 opacity-80 brightness-0 invert" />
        <p className="text-[0.85rem] text-white/35 m-0 font-inter">
          © {new Date().getFullYear()} Scalpel Runners · Not-for-Profit · 501(c)(3) Application Pending
        </p>
      </div>
    </footer>
  );
}
