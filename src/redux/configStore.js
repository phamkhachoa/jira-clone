import { applyMiddleware, combineReducers, createStore } from "redux";
import { rootSaga } from "./sagas/rootSaga";

// middleware saga
import createMiddleWareSaga from "redux-saga";
import CyberbugsReducer from "./reducer/CyberbugsReducer";
import LoadingReducer from "./reducer/LoadingReducer";

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    stateCyberbugs: CyberbugsReducer,
    stateLoading: LoadingReducer
})

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;