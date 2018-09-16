import React from "react";
import styled from "react-emotion";
import posed from "react-pose";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLastfm,
  FaCodepen,
  FaLinkedin,
  FaSpotify
} from "react-icons/fa";
import { GoMail } from "react-icons/go";

const PosedSocialGrid = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50 }
});

const listLinkItemAnimationProps = {
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
};
const A = posed.a(listLinkItemAnimationProps);

const SocialGrid = styled(PosedSocialGrid)`
  width: 100%;
  .social-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 0.5rem;
    align-items: center;
    a {
      display: block;
      font-size: 16px;
      padding: 0.5rem;
      transition: 0.6s all;
      span {
        margin-left: 10px;
      }
      &:hover {
        color: var(--color-black);
      }
    }
  }
`;

export default () => (
  <SocialGrid>
    <div className="social-links">
      <A
        href="https://twitter.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
        <span>Twitter</span>
      </A>

      <A
        href="http://instagram.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
        <span>Instagram</span>
      </A>

      <A
        href="https://www.linkedin.com/in/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </A>

      <A
        href="https://github.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        <span>GitHub</span>
      </A>

      <A
        href="https://codepen.io/antoniwan/#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCodepen />
        <span>CodePen</span>
      </A>

      <A
        href="https://www.facebook.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
        <span>Facebook</span>
      </A>

      <A
        href="http://www.last.fm/user/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLastfm />
        <span>LastFM</span>
      </A>

      <A
        href="https://open.spotify.com/user/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify />
        <span>Spotify</span>
      </A>

      <A href="mailto:hello@antoniorodriguez.us">
        <GoMail />
        <span>Email</span>
      </A>
    </div>
  </SocialGrid>
);
