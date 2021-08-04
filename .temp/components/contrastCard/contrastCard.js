import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
import contrasts from './../../assets/contrast.json';
import './contrastCard.scss';

class ContrastCard extends Taro.Component {
  render() {
    const { cardTitle, jumpTitle, cardInfos, showItemIds } = contrasts.data; // 也可以props进来
    const handleClick = () => {
      if (showItemIds.length < 2) {
        return;
      }
    };
    if (!cardTitle || cardInfos && cardInfos.length < 3) {
      return null;
    }
    // 括号内容要有且仅有一个根盒子
    return <View className="wrapper">
            <View className="coreContanier" onClick={handleClick}>
                <View className="title">
                    <View className="titleLeft">{cardTitle}</View>
                    <View className="titleRight">
                        <Text>{jumpTitle}</Text>
                    </View>
                </View>
                <View className="content">
                    <View className="titleBg">
                        {cardInfos && cardInfos.map(item => {
              return <View key={item.itemId} className="titleTxt">
                                {item.itemName}
                            </View>;
            })}
                    </View>
                    <View className="contentInfos">
                        {cardInfos && cardInfos.slice(0, 3).map((item, index) => {
              return <View key={item.itemId + index} className="contentItem">
                                    <View className="contentTop">
                                        <View className="contentTopTxt">{item.attributeValues[0]}</View>
                                    </View>
                                    <View className="contentMiddle">
                                        <Text>{item.attributeValues[1]}</Text>
                                         <Text>|</Text> 
                                        <Text>{item.attributeValues[2]}</Text>
                                    </View>
                                    <View className="contentBottom">{item.attributeValues[3]}</View>
                                </View>;
            })}
                    </View>
                    <View className="seeProContrast">
                        <Text>查看详细方案对比</Text>
                    </View>
                </View>
            </View>
        </View>;
  }

}

export default ContrastCard;