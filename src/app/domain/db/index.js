const { config } = require("../config");
const { client, Client } = require("pg");
const { logger } = require("../logger");

class PostgressDBFactory {
  client;
  isConnected = false;

  constructor() {
    this.client = new Client({
      user: config.POSTGRES_USER,
      database: config.POSTGRES_DB,
      password: config.POSTGRES_PASSWORD,
      port: config.POSTGRES_PORT,
      host: config.POSTGRES_HOST,
    });
  }

  async connect() {
    if (!this.isConnected) {
      await this.client.connect();
      this.isConnected = true;
      logger.info("DB Connection established");
    }
  }

  async close() {
    if (this.isConnected) {
      await this.client.end();
      this.isConnected = false;
      logger.info("DB Connection close");
    }
  }
}

module.exports = {
  postgres: new PostgressDBFactory(),
};
