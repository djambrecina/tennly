import { isValidSetResult } from './match';

describe("isValidSetResult", () => {
  it("should return false when result is 5:0", () => {
    expect(isValidSetResult(5, 0)).toBe(false);
  });

  it("should return false when result is 5:4", () => {
    expect(isValidSetResult(5, 4)).toBe(false);
  });

  it("should return false when result is 8:0", () => {
    expect(isValidSetResult(8, 0)).toBe(false);
  });

  it("should return false when result is 8:6", () => {
    expect(isValidSetResult(8, 6)).toBe(false);
  });

  it("should return false when result is 5:7", () => {
    expect(isValidSetResult(5, 7)).toBe(true);
  });

  it("should return false when result is 6:7", () => {
    expect(isValidSetResult(6, 7)).toBe(true);
  });

  it("should return false when result is 7:6", () => {
    expect(isValidSetResult(7, 6)).toBe(true);
  });

  it("should return false when result is 7:5", () => {
    expect(isValidSetResult(7, 5)).toBe(true);
  });
});
