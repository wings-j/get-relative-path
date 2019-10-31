const Vscode = require('vscode');
const GetRelativePath = require('./src/get-relative-path')

function activate(context)
{
    context.subscriptions.push(Vscode.commands.registerCommand('extension.getRelativePath', (target) =>
    {
        GetRelativePath(target)
    }));
}

exports.activate = activate;
module.exports = {
    activate
}

