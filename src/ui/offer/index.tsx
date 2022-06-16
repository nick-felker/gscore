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
`

export default Offer;