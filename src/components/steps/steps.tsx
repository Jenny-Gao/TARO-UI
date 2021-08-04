import Taro from '@tarojs/taro'
// 此组件引入的是taro-ui的组件
import { AtSteps } from 'taro-ui'

// 加上any对应了props和state 为了防止出现错误提示”类型“Readonly<{}>”上不存在属性“current”“
export default class MySteps extends Taro.Component<any, any> {
  constructor () {
    super(...arguments)// 外部接收的未知长度的props=>...arguments
    this.state = {// 定义组件自己的私有状态
      current: 0,
    }
  }
  onChange (current) {//监听current的改变 再改变current
    this.setState({
      current
    })
  }
  render () {
    const items = [
      { 'title': '步骤一', 'desc': '这里是额外的信息，最多两行' },
      { 'title': '步骤二', 'desc': '这里是额外的信息，最多两行' },
      { 'title': '步骤三', 'desc': '这里是额外的信息，最多两行' }
    ]
    return (
      <AtSteps
        items={items}
        current={this.state.current}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}