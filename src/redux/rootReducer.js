import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './reducer/BaiTapGioHangReducer';
import ModalOpenReducer from './reducer/ModalOpenReducer';

const rootReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer,
    stateModal: ModalOpenReducer
})

export default rootReducer;