export function decode(s: string): number[] {
  return Buffer.from(s)
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
    .map((chunk) => ((chunk[2] - 143) << 6) + chunk[3] - 128 - 55);
}

export function encode(bytes: number[]): string {
  const bytesLength = bytes.length;
  const writeBuf = new Array(bytesLength * 4);
  for (let index = 0; index < bytesLength; index++) {
    const byte = bytes[index];
    writeBuf[4 * index + 0] = 0xf0;
    writeBuf[4 * index + 1] = 0x9f;
    writeBuf[4 * index + 2] = ((byte + 55) >> 6) + 143;
    writeBuf[4 * index + 3] = ((byte + 55) & 0x3f) + 128;
  }
  return Buffer.from(writeBuf).toString();
}
