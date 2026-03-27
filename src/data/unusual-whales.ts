/**
 * UnusualWhalesClient
 *
 * All market data in Axiom flows through Unusual Whales API.
 * Dark pool flow, options unusual activity, congressional trades.
 */

export interface DarkPoolTrade {
  ticker: string;
  size: number;
  price: number;
  exchange: string;
  timestamp: Date;
  premium: number;
}

export interface CongressTrade {
  politician: string;
  chamber: 'house' | 'senate';
  ticker: string;
  tradeType: 'buy' | 'sell';
  amountRange: string;
  transactionDate: Date;
  disclosureDate: Date;
  lagDays: number;
}

export interface OptionsFlow {
  ticker: string;
  strike: number;
  expiry: Date;
  callPut: 'call' | 'put';
  premium: number;
  size: number;
  openInterest: number;
  impliedVolatility: number;
  sentiment: 'bullish' | 'bearish' | 'neutral';
}

export class UnusualWhalesClient {
  constructor(private readonly apiKey: string) {}

  async getDarkPoolFlow(ticker?: string): Promise<DarkPoolTrade[]> {
    // TODO: GET /api/darkpool
    throw new Error('Not implemented');
  }

  async getCongressTrades(since?: Date): Promise<CongressTrade[]> {
    // TODO: GET /api/congress/trades
    throw new Error('Not implemented');
  }

  async getOptionsFlow(ticker: string): Promise<OptionsFlow[]> {
    // TODO: GET /api/options/flow
    throw new Error('Not implemented');
  }
}
