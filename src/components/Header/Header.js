import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiChrome } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display:"flex", alignItems: "center", color:'white', marginBottom:'20px' }}>
        <DiChrome size="3rem"/><Span>YudaYahya</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skill">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tool">
          <NavLink>Tools</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/yudayahya">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/aziiza-yuda-yahya-845946141">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.instagram.com/yudayahya">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
