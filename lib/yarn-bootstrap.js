const { spawn } = require('child_process');
const { argv, exit } = require('process');
const cp = spawn(`yarn node ./main.js`, argv.slice(2), { shell: true, stdio: "inherit", cwd: __dirname })
cp.once('exit', code => exit(code))
