import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {MeetingContainer, MeetingLeft, MeetingRight, Title, Information, MeetingTime, ReactCaro} from './MeetingComponents'
// import BackgroundSlider from 'gatsby-image-background-slider'
import bg1 from '../../images/img-2.jpg'
import bg2 from '../../images/img-3.jpg'
import bg3 from '../../images/img-4.jpg'






function MeetingSection(){
     
  
    return(
        <MeetingContainer>
            <MeetingLeft>
                        <Title>
                                Next Meeting
                        </Title>
                        <Information>
                                Thursday, October 24th @ 11:30AM
                        </Information>
                        <Title>
                                Speaker:
                        </Title>
                        <Information>
                            Lauren Rice, RN, BSN
                        </Information>
                        <Title>
                            Topic: 
                        </Title>
                        <Information>
                        Social Media in Healthcare
                        </Information>
                        <Title>
                            Sponsor: 
                        </Title>
                        <Information>
                            EDTS Cyber
                        </Information>
                        <MeetingTime>
                        September 2019 - Calder Willingham
                        </MeetingTime>
            </MeetingLeft>


            <MeetingRight>
                
                    <ReactCaro>
                        <Carousel.Item interval={1000000}>
                                <img className="d-block w-100" src={bg1}/>
                        
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src={bg3} />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100"src={bg2} />

                            
                        </Carousel.Item>
                        </ReactCaro>


                    

                

            </MeetingRight>
        </MeetingContainer>
        
    )
}




export default MeetingSection;