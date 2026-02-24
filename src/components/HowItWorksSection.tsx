export default function HowItWorksSection() {
  return (
    <section className="py-32 px-8 bg-[#f9f6f2]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.22em] uppercase text-(--color-brand) font-bold font-inter mb-4">The Process</p>
          <h2 className="font-playfair text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em] mx-auto my-0 max-w-[600px]">
            From Surplus to Surgery
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
          {[
            { step: '01', title: 'Collection', desc: 'We partner with U.S. hospitals to recover high-quality surplus surgical instruments that would otherwise be discarded.' },
            { step: '02', title: 'Inspection', desc: 'Each instrument is catalogued, inspected, and certified to meet international safety and quality standards.' },
            { step: '03', title: 'Storage', desc: 'Instruments are organized in our warehouse with systematic inventory tracking, ready for rapid deployment.' },
            { step: '04', title: 'Distribution', desc: 'NGOs and medical missions in conflict zones and underserved regions receive what they need—free of charge.' },
          ].map((item, i) => (
            <div key={i} className="p-10 bg-white rounded-[4px] border-t-4 border-t-(--color-brand) shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-[250ms] cursor-default hover:-translate-y-[6px] hover:shadow-[0_12px_32px_rgba(177,18,26,0.12)]">
              <div className="text-[2.5rem] font-playfair font-black text-(--color-brand) opacity-25 mb-3">{item.step}</div>
              <h3 className="font-playfair text-[1.4rem] font-bold m-0 mb-3">{item.title}</h3>
              <p className="text-[1.05rem] leading-[1.75] text-[#555] m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
