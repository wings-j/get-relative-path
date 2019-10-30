const Vscode = require('vscode');
const GetRelativePath=require('./src/index')

function activate(context) {
    context.subscriptions.push(Vscode.commands.registerCommand('extension.GetRelativePath', GetRelativePath));
}

exports.activate = activate;
module.exports = {
    activate
}