import express from 'express';

export function createServer() {
  const app = express();
  app.use(express.json());

  app.get('/health', (_req, res) => res.json({ status: 'ok' }));

  // TODO: mount portfolio, signals, strategy routes
  // app.use('/api/portfolio', portfolioRouter);
  // app.use('/api/signals', signalsRouter);
  // app.use('/api/strategies', strategiesRouter);

  return app;
}
