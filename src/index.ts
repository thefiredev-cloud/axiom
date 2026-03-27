import 'dotenv/config';
import { createServer } from './api/server';
import { StrategyEngine } from './strategies/engine';
import { RiskManager } from './risk/risk-manager';

async function main() {
  const port = process.env.PORT ?? 3102;
  const mode = (process.env.TRADING_MODE ?? 'paper') as 'paper' | 'live';

  if (mode === 'live') {
    console.warn('⚠️  LIVE TRADING MODE ACTIVE. Real capital at risk.');
  } else {
    console.log('📋 Paper trading mode. No real orders will be placed.');
  }

  const app = createServer();
  app.listen(port, () => {
    console.log(`Axiom API running on port ${port}`);
  });

  const riskManager = new RiskManager();
  const engine = new StrategyEngine(riskManager, mode);
  await engine.init();

  console.log('Axiom engine initialized. Monitoring markets.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
