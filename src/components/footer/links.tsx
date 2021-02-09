import React from 'react';
import classNames from 'classnames';
import FooterLink from './link';

const Links: React.FC = () => (
  <div className={classNames('footer-links')}>
    <FooterLink path="/" name="Home" />
    <FooterLink path="/work" name="Our Works" />
    <FooterLink path="/advisor" name="Netdb Lab Advisor" />
    <FooterLink path="/member" name="Netdb Lab Members" />
    <FooterLink path="/contact" name="Contact Us" />
  </div>
);

export default Links;
