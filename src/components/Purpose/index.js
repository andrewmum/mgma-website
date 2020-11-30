import React from 'react'
import {Total, PurposeContainer, Head, Paragraph, PhilosophyContainer} from './PurposeElements'


function Purpose(){
    return (
        <Total className="Mission">
            <PurposeContainer id="purpose">
                <Head>
                Our Purpose
                </Head>
                <Paragraph>
                The purpose of the Association is to improve medical practice management, to better serve patients and the medical profession, and to continually provide local opportunities for the development of Healthcare Managers.
                </Paragraph>
            </PurposeContainer>
            <PhilosophyContainer>
                <Head>
                Our Philosophy
                </Head>
                <Paragraph>
                The Philosophy of the CSRA Medical Group Management Association is to strive to improve management in medical groups by offering personal growth opportunities to those involved in the many aspects of leadership.                </Paragraph>
            </PhilosophyContainer>
           
        </Total>
    )

}


export default Purpose;
