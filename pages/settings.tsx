import styled from "styled-components";


import {Footer, Header, Offer} from '../src';


interface Props{
    
}

function Settings(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Header/>
                
                <InnerWrapper>
                    <Offer text="Settings"/>
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
    background-color: #181818;
    height: 100vh;
`


export default Settings; 