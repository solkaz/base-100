import { decodeUint8ArrayToString } from "./index";
/**
 * Test cases are stored as Uint8Arrays
 */
const emojiCharsInBytes: Uint8Array[] = [
  [240, 159, 143, 183],
  [240, 159, 143, 184],
  [240, 159, 143, 185],
  [240, 159, 143, 186],
  [240, 159, 143, 187],
  [240, 159, 143, 188],
  [240, 159, 143, 189],
  [240, 159, 143, 190],
  [240, 159, 143, 191],
  [240, 159, 144, 128],
  [240, 159, 144, 129],
  [240, 159, 144, 130],
  [240, 159, 144, 131],
  [240, 159, 144, 132],
  [240, 159, 144, 133],
  [240, 159, 144, 134],
  [240, 159, 144, 135],
  [240, 159, 144, 136],
  [240, 159, 144, 137],
  [240, 159, 144, 138],
  [240, 159, 144, 139],
  [240, 159, 144, 140],
  [240, 159, 144, 141],
  [240, 159, 144, 142],
  [240, 159, 144, 143],
  [240, 159, 144, 144],
  [240, 159, 144, 145],
  [240, 159, 144, 146],
  [240, 159, 144, 147],
  [240, 159, 144, 148],
  [240, 159, 144, 149],
  [240, 159, 144, 150],
  [240, 159, 144, 151],
  [240, 159, 144, 152],
  [240, 159, 144, 153],
  [240, 159, 144, 154],
  [240, 159, 144, 155],
  [240, 159, 144, 156],
  [240, 159, 144, 157],
  [240, 159, 144, 158],
  [240, 159, 144, 159],
  [240, 159, 144, 160],
  [240, 159, 144, 161],
  [240, 159, 144, 162],
  [240, 159, 144, 163],
  [240, 159, 144, 164],
  [240, 159, 144, 165],
  [240, 159, 144, 166],
  [240, 159, 144, 167],
  [240, 159, 144, 168],
  [240, 159, 144, 169],
  [240, 159, 144, 170],
  [240, 159, 144, 171],
  [240, 159, 144, 172],
  [240, 159, 144, 173],
  [240, 159, 144, 174],
  [240, 159, 144, 175],
  [240, 159, 144, 176],
  [240, 159, 144, 177],
  [240, 159, 144, 178],
  [240, 159, 144, 179],
  [240, 159, 144, 180],
  [240, 159, 144, 181],
  [240, 159, 144, 182],
  [240, 159, 144, 183],
  [240, 159, 144, 184],
  [240, 159, 144, 185],
  [240, 159, 144, 186],
  [240, 159, 144, 187],
  [240, 159, 144, 188],
  [240, 159, 144, 189],
  [240, 159, 144, 190],
  [240, 159, 144, 191],
  [240, 159, 145, 128],
  [240, 159, 145, 129],
  [240, 159, 145, 130],
  [240, 159, 145, 131],
  [240, 159, 145, 132],
  [240, 159, 145, 133],
  [240, 159, 145, 134],
  [240, 159, 145, 135],
  [240, 159, 145, 136],
  [240, 159, 145, 137],
  [240, 159, 145, 138],
  [240, 159, 145, 139],
  [240, 159, 145, 140],
  [240, 159, 145, 141],
  [240, 159, 145, 142],
  [240, 159, 145, 143],
  [240, 159, 145, 144],
  [240, 159, 145, 145],
  [240, 159, 145, 146],
  [240, 159, 145, 147],
  [240, 159, 145, 148],
  [240, 159, 145, 149],
  [240, 159, 145, 150],
  [240, 159, 145, 151],
  [240, 159, 145, 152],
  [240, 159, 145, 153],
  [240, 159, 145, 154],
  [240, 159, 145, 155],
  [240, 159, 145, 156],
  [240, 159, 145, 157],
  [240, 159, 145, 158],
  [240, 159, 145, 159],
  [240, 159, 145, 160],
  [240, 159, 145, 161],
  [240, 159, 145, 162],
  [240, 159, 145, 163],
  [240, 159, 145, 164],
  [240, 159, 145, 165],
  [240, 159, 145, 166],
  [240, 159, 145, 167],
  [240, 159, 145, 168],
  [240, 159, 145, 169],
  [240, 159, 145, 170],
  [240, 159, 145, 171],
  [240, 159, 145, 172],
  [240, 159, 145, 173],
  [240, 159, 145, 174],
  [240, 159, 145, 175],
  [240, 159, 145, 176],
  [240, 159, 145, 177],
  [240, 159, 145, 178],
  [240, 159, 145, 179],
  [240, 159, 145, 180],
  [240, 159, 145, 181],
  [240, 159, 145, 182],
  [240, 159, 145, 183],
  [240, 159, 145, 184],
  [240, 159, 145, 185],
  [240, 159, 145, 186],
  [240, 159, 145, 187],
  [240, 159, 145, 188],
  [240, 159, 145, 189],
  [240, 159, 145, 190],
  [240, 159, 145, 191],
  [240, 159, 146, 128],
  [240, 159, 146, 129],
  [240, 159, 146, 130],
  [240, 159, 146, 131],
  [240, 159, 146, 132],
  [240, 159, 146, 133],
  [240, 159, 146, 134],
  [240, 159, 146, 135],
  [240, 159, 146, 136],
  [240, 159, 146, 137],
  [240, 159, 146, 138],
  [240, 159, 146, 139],
  [240, 159, 146, 140],
  [240, 159, 146, 141],
  [240, 159, 146, 142],
  [240, 159, 146, 143],
  [240, 159, 146, 144],
  [240, 159, 146, 145],
  [240, 159, 146, 146],
  [240, 159, 146, 147],
  [240, 159, 146, 148],
  [240, 159, 146, 149],
  [240, 159, 146, 150],
  [240, 159, 146, 151],
  [240, 159, 146, 152],
  [240, 159, 146, 153],
  [240, 159, 146, 154],
  [240, 159, 146, 155],
  [240, 159, 146, 156],
  [240, 159, 146, 157],
  [240, 159, 146, 158],
  [240, 159, 146, 159],
  [240, 159, 146, 160],
  [240, 159, 146, 161],
  [240, 159, 146, 162],
  [240, 159, 146, 163],
  [240, 159, 146, 164],
  [240, 159, 146, 165],
  [240, 159, 146, 166],
  [240, 159, 146, 167],
  [240, 159, 146, 168],
  [240, 159, 146, 169],
  [240, 159, 146, 170],
  [240, 159, 146, 171],
  [240, 159, 146, 172],
  [240, 159, 146, 173],
  [240, 159, 146, 174],
  [240, 159, 146, 175],
  [240, 159, 146, 176],
  [240, 159, 146, 177],
  [240, 159, 146, 178],
  [240, 159, 146, 179],
  [240, 159, 146, 180],
  [240, 159, 146, 181],
  [240, 159, 146, 182],
  [240, 159, 146, 183],
  [240, 159, 146, 184],
  [240, 159, 146, 185],
  [240, 159, 146, 186],
  [240, 159, 146, 187],
  [240, 159, 146, 188],
  [240, 159, 146, 189],
  [240, 159, 146, 190],
  [240, 159, 146, 191],
  [240, 159, 147, 128],
  [240, 159, 147, 129],
  [240, 159, 147, 130],
  [240, 159, 147, 131],
  [240, 159, 147, 132],
  [240, 159, 147, 133],
  [240, 159, 147, 134],
  [240, 159, 147, 135],
  [240, 159, 147, 136],
  [240, 159, 147, 137],
  [240, 159, 147, 138],
  [240, 159, 147, 139],
  [240, 159, 147, 140],
  [240, 159, 147, 141],
  [240, 159, 147, 142],
  [240, 159, 147, 143],
  [240, 159, 147, 144],
  [240, 159, 147, 145],
  [240, 159, 147, 146],
  [240, 159, 147, 147],
  [240, 159, 147, 148],
  [240, 159, 147, 149],
  [240, 159, 147, 150],
  [240, 159, 147, 151],
  [240, 159, 147, 152],
  [240, 159, 147, 153],
  [240, 159, 147, 154],
  [240, 159, 147, 155],
  [240, 159, 147, 156],
  [240, 159, 147, 157],
  [240, 159, 147, 158],
  [240, 159, 147, 159],
  [240, 159, 147, 160],
  [240, 159, 147, 161],
  [240, 159, 147, 162],
  [240, 159, 147, 163],
  [240, 159, 147, 164],
  [240, 159, 147, 165],
  [240, 159, 147, 166],
  [240, 159, 147, 167],
  [240, 159, 147, 168],
  [240, 159, 147, 169],
  [240, 159, 147, 170],
  [240, 159, 147, 171],
  [240, 159, 147, 172],
  [240, 159, 147, 173],
  [240, 159, 147, 174],
  [240, 159, 147, 175],
  [240, 159, 147, 176],
  [240, 159, 147, 177],
  [240, 159, 147, 178],
  [240, 159, 147, 179],
  [240, 159, 147, 180],
  [240, 159, 147, 181],
  [240, 159, 147, 182],
].map((bytes) => Uint8Array.from(bytes));

