import styled from "styled-components";


interface Props{
    bgColor: string;
    price: string;
    licenseCount: string;
    detailInfo: string;
    options: string[];
}


function OfferCard(props:Props){
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
                
            </ExternalWrapper>
   ) 
}


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
`

const Price = styled.p`
    text-align: center;
    font-size: 54px;
    font-weight: 700;
    color: white;
    margin-bottom: 5px;
`

const LicenseCount = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    color: white;
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
`


export default OfferCard;