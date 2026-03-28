# Axiom — Your Personal Hedge Fund

> Built for Claude Mythos

Superintelligent trading analysis — congressional trades, dark pool flow, options signals, all in one system.

## Screenshot

![Axiom Landing Page](./screenshot-placeholder.png)

## Stack

- **Next.js 14** — App Router, static export
- **Three.js** via @react-three/fiber + @react-three/drei — ascending 3D bar chart
- **Tailwind CSS** — styling
- **TypeScript** — type safety

## 3D Scene

Ascending bar chart: 12 bars that animate up on load with glowing green tops that pulse, visualizing portfolio growth and trading performance. Slow auto-rotation.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Outputs to `./out` (static export ready for Netlify).

## Features

- **Flow Analysis** — Real-time options flow scanning
- **Congressional Tracking** — Every congressional trade filed instantly
- **Dark Pool Intelligence** — Off-exchange activity aggregation
- **Risk Management** — Position sizing, drawdown controls, correlation alerts

## Deploy

Static export to Netlify. Set build command: `npm run build`, publish dir: `out`.

---

Built by [The Fire Dev LLC](https://thefiredev.com)
