export default function WhoWeServeSection() {
  return (
    <section className="py-32 px-8 bg-(--color-brand) text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.22em] uppercase text-white/60 font-bold font-inter mb-4">Our Partners</p>
          <h2 className="font-playfair text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em] m-0">
            Who We Serve
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {[
            { icon: '🏥', title: 'Humanitarian NGOs', desc: 'Organizations delivering surgical care in active conflict zones and post-disaster settings.' },
            { icon: '✈️', title: 'Medical Missions', desc: 'Teams providing surgical services in remote, resource-limited, and underserved communities.' },
            { icon: '🤝', title: 'Hospital Donors', desc: 'U.S. hospitals and healthcare systems with surplus instruments ready to be repurposed.' },
          ].map((item, i) => (
            <div key={i} className="p-10 bg-white/10 rounded-[4px] border border-white/15 backdrop-blur-[4px] transition-colors duration-[250ms] hover:bg-white/[0.18]">
              <div className="text-[2rem] mb-4">{item.icon}</div>
              <h3 className="font-playfair text-[1.4rem] font-bold m-0 mb-3">{item.title}</h3>
              <p className="text-[1.05rem] leading-[1.75] text-white/80 m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
