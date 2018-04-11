import React from 'react';
import FooterWrapper from './FooterWrapper';
import FooterItem from './FooterItem';
import FooterItemText from './FooterItemText';
import FooterLink from './FooterLink';

export class Footer extends React.PureComponent {
  render() {
    return (
      <FooterWrapper>
        <FooterItem>
          <FooterItemText>Моя страничка в Facebook:</FooterItemText>
          <FooterLink
            href="https://www.facebook.com/roman.sineokov"
            aria-label="roman-sineokov"
            target="_blank"
            rel="noopener noreferrer"
            imageSrc="facelogo.png"
          />
        </FooterItem>
        <FooterItem>
          <FooterItemText>Профиль на GitHub:</FooterItemText>
          <FooterLink
            href="https://github.com/RoboQuasar"
            aria-label="roboquasar-github"
            target="_blank"
            rel="noopener noreferrer"
            imageSrc="github_logo.jpg"
          />
        </FooterItem>
      </FooterWrapper>
    );
  }
}

export default Footer;
