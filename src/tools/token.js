/*
 * @Descripttion:
 * @version:
 * @Author: CK
 * @Date: 2021-08-23 15:25:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-23 16:58:14
 */
/**
 * @test: 根据盐值和当前时间戳生成纯数字验证码
 * @param {String} salt 盐值
 * @param {Function} coding 编码函数
 * @param {Number} [num = 0] 模拟误差30s次数
 * @return {Object} [token, time] token:验证码 time:距离下一次30s的毫秒数
 */
export function genToken (salt, coding, num = 0) {
  const date = Date.now()
  const minute = Math.floor(date / 30000) + num
  const tokenStr = coding(minute + salt)
  const __token = parseInt(tokenStr, 16) % 1000000 + ''
  const token = __token.padStart(6, '0')
  const time = 30000 - date % 30000
  return {
    token,
    time
  }
}
/**
 * @test: 根据盐值和验证码判断是否正确
 * @param {String} salt 盐值
 * @param {String} token 验证码
 * * @param {String} coding 编码函数
 * @param {Number} [errorValue = 4] 误差30s次数范围
 * @return {Boolean}
 */
export function isToken (salt, token, coding, errorValue = 4) {
  let __errorValue = -errorValue - 1
  const maxErrorValue = errorValue
  while (__errorValue++ !== maxErrorValue) {
    if (genToken(salt, coding, __errorValue) === token) {
      return true
    }
  }
  return false
}

export default {
  genToken,
  isToken
}
