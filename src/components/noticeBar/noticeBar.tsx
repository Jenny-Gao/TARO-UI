/**
 * 通知组件
 */
import Taro, { Component } from '@tarojs/taro';
import { Text, View, Image } from '@tarojs/components';
import labaIcon from './../../assets/notice-icon.png';
import './noticeBar.scss';

interface IProp {
    content: string
}

export default class noticeBar extends Component<IProp, {}>{
    static defaultProps = {
        content: ''
    }
    render() {
        const { content = '' } = this.props; //解构props
        const rootView = (
            <View className='notice-bar-root-container'>
                <Image
                    // 定义或者引入的变量在html中使用大括号
                    src={labaIcon}
                    className="notice-left-icon"
                />
                <Text className="notice-txt-content">{content}</Text>
            </View>
        )
        return content ? rootView : null;
    }
}