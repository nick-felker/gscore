import styled from "styled-components";
import Header from '../src/ui/header';
import Footer from '../src/ui/footer';


interface Props{

}

function Signup(props:Props){
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


export default Signup;