const Path = require('path')
const shell = require('shelljs')
require('colors')

function exec (command) {
  const res = shell.exec(command)
  return res.code === 0
}

function install (manager, command) {
  if (exec(`which ${manager}`)) {
    console.log(`\nInstalling "${manager}" demo ...\n`.red)
    const path = Path.resolve(__dirname, manager)
    shell.cd(path)
    exec(command)
  }
  else {
    console.log(`\nPackage manager "${manager}" not installed!\n`.red)
  }
}

install('npm', 'npm i')
install('pnpm', 'pnpm i')
install('yarn', 'yarn')
