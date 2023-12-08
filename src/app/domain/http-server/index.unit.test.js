const httpServer = require(".");
const { AppHttpServer } = require(".");

const express = () => {
  return {
    use: jest.fn(),
    listen: (port, callback) => callback(),
  };
};

express.json = jest.fn();

jest.mock("express", () => express);

beforeEach(() => {
  jest.clearAllMocks();
});

describe("http-server", () => {
  describe("AppHttpServer.start", () => {
    test("When start os called, the promisse resolves to be undefined", () => {
      expect(AppHttpServer.start()).resolves.toEqual(undefined);
    });
  });
});
