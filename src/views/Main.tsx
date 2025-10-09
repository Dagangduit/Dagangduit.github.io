import mdDark from 'github-markdown-css/github-markdown-dark.css?raw';
import mdLight from 'github-markdown-css/github-markdown-light.css?raw';
import { changeLanguage } from 'i18next';
import prismLight from 'prism-themes/themes/prism-vs.css?raw';
import prismDark from 'prism-themes/themes/prism-vsc-dark-plus.css?raw';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, Outlet } from 'react-router-dom';
import tw, { css, styled } from 'twin.macro';
import IconEA from '~icons/ri/article-line';
import IconProjects from '~icons/ri/function-line';
import IconGithub from '~icons/ri/github-line';
import IconLanguage from '~icons/ri/global-line';
import IconEmail from '~icons/ri/mail-line';
import IconDark from '~icons/ri/moon-line';
import IconIndicator from '~icons/ri/sticky-note-line';
import IconLight from '~icons/ri/sun-line';

import useDarkMode, { DarkModeValueContext } from '../hooks/use-dark-mode';
import i18n from '../i18n';
import { loadThemeStyles } from '../utils';

const title = import.meta.env.VITE_TITLE;
const email = import.meta.env.VITE_EMAIL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;

const Wrapper = styled.div`
  ${tw`relative pb-16 min-h-screen flex flex-col`}
`;

const Header = tw.header`h-20 w-full`;

const HeaderCenter = tw.div`mx-auto max-w-screen-lg flex px-4 sm:px-8 items-center h-full text-slate-400 dark:text-slate-300 font-semibold`;

const TitleLink = styled(Link)`
  ${tw`text-base sm:text-lg text-blue-600 dark:text-blue-400`}
`;

const Title = tw.span`mx-0.5 text-blue-600 dark:text-blue-400`;

const Nav = tw.nav`grid gap-2 sm:gap-3 lg:gap-6 grid-flow-col ml-auto leading-5`;

const navItemStyle = tw`opacity-80 cursor-pointer hover:(opacity-100 text-blue-500 transform scale-105) transition-all duration-200`;

const NavItem = styled.a`
  ${navItemStyle}
  color: rgb(71, 85, 105);
  
  .dark & {
    color: rgb(148, 163, 184);
  }
`;

const NavLinkItem = styled(NavLink)`
  ${navItemStyle}
  color: rgb(71, 85, 105);
  
  .dark & {
    color: rgb(148, 163, 184);
  }

  &.active {
    ${tw`opacity-100 text-blue-500 transform scale-105`}
  }
`;

const Divider = tw.div`w-[1px] h-full bg-gray-300 dark:bg-gray-600 opacity-50`;

const Footer = styled.footer`
  ${tw`absolute bottom-4 left-0 space-x-2 w-full text-sm text-center select-none`}
  color: rgb(100, 116, 139);
  
  .dark & {
    color: rgb(148, 163, 184);
  }
`;

const FooterCenter = tw.div`mx-auto max-w-screen-lg`;

export default function Main() {
  const { t } = useTranslation();

  const [darkModeEnabled, setDarkModelEnabled] = useDarkMode();

  useEffect(() => {
    loadThemeStyles('prism-theme', darkModeEnabled ? prismDark : prismLight);
    loadThemeStyles('markdown-theme', darkModeEnabled ? mdDark : mdLight);
  }, [darkModeEnabled]);

  const onToggleDarkMode = useCallback(() => {
    setDarkModelEnabled(!darkModeEnabled);
  }, [darkModeEnabled]);

  // const onToggleLanguage = useCallback(() => {
  //   changeLanguage(i18n.language === 'cn' ? 'en' : 'cn');
  //   localStorage.setItem('language', i18n.language);
  // }, []);
  const onToggleLanguage = useCallback(() => {
  window.open('https://dagangduit.com/', '_blank');
  }, []);


  return (
    <DarkModeValueContext.Provider value={darkModeEnabled}>
      <Wrapper>
        <Header>
          <HeaderCenter>
            <TitleLink to="/">
              <span></span>
              <Title>{title}</Title>
            </TitleLink>

            <Nav>
              <NavLinkItem to="/EA">
                <IconEA tw="inline lg:hidden" />
                <span tw="hidden lg:inline">{t('tab.EA')}</span>
              </NavLinkItem>
              <NavLinkItem to="/indicator">
                <IconIndicator tw="inline lg:hidden" />
                <span tw="hidden lg:inline">{t('tab.indicator')}</span>
              </NavLinkItem>
              <NavLinkItem to="/projects">
                <IconProjects tw="inline lg:hidden" />
                <span tw="hidden lg:inline">{t('tab.projects')}</span>
              </NavLinkItem>

              <Divider />

              <NavItem href={`mailto:${email}`}>
                <IconEmail />
              </NavItem>
              <NavItem href={githubUrl} target="_blank">
                <IconGithub />
              </NavItem>
              <NavItem onClick={onToggleLanguage}>
                <IconLanguage />
              </NavItem>
              <NavItem onClick={onToggleDarkMode}>
                {darkModeEnabled ? <IconLight /> : <IconDark />}
              </NavItem>
            </Nav>
          </HeaderCenter>
        </Header>

        <Outlet />

        <Footer>
          <FooterCenter>
            {/* <a tw="hover:text-blue-500" href="https://dagangduit.com">
              www.dagangduit.com
            </a> */}
            <span tw="ml-2">2025-present © Agus Pujianto</span>
          </FooterCenter>
        </Footer>
      </Wrapper>
    </DarkModeValueContext.Provider>
  );
}
