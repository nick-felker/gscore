import styled from "styled-components";
import { useAppSelector } from '../../hooks';
import { selectAuthFlag } from '../../redux/reducers/user';
import UserHamburgerMenu from "../userHamburgerMenu";


function Header(){

    const userBlockFlag = useAppSelector(selectAuthFlag);

    return(
        <>
            <ExternalWrapper>
                <Logo src="./images/logo.svg"/>
                {userBlockFlag === true ? <UserHamburgerMenu/> : <Tekst>da</Tekst>}
            </ExternalWrapper>  
        </>
    )
}

const Tekst = styled.p`
    color: white;
`


const Logo = styled.img`
    @media(max-width: 720px){
        width: 140px;
    }
    @media(max-width: 500px){
        width: 100px;
    }
`

const ExternalWrapper = styled.div`
    padding: 40px 91px 40px 86px;
    background-color: #181818;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 720px){
        padding: 40px 50px 40px 50px;
    }
    @media(max-width: 500px){
        padding: 30px 40px 40px 35px;
    }
`




export default Header;