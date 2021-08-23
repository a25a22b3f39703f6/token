/*
 * @Descripttion:
 * @version:
 * @Author: CK
 * @Date: 2021-08-23 15:25:32
 * @LastEditors: CK
 * @LastEditTime: 2021-08-23 15:42:43
 */
/**
 * @test: 根据盐值和当前时间戳生成纯数字验证码
 * @param {String} salt 盐值
 * @param {Number} [num = 0] 模拟误差30s次数
 * @param {Number} [num = 0] 模拟误差30s次数
 * @return {String}
 */
export function genToken (salt, coding, num = 0) {
  const date = Date.now()
  const minute = Math.floor(date / 30000) + num
  const tokenStr = coding(minute + salt)
  const __token = parseInt(tokenStr, 16) % 1000000 + ''
  return __token.padStart(6, '0')
}
/**
 * @test: 根据盐值和验证码判断是否正确
 * @param {String} salt 盐值
 * @param {String} __token
 * @param {Number} [errorValue = 4] 误差30s次数范围
 * @return {Boolean}
 */
 export function isToken (salt, __token, coding, errorValue = 4) {
  let __errorValue = -errorValue - 1
  const maxErrorValue = errorValue
  while (__errorValue++ !== maxErrorValue) {
    if (genToken(salt, coding, __errorValue) === __token) {
      return true
    }
  }
  return false
}

export default {
    genToken,
    isToken
}
