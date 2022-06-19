import styled from "styled-components";


interface Props{
    inputType: string;
    placeholder: string;
}

function Input(props:Props){
    return(
        <>
            <Root placeholder={props.placeholder} type={props.inputType}/>
        </>
    )
}

const Root = styled.input`
    border-radius: 6px;
    border: none;
    outline: none;
    caret-color: #FC5842;
    font-family: THICCCBOI;
    position: relative;
    width: 100%;
    font-size: 18px;
    padding: 25px 0px 25px 25px;
    background-color: white;
    ::placeholder{
        text-fill-color: red;
        font-size: 18px;
        color: #969696;
        font-weight: 500;
    }
`


export default Input;