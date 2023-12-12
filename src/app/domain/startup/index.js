const { validateEnvProvidedConfig } = require("../config");
const { AppHttpServer } = require("../http-server");
const { postgres } = require("../db");
const { logger } = require("../logger");

class AppStarter {
  static async startServices() {
    logger.info("Preparing environmet variables");

    validateEnvProvidedConfig();

    logger.info("Starting services for application");

    await postgres.connect();
    await AppHttpServer.start();

    logger.info("All services started for application");
  }
}

module.exports = { AppStarter };
