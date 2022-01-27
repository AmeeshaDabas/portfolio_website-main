import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am Ameesha, A third year student majoring in computer engineering from DTU. I'm interested in web development and cryptography. My hobbies are reading books, playing badminton and listening to music.

        </SectionText>
<SectionText>
P.S. - I love binge watching f.r.i.e.n.d.s.
</SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
