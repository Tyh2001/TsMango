const base = '/mango/'

export const sidebar = {
  '/docs/': [
    {
      text: '开始使用',
      link: `${base}docs/start`,
      items: [
        { text: '快速上手', link: `${base}docs/start` },
        { text: '更新日志', link: `${base}docs/CHANGELOG` },
        { text: '贡献指南', link: `${base}docs/CONTRIBUTING` }
      ]
    },
    {
      text: '数字',
      link: `${base}docs/keepDecimal`,
      items: [
        { text: '保留小数点 n 位', link: `${base}docs/keepDecimal` },
        { text: '指定范围随机数', link: `${base}docs/randomNum` },
        { text: '获取 0-9 随机数', link: `${base}docs/witTenNum` }
      ]
    },
    {
      text: '字符串',
      link: `${base}docs/randomString`,
      items: [
        { text: '随机字符串', link: `${base}docs/randomString` },
        { text: '随机颜色', link: `${base}docs/randomColor` }
      ]
    },
    {
      text: '数组',
      link: `${base}docs/uniqueArray`,
      items: [
        { text: '数组去重', link: `${base}docs/uniqueArray` },
        { text: '合并并去重', link: `${base}docs/mergeArrayRepeat` },
        { text: '检测数组是否存在某个值', link: `${base}docs/isArrHave` }
      ]
    },
    {
      text: '对象',
      link: `${base}docs/shallowClone`,
      items: [
        { text: '浅克隆', link: `${base}docs/shallowClone` },
        { text: '深克隆', link: `${base}docs/deepClone` }
      ]
    },
    {
      text: '函数',
      link: `${base}docs/debounce`,
      items: [
        { text: '防抖', link: `${base}docs/debounce` },
        { text: '节流', link: `${base}docs/throttle` }
      ]
    },
    {
      text: '类型',
      link: `${base}docs/isType`,
      items: [
        { text: '获取数据类型', link: `${base}docs/getType` },
        { text: '检测一个值是否是 null', link: `${base}docs/isNull` },
        { text: '检测一个值是否是 number', link: `${base}docs/isNumber` },
        { text: '检测一个值是否是 string', link: `${base}docs/isString` },
        { text: '检测一个值是否是 object', link: `${base}docs/isObject` },
        { text: '检测一个值是否是 array', link: `${base}docs/isArray` },
        { text: '检测一个值是否是 undefined', link: `${base}docs/isUndefined` },
        { text: '检测一个值是否为真', link: `${base}docs/isTf` }
      ]
    },
    {
      text: '时间',
      link: `${base}docs/pastTime`,
      items: [
        { text: '计算时间过去多久', link: `${base}docs/pastTime` },
        { text: '将时间戳转换为正常的时间', link: `${base}docs/nowTime` },
        { text: '获取当前的时间', link: `${base}docs/dateFormat` }
      ]
    },
    {
      text: '杂项',
      link: `${base}docs/getStorage`,
      items: [
        { text: '获取本地存储', link: `${base}docs/getStorage` },
        { text: '删除本地存储', link: `${base}docs/removeStorage` },
        { text: '添加本地存储', link: `${base}docs/setStorage` },
        { text: '当前是否联网状态', link: `${base}docs/isOnLine` }
      ]
    }
  ]
}
