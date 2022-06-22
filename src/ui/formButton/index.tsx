import styled from "styled-components";
import Link from 'next/link';
import { FieldRenderProps } from 'react-final-form';
import { FormEventHandler } from "react";



// type Props = FieldRenderProps<string>;



interface Props{
    onSubmit: FormEventHandler<HTMLInputElement>;
    text: string;
    signupForm?: (email: string, password: string, username:string)=>void;
    loginForm?: (username: string, password: string)=>boolean;
    changeDataForm?: (password: string, newPassword: string, email: string, username: string)=>boolean;
}





function FormButton({text, onSubmit}:Props){
    return(
        <>
            
                <Root
                    type={'submit'}
                    onSubmit={onSubmit}
                    value={text}
                />
            
            
       
            

        </>
    )
}





const Root = styled.input`
    font-family: THICCCBOI;
    color: white;
    font-weight: 500;
    font-size: 18px;
    padding: 26px 100px;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: #FC5842;
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


export default FormButton;