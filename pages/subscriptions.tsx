import styled from "styled-components";

import {Footer, Header, Offer} from '../src';


interface Props{
    
}

function Subscriptions(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Header/>
                <InnerWrapper>
                    <Offer text="My subscriptions"/>
                </InnerWrapper>
                



                <Footer/>
            </ExternalWrapper>
        </>
    )
}


const InnerWrapper = styled.div`
    margin: 30px 0px 100px 85px;
`


const ExternalWrapper = styled.div`
    font-family: THICCCBOI;
    background-color: #181818;
    height: 100vh;
`


export default Subscriptions; 