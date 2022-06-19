import styled from "styled-components";
import { useState } from 'react';
import HamburgerAdditionalMenu from "../hamburgerAdditionalMenu";
import Link from 'next/link';

function UserHamburgerMenu(){
    const [overlayFlag, setOverlayFlag] = useState<boolean>(false);
    return(
        <>
            <ExternalWrapper>
                <Link href={'./subscriptions'}>
                    <MySubs>My subscriptions</MySubs>
                </Link>
                
                {overlayFlag === true ? <HamburgerAdditionalMenu/> : null}
                <UserHamburger onClick={()=>setOverlayFlag(!overlayFlag)}>
                    <UserName>Nick</UserName>
                    <ArrowDown src="./images/ShevronDown.svg"/>
                </UserHamburger>
            </ExternalWrapper>
            {overlayFlag === true ? <Overlay onClick={()=>setOverlayFlag(!overlayFlag)}/> : null}
        </>
    )
}


const Overlay = styled.div`
    position: fixed;
    z-index: 2;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
`


const UserName = styled.p`
    font-size: 20px;
`

const ArrowDown = styled.img`
    margin-left: 10px;
`
const MySubs = styled.a`
    cursor: pointer;
    font-size: 20px;
    :hover{
        opacity: 0.5;
    }
    margin-right: 10px;
`
const ExternalWrapper = styled.div`
    font-family: THICCCBOI;
    color: white;
    display: flex;
    align-items: center;
`
const UserHamburger = styled.div`
    display: flex;
    cursor: pointer;
    padding: 10px 15px;
    align-items: center;
`


export default UserHamburgerMenu;