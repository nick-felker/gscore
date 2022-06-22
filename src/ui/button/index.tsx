import styled from "styled-components";
import Link from 'next/link';


interface Props{
    text: string;
    textColor: string;
    link: string;
    bgColor?: string;
}

function Button(props:Props){
    return(
        <>
        <Link href={props.link}>
            <Root type="submit" textColor={props.textColor} bgColor={props.bgColor}>
                {props.text}
            </Root>
        </Link>
            

        </>
    )
}


interface RootProps{
    textColor: string;
    bgColor: string | undefined;
}


const Root = styled.button<RootProps>`
    font-family: THICCCBOI;
    color: ${props=>props.textColor || 'white'};
    font-weight: 500;
    font-size: 18px;
    padding: 26px 100px;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: ${props=>props.bgColor};
    cursor: pointer;
    :hover{
        color: #DC2B2B;
        transition: 0.5s;
    }
    @media(max-width: 430px){
        font-size: 15px;
        padding: 25px 70px;
    }
`


export default Button;