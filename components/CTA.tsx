'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      window.location.href = `mailto:tanner@thefiredev.com?subject=Axiom Waitlist&body=Please add me to the Axiom waitlist.%0A%0AEmail: ${email}`
      setSubmitted(true)
    }
  }

  return (
    <section id="waitlist" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="card p-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
            Waitlist Open
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Stop trading blind.<br />
            <span className="text-accent">Get the signal, not the noise.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Early access members get priority data feeds, lifetime 40% discount, and direct access to the Axiom signal team.
          </p>
          {submitted ? (
            <div className="text-accent font-semibold text-lg">
              You&apos;re on the list. We&apos;ll be in touch before market open.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-accent/50"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Get Access
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
