import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { OfferInterface } from "../../../types";




const initialState:OfferInterface = {
    countLicense: '',
    advancedInfo: '',
    options: [],
    price: '',
    loginFlag: false,
    signupFlag: false,
    checkoutFlag: false,
}




export const offerReducer = createSlice({
    name: 'offer',
    initialState,
    reducers:{
        changeOfferObj: (state, {payload}: PayloadAction<OfferInterface>)=>{
            return {...state, ...payload};
        },
    }
})

export const {changeOfferObj}  = offerReducer.actions;
export default offerReducer.reducer;