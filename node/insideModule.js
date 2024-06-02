const os = require('os')
const path = require('path')
const url = require('url')

os.EOL // 当前操作系统的分隔符
os.arch() // 获取CPU的架构名 x32 x64
os.cpus() // 获取cpu的核数
os.freemem() // 获取当前空闲的内存数
os.homedir() // 获取操作系统的用户主目录
os.hostname() // 获取主机名
os.tmpdir() // 获取操作系统的临时目录

path.basename(pathName, '.html') // 获取路径中的文件名
path.sep // 操作系统的路径分隔符
path.delimiter // 当前操作系统process.env中的路径与路径之间的分隔符
path.dirname(pathName) // 获取路径的文件夹路径
path.extname(pathName) // 获取路径文件的后缀名
path.join(pathName1, pathName2) // 可以拼接路径, 可以识别../ ./
path.normalize(pathName) // 将路径格式化为操作系统的的路径 
path.relative(form, to) // 拿到从form到to的相对路径
path.resolve(pathName1, pathName2) // 可以拼接路径, 可以识别../ ./,但是../ ./是相对与process.cwd(), 并且拼接后返回绝对路径

const myUrl = new url.URL("http://localhost:8080/a/b/c?name=zhangsan&age=18#main")
myUrl.host
myUrl.search
myUrl.hash
myUrl.hostname
myUrl.origin
myUrl.searchParams