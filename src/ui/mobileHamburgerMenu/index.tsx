import styled from "styled-components";
import { useState } from 'react';
import Link from 'next/link';




interface Props{
    setAdditionalMenuFlag: (flag: boolean) => void;
}

function MobileHamburgerMenu(props:Props){

    const [addedUserHamburgerMenuFlag, setAddedUserHamburgerMenuFlag] = useState<boolean>(false);
    return(
        <>
            <Wrapper>
                
                    <LogoWrapper>
                        <HideMenu src="./images/CloseGray.svg" onClick={()=>props.setAdditionalMenuFlag(false)}/>
                        <Logo src="./images/Logo.svg"/>
                    </LogoWrapper>
                    <LinksWrapper>
                        <SubscriptionsWrapper>
                            <SubscriptionsText>My subscriptions</SubscriptionsText>
                            <UnderSubscriptionsLine/>
                        </SubscriptionsWrapper>
                        
                        <UserExternalWrapper>
                            <UserInnerWrapper onClick={()=>setAddedUserHamburgerMenuFlag(!addedUserHamburgerMenuFlag)}>
                                <UserText>Nick</UserText>
                                <UserShevronIcon addedUserMenuflag={addedUserHamburgerMenuFlag} src="./images/ShevronDown.svg"/>
                            </UserInnerWrapper>
                            {addedUserHamburgerMenuFlag === true ? 
                                <AddedUserMenuWrapper>
                                    <Link href={'./settings'}>
                                        <AddedMenuSettingsWrapper>
                                            <AddedMenuSettingsIcon src="./images/Settings.svg"/>
                                            <AddedMenuSettingsText>Settings</AddedMenuSettingsText>
                                        </AddedMenuSettingsWrapper>
                                    </Link>
                                    <Link href={'./logout'}>
                                        <AddedMenuLogoutWrapper>
                                            <AddedMenuLogoutIcon src="./images/LogOut.svg"/>
                                            <AddedMenuLogoutText>Logout</AddedMenuLogoutText>
                                        </AddedMenuLogoutWrapper>
                                    </Link>
                                              

                                </AddedUserMenuWrapper>
                            :

                                null
                        
                            }
                            
                            <UnderUserLine/>
                        </UserExternalWrapper>
                    </LinksWrapper>
                
                
            </Wrapper>
        </>
    )
}

const LinksWrapper = styled.div`
    dipslay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const Wrapper = styled.div`
    position: fixed;
    right: 0px;
    top: 0px;
    background-color: #272727;
    height: 100%;
    z-index: 10;
`
const HideMenu = styled.img`
    margin-right: 35px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`
const UserExternalWrapper = styled.div`
    padding: 20px 0px 23px 24px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: flex-start;
    color: white;

`
const UserInnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    align-items: center;
    
`
const UnderUserLine = styled.div`
    background-color: #393939;
    height: 2px;
    position: relative;
    width: 85%;
`
const UserText = styled.p`
    font-size: 16px;
    color: white;
    font-family: THICCCBOI;
`

interface UserShevronIconProps{
    addedUserMenuflag: boolean
}

const UserShevronIcon = styled.img<UserShevronIconProps>`
    margin-left: 130px;
    ${props=>props.addedUserMenuflag === false ? null : 'transform: rotate(180deg)'};
`

const SubscriptionsWrapper = styled.div`
    padding: 30px 0px 5px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
`
const UnderSubscriptionsLine = styled.div`
    background-color: #393939;
    height: 2px;
    position: relative;
    width: 85%;
`
const SubscriptionsText = styled.p`
    font-size: 16px;
    color: white;
    margin-bottom: 20px;
    font-family: THICCCBOI;
`
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 50px 30px 27px;
`
const Logo = styled.img`
    width: 100px;   
`


const AddedUserMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AddedMenuSettingsWrapper = styled.div`
    display: flex;
    font-family: THICCCBOI;
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 26px;
`
const AddedMenuSettingsIcon = styled.img`
    margin-right: 10px;
`
const AddedMenuSettingsText = styled.p`

`
const AddedMenuLogoutWrapper = styled.div`
    display: flex;
    font-family: THICCCBOI;
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 26px;
`
const AddedMenuLogoutIcon = styled.img`
    margin-right: 10px;
`
const AddedMenuLogoutText = styled.p`

`
export default MobileHamburgerMenu;