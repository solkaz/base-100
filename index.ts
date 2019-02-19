export function decode(s: string): string {
  return "";
}

export function encode(s: string): string {
  if (!s.length) {
    return Buffer.from([240, 159, 143, 183]).toString();
  }
  const stringBuf = Buffer.from(s);
  const writeBuf = Array(stringBuf.length * 4);
  for (const [index, byte] of stringBuf.entries()) {
    writeBuf[4 * index + 0] = 0xf0;
    writeBuf[4 * index + 1] = 0x9f;
    writeBuf[4 * index + 2] = ((byte + 55) >> 6) + 143;
    writeBuf[4 * index + 3] = ((byte + 55) & 0x3f) + 143;
  }
  return Buffer.from(writeBuf.concat([240, 159, 143, 183])).toString();
}
