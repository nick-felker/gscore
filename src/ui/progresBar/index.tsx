import styled from "styled-components";



interface Props{
    text: string;
    barColor: string;
}

function ProgresBar(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Text>{props.text}</Text>        
                <Bar bgColor={props.barColor}/>
            </ExternalWrapper>
            
        </>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
    font-family: THICCCBOI;
    color: white;
    font-size: 20px;
    font-weight: 600;
`


interface BarProps{
    bgColor: string;
}
const Bar = styled.div<BarProps>`
    background-color: ${props=>props.bgColor};
    height: 7px;
    border-radius: 5px;
    margin-top: 15px;
    width: 220px;
`




export default ProgresBar;
