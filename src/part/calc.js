/**
 * 计算路径
 */

const Path = require('path')
const Vscode = require('vscode')

/**
 * 函数
 * @return {String} 路径
 */
const getCurrentEditorPath = function () {
  return Vscode.window.activeTextEditor.document.uri.path
}

/**
 * 取得相对路径
 * @param {Object} target 文件浏览器中的选中文件信息
 * @return {String} 相对路径
 */
const calcPath = function (target) {
  let relative = Path.relative(Path.dirname(getCurrentEditorPath()), target.path).replace(/\\/g, '/')
  if (relative.slice(0, 2) !== './' && relative.slice(0, 2) !== '..') {
    relative = './' + relative
  }

  return relative
}

module.exports = calcPath
