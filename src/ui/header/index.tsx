import styled from "styled-components";




function Header(){
    return(
        <>
            <ExternalWrapper>
                <Logo src="./images/logo.svg"/>
                <UserBlock></UserBlock>
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

const UserBlock = styled.div`

`


export default Header;