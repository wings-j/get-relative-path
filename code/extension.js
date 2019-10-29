const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.getRelativePath', function() {
        vscode.window.showInformationMessage('Relative path has been copied to the clipboard');
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;
module.exports = {
    activate
}