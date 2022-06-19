import styled from "styled-components";
import { Footer, Header, Offer, ProgresBar } from "../src";


interface Props{

}

function Checkout(props:Props){
    return(
        <>
        <ExternalWrapper>
            <Header/>
            <InnerWrapper>
                <ProgresBarsWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Create account" barColor="#393939" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Log in" barColor="#393939" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Checkout" barColor="#FC5842" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                </ProgresBarsWrapper>
                <Offer text="Checkout"/>


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



export default Checkout;