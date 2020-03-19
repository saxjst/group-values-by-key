const groupValuesByKey = require(".");

describe("chainFns tests", () => {
  test("if groupValuesByKey() is called then it must be defined", () => {
    expect(typeof groupValuesByKey).toBe("function");
  });
});
