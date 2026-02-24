export default function MissionVisionSection() {
  return (
    <section id="mission" className="py-32 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-20">
        {[
          {
            label: 'Mission',
            icon: '✚',
            text: 'To provide not-for-profit, essential surgical equipment and logistical support, empowering humanitarian NGOs to deliver surgical care in global conflict zones and underserved communities.',
          },
          {
            label: 'Vision',
            icon: '◎',
            text: 'A world where every medical mission—regardless of geography, crisis, or conflict—has access to essential surgical instruments, ensuring that life-saving care is provided to the highest standards.',
          },
        ].map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[1.25rem] text-(--color-brand) font-black">{item.icon}</span>
              <span className="text-xs tracking-[0.22em] uppercase font-bold text-(--color-brand) font-inter">
                {item.label}
              </span>
            </div>
            <div className="w-12 h-[3px] bg-(--color-brand) mb-8" />
            <p className="text-[1.45rem] italic leading-[1.9] text-[#1a1a1a] m-0">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
