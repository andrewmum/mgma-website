import React from 'react'
// import "./HeroSection.css"
// import {Button} from '../ButtonElements'
import {HeroContainer, HeroH, HeroP,HeroP2, HeroBtn, Button} from './HeroSectionElements'
import { AiOutlineArrowDown } from "react-icons/ai";
import {Link } from 'gatsby';
import Btn from 'react-bootstrap/Button'




function HeroSection(){
    
    return (
            <HeroContainer>
                <HeroH>
                    MGMA
                </HeroH>
                <HeroP>
                    Medical Group Management Association
                </HeroP>
                <HeroP2>
                    CSRA, GA
                </HeroP2>
                <Btn variant="dark" size="lg"> <AiOutlineArrowDown /></Btn> 
            </HeroContainer>

        
    )
    }

    export default HeroSection;