const { validateEnvProvidedConfig } = require("../config");
const { AppHttpServer } = require("../http-server");
const { postgres } = require("../db");
const { logger } = require("../logger");

class AppStarter {
  static async startServices() {
    logger.info("Preparing environmet variables");

    validateEnvProvidedConfig();

    console.log("Starting services for application");

    console.log("All services for applications");

    await postgres.connect();
    await AppHttpServer.start();

    console.log("All services started for application");
  }
}

module.exports = { AppStarter };
