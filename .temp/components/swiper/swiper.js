import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
// 这里引入的是Taro的基础组件swiper
import { Swiper, SwiperItem } from '@tarojs/components';
export default class MySwiper extends Taro.Component {
  render() {
    return <Swiper className="test-h" indicatorColor="#999" indicatorActiveColor="#333" vertical circular indicatorDots autoplay>
        <SwiperItem>
          <View className="demo-text-1">1 自动播放</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-2">2 自动播放</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-3">3 自动播放</View>
        </SwiperItem>
      </Swiper>;
  }
}