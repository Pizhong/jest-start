/*
 * @Author: your name
 * @Date: 2022-01-03 11:54:02
 * @LastEditTime: 2022-01-03 12:13:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jest-start\tests\requestAsyncAwait.test.js
 */

import { request, requestErr } from '../src/request'

// 写法一
test('测试request', async () => {
  const res = await request()
  expect(res.data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  })
})
// 写法二
test('测试request', async () => {
  await expect(request()).resolves.toMatchObject({
      data: {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
          }
      })
})

// 测试失败
test('测试request 404', async () => {
  await expect(requestErr()).rejects.toThrow(/404/)
})
// 或者可以使用try catch语句写的更完整
test('测试request 404', async () => {
  try {
      await requestErr()
  } catch (e) {
      expect(e.toString()).toBe('Error: Request failed with status code 404')
  }
})
