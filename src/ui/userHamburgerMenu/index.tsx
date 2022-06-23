import styled from "styled-components";
import { useState, useRef, useEffect } from 'react';

import {    HamburgerAdditionalMenu,
            MobileHamburgerMenu,
            useAppSelector,
            selectHamburgerAdditionalMenuFlag,
            useAppDispatch,
            changePageObj,
        } from '../../'
import Link from 'next/link';

interface Props{

}



function UserHamburgerMenu(props:Props){
    const dispatch = useAppDispatch();
    const hamburgerAdditionalMenuFlag:boolean = useAppSelector(selectHamburgerAdditionalMenuFlag);

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    useEffect(()=>{
        setWindowWidth(window.innerWidth);
    }, [window.innerWidth])



    return(
        <>
            {windowWidth > 600 ? 
                <ExternalWrapper>
                    <MySubs>
                        My subscriptions
                    </MySubs>
                    <UserHamburger onClick={()=>dispatch(changePageObj({hamburgerAdditionalMenuFlag: !hamburgerAdditionalMenuFlag}))}>
                        <UserName>
                            Nick
                        </UserName>
                        <ArrowDown src="./images/ShevronDown.svg"/>
                    </UserHamburger>
                    


                </ExternalWrapper>
            :
            <div onClick={()=>dispatch(changePageObj({hamburgerAdditionalMenuFlag: !hamburgerAdditionalMenuFlag}))}>
            <HamburgerIcon src="./images/Hamburger.svg"/>
            </div>
            }
            {hamburgerAdditionalMenuFlag === true ? <Overlay onClick={()=>dispatch(changePageObj({hamburgerAdditionalMenuFlag: !hamburgerAdditionalMenuFlag}))}/> : null}

            {hamburgerAdditionalMenuFlag === false ? null : windowWidth <= 600 ? <MobileHamburgerMenu setAdditionalMenuFlag={()=>dispatch(changePageObj({hamburgerAdditionalMenuFlag: !hamburgerAdditionalMenuFlag}))}/> : <HamburgerAdditionalMenu/> }

        </>
    )
}

const HamburgerIcon = styled.img`
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`


const Overlay = styled.div`
    position: fixed;
    z-index: 2;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    cursor: pointer;
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