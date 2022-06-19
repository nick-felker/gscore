import styled from "styled-components";
import Header from '../src/ui/header';
import Footer from '../src/ui/footer';
import Offer from "../src/ui/offer";
import ProgresBar from "../src/ui/progresBar";


interface Props{

}

function Signup(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Header/>
                <InnerWrapper>
                    <ProgresBarsWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Create account" barColor="#FC5842"/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Log in" barColor="#393939"/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Checkout" barColor="#393939"/>
                        </ProgresBarElementWrapper>
                    </ProgresBarsWrapper>
                    <Offer text="Create account"/>
                    <SubOffer>
                        You need to enter your name and email. We will send you a temporary password by email
                    </SubOffer>



                </InnerWrapper>
                <Footer/>
            </ExternalWrapper>        
        </>
    )
}


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
    font-size: 14px;
    font-weight: 400;
`

export default Signup;