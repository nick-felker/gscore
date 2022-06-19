import styled from "styled-components";


import {Header, Footer, Offer, ProgresBar, Input} from '../src';


interface Props{

}


function Login(props:Props){
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
                            <ProgresBar text="Log in" barColor="#FC5842" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Checkout" barColor="#393939" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                    </ProgresBarsWrapper>
                    <Offer text="Log in"/>
                    <Input inputType="email" placeholder="Email"/>
                    <Input inputType="password" placeholder="Password"/>

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
    height: 100vh;
    background-color: #181818;
`


export default Login;