import bg from '../../images/background3.jpg'
import styled from 'styled-components'


export const HeroContainer = styled.div`
    background-image: linear-gradient(black, black), url(${bg});
    background-blend-mode: saturation;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0, 0.2);
    object-fit: contain;
    margin-top: -80px;


`

export const HeroH = styled.h1`
color: #fff;
font-size: 100px;
margin-top: 0px;
font-family: "Lato" sans-serif;
font-weight: 300;

@media screen and (max-width: 960px){
        font-size: 70px;
    
}
@media screen and (max-width: 768px){
    font-size: 60px;
}

`

export const HeroP = styled.p`
margin-top: 8px;
color: #fff;
font-size: 30px;
font-family: "Lato" sans-serif;
font-weight: 500;

@media screen and (max-width: 768px){
        text-align:center;
  
        font-size: 23px;
    
}
`
export const HeroP2 = styled.p`
margin-top: 8px;
color: #fff;
font-size: 32px;
font-family: "Lato" sans-serif;
font-weight: 500;

@media screen and (max-width: 768px){
    
  
        font-size: 29px;
    
}
`

export const HeroBtn = styled.button`
        margin-top: 32px;     
`

export const BtnStyle = styled.button`

            border-radius: 1px;
            background: ${({ primary}) => (primary ? "#B7B2B2" : "#0467FB")};
            white-space: nowrap;
            padding: ${({big}) => (big ? "16px 64px" : "10px 20px")};
            color: #fff;
            font-size: ${({fontBig}) => (fontBig ? "25px" : "16px:" )};
            outline: none;
            border: none;
            cursor: pointer;
            font-family: "Lato", sans-serif;

            &:hover {
                transition: all 0.3s ease-out;
                background: ${({ primary}) => (primary ? "#0467FB" : "#B7B2B2")};

            }

            @media screen and  (max-width: 960px){
                width:100%;
                
            }

`