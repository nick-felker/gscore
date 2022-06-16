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
                {userBlockFlag === true ? <UserHamburgerMenu/> : null}
            </ExternalWrapper>  
        </>
    )
}


const Logo = styled.img`

`

const ExternalWrapper = styled.div`
    padding: 40px 91px 40px 86px;
    background-color: #181818;
    display: flex;
    justify-content: space-between;
    align-items: center;
`




export default Header;