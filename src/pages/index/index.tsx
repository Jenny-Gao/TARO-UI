import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { AtIcon } from 'taro-ui'
import { AtFab } from 'taro-ui'
import { AtAvatar } from 'taro-ui'
import { AtCalendar } from "taro-ui"
import { AtTimeline } from 'taro-ui'
// import { AtSteps } from 'taro-ui'
import { AtNoticebar, AtTag } from 'taro-ui'
import MySwiper from '../../components/swiper/swiper'
import MySteps from '../../components/steps/steps'
import NoticeBar from '../../components/noticeBar/noticeBar'
import MyModal from '../../components/myModal/myModal'
import ContrastCard from '../../components/contrastCard/contrastCard'
import DoctorBar from './../../components/doctorBar/doctorBar'

import './index.scss'

// export default class Index extends Component {

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

export default class Index extends Component {
  // config是导航标题部分
  config: Config = {
    navigationBarTitleText: '自定义组件页'
  }
  // render是一个方法，最后return的内容是渲染的部分 html使用小括号括起来 同时其中的变量使用大括号
  render() {
    const showmine = true;
    // doctorBar用到的item
    const items = [{
      'itemName': '腹部抽脂',
      'itemOther': '抽脂'
    }, {
      'itemName': '皮肤激光',
      'itemOther': '美容'
    }];
    const mine = (
    <View className="root">
        <NoticeBar content='自定义通知组件'></NoticeBar>
        {/* 模态框在跟对比卡在一起时会出现问题 */}
        <MyModal title='我的模态框' content='主要内容' leftBtnText='左' rightBtnText='右'></MyModal>
        <ContrastCard></ContrastCard>
        <DoctorBar name = '王医生' item = {items} doctorId = '123'></DoctorBar>
    </View>
    )
    const UItryer = (
      <View className='index'>
        <Text>按钮UI组件</Text>
        <AtButton>按钮文案</AtButton>
        <AtButton type='primary'>按钮文案</AtButton>
        <AtButton type='primary' size='small'>按钮文案</AtButton>
        <AtButton type='secondary'>按钮文案</AtButton>

        <Text>带loading icon的按钮UI组件</Text>
        <AtButton loading type='primary'>按钮文案</AtButton>

        <Text>浮动按钮</Text>
        {/* 浮动按钮中的图标元素，请自行加上类名 "at-fab__icon" */}
        <AtFab size='small'>
        <Text className='at-fab__icon at-icon at-icon-menu'></Text>
        </AtFab>

        <Text>icon引入的两种方式</Text>
        <View className='at-icon at-icon-settings'></View>
        <AtIcon value='clock' size='30' color='#F00'></AtIcon>
        <AtIcon value='bookmark' size='30' color='#F00'></AtIcon>
        <AtIcon value='calendar' size='30' color='#F00'></AtIcon>

        <Text>头像组件</Text>
        <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
        <AtAvatar text='凹凸实验室'></AtAvatar>
        <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        <AtAvatar circle text='凹凸实验室'></AtAvatar>

        <Text>高级日历组件</Text>
        <AtCalendar currentDate="2018/11/11" />

        <Text>时间轴</Text>
        <AtTimeline
          pending
          items={[
            { title: '刷牙洗脸', icon: 'clock', color:'blue' }, 
            { title: '吃早餐' }, 
            { title: '上班' }, 
            { title: '睡觉' }
          ]}
        >
        </AtTimeline>

        <Text>步骤条，有状态组件，单独定义</Text>
        <MySteps />

        <Text>公告栏</Text>
        <AtNoticebar icon='volume-plus'>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>

        <Text>Tag标签</Text>
        <AtTag>标签</AtTag>
        <AtTag type='primary' circle>标签</AtTag>
        <AtTag size='small'>标签</AtTag>

        <Text>Swiper组件</Text>
        <MySwiper />
      </View>
    )
    return showmine ? mine : UItryer;
  }
}
