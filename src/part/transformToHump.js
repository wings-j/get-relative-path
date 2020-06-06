/**
 * @name 连字符转驼峰
 */

/* public */

/**
 * @name 转换为小驼峰
 * @description 转换-_
 * @param {String} s 字符串
 * @return {String} 驼峰格式
 */
const transformToHump = s => {
  let group = s.split(/[-_.]/)
  for (let i = 1; i < group.length; i++) {
    let item = group[i]
    let first = item[0].toLocaleUpperCase()
    group[i] = first + item.slice(1)
  }
  let r = group.join('')

  return r
}

/* construct */

module.exports = transformToHump