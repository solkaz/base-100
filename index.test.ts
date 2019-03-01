import { decode, encode } from "./index";

import {
  emojiAsStrings as testSet,
  theQuickBrownFoxJumpsOverTheLazyDog,
} from "./testCases";

describe("base-100 functions", () => {
  describe("encode", () => {
    test.each(testSet.map((emoji, i) => [i, emoji]))(
      "encoding a single byte - [%i] as %p",
      (inputByte: number, emoji: string) => {
        expect(encode([inputByte])).toEqual(emoji);
      }
    );

    test("encoding a series of bytes", () => {
      const [input, expected] = testSet.reduce(
        ([accInput, accExpected], emoji, index): [number[], string] => [
          accInput.concat(index),
          accExpected.concat(emoji),
        ],
        [[], ""] as [number[], string]
      );
      expect(encode(input)).toEqual(expected);
    });

    test("the quick brown fox jumped over the lazy dog", () => {
      const {
        asEmojiBytes: emojiBytes,
        asText: text,
      } = theQuickBrownFoxJumpsOverTheLazyDog;
      expect(encode(Array.from(Buffer.from(text).values()))).toEqual(
        Buffer.from(emojiBytes).toString()
      );
    });
  });

  describe("decode", () => {
    test.each(testSet.map((x, i) => [x, i]))(
      `decoding a single emoji: %p to [%p]`,
      (emoji: string, inputByte: number) => {
        expect(decode(emoji)).toEqual([inputByte]);
      }
    );

    test("decoding a multi-char string", () => {
      const [emojiString, decodedBytes] = testSet.reduce(
        (
          [accEmojiBytes, accDecodedBytes],
          bytes,
          index
        ): [string, number[]] => [
          accEmojiBytes.concat(bytes),
          accDecodedBytes.concat(index),
        ],
        ["", []] as [string, number[]]
      );
      expect(decode(emojiString)).toEqual(decodedBytes);
    });
  });

  describe("Integration tests", () => {
    test("emoji -> decode -> encode -> emoji", () => {
      testSet.forEach((emojiString) => {
        expect(encode(decode(emojiString))).toEqual(emojiString);
      });
    });

    test("byte -> encode -> decode -> byte", () => {
      testSet.forEach((_, index) => {
        expect(decode(encode([index]))).toEqual([index]);
      });
    });

    test("emoji -> decode -> encode -> decode -> byte", () => {
      testSet.forEach((emojiString, index) => {
        expect(decode(encode(decode(emojiString)))).toEqual([index]);
      });
    });

    test("byte -> encode -> decode -> encode -> emoji", () => {
      testSet.forEach((emojiString, index) => {
        expect(encode(decode(encode([index])))).toEqual(emojiString);
      });
    });
  });
});
