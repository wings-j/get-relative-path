/**
 * @name 写入剪贴板
 */

/* private */

const Vscode = require('vscode');

/* public */

/**
 * @name 写入剪贴板
 * @param {String} content 内容
 */
const writeToClipboard = function (content) {
  Vscode.env.clipboard.writeText(content)
}

/* construct */

module.exports = writeToClipboard