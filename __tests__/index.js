/* global expect:false, test:false */
import isEmpty from "../src";

test("it returns true if it's null or undefined", () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
});

test("it returns true if it's an empty string", () => {
  expect(isEmpty(" ")).toBe(true);
  expect(isEmpty("\n\t")).toBe(true);
  expect(
    isEmpty(`

  `)
  ).toBe(true);
  expect(isEmpty("foo")).toBe(false);
  expect(isEmpty("😂")).toBe(false);
});

test("for number type it returns true only if it's a NaN", () => {
  expect(isEmpty(NaN)).toBe(true);
  expect(isEmpty(Infinity)).toBe(false);
  expect(isEmpty(-Infinity)).toBe(false);
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty(0.0)).toBe(false);
  expect(isEmpty(3.14)).toBe(false);
  expect(isEmpty(-3.14)).toBe(false);
});

test("it returns true if an array is empty", () => {
  expect(isEmpty([])).toBe(true);
  expect(isEmpty([1, 2])).toBe(false);
  expect(isEmpty([null])).toBe(false);
  expect(isEmpty([[]])).toBe(false);
});

test("it can check if a map is empty or not", () => {
  expect(isEmpty(new Map())).toBe(true);

  const myMap = new Map();
  myMap.set({ foo: "bar" }, "baz");
  expect(isEmpty(myMap)).toBe(false);

  myMap.clear();
  expect(isEmpty(myMap)).toBe(true);
});

test("it can check if a set is empty or not", () => {
  expect(isEmpty(new Set())).toBe(true);

  const mySet = new Set([1, 2]);
  expect(isEmpty(mySet)).toBe(false);

  mySet.clear();
  expect(isEmpty(mySet)).toBe(true);
});

test("it can check if a plain object is empty or not", () => {
  expect(isEmpty({})).toBe(true);
  expect(isEmpty(Object.create(null))).toBe(true);
  expect(isEmpty(new Object())).toBe(true); // eslint-disable-line no-new-object
  expect(isEmpty({ foo: null })).toBe(false);
  expect(isEmpty({ foo: "bar" })).toBe(false);
});

test("it returns false for boolean type", () => {
  expect(isEmpty(false)).toBe(false);
  expect(isEmpty(true)).toBe(false);
});

test("it returns false for function and class instance", () => {
  expect(isEmpty(parseInt)).toBe(false);
  expect(isEmpty(Number.isNaN)).toBe(false);
  expect(isEmpty(() => "foo")).toBe(false);

  expect(isEmpty(new Date())).toBe(false);
  expect(isEmpty(new Error())).toBe(false);

  class Foo {}
  expect(isEmpty(new Foo())).toBe(false);
});
