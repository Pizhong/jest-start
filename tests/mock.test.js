/*
 * @Author: your name
 * @Date: 2022-01-03 17:52:26
 * @LastEditTime: 2022-01-03 17:52:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jest-start\tests\mock.test.js
 */

import axios from 'axios'
import { request } from '../src/mock'

jest.mock('axios')

test('测试request', async () => {
    axios.get.mockResolvedValueOnce({ data: 'Jordan', position: 'SG' })
    axios.get.mockResolvedValue({ data: 'kobe', position: 'SG' })
    await request().then((res) => {
        expect(res.data).toBe('Jordan')
    })
    await request().then((res) => {
        expect(res.data).toBe('kobe')
    })
})