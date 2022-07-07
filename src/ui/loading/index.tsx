import styled, { keyframes } from "styled-components";



interface Props{
    
}



function Loading(props:Props){
    return(
        <>
            <ExternalWrapper>
                <InnerWrapper>
                    <Title>Loading</Title>
                    <LoaderImg src="./images/Loading.svg" />
                </InnerWrapper>
            </ExternalWrapper>
        </>
    )
}





const LoadingRotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const Title = styled.p`
    font-family: THICCCBOI;
    font-size: 24px;
    margin-right: 10px;
`
const LoaderImg = styled.img`
    animation-name: ${LoadingRotate};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`
const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
`
const ExternalWrapper = styled.div`
    padding: 20px 40px;
    background-color: black;
    color: white;
    z-index: 999;
    position: fixed;
    top:50%;
    left:50%;
    border-radius: 10px;
    transform:translate(-50%, -50%);
    
`

export default Loading;