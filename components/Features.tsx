export default function Features() {
  const features = [
    {
      title: 'Flow Analysis',
      description: 'Real-time options flow scanning — unusual sweeps, block trades, and institutional positioning surfaced in seconds.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
    {
      title: 'Congressional Tracking',
      description: 'Every congressional trade filed within minutes. Cross-reference with pending legislation for maximum edge.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 8h10M7 12h6" />
        </svg>
      ),
    },
    {
      title: 'Dark Pool Intelligence',
      description: 'Aggregate dark pool prints and off-exchange activity — find where the smart money is hiding before it moves markets.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M3 3l18 18" />
        </svg>
      ),
    },
    {
      title: 'Risk Management',
      description: 'Position sizing, correlation alerts, drawdown controls. Axiom knows when to sit out — and forces the discipline you need.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ]

  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Every Edge,{' '}
            <span className="text-accent">In One System</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Axiom aggregates signals that used to require six different tools, a Bloomberg terminal, and a team of analysts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-8">
              <div className="text-accent mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
