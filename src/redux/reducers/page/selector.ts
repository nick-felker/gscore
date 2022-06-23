import { RootState } from "../../store"



export const selectHamburgerAdditionalMenuFlag = (state:RootState) =>{
    return state.page.hamburgerAdditionalMenuFlag;
}