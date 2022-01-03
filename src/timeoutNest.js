/*
 * @Author: your name
 * @Date: 2022-01-01 15:17:13
 * @LastEditTime: 2022-01-01 15:38:06
 * @LastEditors: Please set LastEditors
 * @Description: 定时器嵌套
 * @FilePath: \jest-start\src\timeout.js
 */
export default (fn) => {
  setTimeout(() => {
    fn()
    console.log('this is timeout outside!')
    setTimeout(() => {
      fn()
      console.log('this is timeout inside!')
    }, 3000)
  }, 2000)
}
