export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Accounts',
      description: 'Link your brokerage via read-only API. Axiom maps your portfolio and starts building your edge profile in minutes.',
    },
    {
      number: '02',
      title: 'Signals Surface Automatically',
      description: 'Dark pool prints, congressional buys, unusual options activity — Axiom scores and ranks every signal for your watchlist.',
    },
    {
      number: '03',
      title: 'You Execute With Conviction',
      description: 'You see what the smart money is doing before the market reacts. Execute on your terms with full context and risk parameters.',
    },
  ]

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Institutional Edge,{' '}
            <span className="text-accent">Retail Access</span>
          </h2>
          <p className="text-slate-400 text-lg">The hedge funds have had this data for decades. Now you do too.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-accent/30 to-transparent z-10" />
              )}
              <div className="card p-8">
                <div className="text-5xl font-black text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
