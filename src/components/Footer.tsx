import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../styles/colors';
import { outer, inner } from '../styles/shared';
import config from '../website-config';
import YouTube from "./icons/youtube";
import Twitter from "./icons/twitter";
import GitHub from "./icons/github";
import Flotiq from "./icons/flotiq";
import Facebook from "./icons/facebook";
import Codewave from "./icons/codewave";

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: ${colors.codewaveBlue};
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  @media (max-width: 695px) {
    flex-direction: column;
  }

  .copyright {
    @media(max-width: 695px) {
      text-align: center;
    }
  }
`;

const SiteFooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media(max-width: 695px) {
  margin-top: 20px;
    justify-content: center;
  }

  .socialIcons {
    flex-basis: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 3px;

    @media(max-width: 695px) {
      justify-content: center;
    }

    a:first-of-type {
      margin-right: 0;
    }
  }

  a {
    position: relative;
    margin-left: 10px;
    transition: opacity .2s ease;

    &::before {
      display: none !important;
    }

    &:hover {
      opacity: .7;
    }

    &.social-icon,
    &.social-icon,
    &.social-icon,
    &.social-icon {
      svg {
        fill: white;
        width: 20px;
        height: auto !important;
      }

      &--github,
      &--flotiq,
      &--facebook {
        svg {
          width: 17px;
        }
      }

      &--codewave {
        svg {
          width: 18px;
        }
      }
    }
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-child {
      margin-left: 0;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}{' '}
          {config.footer && (
            <Link to="/">
              | {config.title} {config.footer}
            </Link>
          )}
        </section>
        <SiteFooterNav>
          <Link to="/">Latest Posts</Link>
          <div className="socialIcons">
            {config.facebook && (
              <a href={config.facebook} className="social-icon social-icon--facebook" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
            )}
            {config.youtube && (
              <a href={config.youtube} className="social-icon" target="_blank" rel="noopener noreferrer">
                <YouTube />
              </a>
            )}
            {config.twitter && (
              <a href={config.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            )}
            {config.github && (
              <a href={config.github} className="social-icon social-icon--github" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
            )}
            <a href="https://codewave.eu" className="social-icon social-icon--codewave" target="_blank">
              <Codewave />
            </a>
            <a href="https://flotiq.com" className="social-icon social-icon--flotiq" target="_blank">
              <Flotiq />
            </a>
          </div>
        </SiteFooterNav>
      </div>
    </footer>
  );
};

export default Footer;
