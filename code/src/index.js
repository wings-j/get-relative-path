/**
 * @name Index
 */

const Path=require('path')
const Vscode = require('vscode');

/**
 * @name 获取当前编辑文件的路径
 * @return {String} 路径
 */
const getCurrentEditorPath=function(){
  return Vscode.window.activeTextEditor.document.uri.path
}
/**
 * @name 写入剪贴板
 * @param {String} content 内容
 */
const writeToClipboard=function(content){
  Vscode.env.clipboard.writeText(content)
}

/* public */

/**
 * @name 取得相对路径
 * @param {Object} target 文件浏览器中的选中文件信息 
 */
const getRelativePath=function(target){

}

/* construct */

module.exports=getRelativePath