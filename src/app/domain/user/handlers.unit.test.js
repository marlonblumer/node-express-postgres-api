const { HTTPError } = require("../errors/http-error");
const { UserHandlers } = require("./handlers");

jest.mock("bcryptjs");
jest.mock("./store");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("handlers", () => {
  describe("createUser", () => {
    test("When an existing user is found, throws an HTTPError", async () => {
      const user = generateUser();

      require("./store").UserStore.getUserByEmail.mockResolvedValue(user);

      const req = {
        body: user,
      };

      await expect(UserHandlers.createUser(req)).rejects.toThrow(
        new HTTPError(400, "Email address is already in use")
      );
    });
  });
});
