/**
 * Just save the quotes to the file
 */
const fs = require("fs");

let x = `QUOTE;AUTHOR;GENRE###
Age is an issue of mind over matter. If you don't mind, it doesn't matter.;Mark Twain;age###
Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.;Henry Ford;age###
Wrinkles should merely indicate where smiles have been.;Mark Twain;age###`;

x = x.split("###\n");

x = x.map((a) => a.split(";"));

x = x.map((item) => {
  return {
    quote: item[0],
    author: item[1],
    genre: item[2],
  };
});

try {
  const data = fs.writeFileSync("./data.json", JSON.stringify(x, 3));
  //file written successfully
} catch (err) {
  console.error(err);
}
