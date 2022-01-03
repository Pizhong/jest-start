/*
 * @Author: your name
 * @Date: 2022-01-01 14:02:39
 * @LastEditTime: 2022-01-01 15:28:31
 * @LastEditors: Please set LastEditors
 * @Description: 常用的匹配器使用
 * @FilePath: \jest-start\tests\matchers.test.js
 */


// 1、toBe——精确匹配 判断基本类型数据 ===
test('2 + 2 等于 4', () => {
  expect(2+2).toBe(4)
})

// 2、toEqual  判断引用类型 ==
test('对象赋值', () => {
  const data = {one: 1}
  data['two'] = 2
  // expect(data).toBe({one: 1, two: 2}) //测试不匹配u
  expect(data).toEqual({one: 1, two: 2})
})


// 3、not修饰符 not就是对matcher的否定
test('not修饰符', () => {
  const a = 0
  expect(a).not.toBe(1)
})


// 4、真值
// toBeNull 只匹配 null
// toBeUndefined 只匹配 undefined
// toBeDefined 与 toBeUndefined 相反
// toBeTruthy 匹配任何 if 语句为真
// toBeFalsy 匹配任何 if 语句为假
test('变量a是否为null', () => {
  const a = null
  expect(a).toBeNull()
})

test('变量a是否为undefined', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

test('变量a是否为defined', () => {
  const a = null
  expect(a).toBeDefined()
})

test('变量a是否为true', () => {
  const a = 1
  expect(a).toBeTruthy()
})

test('变量a是否为false', () => {
  const a = 0
  expect(a).toBeFalsy()
})

// 5、数字
test('two plus two', () => {
  const value = 2 + 2;
  // 判断数value是否大于某个数
  expect(value).toBeGreaterThan(3);
  // 判断数value是否大于等于某个数
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeGreaterThanOrEqual(4);
  // 判断数value是否小于某个数
  expect(value).toBeLessThan(5);
  // 判断数value是否小于等于某个数
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBeLessThanOrEqual(4);

  // toBe 和 toEqual 对数值的判断是等效的
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// 测试浮点数使用toBeCloseTo
test('测试浮点数', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3) //这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3) 

})

// 6、字符串 判断字符串是否和toMatch提供的模式匹配 正则
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// 7、toContain 判断数组或者集合是否包含某个元素
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

// toHaveLength  判断数组的长度

test('toHaveLength', () => {
  expect(shoppingList).toHaveLength(5)
})

// 8、toThrow 判断抛出的异常是否符合预期
function throwError() {
  throw new Error('I throw a error')
}

test('toThrow', () => {
  expect(() => throwError()).toThrow(/I throw a error/)
})
// 注意：函数需要在expect的包装函数中调用，否则 toThrow断言总是会失败。
