import styled from "styled-components";
import Link from "next/link";
import {Header, 
        Footer, 
        Offer, 
        ProgresBar,
        useAppSelector,
        selectOfferObj,
        RootState,
        Input,
        Button
    } from '../src';



interface Props{

}

function Signup(props:Props){
    
    const offerProgresBars = useAppSelector(selectOfferObj);
    console.log(offerProgresBars);
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
                            <ProgresBar text="Log in" barColor="#393939" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Checkout" barColor="#393939" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                    </ProgresBarsWrapper>
                    <Offer text="Create account"/>
                    <SubOffer>
                        You need to enter your name and email. We will send you a temporary password by email
                    </SubOffer>
                    <Input inputType="text" placeholder="Username" />
                    <Input inputType="email" placeholder="Email" />
                    <Input inputType="password" placeholder="Password" />
                    <Button text="Send password" textColor="white" link='./login' bgColor="#FC5842"/>
                    <HaveAccountWrapper>
                        <HaveAccountText>Have an account?</HaveAccountText>
                        <Link href={'./login'}>
                            <HaveAccountLink>Go to the next step</HaveAccountLink>
                        </Link>
                        
                    </HaveAccountWrapper>
                </InnerWrapper>
                <Footer/>
            </ExternalWrapper>        
        </>
    )
}


const HaveAccountWrapper = styled.div`
    display: flex;
    font-family: THICCCBOI;
`

const HaveAccountText = styled.p`
    color: white;
    margin-right: 10px;
`
const HaveAccountLink = styled.a`
    color: #FC5842;
    cursor: pointer;
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
    height: 100vh;
`
const SubOffer = styled.h4`
    color: white;
    font-family: THICCCBOI;
    font-size: 16px;
    margin: 16px 0px 32px 0px;
    font-weight: 400;
`

export default Signup;