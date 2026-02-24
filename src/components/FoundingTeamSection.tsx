export default function FoundingTeamSection() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.22em] uppercase text-(--color-brand) font-bold font-inter mb-4">The Team</p>
          <h2 className="font-playfair text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em] mx-auto my-0 max-w-[700px]">
            Founded by Surgeons Who've Seen the Gap
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-12">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-[180px] h-[180px] bg-[#f4eded] rounded-full mx-auto mb-6 flex items-center justify-center text-[2.5rem] text-[#ccc] border-[3px] border-[rgba(177,18,26,0.15)]">👤</div>
              <h3 className="font-playfair text-[1.4rem] font-bold m-0 mb-[0.4rem]">Dr. [Name]</h3>
              <p className="text-[0.9rem] text-(--color-brand) font-semibold font-inter m-0 mb-4 tracking-[0.02em]">Specialty · Institution</p>
              <p className="text-[0.95rem] leading-[1.7] text-[#666] m-0">Brief background and what drives their commitment to this mission.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
