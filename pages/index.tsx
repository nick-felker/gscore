import styled from "styled-components";
import Header from "../src/ui/header";
import Offer from "../src/ui/offer";
import Footer from "../src/ui/footer";

function Index(){
    return(
            <ExternalWrapper>
                <Header/>
                <OfferWrapper>
                    <Offer text="Get started with Gscore today!"/>
                </OfferWrapper>
                <Footer/>
            </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #181818;
`
const OfferWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    justify-content: center;
`

export default Index;