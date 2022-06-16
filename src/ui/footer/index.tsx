import styled from "styled-components";


interface Props{

}

function Footer(props:Props){
    return(
        <>
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
        </> 
    )
}


const ExternalWrapper = styled.div`
    font-family: THICCCBOI;
    color: white;
`

const UpperFooterLine = styled.div`
    height: 2px;
    width: 100vw;
    background-color: #353535;
`
const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 76px 85px 45px 86px;
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

`

const CopyrightLinks = styled.div`
    padding-right: 40px;
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
    
`




export default Footer;
