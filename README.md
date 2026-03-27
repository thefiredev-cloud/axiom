<div align="center">

# Axiom

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/axiom/ci.yml?branch=main&style=flat-square&logo=github)](https://github.com/thefiredev/axiom/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/axiom?style=flat-square&logo=codecov)](https://codecov.io/gh/thefiredev/axiom)
[![Version](https://img.shields.io/github/package-json/v/thefiredev/axiom?style=flat-square)](https://github.com/thefiredev/axiom/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**One person. Hedge fund returns.**

*Your personal autonomous trading system. Reads everything. Misses nothing. Acts instantly.*

[Website](https://thefiredev.com/axiom) · [Documentation](https://docs.thefiredev.com/axiom) · [Discord](https://discord.gg/thefiredev) · [Request Demo](https://thefiredev.com/demo)

---

> ⚠️ **Risk Disclosure:** Axiom is experimental software. Autonomous trading involves substantial risk of loss. Past performance does not guarantee future results. This is not financial advice. Use paper trading mode before committing real capital.

</div>

---

## What is Axiom?

Axiom turns a single person into a hedge fund. It ingests every signal institutional investors track — SEC filings, earnings call transcripts, dark pool order flow, congressional trades, satellite imagery, social sentiment, options chain positioning — processes them in real time, and executes trades autonomously through Interactive Brokers.

The edge isn't speed. It's **breadth**. No human can read 10,000 SEC filings and correlate them with congressional stock purchases and satellite parking lot data simultaneously. Axiom can.

---

## Key Value Props

| | |
|---|---|
| 📡 **Total Signal Awareness** | Every data source institutional investors track, in one system. |
| 🏛️ **Congressional Alpha** | Tracks all STOCK Act filings with trade lag analysis. |
| 🌑 **Dark Pool Intelligence** | Unusual Whales API integration for dark pool + options flow. |
| 🛰️ **Alt Data** | Satellite imagery, credit card data, web traffic analysis. |
| 🤖 **Autonomous Execution** | IBKR integration. Generates, validates, and executes orders. |
| 🛡️ **Risk-First Design** | Hard stops, drawdown limits, position sizing rules baked in. |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Axiom Engine                              │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                     Data Ingestion Layer                   │    │
│  │                                                             │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │    │
│  │  │   SEC    │ │Congress  │ │  Dark    │ │Satellite │   │    │
│  │  │ Filings  │ │ Trades   │ │  Pool    │ │   Data   │   │    │
│  │  │  (EDGAR) │ │(STOCK Act│ │(Unusual  │ │  (Alt    │   │    │
│  │  │          │ │          │ │ Whales)  │ │  Data)   │   │    │
│  │  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘   │    │
│  │       └────────────┴────────────┴────────────┘           │    │
│  │                          │                                 │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐                 │    │
│  │  │ Earnings │ │ Options  │ │  Social  │                 │    │
│  │  │  Calls   │ │  Chain   │ │Sentiment │                 │    │
│  │  └────┬─────┘ └────┬─────┘ └────┬─────┘                 │    │
│  │       └────────────┴────────────┘                         │    │
│  └───────────────────────┬─────────────────────────────────┘    │
│                           │                                       │
│  ┌────────────────────────▼────────────────────────────────┐    │
│  │                   Signal Processing                        │    │
│  │     NLP · Sentiment · Anomaly Detection · Correlation     │    │
│  └────────────────────────┬────────────────────────────────┘    │
│                            │                                      │
│  ┌─────────────────────────▼───────────────────────────────┐    │
│  │                  Strategy Engine                           │    │
│  │    Multi-strategy allocation · Backtesting · Live P&L     │    │
│  └─────────────────────────┬───────────────────────────────┘    │
│                             │                                     │
│  ┌──────────────────────────▼──────────────────────────────┐    │
│  │                    Risk Manager                            │    │
│  │   Position limits · Drawdown stops · Correlation checks   │    │
│  └──────────────────────────┬──────────────────────────────┘    │
│                              │                                    │
│  ┌───────────────────────────▼─────────────────────────────┐    │
│  │              Interactive Brokers (IBKR)                    │    │
│  │              TWS API · Paper + Live trading               │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Sources

| Source | Description | Latency |
|---|---|---|
| **Unusual Whales API** | Dark pool flow, options unusual activity, congressional trades | Real-time |
| **SEC EDGAR** | All filings: 10-K, 10-Q, 8-K, 13F, 13D/G, insider transactions | < 5 min |
| **Earnings Call Transcripts** | Full transcripts with NLP sentiment analysis | Same-day |
| **Congressional Trades** | STOCK Act disclosures, lag analysis, pattern detection | < 24h |
| **Options Chain** | IV rank, put/call ratio, max pain, unusual sweeps | Real-time |
| **Satellite Imagery** | Parking lot occupancy, shipping container counts, oil storage | Daily |
| **Social Sentiment** | Reddit (WSB, stocks), X/Twitter, StockTwits | < 15 min |
| **Web Traffic** | SimilarWeb-style trends for public tech companies | Weekly |
| **Credit Card Data** | Anonymized spend trends by sector | Monthly |

---

## Features

### 📊 Signal Intelligence
- Reads every SEC filing within minutes of EDGAR publication
- NLP analysis: tone shift detection in earnings call language
- Congressional trade lag analysis (avg 40-day disclosure window)
- Options flow classification: hedge vs. directional vs. speculative

### 🧠 Strategy Engine
- Multiple concurrent strategies with independent allocation pools
- Backtesting engine with slippage and commission modeling
- Walk-forward optimization to prevent overfitting
- Strategy correlation monitoring to avoid concentration risk

### 🛡️ Risk Management
- Per-position sizing based on Kelly Criterion + vol-adjusted
- Portfolio-level drawdown stops (configurable: 5% / 10% / 20%)
- Sector and correlation exposure limits
- Black swan circuit breakers (VIX spike, flash crash detection)

### ⚡ Execution
- IBKR TWS API integration (paper + live)
- Smart order routing: limit-first, VWAP for large positions
- Pre-trade risk check: every order validated before submission
- Full audit trail: every signal, decision, and order logged

---

## Tech Stack

[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169e1?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![TimescaleDB](https://img.shields.io/badge/TimescaleDB-2.x-fdb515?style=flat-square)](https://www.timescale.com/)
[![Redis](https://img.shields.io/badge/Redis-7.x-dc382d?style=flat-square&logo=redis)](https://redis.io/)

| Layer | Technology |
|---|---|
| Runtime | Node.js 20 + TypeScript |
| LLM | OpenAI GPT-4o (NLP analysis) |
| Market Data | Unusual Whales API |
| Broker | Interactive Brokers TWS API |
| Time-series DB | TimescaleDB (PostgreSQL extension) |
| Cache / Queue | Redis + BullMQ |
| Backtesting | Custom engine + optional Backtrader |

---

## Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL 16+ with TimescaleDB
- Redis 7+
- Interactive Brokers account + TWS/IB Gateway
- API keys: Unusual Whales, OpenAI

### Installation

```bash
git clone https://github.com/thefiredev/axiom.git
cd axiom
npm install
cp .env.example .env
# Configure API keys and IBKR connection settings
npm run db:migrate
npm run dev
```

### Start in Paper Trading Mode (Recommended)

```bash
# Connect to IBKR paper trading account first
npm run axiom:start -- --mode paper --strategies momentum,congress-alpha
```

### Run a Backtest

```bash
npm run backtest -- \
  --strategy congress-alpha \
  --start 2020-01-01 \
  --end 2024-01-01 \
  --capital 100000
```

---

## API Reference

### GET /api/portfolio

```json
{
  "totalValue": 127450.23,
  "dayPnL": 1240.50,
  "totalPnL": 27450.23,
  "positions": [...],
  "drawdown": 0.034,
  "sharpeRatio": 1.87
}
```

### GET /api/signals/active

```json
[
  {
    "ticker": "NVDA",
    "signal": "congressional-buy",
    "strength": 0.82,
    "source": "Rep. Jane Smith bought $250K-$500K on 2024-03-15",
    "lag": 38,
    "historicalEdge": 0.67
  }
]
```

### POST /api/strategies/:id/toggle

Enable or disable a strategy without restarting.

### Full API docs → [docs.thefiredev.com/axiom/api](https://docs.thefiredev.com/axiom/api)

---

## Project Structure

```
axiom/
├── src/
│   ├── data/
│   │   ├── sec-edgar.ts           # EDGAR filing fetcher + parser
│   │   ├── unusual-whales.ts      # Unusual Whales API client
│   │   ├── congress.ts            # Congressional trade tracker
│   │   ├── earnings.ts            # Earnings call transcript NLP
│   │   └── alt-data/              # Satellite, social, web traffic
│   ├── strategies/
│   │   ├── base.strategy.ts       # Strategy interface
│   │   ├── congress-alpha.ts      # Congressional trade following
│   │   ├── dark-pool-flow.ts      # Dark pool signal strategy
│   │   ├── earnings-sentiment.ts  # Earnings call NLP strategy
│   │   └── momentum.ts            # Technical momentum
│   ├── execution/
│   │   ├── ibkr.ts                # IBKR TWS API client
│   │   ├── order-manager.ts       # Order lifecycle management
│   │   └── smart-routing.ts       # Order routing logic
│   ├── risk/
│   │   ├── risk-manager.ts        # Portfolio risk enforcement
│   │   ├── position-sizer.ts      # Kelly + vol-adjusted sizing
│   │   └── circuit-breakers.ts    # Black swan protection
│   ├── api/
│   │   ├── routes/
│   │   └── server.ts
│   └── utils/
│       ├── llm.ts
│       └── timeseries.ts
├── backtests/
├── prisma/
├── tests/
└── scripts/
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Security

See [SECURITY.md](SECURITY.md). Report vulnerabilities to security@thefiredev.com.

**IMPORTANT:** Never commit API keys, broker credentials, or trading secrets. See `.gitignore`.

---

## License

MIT © [The Fire Dev LLC](https://thefiredev.com)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*Agent-as-a-Service. We build the systems. You keep the revenue.*

[thefiredev.com](https://thefiredev.com) · [X](https://x.com/thefiredev) · [LinkedIn](https://linkedin.com/company/thefiredev)

</div>
