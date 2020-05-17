import {
  isValidSetResult,
  isValidResult
} from './match';

describe("isValidSetResult", () => {
  it("should return true when result is 6:0", () => {
    expect(isValidSetResult(6, 0)).toBe(true);
  });

  it("should return true when result is 6:1", () => {
    expect(isValidSetResult(6, 1)).toBe(true);
  });

  it("should return true when result is 6:2", () => {
    expect(isValidSetResult(6, 2)).toBe(true);
  });

  it("should return true when result is 6:3", () => {
    expect(isValidSetResult(6, 3)).toBe(true);
  });

  it("should return true when result is 6:4", () => {
    expect(isValidSetResult(6, 4)).toBe(true);
  });

  it("should return true when result is 7:5", () => {
    expect(isValidSetResult(7, 5)).toBe(true);
  });

  it("should return true when result is 7:6", () => {
    expect(isValidSetResult(7, 6)).toBe(true);
  });

  it("should return true when result is 0:6", () => {
    expect(isValidSetResult(0, 6)).toBe(true);
  });

  it("should return true when result is 1:6", () => {
    expect(isValidSetResult(1, 6)).toBe(true);
  });

  it("should return true when result is 2:6", () => {
    expect(isValidSetResult(2, 6)).toBe(true);
  });

  it("should return true when result is 3:6", () => {
    expect(isValidSetResult(3, 6)).toBe(true);
  });

  it("should return true when result is 4:6", () => {
    expect(isValidSetResult(4, 6)).toBe(true);
  });

  it("should return true when result is 5:7", () => {
    expect(isValidSetResult(5, 7)).toBe(true);
  });

  it("should return true when result is 6:7", () => {
    expect(isValidSetResult(6, 7)).toBe(true);
  });

  it("should return false when result is 5:0", () => {
    expect(isValidSetResult(5, 0)).toBe(false);
  });

  it("should return false when result is 5:4", () => {
    expect(isValidSetResult(5, 4)).toBe(false);
  });

  it("should return false when result is 6:5", () => {
    expect(isValidSetResult(6, 5)).toBe(false);
  });

  it("should return false when result is 8:0", () => {
    expect(isValidSetResult(8, 0)).toBe(false);
  });

  it("should return false when result is 8:6", () => {
    expect(isValidSetResult(8, 6)).toBe(false);
  });

  it("should return false when result is 0:5", () => {
    expect(isValidSetResult(0, 5)).toBe(false);
  });

  it("should return false when result is 4:5", () => {
    expect(isValidSetResult(4, 5)).toBe(false);
  });

  it("should return false when result is 5:6", () => {
    expect(isValidSetResult(5, 6)).toBe(false);
  });

  it("should return false when result is 0:8", () => {
    expect(isValidSetResult(0, 8)).toBe(false);
  });

  it("should return false when result is 6:8", () => {
    expect(isValidSetResult(6, 8)).toBe(false);
  });
});

describe("isValidResult", () => {
  it("should return true when result is 6:0 6:0", () => {
    expect(isValidResult(6, 0, 6, 0, undefined, undefined)).toBe(true);
  });

  it("should return true when result is 6:0 0:6 6:0", () => {
    expect(isValidResult(6, 0, 0, 6, 6, 0)).toBe(true);
  });

  it("should return false when result is 0:6 0:6", () => {
    expect(isValidResult(0, 6, 0, 6, undefined, undefined)).toBe(false);
  });

  it("should return false when result is 6:0 0:6 0:6", () => {
    expect(isValidResult(6, 0, 0, 6, 0, 6)).toBe(false);
  });

  it("should return false when result is 6:0 6:0 and set 3 winner games are 6", () => {
    expect(isValidResult(6, 0, 6, 0, 6, undefined)).toBe(false);
  });

  it("should return false when result is 6:0 6:0 and set 3 loser games are 6", () => {
    expect(isValidResult(6, 0, 6, 0, undefined, 6)).toBe(false);
  });

  it("should return false when result is 6:0 6:0 6:0", () => {
    expect(isValidResult(6, 0, 6, 0, 6, 0)).toBe(false);
  });

  it("should return false when result is 6:0 6:0 0:6", () => {
    expect(isValidResult(6, 0, 6, 0, 0, 6)).toBe(false);
  });
});
