import getRandomColor from "./getRandomColor";

describe("getRandomColor", () => {
  it("should return string", () => {
    const result = getRandomColor();
    expect(typeof result).toBe("string");
  });

  it("should return string with 'color' prefix", () => {
    const result = getRandomColor();
    expect(result).toMatch(/^color/);
  });

  it("should return string with value between 'color0' and 'color7'", () => {
    const result = getRandomColor();
    expect(result).toMatch(/^color[0-7]$/);
  });

  it("should return random value", () => {
    const result1 = getRandomColor();
    const result2 = getRandomColor();
    expect(result1).not.toBe(result2);
  });
});
