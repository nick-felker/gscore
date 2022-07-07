import { RootState } from "../../store"



export const selectHamburgerAdditionalMenuFlag = (state:RootState) => state.page.hamburgerAdditionalMenuFlag;

export const selectLoadingFlag = (state:RootState) => state.page.loadingFlag;