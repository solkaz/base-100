import { decode, encode, decodeUint8ArrayToString } from "./index";

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
        asEmoji: emoji,
        asText: text,
      } = theQuickBrownFoxJumpsOverTheLazyDog;
      expect(encode(text)).toEqual(emoji);
    });
  });

  describe("decode", () => {
    test.each(testSet.map((x, i) => [x, i]))(
      `decoding a single emoji: %p to [%i]`,
      (emoji: string, inputByte: number) => {
        expect(decode(emoji)).toEqual(decodeUint8ArrayToString([inputByte]));
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
      expect(decode(emojiString)).toEqual(
        decodeUint8ArrayToString(decodedBytes)
      );
    });

    test("the quick brown fox jumped over the lazy dog", () => {
      const {
        asEmoji: emoji,
        asText: text,
      } = theQuickBrownFoxJumpsOverTheLazyDog;
      expect(decode(emoji)).toEqual(text);
    });
  });

  describe("Integration tests", () => {
    test("the quick brown fox", () => {
      const {
        asEmoji: emoji,
        asText: text,
      } = theQuickBrownFoxJumpsOverTheLazyDog;
      expect(encode(decode(emoji))).toEqual(emoji);
      expect(decode(encode(decode(emoji)))).toEqual(text);
      expect(decode(encode(text))).toEqual(text);
      expect(encode(decode(encode(text)))).toEqual(emoji);
    });

    test.only("emoji -> decode -> encode -> emoji", () => {
      testSet.slice(128, 138).forEach((emojiString) => {
        expect(encode(decode(emojiString))).toEqual(emojiString);
      });
    });

    test("byte -> encode -> decode -> byte", () => {
      testSet.forEach((_, index) => {
        expect(decode(encode([index]))).toEqual(
          decodeUint8ArrayToString([index])
        );
      });
    });

    //   test("emoji -> decode -> encode -> decode -> byte", () => {
    //     testSet.forEach((emojiString, index) => {
    //       expect(decode(encode(decode(emojiString)))).toEqual([index]);
    //     });
    //   });

    //   test("byte -> encode -> decode -> encode -> emoji", () => {
    //     testSet.forEach((emojiString, index) => {
    //       expect(encode(decode(encode([index])))).toEqual(emojiString);
    //     });
    //   });
  });
});
