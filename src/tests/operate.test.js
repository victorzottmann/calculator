import { operate } from "../js/utils.js";

describe("Operate function", () => {
  test("Adds two positve numbers", () => {
    expect(operate("+", 1, 2)).toBe(3);
  });

  test("Subtracts two positive numbers", () => {
    expect(operate("-", 2, 1)).toBe(1);
  });

  test("Multiplies two positive numbers", () => {
    expect(operate("*", 2, 5)).toBe(10);
  });

  test("Divides two positive numbers", () => {
    expect(operate("/", 10, 2)).toBe(5);
  });
});
