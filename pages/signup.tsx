import styled from "styled-components";
import Link from "next/link";
import {Form, Field} from 'react-final-form';
import {Header, 
        Footer, 
        Offer, 
        ProgresBar,
        useAppSelector,
        selectOfferObj,
        RootState,
        Input,
        Button,
        FormButton,
        FormInterface
    } from '../src';
import { useRef, useState } from 'react'



interface Props{

}



function Signup(props:Props){

    const [passwordFormFlag, setPasswordFormFlag] = useState('');
    const [emailFormFlag, setEmailFormFlag] = useState('');
    const [usernameFormFlag, setUsernameFormFlag] = useState('');
    
   


    function signupData(values:FormInterface){
        

        !!values.password?.trim() === false ? setPasswordFormFlag('error') : setPasswordFormFlag('ok');
        !!values.email?.trim() === false ? setEmailFormFlag('error') : setEmailFormFlag('ok');
        !!values.username?.trim() === false ? setUsernameFormFlag('error') : setUsernameFormFlag('ok');
       
       
      
        
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
                            <ProgresBar text="Log in" barColor="#393939" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                        <ProgresBarElementWrapper>
                            <ProgresBar text="Checkout" barColor="#393939" key={Math.random().toString()}/>
                        </ProgresBarElementWrapper>
                    </ProgresBarsWrapper>
                    <Offer text="Create account"/>
                    <SubOffer>
                        You need to enter your name and email. We will send you a temporary password by email
                    </SubOffer>
                    
                    <Form
                        onSubmit={signupData}
                        render={({handleSubmit, values})=>(
                            <form
                                onSubmit={handleSubmit}
                            >
                                
                                    <Field
                                        name="username"
                                    >
                                        {props =>(
                                                <InputWrapper>
                                                    <Input
                                                        type="text"
                                                        onChange={props.input.onChange}
                                                        placeholder="Username"
                                                        name={props.input.name}
                                                        validateStatus={usernameFormFlag}
                                                    />
                                                </InputWrapper>
                                        )}
                                    </Field>

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
                    
                    
                    
                    
                    
                    <HaveAccountWrapper>
                        <HaveAccountText>Have an account?</HaveAccountText>
                        <Link href={'./login'}>
                            <HaveAccountLink>Go to the next step</HaveAccountLink>
                        </Link>
                        
                    </HaveAccountWrapper>
                </InnerWrapper>
                <Footer/>
            </ExternalWrapper>        
        </>
    )
}




const InputWrapper = styled.div`
    margin-bottom: 25px;
    :nth-child(6){
        margin-bottom: 48px;
    }
`

const HaveAccountWrapper = styled.div`
    display: flex;
    font-family: THICCCBOI;
    margin-bottom: 200px;
`

const HaveAccountText = styled.p`
    color: white;
    margin-right: 10px;
`
const HaveAccountLink = styled.a`
    color: #FC5842;
    cursor: pointer;
`

const ProgresBarElementWrapper = styled.div`
    :nth-child(2){
        margin-right: 16px;
        margin-left: 16px;
    }
    @media(max-width: 800px){
        margin: 0px;
        :nth-child(n){
            margin-bottom: 20px;
        }
    }
`

const ProgresBarsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    @media(max-width: 1500px){
        margin-top: 150px;
        
    }
    @media(max-width: 800px){
        flex-direction: column;
        
    }
`

const InnerWrapper = styled.div`
    margin: 0 auto;
    width: 700px;
    @media(max-width: 800px){
        width: 500px;
    }
    @media(max-width: 550px){
        width: 300px;
    }
`

const ExternalWrapper = styled.div`
    background-color: #181818;
`
const SubOffer = styled.h4`
    color: white;
    font-family: THICCCBOI;
    font-size: 16px;
    margin: 16px 0px 32px 0px;
    font-weight: 400;

`
const ButtonWrapper = styled.div`
    margin-bottom: 52px;
    position: relative;
`

export default Signup;