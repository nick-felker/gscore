import styled from "styled-components";


import {Header, Footer} from '../src';


interface Props{

}


function Login(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Header/>
                



                <Footer/>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`

`


export default Login;