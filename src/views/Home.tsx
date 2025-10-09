import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import IconArrowRight from '~icons/ri/arrow-right-line';

import ShapeEffect from '../components/ShapeEffect/ShapeEffect';

const Background = tw.div`absolute [z-index:0] top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-50 blur-sm`;

const Foreground = tw.div`absolute [z-index:2] top-0 left-0 w-full h-full [user-select:none] pointer-events-none`;

const Wrapper = tw.main`px-8 py-20 w-full flex-1 flex flex-col justify-center`;

const Center = tw.div`relative [z-index:1] mx-auto max-w-screen-lg text-center`;

const Title = styled.h2`
  ${tw`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-6`}
  color: rgb(71, 85, 105);

  .dark & {
    color: rgb(148, 163, 184);
  }
`;

const Description = styled.p`
  ${tw`mt-6 text-lg sm:text-xl lg:text-3xl leading-relaxed`}
  color: rgb(100, 116, 139);

  .dark & {
    color: rgb(148, 163, 184);
  }
`;

const LinkButton = styled.button`
  ${tw`mt-12 py-3 px-6 inline-flex items-center text-center gap-4 hover:gap-8 rounded-full outline-none transition-all`}
  background: rgba(59, 130, 246, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: white;
  
  &:hover {
    background: rgba(37, 99, 235, 0.95);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  }
  
  &:active {
    background: rgba(29, 78, 216, 1);
    transform: translateY(0);
  }
`;

export default function Home() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Background>
        <ShapeEffect count={12} sizes={[30, 60]} />
      </Background>
      <Foreground>
        <ShapeEffect count={12} sizes={[40, 80]} />
      </Foreground>
      <Center>
        <Title>{t('intro.title')}</Title>
        <Description>{t('intro.description')}</Description>
        <Link to="/EA">
          <LinkButton>
            <span>{t('intro.link')}</span>
            <IconArrowRight />
          </LinkButton>
        </Link>
      </Center>
    </Wrapper>
  );
}
