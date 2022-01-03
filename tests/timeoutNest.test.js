/*
 * @Author: your name
 * @Date: 2022-01-01 15:38:49
 * @LastEditTime: 2022-01-01 15:42:00
 * @LastEditors: Please set LastEditors
 * @Description: test timeoutNest.js
 * @FilePath: \jest-start\tests\timeoutNest.test.js
 */

import timeoutNest from '../src/timeoutNest'

// test('测试嵌套定时器', () => {
//   jest.useFakeTimers()
//   const fn = jest.fn()
//   timeoutNest(fn)
//   // 时间快进2秒
//   jest.advanceTimersByTime(2000)
//   expect(fn).toHaveBeenCalledTimes(1)
//   // 时间快进3秒
//   jest.advanceTimersByTime(3000)
//   expect(fn).toHaveBeenCalledTimes(2)
// })

// jest.runAllTimers()
test('测试timer', () => {
  jest.useFakeTimers()
  const fn = jest.fn()
  timeoutNest(fn)
  jest.runAllTimers()
  expect(fn).toHaveBeenCalledTimes(2)
})
