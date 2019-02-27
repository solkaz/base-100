export function decode(s: string): string {
  return "";
}

export function encode(bytes: number[]): string {
  const bytesLength = bytes.length;
  const writeBuf = Array(bytesLength * 4);
  for (let index = 0; index < bytesLength; index++) {
    const byte = bytes[index];
    writeBuf[4 * index + 0] = 0xf0;
    writeBuf[4 * index + 1] = 0x9f;
    writeBuf[4 * index + 2] = ((byte + 55) >> 6) + 143;
    writeBuf[4 * index + 3] = ((byte + 55) & 0x3f) + 128;
  }
  return Buffer.from(writeBuf).toString();
}
