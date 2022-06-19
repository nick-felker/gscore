import styled from "styled-components";

interface Props{
    text: string;
}


function Offer(props:Props){
    return(
        <>
            <Root>{props.text}</Root>
        </>
    )
}



const Root = styled.h1`
    font-size: 44px;
    font-weight: 700;
    color: white;
    font-family: THICCCBOI;
    @media(max-width: 804px){
        font-size: 32px;
    }
    @media(max-width: 600px){
        font-size: 24px;
    }
    @media(max-width: 430px){
        font-size: 20px;
    }
`

export default Offer;