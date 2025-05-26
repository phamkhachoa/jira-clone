
//setup State giỏ hàng trên store

const stateBugs = {
    gioHang: []
}

const CyberbugsReducer = (state = stateBugs, action) => {
    switch (action.type) {
        case 'USER_SIGIN_API': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(action.spGioHang)
            }
            //Cập nhật lại state.gioHang
            state.gioHang = [...state.gioHang];
            // console.log('gioHang',state.gioHang)
            return { ...state };
        }; break;
        
        default: return { ...state };
    }
}

export default BaiTapGioHangReducer;