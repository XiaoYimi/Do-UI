
/* 是否添加前缀 0 */
const addPreZero = n => String(n.toString()[1] ? n : '0' + n)

/* 获取字符串时间(YYYY-MM-DD HH:mm:ss),可指定 date 格式 */
const now = (dateSeparator) => {
  const separators = ['-', '/', '.']
  let [date, time] = new Date().toLocaleString().split(' ')
  let appointSeparator = separators.filter(item => dateSeparator === item)[0]
  appointSeparator = appointSeparator ? appointSeparator : '-'
  
  const originSeparator = separators.filter(item => date.indexOf(item) > -1 )[0]
  date = date.split(originSeparator)
  date.map((item, index) => date[index] = addPreZero(item))
  
  time = time.slice(time.indexOf('午') + 1)
  time = time.split(':')
  time.map((item, index) => time[index] = addPreZero(item))

  return date.join(appointSeparator) + ' ' + time.join(':')
}

module.exports = {
  addPreZero,
  now
}
