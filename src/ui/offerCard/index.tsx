import styled from "styled-components";
import Button from "../button";
import { useAppDispatch, 
        useAppSelector, 
        changeOfferObj, 
        selectOfferObj, 
        RootState,
    } from '../../';



interface Props{
    bgColor: string;
    price: string;
    licenseCount: string;
    detailInfo: string;
    options: string[];
    buttonLink: string;
}


function OfferCard(props:Props){
    
    const dispatch = useAppDispatch();
    function changeOfferPlan(){
        dispatch(changeOfferObj({price: props.price, countLicense: props.licenseCount, options: props.options, advancedInfo: props.detailInfo}))
        return 0;
    }



   return(
            <ExternalWrapper bgColor={props.bgColor}>
                
                <Price>{props.price}</Price>
                <LicenseCount>{props.licenseCount}</LicenseCount>
                <DetailInfo>{props.detailInfo}</DetailInfo>
                {props.bgColor === '#FC5842' ? <UnderOptionsLine bgColor="#FFFFFF"/> : <UnderOptionsLine bgColor="#969696"/>}
                <OptionsExternalWrapper>
                    {props.options.map((elem:string)=>{
                        return (
                            <>
                                <OptionElementWrapper>
                                {props.bgColor === '#FC5842' ? <OptionIcon src="./images/CarrotCheckCircle.svg"/> : <OptionIcon src="./images/GrayCheckCircle.svg"/>}
                                <OptionText>{elem}</OptionText>
                                </OptionElementWrapper>
                            </>
                        )
                    })}
                </OptionsExternalWrapper>
                <ButtonWrapper onClick={changeOfferPlan}>
                    <Button textColor={props.bgColor} text="Get Gscore" link={props.buttonLink}/>
                </ButtonWrapper>
                
            </ExternalWrapper>
   ) 
}


const ButtonWrapper = styled.div`
    margin-top: 40px;

`

interface UnderOptionsLineProps{
    bgColor: string;
}


const UnderOptionsLine = styled.div<UnderOptionsLineProps>`
    background-color: ${props=> props.bgColor};
    height: 2px;
    margin-top: 40px;
    margin-bottom: 40px;
`


const OptionsExternalWrapper = styled.div`

`

const OptionElementWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const OptionIcon = styled.img`
    margin-right: 15px;
`

const OptionText = styled.p`
    color: white;
    font-size: 18px;
    @media(max-width: 430px){
        font-size: 14px;
    }
`

const Price = styled.p`
    text-align: center;
    font-size: 54px;
    font-weight: 700;
    color: white;
    margin-bottom: 5px;
    @media(max-width: 600px){
        font-size: 40px;
    }
`

const LicenseCount = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    color: white;
    @media(max-width: 600px){
        font-size: 20px;
    }
`

const DetailInfo = styled.p`
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    color: white;
`

interface ExternalWrapperProps{
    bgColor: string;
}

const ExternalWrapper = styled.div<ExternalWrapperProps>`
    width: 404px;
    border-radius: 12px;
    text-align: center;
    font-family: THICCCBOI;
    color: ${props=>props.bgColor === '#FC5842' ? 'white' : '#c7c7c7'}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 42px 48px 42px 48px;
    background-color: ${props=>props.bgColor};
    @media(max-width: 430px){
        padding: 42px 30px;
        width: 300px;
    }
`


export default OfferCard;