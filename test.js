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

  test("if filled objects are passed then groups are returned", () => {
    const input = [{ a: 2 }, { a: 3, b: 1 }];
    const output = { a: [2, 3], b: [1] };

    expect(groupValuesByKey(input)).toEqual(output);
  });

  test("if nested objects are passed then groups only formed of one level keys are returned", () => {
    const input = [{ a: 2, b: { c: 4 } }, { a: 3, b: 1 }];
    const output = { a: [2, 3], b: [{ c: 4 }, 1] };

    expect(groupValuesByKey(input)).toEqual(output);
  });
});
