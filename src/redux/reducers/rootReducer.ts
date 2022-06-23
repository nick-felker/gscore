import { combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import offerReducer from "./offer/reducer";
import pageReducer from "./page/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    offer: offerReducer,
    page: pageReducer,
})

export default rootReducer