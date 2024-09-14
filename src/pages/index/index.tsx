import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

   // 字符串
   let a = '第一个变量'

   // 数组
   const arr = ['abc', 'cba', 'nba']
 
   // 对象
   const obj = {
     name: "张三",
     age: 18
   }
 
   let isTrue = false
 
   let isNull = null;
 
   // eslint-disable-next-line no-undef-init
   let isUndefined = undefined;
 
   function fn() {
     return '我是函数的返回值'
   }
   return (
    <>
      {/* 字符串 */}
      <View>{a}</View>
      {/* 数组 */}
      <View>{arr}</View>
      {/* 对象 单个属性 */}
      <View>{obj.name}-{obj.age}</View>
      {/* 对象 多个属性 */}
      <View>{JSON.stringify(obj)}</View>
      {/* 时间戳 */}
      <View>{new Date().getTime()}</View>
      {/* 布尔值 */}
      <View>{isTrue}</View>
      {/* null */}
      <View>{isNull}</View>
      {/* undefined */}
      <View>{isUndefined}</View>
      {/* 表达式 */}
      <View>{1 + 2}</View>
      {/* 三元表示式
      条件 ? 成立 : 不成立
      */}
      <View>
        {isTrue ? '我是真的' : '我是假的'}
      </View>
      {/* 执行一个函数 */}
      <View>{ fn() }</View>
    </>
  ) 
}
