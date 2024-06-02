/**
* 问题：实现 queryParse 函数，完成解析 URL 参数的功能
* ⽤法：
* const href = 'https://a.b.c?name=abc&age=24&code=%E6%B5%8B%E8%AF%95#main';
* const params = queryParse(href);
* console.log(params); // {name: 'abc', age: 24, ...等 }
*/
function queryParse(url) {
    if (!url) return
    const result = {}
    const targetUrl = new URL(url)
    if (!targetUrl.search) return
    const paramsSearch = new URLSearchParams(targetUrl.search)
    for (let entry of paramsSearch.entries()) {
        result[entry[0]] = entry[1]
    }
    return result
}

/**
* 问题：实现⼀个节流器 throttle 函数，使 fn 函数的调⽤⾄少间隔 300ms，
* 同时请修改程序中书写不正确的地⽅。
*/
function fn(params = {}) {
    fetch('https://xxx.xx.xx', {
        body: params,
    }).then(response => {
        return response.json()
    }).then((result) => {
        console.log(result);
        // ... do some work
    });
}

// 请完成 throttle 函数
function throttle(delay = 100, fn) {
    let timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.call(this, arguments)
                clearTimeout(timer)
                timer = null
            }, delay)
        }
    }
}

const throttleFn = throttle(300, fn);

// requestAnimationFrame 模拟频繁触发的调⽤
(function loop() {
    throttleFn({ pageNum: 0, pageSize: 10 });
    requestAnimationFrame(loop);
})();
