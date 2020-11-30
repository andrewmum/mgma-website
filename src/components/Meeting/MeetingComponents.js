import styled from 'styled-components'

export const MeetingContainer = styled.div`
    background: rgb(201,201,201);
    background: linear-gradient(90deg, rgba(201,201,201,1) 0%, rgba(255,255,255,1) 68%, rgba(242,246,247,1) 100%);

    padding-top: 2rem;
    height: 100vh;
    width:100%;
    padding-left: 1rem;
    display: flex;
    
    


`


export const MeetingLeft = styled.div`
    float:left;
    flex:50%
    padding-left: 2rem;
    width: 50%;
    text-align: center;
    
   
    @media screen and (max-width: 960px){
        float: top;
        width:100%;
    }

`



export const MeetingRight = styled.div`
    float:right;
    flex:50%;
    object-fit: contain;
    

    @media screen and (max-width: 960px){
        float:bottom;
        wiidth:100%;
    }
`



export const Title= styled.h1`
    font-family: "Lato" sans-serif;
    font-weight:350;

`



export const Information = styled.p`
    font-family: "Lato" sans-serif;
    font-weight:350;
    font-size: 2rem;
    @media screen and (max-width: 960px){
        font-size: 20px
    }

`



export const MeetingTime = styled.h1`
    padding-top: 1rem;
    

`

export const Caro = styled.div`
object-fit: contain;

`

