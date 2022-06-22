export interface UserInterface{
    authFlag: boolean;
    token: string;
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