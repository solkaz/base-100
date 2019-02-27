import { decode, encode } from "./index";

import { encodingTestCases } from "./testCases";

describe("base-100", () => {
  test("encoding a single byte", () => {
    encodingTestCases.forEach(([inputByte, emojiBytes]) => {
      const expectedEmoji = Buffer.from(emojiBytes).toString();
      expect(encode([inputByte])).toEqual(expectedEmoji);
    });
  });

  test("encoding a series of bytes", () => {
    const [input, expected] = encodingTestCases.reduce(
      ([accInput, accExpected], [index, bytes]) => [
        accInput.concat(index),
        accExpected.concat(bytes),
      ],
      [[], []]
    );
    expect(encode(input)).toEqual(Buffer.from(expected).toString());
  });

  describe("decode", () => {
    test.skip("decodes classic example", () => {
      expect(decode(Buffer.from([240, 159, 143, 183]).toString())).toBe("");
    });
  });
});
