import styled from "styled-components";
import Subscriptions from "../../../pages/subscriptions";




interface Props{

}

function MobileHamburgerMenu(props:Props){
    return(
        <>
            <ExternalWrapper>
                <InnerWrapper>
                    <LogoWrapper>
                        <HideMenu/>
                        <Logo/>
                    </LogoWrapper>
                    <UserWrapper>
                        <Subscriptions>

                        </Subscriptions>
                        <User>

                        </User>
                    </UserWrapper>
                </InnerWrapper>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    position: relative;
    left: 0px;
    width: 100px;
    background-color: red;
    height: 100px;
`
const InnerWrapper = styled.div`

`
const HideMenu = styled.img`

`
const UserWrapper = styled.div`

`
const User = styled.p`

`
const LogoWrapper = styled.div`

`
const Logo = styled.img`

`


export default MobileHamburgerMenu;