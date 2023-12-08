const dotenv = require("dotenv");
const { logger } = require("../logger");

dotenv.config();

const config = {
  ENV: process.env.ENV,
  EXPRESS_PORT: parseInt(process.env.EXPRESS_PORT, 10),
  SECRET: process.env.SECRET,
  API_URL: process.env.API_URL,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
};

function validateEnvProvidedConfig() {
  const requiredConfigVariables = [
    "ENV",
    "EXPRESS_PORT",
    "SECRET",
    "API_URL",
    "POSTGRES_HOST",
    "POSTGRES_PORT",
    "POSTGRES_USER",
    "POSTGRES_DB",
    "POSTGRES_PASSWORD",
  ];

  const missingConfigVariables = [];

  for (const requiredConfigVariable of requiredConfigVariables) {
    if (!process.env[requiredConfigVariable]) {
      missingConfigVariables.push(requiredConfigVariable);
    }
  }

  if (missingConfigVariables.length !== 0) {
    logger.error("Missing environment variables in config");

    for (const missingConfigVariable of missingConfigVariables) {
      logger.error(`Missing variable: ${missingConfigVariable}`);
    }

    process.exit(1);
  }
}

module.exports = {
  config,
  validateEnvProvidedConfig,
};
