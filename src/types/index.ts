export interface UserInterface{
    authFlag: boolean;
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