import { decode, encode } from "./index";

import { emojiCharsInBytes as testSet } from "./testCases";

describe("base-100 functions", () => {
  describe("encode", () => {
    test("encoding a single byte", () => {
      testSet.forEach((emojiBytes, inputByte) => {
        const expectedEmoji = Buffer.from(emojiBytes).toString();
        expect(encode([inputByte])).toEqual(expectedEmoji);
      });
    });

    test("encoding a series of bytes", () => {
      const [input, expected] = testSet.reduce(
        ([accInput, accExpected], bytes, index) => [
          accInput.concat(index),
          accExpected.concat(bytes),
        ],
        [[], []]
      );
      expect(encode(input)).toEqual(Buffer.from(expected).toString());
    });
  });

  describe("decode", () => {
    test("decoding a single char", () => {
      testSet.forEach((emojiBytes, inputByte) => {
        expect(decode(Buffer.from(emojiBytes).toString())).toEqual([inputByte]);
      });
    });

    test("decoding a multi-char string", () => {
      const [emojiBytes, decodedBytes] = testSet.reduce(
        ([accEmojiBytes, accDecodedBytes], bytes, index) => [
          accEmojiBytes.concat(bytes),
          accDecodedBytes.concat(index),
        ],
        [[], []]
      );
      expect(decode(Buffer.from(emojiBytes).toString())).toEqual(decodedBytes);
    });
  });
});
