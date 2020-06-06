const Vscode = require('vscode');
const GetRelativePath = require('./src/get-relative-path')
const getRelativeImport = require('./src/get-relative-import')
const getRelativeRequire = require('./src/get-relative-require')

function activate(context) {
  context.subscriptions.push(Vscode.commands.registerCommand('extension.getRelativePath', target => {
    GetRelativePath(target)
  }));
  context.subscriptions.push(Vscode.commands.registerCommand('extension.getRelativeImport', target => {
    getRelativeImport(target)
  }));
  context.subscriptions.push(Vscode.commands.registerCommand('extension.getRelativeRequire', target => {
    getRelativeRequire(target)
  }));
}

exports.activate = activate;
module.exports = {
  activate
}
