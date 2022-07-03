import styled from "styled-components";
import { FieldRenderProps } from 'react-final-form';
import {useState} from 'react';


interface Props{
    placeholder: string;
    type: string;
    validateStatus: string;
    name: string;
    value?: string;
    onChange?: any;
    errorText?: string;
}

// type Props = FieldRenderProps<string>

function Input({placeholder, type, validateStatus, value, name, onChange, errorText}:Props){

    const [fieldType, setFieldType] = useState<string>(type);

    function showPasswordFunction(){
        if(fieldType === 'password') setFieldType('text');
        if(fieldType === 'text') setFieldType('password');
        return fieldType;
    }

    return(
        <>
            <Root
                validateStatus={validateStatus}
                placeholder={placeholder}
                type={fieldType}
                onChange={onChange}
                autoComplete="off"
                name={name}
            />
            {type === 'password' ? <ShowPassword onClick={showPasswordFunction}><ShowPasswordImg src="./images/FieldPassword.svg"/></ShowPassword> : null}
            {validateStatus === 'error' ? <ErrorText>{errorText || 'Error'}</ErrorText> : null}

        </>
    )
}



const ShowPassword = styled.a`
    position: relative;
    border: none;
    cursor: pointer;
    left: 85%;
    top: -48px;
    outline: none;
    background: none;

`

const ShowPasswordImg = styled.img`
`

const ErrorText = styled.p`
    color: #FF5A65;
    margin: 4px;
    font-family: THICCCBOI;
`
interface RootProps{
    validateStatus: string;
}
const Root = styled.input<RootProps>`
    border-radius: 6px;
    outline: none;
    ${props=>props.validateStatus === 'ok' ? 'border: 1px solid #05C168' : props.validateStatus === 'error' ? 'border: 1px solid #FF5A65' : 'border: none'};    
    caret-color: #FC5842;
    
    font-family: THICCCBOI;
    position: relative;
    width: 100%;
    font-size: 18px;
    padding: 25px 0px 25px 25px;
    ::placeholder{
        text-fill-color: red;
        font-size: 18px;
        color: #969696;
        font-weight: 500;
    }
    ${props=> props.validateStatus === 'ok' ? 'background: url("./images/Check.svg") no-repeat 95%' : props.validateStatus === 'error' ? 'background: url("./images/Close.svg")  no-repeat 95%' : null};
   
    background-color: white;

`


const SuccessIcon = styled.img`

`


export default Input;