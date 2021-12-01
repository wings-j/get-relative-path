/**
 * 复制
 */

const Vscode = require('vscode')

/**
 * 函数
 * @param {String} content 内容
 */
const writeToClipboard = function (content) {
  Vscode.env.clipboard.writeText(content)
}

module.exports = writeToClipboard
