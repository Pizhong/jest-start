/*
 * @Author: your name
 * @Date: 2022-01-01 15:28:51
 * @LastEditTime: 2022-01-01 15:40:37
 * @LastEditors: Please set LastEditors
 * @Description: test timeout.js
 * @FilePath: \jest-start\tests\timeout.test.js
 */

import timeout from '../src/timeout'
// test('测试定时器', (done) => {
//   timeout(() => {
//     expect(1+1).toBe(2)
//     done()
//   })
// })


// fakeTimers
test('测试timer', () => {
  jest.useFakeTimers()
  // 使用jest.fn()生成测试函数
  const fn = jest.fn()
  timeout(fn)
  // 时间快进2秒
  jest.advanceTimersByTime(2000)
  expect(fn).toHaveBeenCalledTimes(1)
})