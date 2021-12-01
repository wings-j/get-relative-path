const Vscode = require('vscode')
const GetRelativePath = require('./src/get-relative-path')
const getRelativeImport = require('./src/get-relative-import')

function activate(context) {
  context.subscriptions.push(
    Vscode.commands.registerCommand('extension.getRelativePath', target => {
      GetRelativePath(target)
    })
  )
  context.subscriptions.push(
    Vscode.commands.registerCommand('extension.getRelativeImport', target => {
      getRelativeImport(target)
    })
  )
}

exports.activate = activate
module.exports = {
  activate
}
