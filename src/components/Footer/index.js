import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {FooterContainer, SocialIcons, SocialIcon, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from './FooterElements'

const Footer = () =>{

    return(
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        MGMA
                    </SocialLogo>
                        <WebsiteRights>MGMA {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                        </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}


export default Footer;