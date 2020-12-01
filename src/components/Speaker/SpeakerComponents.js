import styled from 'styled-components'

//Parent container for file
export const SpeakerContainer = styled.div`
    height: 100vh;
    width: 100%;

    padding-top: 1rem;
    font-family: "Lato" sans-serif;
    text-align:center;
    @media screen and (max-width:960px){
        height: 140vh;
    }
`
export const SpeakerHeader = styled.h1`
    text-align: center;
    font-family: "Lato" sans-serif;
    font-weight: 350;
    padding-bottom: 1rem;
    border-bottom: gray solid 1px;

`
//container for left and right divs
export const Contain = styled.div`
        display: flex;
        padding-top:1rem;
        // flex-direction: row;
        @media screen and (max-width: 960px){
            display: block;
            
        }
`


//left side of the screen with the image rounded css done in the index.js file
export const Left = styled.div`
        justify-self: flex-start;
        align-items: center;
        padding-left: 2rem;
        width: 50%;
        @media screen and (max-width: 960px){
            width:100%;
            display:block;
            padding-left: 0rem;
        }
`
export const Right = styled.div`
        justify-self: flex-end;
        flex:50%;
        text-align: center;
        padding-top: 3rem;
        padding-right: 1rem;
        

        @media screen and (max-width: 960px){
            padding-top: 0rem;
            padding-right: 0rem;
            
            width:100%;
            
        }
        

`
export const About = styled.p`
        text-align: center;
        padding-top: 1rem;
        line-height: 3.5;
        font-size: 20px;

        @media screen and (max-width: 960px){
            font-size: 1rem;
            padding-top: 0rem;
            
        }
        
        

`
export const Name = styled.h1`
@media screen and (max-width: 960px){
    padding-top: 0rem;
    font-size: 1.5rem;
}


`





