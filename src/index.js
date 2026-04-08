const express = require('express');
const _ = require('lodash');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/api/data', (req, res) => {
  const data = _.times(10, (i) => ({ id: i, value: _.random(1, 100) }));
  logger.info('Generated data', { count: data.length });
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));

module.exports = app;
