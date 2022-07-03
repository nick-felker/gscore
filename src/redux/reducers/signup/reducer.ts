import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { SignupInterface } from "../../../types";





const initialState:SignupInterface = {
    usernameError: '',
    emailError: '',
    passwordError: '',
}




export const signupReducer = createSlice({
    name: 'singup',
    initialState,
    reducers:{
        changeSignupObj: (state, {payload}: PayloadAction<SignupInterface>)=>{
            return {...state, ...payload};
        },
    }
})

export const {changeSignupObj}  = signupReducer.actions;
export default signupReducer.reducer;