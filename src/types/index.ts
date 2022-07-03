export interface UserInterface{
    authFlag?: boolean;
    token?: string;
    username?: string;
    showUsernameFlag?: boolean;
}
export interface OfferInterface{
    price: string;
    countLicense: string;
    advancedInfo: string;
    options: string[];
    signupFlag?: boolean;
    loginFlag?: boolean;
    checkoutFlag?: boolean;
}

export interface FormInterface{
    newPassword?: string;
    password: string;
    username: string;
    email?: string;
}

export interface PageInterface{
    hamburgerAdditionalMenuFlag: boolean;
}

export interface SignupInterface{
    emailError: string;
    passwordError: string;
    usernameError: string;
}