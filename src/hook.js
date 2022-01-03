/*
 * @Author: your name
 * @Date: 2022-01-03 18:01:25
 * @LastEditTime: 2022-01-03 18:01:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jest-start\src\hook.js
 */
// hook.js
export default class Count {
  constructor () {
      this.count = 2
  }
  increase () {
      this.count ++
  }

  decrease () {
      this.count --
  }

  double () {
      this.count *= this.count
  }

  half () {
      this.count /= this.count
  }
} 
