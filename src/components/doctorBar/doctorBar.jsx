/**
 * 医生横条组件 商品信息页
 */

import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Image } from "@tarojs/components";
import pageStore from './../../assets/constant'
import './doctorBar.scss';


export default class doctorBar extends PureComponent{
    static defaultProps = {
        name: '',
        item: [],
        doctorId: null,
        router: '/surgeon'
    }
    onDoctorBarClick = () => {
        // 从this.props解构此函数需要的内容
        const { doctorId, router } = this.props;
        Taro.navigateTo({
            // pageStore有点问题 先用router代替
            // url: `${pageStore.doctorDetail}?id=${doctorId}`,
            url: `${router}?id=${doctorId}`
        })
    }

    render() {
        // 从this.props解构此函数需要的内容
        const { name, item } = this.props;
        // item存在时映射成itemName属性并使用顿号链接
        const itemText = item.length && item.map(i => i.itemName).join('、');
        return (
            <View className='doctor-bar-wrapper' onClick={this.onDoctorBarClick}>
                <View className='doctor-bar-left'>
                    <Text className='doctor-bar-name'>{name}</Text>
                    {item.length && <Text className='doctor-bar-desc'>{`擅长：${itemText}`}</Text>}
                </View>
                <Text className="doctor-bar-right-arror iconfont icon-arrow-right"></Text>
            </View>
        )
    }

}
