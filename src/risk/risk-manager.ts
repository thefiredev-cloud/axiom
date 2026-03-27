/**
 * RiskManager
 *
 * Every order passes through the risk manager before execution.
 * Hard stops. No exceptions. No bypasses.
 */

export interface RiskConfig {
  maxPositionSizePct: number;    // max % of portfolio in single position
  maxSectorExposurePct: number;  // max % in one sector
  maxDrawdownPct: number;        // halt trading if drawdown exceeds this
  maxDailyLossPct: number;       // halt for the day if daily loss exceeds this
  maxCorrelation: number;        // reject positions too correlated to existing
}

export interface OrderProposal {
  ticker: string;
  side: 'buy' | 'sell';
  quantity: number;
  estimatedValue: number;
  strategy: string;
}

export interface RiskCheckResult {
  approved: boolean;
  reason?: string;
  adjustedQuantity?: number;
}

export class RiskManager {
  private config: RiskConfig = {
    maxPositionSizePct: 0.05,
    maxSectorExposurePct: 0.20,
    maxDrawdownPct: 0.10,
    maxDailyLossPct: 0.03,
    maxCorrelation: 0.70
  };

  async check(order: OrderProposal): Promise<RiskCheckResult> {
    // TODO: validate against all risk rules before approving
    throw new Error('Not implemented');
  }

  async getCurrentDrawdown(): Promise<number> {
    // TODO: calculate current drawdown from portfolio state
    throw new Error('Not implemented');
  }
}
