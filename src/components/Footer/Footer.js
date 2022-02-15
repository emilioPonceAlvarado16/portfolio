import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://wa.me/+593968913869">Whatsapp</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ieponce@espol.edu.ec">
            ieponce@espol.edu.ec
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2022 <Link href="https://www.isaias.poncealvarado.com">  Isaias Ponce</Link> . All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/emilioPonceAlvarado16">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/isaias-ponce-569109104/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
     
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
