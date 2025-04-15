const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // Explicitly setting the default level to 'info'
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = logger;
