import styled from "styled-components";
import {Field, Form} from 'react-final-form';

import {Header, 
        Footer, 
        Offer, 
        ProgresBar, 
        Input,
        FormButton,
    } from '../src';


interface Props{

}


function Login(props:Props){

    function loginData(){
        document.location = './checkout';
    }
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
                    <OfferWrapper>
                        <Offer text="Log in"/>
                    </OfferWrapper>
                    
                    

                </InnerWrapper>
                <Footer/>
            </ExternalWrapper>
        </>
    )
}

const OfferWrapper = styled.div`
    margin-bottom: 32px;
`

const InputWrapper = styled.div`
    margin-bottom: 25px;
    :nth-child(2){
        margin-bottom: 48px;
    }
    :nth-child(3){
        margin-bottom: 250px;
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


export default Login;