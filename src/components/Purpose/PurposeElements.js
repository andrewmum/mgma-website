import styled from 'styled-components'

export const Total = styled.div`
        padding-top: 1rem;
        align-items: center;
        height: 70vh;
        display: flex;
        padding-bottom: 1rem;

        @media screen and (max-width: 960px){
            display: block;
        }
`


export const PurposeContainer = styled.div`
    flex: 50%;
    
    float: left;
    border-right: gray solid 1px;
    padding-right: 1rem;
    @media screen and (max-width: 960px){
        border-right: none;
        padding-right:1rem;
        padding-left: 1rem;

    }
    
`
export const PhilosophyContainer = styled.div`
    float:right;
    flex: 50%;
    padding-left: 1rem;

    @media screen and (max-width: 960px){
        padding-left:1rem;
        padding-right: 1rem;
    }
`
export const Head = styled.h1`
    text-align: center;
    font-family: "Lato" sans-serif;
    font-weight:350;

    @media screen and (max-width: 960px){
        font-size: 28px
    }
`

export const Paragraph = styled.p`
    text-align: center;
    padding-top: 2rem;
    font-size: 1.3rem;
    font-family: "Lato";
    line-height: 3;

    @media screen and (max-width: 960px){
        font-size: 30px
        line-height:1.5;
    }


`