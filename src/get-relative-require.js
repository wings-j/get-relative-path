/**
 * @name 获取相对路径require语句
 */

/* private */

const Path = require('path')
const CalcPath = require('./part/calcPath')
const WriteToClipboard = require('./part/writeToClipboard')
const TransformToHump = require('./part/transformToHump')

/* public */

/**
 * @name 获取相对路径require语句
 * @param {Object} target 文件浏览器中的选中文件信息
 */
const getRelativeRequire = target => {
  let path = CalcPath(target)
  let extName = Path.extname(path)
  let filename = TransformToHump(Path.basename(path, extName))
  let clause = `const ${filename} = require('${path}')`

  WriteToClipboard(clause)
}

/* construct */

module.exports = getRelativeRequire