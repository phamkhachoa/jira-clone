const initialState = {
    history: {}
}

export default (state = initialState, { type, payload }) => {
    switch (actionChannel.type) {
        case "ADD_HISTORY":
            state.history = action.history;
            return { ...state }
        default:
            return { ...state }
    }
}
