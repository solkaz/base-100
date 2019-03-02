import util = require("util");

export const textEncoder = new util.TextEncoder();
export const utf8Decoder = new util.TextDecoder("utf-8");

export function decodeUint8ArrayToString(input: Uint8Array | number[]): string {
  if (Array.isArray(input)) {
    return utf8Decoder.decode(Uint8Array.from(input));
  }
  return utf8Decoder.decode(input);
}

function createUint8Array(input: string | number[] | Uint8Array): Uint8Array {
  if (typeof input === "string") {
    return textEncoder.encode(input);
  } else if (Array.isArray(input)) {
    // s is number[]
    return Uint8Array.from(input);
  } else {
    return input;
  }
}

export function decode(input: string | number[] | Uint8Array): string {
  return decodeUint8ArrayToString(
    createUint8Array(input)
      .reduce(
        (chunks, byte) => {
          const currentChunk = chunks[chunks.length - 1];
          if (currentChunk.length === 4) {
            chunks.push([byte]);
          } else {
            currentChunk.push(byte);
          }
          return chunks;
        },
        [[]] as number[][]
      )
      .map((chunk) => ((chunk[2] - 143) << 6) + chunk[3] - 128 - 55)
  );
}

export function encode(input: string | number[] | Uint8Array): string {
  console.log({ input, l: input.length });
  const buf = createUint8Array(input);
  const bufLength = buf.length;
  console.log({ buf, bufLength });

  const writeBuf = new Uint8Array(bufLength * 4);
  for (let index = 0; index < bufLength; index++) {
    const encodeVal = buf[index] + 55;
    writeBuf[4 * index + 0] = 0xf0;
    writeBuf[4 * index + 1] = 0x9f;
    writeBuf[4 * index + 2] = (encodeVal >> 6) + 143;
    writeBuf[4 * index + 3] = (encodeVal & 0x3f) + 128;
  }
  console.log({ bufLength });
  return decodeUint8ArrayToString(writeBuf);
}
