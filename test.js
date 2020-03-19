const groupValuesByKey = require(".");

describe("chainFns tests", () => {
  test("if groupValuesByKey is called then it must be defined", () => {
    expect(typeof groupValuesByKey).toBe("function");
  });

  test("if an empty object is passed then a empty object is returned", () => {
    expect(groupValuesByKey([{}])).toEqual({});
  });

  test("if empty objects are passed then a empty object is returned", () => {
    expect(groupValuesByKey([{}, {}])).toEqual({});
  });
});
