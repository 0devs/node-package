import fs = require('fs');

fs.readFile('./test.ts', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});
