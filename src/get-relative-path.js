/**
 * 获取相对路径
 */

const CalcPath = require('./part/calc')
const WriteToClipboard = require('./part/copy')

/**
 * 取得相对路径
 * @param {Object} target 文件浏览器中的选中文件信息
 */
const getRelativePath = function (target) {
  let path = CalcPath(target)
  WriteToClipboard(path)
}

module.exports = getRelativePath
