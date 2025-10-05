import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { IndicatorProducts } from '../data/IndicatorProducts';
import ShapeEffect from '../components/ShapeEffect/ShapeEffect';

const PageWrapper = styled.div`
  ${tw`relative w-full min-h-screen overflow-hidden py-10 px-8 transition-colors duration-500`}
`;

const Background = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-50 blur-sm -z-20`;

const Foreground = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none -z-10`;

const Container = tw.div`max-w-6xl mx-auto relative z-10`;

const Breadcrumb = tw.div`mb-6 text-sm text-gray-600 dark:text-gray-400`;

const BreadcrumbLink = tw.button`hover:text-blue-500 transition-colors`;

const ContentWrapper = tw.div`grid lg:grid-cols-2 gap-8 mb-8`;

const ImageSection = tw.div`space-y-4`;

const ImageGallery = styled.div`
  ${tw`relative w-full`}
  perspective: 1500px;
`;

const ScrollContainer = styled.div`
  ${tw`flex gap-4 overflow-x-auto pb-4`}
  scroll-behavior: smooth;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    ${tw`bg-gray-200 dark:bg-gray-800 rounded-full`}
  }
  
  &::-webkit-scrollbar-thumb {
    ${tw`bg-blue-500 rounded-full`}
  }
`;

const MainImageWrapper = styled.div<{ isActive: boolean }>`
  ${tw`w-full h-96 rounded-2xl overflow-hidden mb-4 relative cursor-pointer`}
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  .dark & {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
  
  ${({ isActive }) => isActive && `
    transform: rotateY(-15deg) scale(1.02);
  `}
  
  &:hover {
    transform: rotateY(-8deg) scale(1.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.6s;
    z-index: 1;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const MainImage = tw.img`w-full h-full object-cover transition-all duration-500`;

const ThumbnailImage = styled.div<{ isActive: boolean }>`
  ${tw`min-w-[120px] h-24 rounded-lg overflow-hidden cursor-pointer relative flex-shrink-0`}
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  
  ${({ isActive }) => isActive && `
    transform: scale(1.1) translateY(-4px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    border: 2px solid rgb(59, 130, 246);
  `}
  
  &:hover {
    transform: scale(1.05) translateY(-2px) rotateY(-5deg);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  .dark & {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  }
`;

const ThumbnailImg = tw.img`w-full h-full object-cover`;

const InfoSection = styled.div`
  ${tw`bg-white dark:bg-gray-900 rounded-2xl p-8 transition-colors duration-300`}
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  
  .dark & {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
`;

const Category = tw.span`inline-block text-blue-500 font-semibold uppercase text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4`;

const Title = tw.h1`text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4`;

const PriceSection = tw.div`flex items-baseline gap-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700`;

const Price = tw.div`text-4xl font-bold text-green-600 dark:text-green-400`;

const PriceLabel = tw.span`text-sm text-gray-500 dark:text-gray-400`;

const Description = tw.p`text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base`;

const FeaturesTitle = tw.h3`text-xl font-bold text-gray-800 dark:text-gray-100 mb-4`;

const FeaturesList = tw.ul`space-y-3 mb-8`;

const FeatureItem = tw.li`flex items-start gap-3 text-gray-700 dark:text-gray-300`;

const FeatureIcon = tw.span`text-green-500 text-xl mt-0.5`;

const ButtonRow = tw.div`flex gap-4 flex-wrap`;

const Btn = styled.button`
  ${tw`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2`}
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const BuyBtn = styled(Btn)`
  ${tw`bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg`}
`;

const BackBtn = styled(Btn)`
  ${tw`bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600`}
`;

const NotFound = tw.div`text-center py-20`;

const NotFoundText = tw.p`text-gray-600 dark:text-gray-400 text-xl mb-4`;

const NotFoundBtn = tw.button`text-blue-500 hover:text-blue-600 underline font-semibold`;

export default function DetailIndicator() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = IndicatorProducts.find((p) => p.id === Number(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const images = product?.images || [product?.image || ''];

  const handleImageClick = (index: number) => {
    if (index !== selectedImageIndex) {
      setIsFlipping(true);
      setTimeout(() => {
        setSelectedImageIndex(index);
        setIsFlipping(false);
      }, 300);
    }
  };

  if (!product)
    return (
      <PageWrapper>
        <Background>
          <ShapeEffect count={12} sizes={[30, 60]} />
        </Background>
        <Foreground>
          <ShapeEffect count={12} sizes={[40, 80]} />
        </Foreground>
        <NotFound>
          <NotFoundText>Product not found.</NotFoundText>
          <NotFoundBtn onClick={() => navigate('/indicator')}>
            ← Back to Indicator list
          </NotFoundBtn>
        </NotFound>
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <Background>
        <ShapeEffect count={12} sizes={[30, 60]} />
      </Background>
      <Foreground>
        <ShapeEffect count={12} sizes={[40, 80]} />
      </Foreground>

      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
          <span tw="mx-2">/</span>
          <BreadcrumbLink onClick={() => navigate('/indicator')}>Indicators</BreadcrumbLink>
          <span tw="mx-2">/</span>
          <span tw="text-gray-800 dark:text-gray-100 font-semibold">{product.title}</span>
        </Breadcrumb>

        <ContentWrapper>
          <ImageSection>
            <ImageGallery>
              <MainImageWrapper isActive={isFlipping}>
                <MainImage src={images[selectedImageIndex]} alt={product.title} />
              </MainImageWrapper>
              
              {images.length > 1 && (
                <ScrollContainer>
                  {images.map((img, index) => (
                    <ThumbnailImage
                      key={index}
                      isActive={index === selectedImageIndex}
                      onClick={() => handleImageClick(index)}
                    >
                      <ThumbnailImg src={img} alt={`${product.title} - ${index + 1}`} />
                    </ThumbnailImage>
                  ))}
                </ScrollContainer>
              )}
            </ImageGallery>
          </ImageSection>

          <InfoSection>
            <Category>{product.category}</Category>
            <Title>{product.title}</Title>
            
            <PriceSection>
              <Price>${product.price}</Price>
              <PriceLabel>One-time payment</PriceLabel>
            </PriceSection>

            <Description>{product.description}</Description>

            <FeaturesTitle>Key Features</FeaturesTitle>
            <FeaturesList>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Accurate signal detection with minimal lag</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Customizable parameters for all trading styles</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Visual and audio alerts included</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Works on all timeframes and pairs</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Lifetime updates and support</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>30-day money-back guarantee</span>
              </FeatureItem>
            </FeaturesList>

            <ButtonRow>
              <BuyBtn>
                <span>🛒</span>
                <span>Buy Now</span>
              </BuyBtn>
              <BackBtn onClick={() => navigate('/indicator')}>
                <span>←</span>
                <span>Back</span>
              </BackBtn>
            </ButtonRow>
          </InfoSection>
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
}
