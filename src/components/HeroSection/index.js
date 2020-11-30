import React from 'react';
import {HeroContainer, HeroH, HeroP,HeroP2} from './HeroSectionElements'
import { AiOutlineArrowDown } from "react-icons/ai";
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