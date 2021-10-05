import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call Me</LinkTitle>
          <LinkItem href="tel:+62-816-1540-7084">+62-816-1540-7084</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email Me</LinkTitle>
          <LinkItem href="mailto:yudayahya7@gmail.com">yudayahya7@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem target="_blank" href="https://goo.gl/maps/uJ5yZnh4RnVTzESz5">Yogyakarta, Indonesia.</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>A Little Boy Who Want To Explore Every Technology</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons target="_blank" href="https://github.com/yudayahya">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.linkedin.com/in/aziiza-yuda-yahya-845946141">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.instagram.com/yudayahya">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
