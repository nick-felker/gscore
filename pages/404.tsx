import styled from "styled-components";
import {Footer, Header} from '../src';

function NotFound(){
    return(
        <ComponentWrapper>
            <Header/>
            <Root>
                This page is not exist.
            </Root>
            <Footer/>
        </ComponentWrapper>       
    )
}

const ComponentWrapper = styled.div`
    background-color: #181818;
    height: 100vh;
`



const Root = styled.h1`
    margin-bottom: 200px;
    margin-top: 200px;
    text-align: center;
    color: white;
    font-family: THICCCBOI;
`



export default NotFound;