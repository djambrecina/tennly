import { isValidSetResult } from './match';

describe("isValidSetResult", () => {
  it("should return false when player1Games is 5", () => {
    expect(isValidSetResult(5, 0)).toBe(false);
  });
});