const emojiAsStrings: string[] = emojiCharsInBytes.map(
  decodeUint8ArrayToString
);

const theQuickBrownFoxJumpsOverTheLazyDog = {
  asText: "the quick brown fox jumped over the lazy dog\n",
  asEmoji: decodeUint8ArrayToString(
    Uint8Array.from([
      240,
      159,
      145,
      171,
      240,
      159,
      145,
      159,
      240,
      159,
      145,
      156,
      240,
      159,
      144,
      151,
      240,
      159,
      145,
      168,
      240,
      159,
      145,
      172,
      240,
      159,
      145,
      160,
      240,
      159,
      145,
      154,
      240,
      159,
      145,
      162,
      240,
      159,
      144,
      151,
      240,
      159,
      145,
      153,
      240,
      159,
      145,
      169,
      240,
      159,
      145,
      166,
      240,
      159,
      145,
      174,
      240,
      159,
      145,
      165,
      240,
      159,
      144,
      151,
      240,
      159,
      145,
      157,
      240,
      159,
      145,
      166,
      240,
      159,
      145,
      175,
      240,
      159,
      144,
      151,
      240,
      159,
      145,
      161,
      240,
      159,
      145,
      172,
      240,
      159,
      145,
      164,
      240,
      159,
      145,
      167,
      240,
      159,
      145,
      156,
      240,
      159,
      145,
      155,
      240,
      159,
      144,
      151,
      240,
      159,
      145,
      166,
      240,
      159,
      145,
      173,
      240,
      159,
      145,
      156,
      240,
      159,
      145,
      169,
      240,
      159,
      144,
      151,
      240,
      159,
      145,
      171,
      240,
      159,
      145,
      159,
      240,
      159,
      145,
      156,
      240,
      159,
      144,
      151,
      240,
      159,
      145,
      163,
      240,
      159,
      145,
      152,
      240,
      159,
      145,
      177,
      240,
      159,
      145,
      176,
      240,
      159,
      144,
      151,
      240,
      159,
      145,
      155,
      240,
      159,
      145,
      166,
      240,
      159,
      145,
      158,
      240,
      159,
      144,
      129,
    ])
  ),
};

export { emojiAsStrings, theQuickBrownFoxJumpsOverTheLazyDog };
