console.log(global)

// 下面是全局对象global中常用的方法和属性
setTimeout(() => { })
setInterval(() => { })
setImmediate(() => { }) // 相当于setTimeout(() => {}, 0)
console.log()
__dirname
__filename
Buffer
process.cwd()  // 获取当前执行cli的文件位置
process.exit() // 关闭当前进程
process.argv    // 获取cli命令的参数
process.platform // 获取计算机的操作系统
process.kill(pid) // 结束某个进程
process.env // 获取环境变量


