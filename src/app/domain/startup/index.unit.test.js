const { AppStarter } = require(".");

jest.mock("../config");
jest.mock("../http-server");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Startup", () => {
  describe("AppStarter", () => {
    test("When startServices is called, validadeEnvProvidedConfig is called, returning ndefined", async () => {
      const res = await AppStarter.startServices();

      expect(require("../config").validateEnvProvidedConfig).toHaveBeenCalled();
      expect(require("../http-server").AppHttpServer.start).toHaveBeenCalled();
      expect(res).toBe(undefined);
    });
  });
});
