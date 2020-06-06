/**
 * @name 获取相对路径
 */

/* private */

const CalcPath = require('./part/calcPath')
const WriteToClipboard = require('./part/writeToClipboard')

/* public */

/**
 * @name 取得相对路径
 * @param {Object} target 文件浏览器中的选中文件信息
 */
const getRelativePath = function (target) {
  let path = CalcPath(target)
  WriteToClipboard(path)
}

/* construct */

module.exports = getRelativePath