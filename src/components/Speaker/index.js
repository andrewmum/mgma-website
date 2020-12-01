import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {SpeakerContainer, SpeakerHeader, Name,  About, Left, Right, Contain} from './SpeakerComponents'
// import {Image} from 'react-bootstrap';
import Img from 'gatsby-image'

const Speaker = () => {
    var picStyle = {
        borderRadius: "50%",
        transform: "scale(.8)",
        // verticalAlign:"middle"
        

    }
           
            const data = useStaticQuery(graphql`
                            query Images {
                                spk: file(relativePath: {eq: "business-woman.jpeg"}){
                                    childImageSharp{
                                        fluid(maxHeight: 500, maxWidth: 500){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                            `
                    )
    return(
       
       <SpeakerContainer>
            <SpeakerHeader>Monthly Speaker</SpeakerHeader>
            <Contain>
                <Left>
                    <Img
                    style={picStyle}
                    fadeIn
                     fluid={data.spk.childImageSharp.fluid}
                      alt="Speaker Photo"
                      />
                </Left>
                <Right>
                        <Name style={{fontWeight:"300"}}> October Speaker</Name>
                        <Name>  Lauren Rice, RN, BSN</Name>
                        
                        <About> 
                        Lauren Rice serves MagMutual policyholders in Georgia, Tennessee, and South Carolina designing and conducting risk management/patient safety programs to assist hospitals, healthcare facilities, physicians, and their office teams with loss prevention and patient safety strategies.
                        </About>
                </Right>
           </Contain>  
       </SpeakerContainer>  
       
       )
    
}



export default Speaker;


// export const query = graphql`
//          query {
//             spk: file(relativePath: {eq: "img-2.jpg"}){
//                 childImageSharp{
//                     fluid(maxWidth: 250) {
//                          ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//          }


// `
