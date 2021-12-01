/**
 * 名称转换
 */

const VSCode = require('vscode')

/**
 * 函数
 * @description 转换-_
 * @param {String} s 字符串
 * @return {String} 驼峰格式
 */
const transform = s => {
  let format = VSCode.workspace.getConfiguration('getRelativePath').nameFormat || 'pascal'

  if (format === 'camel') {
    let group = s.split(/[-_.]/)
    for (let i = 1; i < group.length; i++) {
      let item = group[i]
      let first = item[0].toLocaleUpperCase()
      group[i] = first + item.slice(1)
    }
    let r = group.join('')

    return r
  } else {
    let group = s.split(/[-_.]/)
    for (let i = 0; i < group.length; i++) {
      let item = group[i]
      let first = item[0].toLocaleUpperCase()
      group[i] = first + item.slice(1)
    }
    let r = group.join('')

    return r
  }
}

module.exports = transform
