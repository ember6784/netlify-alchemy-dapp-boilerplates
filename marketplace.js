const { execFile } = require('child_process');
const marketplace = process.argv[2]; // get the marketplace argument from the command line
if (marketplace && marketplace.match(/^[a-z0-9-]+$/i)) { // check if the marketplace argument is valid
  execFile('npx', ['create-web3-dapp', marketplace], (error, stdout, stderr) => { // execute the npx command safely
    if (error) {
      console.error(error);
    } else {
      console.log(stdout);
    }
  });
} else {
  console.error('Invalid marketplace argument');
}
