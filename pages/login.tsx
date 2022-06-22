import styled from "styled-components";
import {Field, Form} from 'react-final-form';
import { useState } from "react";
import {Header, 
        Footer, 
        Offer, 
        ProgresBar, 
        Input,
        FormButton,
        FormInterface
    } from '../src';


interface Props{

}


function Login(props:Props){

    const [passwordFormFlag, setPasswordFormFlag] = useState('');
    const [emailFormFlag, setEmailFormFlag] = useState('');
    

    function signupData(values:FormInterface){
        

        !!values.password?.trim() === false ? setPasswordFormFlag('error') : setPasswordFormFlag('ok');
        !!values.email?.trim() === false ? setEmailFormFlag('error') : setEmailFormFlag('ok');
        
        
       
       
      
        
        // const response = await fetch('https://gscore-back.herokuapp.com/api/users/sign-up',{
        //     method: 'POST',
        //     headers:{
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({email: values.email, password: values.password, username: values.username}),
        // })
        // const result = await response.json();
        // console.log(response.status)
        // console.log(result);
        document.location = './checkout';
    }

    function loginData(){
        document.location = './checkout';
    }
    return(
        <>
            <ExternalWrapper>
                <Header/>
                <InnerWrapper>
                    <ProgresBarsWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Create account" barColor="#FC5842" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Log in" barColor="#FC5842" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Checkout" barColor="#393939" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                    </ProgresBarsWrapper>
                    <OfferWrapper>
                        <Offer text="Log in"/>
                    </OfferWrapper>
                    <Form
                        onSubmit={signupData}
                        render={({handleSubmit, values})=>(
                            <form
                                onSubmit={handleSubmit}
                            >
                                
                                    

                                    <Field
                                        name="email"
                                    >
                                        {props =>(
                                                <InputWrapper>
                                                    <Input
                                                        type="email"
                                                        onChange={props.input.onChange}
                                                        placeholder="Email"
                                                        name={props.input.name}
                                                        validateStatus={emailFormFlag}
                                                    />
                                                </InputWrapper>
                                        )}
                                    </Field>

                                    <Field
                                        name="password"
                                    >
                                        {props =>(
                                                <InputWrapper>
                                                    <Input
                                                        type="password"
                                                        name='password'
                                                        onChange={props.input.onChange}
                                                        value={props.input.value}
                                                        placeholder="Password"
                                                        validateStatus={passwordFormFlag}
                                                    />
                                                    
                                                </InputWrapper>
                                        )}
                                        
                                    </Field>
                                   
                                    <Field
                                        name="signupButton"
                                    >       
                                        {props =>(
                                                <InputWrapper>
                                                    <FormButton onSubmit={handleSubmit} text="Send password"/>
                                                </InputWrapper>
                                        )}
                                    </Field>
                                    
                                
                                

                            </form>
                        )}
                    />
                    

                </InnerWrapper>
                <Footer/>
            </ExternalWrapper>
        </>
    )
}

const OfferWrapper = styled.div`
    margin-bottom: 32px;
`

const InputWrapper = styled.div`
    margin-bottom: 25px;
    :nth-child(2){
        margin-bottom: 48px;
    }
    :nth-child(3){
        margin-bottom: 250px;
    }
`

const ProgresBarElementWrapper = styled.div`
    :nth-child(2){
        margin-right: 16px;
        margin-left: 16px;
    }
`

const ProgresBarsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 80px;
`

const InnerWrapper = styled.div`
    margin: 0 auto;
    width: 700px;
`

const ExternalWrapper = styled.div`
    background-color: #181818;
`


export default Login;