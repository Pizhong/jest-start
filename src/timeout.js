/*
 * @Author: your name
 * @Date: 2022-01-01 15:17:13
 * @LastEditTime: 2022-01-01 15:33:20
 * @LastEditors: Please set LastEditors
 * @Description: setTimeout
 * @FilePath: \jest-start\src\timeout.js
 */

export default (fn) => {
  setTimeout(() => {
    fn()
    console.log('1111111');
  }, 2000)
}