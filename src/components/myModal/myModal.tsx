/**
 * 弹窗组件（可以用于咨询医生）
 */
import Taro,{useState} from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import picUrl from '../../assets/close-icon.png';
import './myModal.scss';
// 弹窗需要的参数
interface IMyModal {
    title: string; // 弹窗标题
    content: string; // 弹窗内容
    leftBtnText: string; // 弹窗左侧按钮文字
    rightBtnText: string; // 弹窗右侧按钮文字
    onLeftBtnClick?: () => void; // 左侧按钮点击回调函数
    onRightBtnClick?: () => void; // 右侧按钮点击回调函数
    isShowRightClose?: () => boolean; // 右上角关闭按钮是否显示
};

const MyModal = (props: IMyModal) => {
    // 需要改变状态用到useState才可以
    const [showSessionModal, setShowSessionModal] = useState<boolean>(true);
    const noop = () => { }; // 空函数
    const onCloseIconClick = function () {
        setShowSessionModal(false);
    }
    // 解构props
    const {
        title = '',
        content = '',
        leftBtnText = '',
        rightBtnText = '',
        onLeftBtnClick = noop,
        onRightBtnClick = noop,
        isShowRightClose = true,
    } = props;
    const mymo = (
        <View className="my-modal-container">
            <View className="mask"></View>
            <View className="content-wrapper">
                {isShowRightClose &&
                    <Image className='close-icon'
                        onClick={onCloseIconClick}
                        src={picUrl} />}
                {title && <View className='title'>{title}</View>}
                <View className='content two-line'>{content}</View>
                <View className='btn-wrapper'>
                    <View className='left-btn' onClick={onLeftBtnClick}>{leftBtnText}</View>
                    <View className='right-btn' onClick={onRightBtnClick}>{rightBtnText}</View>
                </View>

            </View>
        </View>)
    return showSessionModal ? mymo : null;
};
export default MyModal;
