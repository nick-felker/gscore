import styled from "styled-components";


interface Props{

}

function Footer(props:Props){
    return(
        <ComponentWrapper>
            <ExternalWrapper>
                <UpperFooterLine/>
                <InnerWrapper>
                    <LogoWrapper>
                        <Logo src="./images/logo.svg"/>
                        <UnderLogoText>Ut enim ad minim veniam quis nostrud exercitation  ea commodo</UnderLogoText>
                    </LogoWrapper>
                    
                    
                </InnerWrapper>
            </ExternalWrapper>
            <UnderFooterLineWrapper>
                <UnderFooterLine/>
            </UnderFooterLineWrapper>
            
            <CopyrightWrapper>
                        <CopyrightText>
                                <Copyright>Copyright © 2022 GScore</Copyright>
                                <VerticalBar/>
                                <AllRightsReserved>All Rights Reserved</AllRightsReserved>
                                <VerticalBar/>
                            
                            
                                <CookiesLink>Cookies</CookiesLink>
                                <VerticalBar/>
                                <PrivacyPoliceLink>Privacy Policy</PrivacyPoliceLink>
                            
                        </CopyrightText>
                        <CopyrightLinks>
                            <FacebookLinkWrapper>
                                <FacebookLink src="./images/Facebook.svg"></FacebookLink>
                            </FacebookLinkWrapper>
                            <TwitterLinkWrapper>
                                <TwitterLink src="./images/Twitter.svg"></TwitterLink>
                            </TwitterLinkWrapper>
                            <LinkedinLinkWrapper>
                                <LinkedinLink src="./images/LinkedIn.svg"></LinkedinLink>
                            </LinkedinLinkWrapper>
                        </CopyrightLinks>
            </CopyrightWrapper>
        </ComponentWrapper>
    )
}


const ComponentWrapper = styled.div`
    background-color: #181818;
`


const ExternalWrapper = styled.div`
    font-family: THICCCBOI;
    background-color: #181818;
    color: white;
`

const UpperFooterLine = styled.div`
    height: 2px;
    background-color: #353535;
`
const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 76px 85px 45px 86px;
    @media(max-width: 940px){
        padding: 76px 85px 45px 50px;
    }
`

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

const Logo = styled.img`
    width: 150px;
    margin-bottom: 20px;
`
const UnderLogoText = styled.p`
    position: relative;
    width: 54%;
    @media(max-width: 720px){
        width: 70%;
    }
    @media(max-width: 430px){
        width: 100%;
    }
`

const UnderFooterLine = styled.div`
    height: 2px;
    position: relative;
    width: 91%;
    background-color: #353535;
`
const UnderFooterLineWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const CopyrightText = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    @media(max-width: 600px){
        font-size: 14px;
    }

`

const CopyrightLinks = styled.div`
    margin-right: 40px;
    @media(max-width: 940px){
        margin-right: 0px;
        margin-top: 50px;
    }

`

const TwitterLink = styled.img`

`
const TwitterLinkWrapper = styled.a`
    margin-right: 32px;
    margin-left: 32px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`
const FacebookLink = styled.img`

`
const FacebookLinkWrapper = styled.a`
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`
const LinkedinLink = styled.img`

`
const LinkedinLinkWrapper = styled.a`
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`
const Copyright = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #c7c7c7;
    
    @media(max-width: 600px){
        font-size: 14px;
    }
`
const CookiesLink = styled.a`
    border-bottom: 1px solid white;
    cursor: pointer;
`
const PrivacyPoliceLink = styled.a`
    border-bottom: 1px solid white;
    cursor: pointer;
    
`

const AllRightsReserved = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #c7c7c7;
    @media(max-width: 600px){
        font-size: 14px;
    }
`

const VerticalBar = styled.div`
    transform: rotate(90deg);
    height: 2px;
    width: 22px;
    background-color: white;

`


const CopyrightWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: THICCCBOI;
    padding: 0px 50px 42px 67px;
    @media(max-width: 940px){
        flex-direction: column;
        align-items: center;
    }
    @media(max-width: 600px){
        padding: 0px;
    }
`




export default Footer;
