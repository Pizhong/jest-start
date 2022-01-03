/*
 * @Author: your name
 * @Date: 2022-01-03 11:39:02
 * @LastEditTime: 2022-01-03 12:12:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jest-start\tests\request.test.js
 */
import { request, requestErr } from '../src/request'


test('测试request', () => {
  return request().then(data => {
      expect(data.data).toEqual({
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        })
  })
})

// resolves将返回request方法执行后所有返回内容，我们使用toMatchObject这个matcher，当传入的对象能够匹配到request方法执行后返回对象的一部分键值对，测试就会通过。
// test('测试request', () => {
//   return expect(request()).resolves.toMatchObject({
//       data: {
//           "userId": 1,
//           "id": 1,
//           "title": "delectus aut autem",
//           "completed": false
//         }
//   })
// })


// 测试请求失败
test('测试request 404', () => {
  return expect(requestErr()).rejects.toThrow(/404/)
})
