import Nerv from "nervjs";
/**
 * 弹窗组件（可以用于咨询医生）
 */
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import picUrl from '../../assets/close-icon.png';
import './myModal.scss';
;

class MyModal extends Taro.Component {
  render() {
    const props = this.props;

    // 需要改变状态用到useState才可以
    const [showSessionModal, setShowSessionModal] = Taro.useState(true);
    const noop = () => {}; // 空函数
    const onCloseIconClick = function () {
      setShowSessionModal(false);
    };
    // 解构props
    const { title = '', content = '', leftBtnText = '', rightBtnText = '', onLeftBtnClick = noop, onRightBtnClick = noop, isShowRightClose = true } = props;
    const mymo = <View className="my-modal-container">
            <View className="mask"></View>
            <View className="content-wrapper">
                {isShowRightClose && <Image className="close-icon" onClick={onCloseIconClick} src={picUrl} />}
                {title && <View className="title">{title}</View>}
                <View className="content two-line">{content}</View>
                <View className="btn-wrapper">
                    <View className="left-btn" onClick={onLeftBtnClick}>{leftBtnText}</View>
                    <View className="right-btn" onClick={onRightBtnClick}>{rightBtnText}</View>
                </View>

            </View>
        </View>;
    return showSessionModal ? mymo : null;
  }

}

export default MyModal;