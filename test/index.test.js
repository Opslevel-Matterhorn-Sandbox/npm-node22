const { describe, it } = require("node:test");
const assert = require("node:assert");
const { pickKeys, sortByKey, formatConfig } = require("../src/index.js");

describe("pickKeys", () => {
  it("returns object with only requested keys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    assert.deepStrictEqual(pickKeys(obj, ["a", "c"]), { a: 1, c: 3 });
  });
});

describe("sortByKey", () => {
  it("sorts object keys alphabetically", () => {
    const obj = { z: 1, a: 2, m: 3 };
    assert.deepStrictEqual(sortByKey(obj), { a: 2, m: 3, z: 1 });
  });
});

describe("formatConfig", () => {
  it("clones and optionally picks then sorts", () => {
    const obj = { foo: 1, bar: 2, baz: 3 };
    const out = formatConfig(obj, { pick: ["bar", "foo"] });
    assert.deepStrictEqual(out, { bar: 2, foo: 1 });
  });
});
