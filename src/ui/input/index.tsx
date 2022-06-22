import styled from "styled-components";
import { FieldRenderProps } from 'react-final-form';



interface Props{
    placeholder: string;
    type: string;
    validationFlag: boolean;
    name: string;
    value?: string;
    onChange?: any;
}

// type Props = FieldRenderProps<string>

function Input({placeholder, type, validationFlag, value, name, onChange}:Props){
    return(
        <>
            <Root
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                autoComplete="off"
                name={name}
            >
            </Root>
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