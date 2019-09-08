// 拆分数组解法
// export default (str) => (str.split(' ').map(item => item.split('').reverse().join('')).join(' '))

// 正则
export default (str) => (str.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' '))
