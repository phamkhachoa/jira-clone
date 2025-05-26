
//setup State giỏ hàng trên store

const stateModal = {
    isModalOpen: false
}

const ModalOpenReducer = (state = stateModal, action) => {
    switch (action.type) {
        case 'SHOW_MODAL': {
            let newValue = !state.isModalOpen;
            console.log(newValue);
            return { ...{ isModalOpen: newValue } };
        }; break;
        default: return { ...state };
    }
}

export default ModalOpenReducer;