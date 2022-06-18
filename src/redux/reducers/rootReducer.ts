import { combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import offerReducer from "./offer/reducer";


const rootReducer = combineReducers({
    user: userReducer,
    offer: offerReducer,
})

export default rootReducer