
//setup State giỏ hàng trên store

const stateGioHang = {
    gioHang: []
}

const CyberbugsReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'USER_SIGIN_API': {
            return { ...state };
        }; break;
        default: return { ...state };
    }
}

export default CyberbugsReducer;