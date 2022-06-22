import styled from "styled-components";
import { Footer, 
        Header, 
        Offer, 
        ProgresBar,
        selectOfferObj,
        useAppSelector,
        OfferInterface,
        Button,
        changeOfferObj,
        useAppDispatch,
    } from "../src";


interface Props{

}

function Checkout(props:Props){
    const dispatch = useAppDispatch();
    const offerObj:OfferInterface = useAppSelector(selectOfferObj);
    
    function deleteCurrentOfferPlan(){
        dispatch(changeOfferObj({price: '0$', countLicense: '', advancedInfo: '', options: []}))
    }



    return(
        <>
        <ExternalWrapper>
            <Header/>
            <InnerWrapper>
                <ProgresBarsWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Create account" barColor="#FC5842" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Log in" barColor="#FC5842" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Checkout" barColor="#FC5842" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                </ProgresBarsWrapper>
                <Offer text="Checkout"/>
                <ResultPackageExternalWrapper>
                    
                    <ResultPackageTitle>
                        <PackageNameTitle>
                            Package name
                        </PackageNameTitle>
                        <PriceTitle>
                            Price
                        </PriceTitle>
                    </ResultPackageTitle>
                    <UnderTitleLine/>
                    <SelectedPackageTitle>
                        <SelectedPackageName>
                            {offerObj.countLicense}
                        </SelectedPackageName>
                        <SelectedPriceWrapper>
                            <SelectedPriceText>
                                {offerObj.price}
                            </SelectedPriceText>
                            <SelectedPriceIcon onClick={deleteCurrentOfferPlan} src='./images/ShopBasket.svg'/>
                        </SelectedPriceWrapper>                        
                    </SelectedPackageTitle>
                </ResultPackageExternalWrapper>
                <TotalPriceWrapper>
                    <TotalPriceTitle>Total: </TotalPriceTitle>
                    <TotalPrice>{offerObj.price}</TotalPrice>
                </TotalPriceWrapper>
                <ButtonWrapper>
                    <Button text="Purchase" bgColor="#FC5842" textColor="white" link="./settings"/>
                </ButtonWrapper>
            </InnerWrapper>
            <Footer/>
        </ExternalWrapper>
        </>
    )
}

const ButtonWrapper = styled.div`
    margin-bottom: 250px;

`

const TotalPriceWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    font-family: THICCCBOI;
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
`
const TotalPriceTitle = styled.p`
    color: white;
    font-size: 28px;
    font-weight: 700;
`
const TotalPrice = styled.p`
    color: white;
    font-size: 28px;
    font-weight: 700;
`

const SelectedPackageTitle = styled.div`
    display: flex;
    padding: 32px 50px 48px 32px;
    justify-content: space-between;
`

const ResultPackageTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 48px 72px 32px 32px;
`
const UnderTitleLine = styled.div`
    background-color: #969696;
    position: relative;
    width: 100%;
    height: 2px;
`
const ResultPackageExternalWrapper = styled.div`
    display: flex;
    margin: 32px 0px 24px 0px;
    flex-direction: column;
    font-family: THICCCBOI;
    width: 100%;
    position: relative;
    background-color: #272727;
    border-radius: 12px;

    
`

const PackageNameTitle = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 700;
`
const PriceTitle = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 700;
`
const SelectedPackageName = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 400;
`
const SelectedPriceWrapper = styled.div`
    display: flex;
`
const SelectedPriceText = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 400;
`
const SelectedPriceIcon = styled.img`
    margin-left: 10px;
    cursor: pointer;
    :hover{
        opacity: 0.7;
        transition: 0.5s;
    }
`



const ProgresBarElementWrapper = styled.div`
    :nth-child(2){
        margin-right: 16px;
        margin-left: 16px;
    }
`

const ProgresBarsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 80px;
`

const InnerWrapper = styled.div`
    margin: 0 auto;
    width: 700px;
`


const ExternalWrapper = styled.div`
    background-color: #181818;
    
`



export default Checkout;