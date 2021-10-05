import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hai There,<br/>
        I'm Aziiza Yuda Yahya
      </SectionTitle>
      <SectionText>
      🔭 I’m currently working on development web and mobile apps, including Back-end & Front-end, especially Back-end |
      🌱 I’m currently learning laravel, codeigniter, django, express, vue, and react |
      👯 I’m looking to work or collaborate on build some huge mobile or web apps.
      </SectionText>
      <a href="https://github.com/yudayahya" target="_blank"><Button>See My Resume</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;