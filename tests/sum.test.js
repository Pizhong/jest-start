/*
 * @Author: your name
 * @Date: 2021-12-25 23:41:13
 * @LastEditTime: 2022-01-01 15:15:45
 * @LastEditors: Please set LastEditors
 * @Description: sum方法测试用例
 * @FilePath: \jest-start\tests\sum.test.js
 */
// const sum = require('../src/sum')
import sum from '../src/sum'
test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})