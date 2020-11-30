import React from 'react';
import {HeroContainer, HeroH, HeroP,HeroP2} from './HeroSectionElements'
import { AiOutlineArrowDown } from "react-icons/ai";
import Btn from 'react-bootstrap/Button';
import scrollTo from 'gatsby-plugin-smoothscroll';





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
                <Btn onClick={() => scrollTo('.Mission')}  variant="outline-info" size="lg"> <AiOutlineArrowDown /></Btn>
            </HeroContainer>

        
    )
    }

    export default HeroSection;