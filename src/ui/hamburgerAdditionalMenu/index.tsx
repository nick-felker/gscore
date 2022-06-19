import styled from "styled-components";
import Link from 'next/link';


interface Props{

}

function HamburgerAdditionalMenu(){
    return(
        <>
            <ExternalWrapper>
                <Link href={'./settings'}>
                    <SettingsRow>
                        <SettingsIcon src="./images/Settings.svg"/>
                        <SettingsText>Settings</SettingsText>
                    </SettingsRow>
                </Link>
                
                <LogoutRow>
                    <LogoutIcon src="./images/LogOut.svg"/>
                    <LogoutText>Logout</LogoutText>
                </LogoutRow>
            </ExternalWrapper>
        </>
    )
}


const SettingsIcon = styled.img`
    margin-right: 15px;
`
const SettingsText = styled.p`
    font-size: 22px;
`
const LogoutIcon = styled.img`
    margin-right: 15px;
`
const LogoutText = styled.p`
    font-size: 22px;
`

const SettingsRow = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;
`
const LogoutRow = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`


const ExternalWrapper = styled.div`
    position: absolute;
    z-index: 3;
    background-color: #272727;
    top: 100px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: THICCCBOI;
    padding: 30px 45px 30px 25px;
    right: 100px;
    top: 100px;
`


export default HamburgerAdditionalMenu;