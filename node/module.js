/**
 * require('xxxxxxxx')
 * 其中xxxxxxxx可以是
 * 1. 绝对路径
 * 2. 相对路径 
 *  2.1 检查是否是内置模块
 *  2.2 检查当前目录中的node_module
 *  2.3 检查上级目录中的node_module
 *  2.4 转化为绝对路径
 *  2.5 加载模块
 * 3. 文件不加后缀默认的加载顺序: js -> json -> node -> mjs
 * 4. 包的入口main是index.js
 */

this === module.exports === exports // true

// node 中的 ES
// 1. 将文件的后缀改为mjs
// 2.在package.json中加上type: "module"
// 建议: 要么全部都用ESM, 要么全部都用CMJ
