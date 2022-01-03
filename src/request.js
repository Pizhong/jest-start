/*
 * @Author: your name
 * @Date: 2022-01-03 11:33:09
 * @LastEditTime: 2022-01-03 12:10:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jest-start\src\request.js
 */
import axios from 'axios'

export const request = () => {
  // 返回一个promise
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

export const requestErr = () => {
  return axios.get('https://jsonplaceholder.typicode.com/sda')
}