import getRandomInt from "./getRandomInt";

describe("getRandomInt", () => {
  it("returns an integer within the given range", () => {
    const min = 1;
    const max = 10;
    const result = getRandomInt(min, max);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it("returns the minimum value when min and max are the same", () => {
    const min = 5;
    const max = 5;
    const result = getRandomInt(min, max);
    expect(result).toBe(min);
  });
});
