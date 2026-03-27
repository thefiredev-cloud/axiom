/**
 * StrategyEngine
 *
 * Manages multiple concurrent trading strategies.
 * Each strategy runs independently with its own allocation pool.
 */
import { RiskManager } from '../risk/risk-manager';

export type TradingMode = 'paper' | 'live';

export class StrategyEngine {
  constructor(
    private readonly riskManager: RiskManager,
    private readonly mode: TradingMode
  ) {}

  async init(): Promise<void> {
    // TODO: load enabled strategies, connect to IBKR, start signal feeds
    throw new Error('Not implemented');
  }

  async runStrategy(strategyId: string): Promise<void> {
    // TODO: execute strategy cycle → generate signals → risk check → execute
    throw new Error('Not implemented');
  }
}
