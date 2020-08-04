const { spawn } = require('child_process');
const { argv, exit } = require('process');
const cp = spawn(`yarn node ${__dirname}/main.js`, argv.slice(2), { shell: true, stdio: "inherit" })
cp.once('exit', code => exit(code))
