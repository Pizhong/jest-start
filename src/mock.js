/*
 * @Author: your name
 * @Date: 2022-01-03 17:36:06
 * @LastEditTime: 2022-01-03 17:49:26
 * @LastEditors: Please set LastEditors
 * @Description: 待测试函数
 * @FilePath: \jest-start\src\mock.js
 */


import axios from 'axios'

export const request = fn => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}
