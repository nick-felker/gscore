import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { UserInterface } from "../../../types";





const initialState:UserInterface = {
    authFlag: true,
}




export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers:{
        changeUserObj: (state, {payload}: PayloadAction<UserInterface>)=>{
            return {...state, ...payload};
        },
    }
})

export const {changeUserObj}  = userReducer.actions;
export default userReducer.reducer;