import fs = require('fs');

fs.readFile('./test.ts', (err, d) => {
  // eslint-disable-next-line no-console
  console.log(err);

  return d;
});
