const { validateEnvProvidedConfig } = require("../config");

class AppStarter {
  static startServices() {
    console.log("Preparing environmet variables");

    validateEnvProvidedConfig();

    console.log("All services started for application");
  }
}

module.exports = { AppStarter };
