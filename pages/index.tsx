import styled from "styled-components";


import {Header, Footer, OfferCard, Offer} from '../src/ui';


function Index(){
    return(
            <ExternalWrapper>
                <Header/>
                <OfferWrapper>
                    <Offer text="Get started with Gscore today!"/>
                    <CardsWrapper>
                        <OfferCardWrapper>
                            <OfferCard 
                                bgColor="#272727" 
                                price="$77" 
                                licenseCount="Single site license" 
                                detailInfo="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
                                options={['Single site license', 'Special introductory pricing', 'Unlimited Pages and Keywords', 'Billed anually']}
                                buttonLink='./signup'
                                key={Math.random().toString()}
                            />
                        </OfferCardWrapper>
                        <OfferCardWrapper>
                            <OfferCard 
                                bgColor="#FC5842" 
                                price="$117" 
                                licenseCount="3 Site license" 
                                detailInfo="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
                                options={['All features for 3 sites', 'Special introductory pricing', 'Unlimited Pages and Keywords', 'Billed anually']}
                                buttonLink='./signup'
                                key={Math.random().toString()}
                            />
                        </OfferCardWrapper>
                        <OfferCardWrapper>
                            <OfferCard 
                                bgColor="#272727" 
                                price="$167" 
                                licenseCount="10 Site license" 
                                detailInfo="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
                                options={['All features for 10 sites', 'Special introductory pricing', 'Unlimited Pages and Keywords', 'Billed anually']}
                                buttonLink='./signup'
                                key={Math.random().toString()}
                            />
                        </OfferCardWrapper>  
                    </CardsWrapper>
                    <ContactUsWrapper>
                        <HaveMoreTenSitesText>Have more than 10 sites?</HaveMoreTenSitesText>
                        <ContactUsLink>Contact us</ContactUsLink>
                    </ContactUsWrapper>
                </OfferWrapper>
                <Footer/>
            </ExternalWrapper>
    )
}


const OfferCardWrapper = styled.div`
    :nth-child(odd){
        margin-top: 50px;
    }
    :nth-child(even){
        margin-right: 28px;
        margin-left: 28px;
    }
    @media(max-width: 1210px){
        :nth-child(even){
            margin: 0px;
        }
        :nth-child(odd){
            margin: 0px;
        }
        :nth-child(1){
            margin-right: 30px;
            margin-bottom: 30px;
        }
    }
    @media(max-width: 805px){
        :nth-child(n){
            margin: 0px;
        }
        :nth-child(2){
            margin: 30px 0px;
        }
    }
`

const ContactUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 42px;
    align-items: center;
`

const HaveMoreTenSitesText = styled.p`
    color: white;
    margin-bottom: 4px;
    font-size: 18px;
`

const ContactUsLink = styled.a`
    color: #FC5842;
    cursor: pointer;
    border-bottom: 1px solid #FC5842;
`


const CardsWrapper = styled.div`
    display: flex;
    margin-bottom: 42px;
    margin-top: 50px;
   
    @media(max-width: 1300px){
        flex-wrap: wrap;
        justify-content: center;
    }

`

const ExternalWrapper = styled.div`
    background-color: #181818;
    font-family: THICCCBOI;
    
`
const OfferWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    justify-content: center;
    flex-direction: column;
    
`

export default Index;