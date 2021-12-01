/**
 * 获取相对路径import语句
 */

const Path = require('path')
const CalcPath = require('./part/calc')
const WriteToClipboard = require('./part/copy')
const TransformToHump = require('./part/transform')

/**
 * 获取相对路径import语句
 * @param {Object} target 文件浏览器中的选中文件信息
 */
const getRelativeImport = target => {
  let path = CalcPath(target)
  let extName = Path.extname(path)
  let filename = TransformToHump(Path.basename(path, extName))
  let clause = `import ${filename} from '${path}'`

  WriteToClipboard(clause)
}

module.exports = getRelativeImport
