import styled from "styled-components";
import Link from 'next/link';


interface Props{
    text: string;
    textColor: string;
    link: string;
}

function Button(props:Props){
    return(
        <>
        <Link href={props.link}>
            <Root textColor={props.textColor}>
                {props.text}
            </Root>
        </Link>
            

        </>
    )
}


interface RootProps{
    textColor: string;
}


const Root = styled.button<RootProps>`
    font-family: THICCCBOI;
    color: ${props=>props.textColor};
    font-weight: 500;
    font-size: 18px;
    padding: 26px 100px;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    :hover{
        color: #DC2B2B;
        transition: 0.5s;
    }
`


export default Button;