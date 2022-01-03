/*
 * @Author: your name
 * @Date: 2022-01-03 18:04:29
 * @LastEditTime: 2022-01-03 18:04:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jest-start\tests\hook.test.js
 */
import Count from "../src/hook"

describe('分别测试Count的4个方法', () => {
    let count
    beforeAll(() => {
        console.log('before all tests!')
    })

    beforeEach(() => {
        console.log('before each test!')
        count = new Count()
    })

    afterAll(() => {
        console.log('after all tests!')
    })

    afterEach(() => {
        console.log('after each test!')
    })

    test('测试increase', () => {
        count.increase()
        console.log(count.count)
    })
    test('测试decrease', () => {
        count.decrease()
        console.log(count.count)
    })
    test('测试double', () => {
        count.double()
        console.log(count.count)
    })
    test('测试half', () => {
        count.half()
        console.log(count.count)
    })
})
