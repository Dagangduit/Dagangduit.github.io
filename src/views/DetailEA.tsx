import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { EAProducts, RentalOption } from '../data/EAProducts';
import ShapeEffect from '../components/ShapeEffect/ShapeEffect';

const PageWrapper = styled.div`
  ${tw`relative w-full min-h-screen overflow-hidden py-4 sm:py-6 lg:py-10 px-3 sm:px-4 lg:px-8 transition-colors duration-500`}
`;

const Background = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-50 blur-sm -z-20`;

const Foreground = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none -z-10`;

const Container = tw.div`max-w-6xl mx-auto relative z-10`;

const Breadcrumb = tw.div`mb-3 sm:mb-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400`;

const BreadcrumbLink = tw.button`hover:text-blue-500 transition-colors`;

const ContentWrapper = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8`;

const ImageSection = tw.div`space-y-4`


const ImageGallery = styled.div`
  ${tw`relative w-full`}
  perspective: 1500px;
`;

const ScrollContainer = styled.div`
  ${tw`flex gap-2 sm:gap-4 overflow-x-auto pb-4 px-1`}
  scroll-behavior: smooth;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    ${tw`bg-gray-200 dark:bg-gray-800 rounded-full`}
  }

  &::-webkit-scrollbar-thumb {
    ${tw`bg-blue-500 rounded-full`}
  }
`;


const MainImageWrapper = styled.div<{ isActive: boolean }>`
  ${tw`w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative cursor-pointer`}
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
const MainImage = tw.img`w-full h-full object-cover object-center transition-all duration-500`;

// Zoom Modal Components
const ZoomModal = styled.div<{ isOpen: boolean }>`
  ${tw`fixed inset-0 z-50 flex items-center justify-center p-4`}
  background: rgba(0, 0, 0, 0.9);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

const ZoomedImage = tw.img`max-w-full max-h-full object-contain rounded-lg`;

const CloseButton = styled.button`
  ${tw`absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors`}
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbnailImage = styled.div<{ isActive: boolean }>`
  ${tw`min-w-[100px] sm:min-w-[120px] h-20 sm:h-24 rounded-lg overflow-hidden cursor-pointer relative flex-shrink-0`}
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
  ${tw`rounded-2xl p-4 sm:p-6 lg:p-8 transition-colors duration-300`}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  }
`;

const Category = tw.span`inline-block text-blue-500 font-semibold uppercase text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3 sm:mb-4`;

const Title = tw.h1`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 leading-tight`;

const PriceSection = tw.div`flex items-baseline gap-2 sm:gap-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200 dark:border-gray-700`;

const Price = tw.div`text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400`;

const PriceLabel = tw.span`text-xs sm:text-sm text-gray-500 dark:text-gray-400`;

const Description = tw.p`text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base break-words`;

const FeaturesTitle = tw.h3`text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4`;

const FeaturesList = tw.ul`space-y-2 sm:space-y-3 mb-6 sm:mb-8`;

const FeatureItem = tw.li`flex items-start gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base`;

const FeatureIcon = tw.span`text-green-500 text-lg sm:text-xl mt-0.5 flex-shrink-0`;

const ButtonRow = tw.div`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8`;

const Btn = styled.button`
  ${tw`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2`}
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const BuyBtn = styled(Btn)`
  background: rgba(59, 130, 246, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

  &:hover {
    background: rgba(37, 99, 235, 0.95);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
`;

const RentBtn = styled(Btn)`
  background: rgba(16, 185, 129, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: white;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);

  &:hover {
    background: rgba(5, 150, 105, 0.95);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  }
`;

const RentalButton = styled.button<{ isSelected: boolean }>`
  ${tw`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300`}
  background: ${({ isSelected }) => isSelected ? 'rgba(59, 130, 246, 0.9)' : 'rgba(255, 255, 255, 0.15)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ isSelected }) => isSelected ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${({ isSelected }) => isSelected ? 'white' : 'rgb(71, 85, 105)'};
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

  .dark & {
    background: ${({ isSelected }) => isSelected ? 'rgba(59, 130, 246, 0.9)' : 'rgba(0, 0, 0, 0.25)'};
    border: 1px solid ${({ isSelected }) => isSelected ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
    color: ${({ isSelected }) => isSelected ? 'white' : 'rgb(148, 163, 184)'};
  }

  &:hover {
    transform: translateY(-2px);
    background: ${({ isSelected }) => isSelected ? 'rgba(37, 99, 235, 0.95)' : 'rgba(255, 255, 255, 0.25)'};

    .dark & {
      background: ${({ isSelected }) => isSelected ? 'rgba(37, 99, 235, 0.95)' : 'rgba(0, 0, 0, 0.35)'};
    }
  }
`;

const RentalButtonsContainer = tw.div`flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start mb-4`;

const BackBtn = styled(Btn)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 0, 0, 0.2);
  color: rgb(71, 85, 105);
  
  
  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-4px);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    
    .dark & {
      background: rgba(0, 0, 0, 0.35);
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }
  }
`;

const NotFound = tw.div`text-center py-20`;

const NotFoundText = tw.p`text-gray-600 dark:text-gray-400 text-xl mb-4`;

const NotFoundBtn = tw.button`text-blue-500 hover:text-blue-600 underline font-semibold`;

export default function DetailEA() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = EAProducts.find((p) => p.id === Number(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [selectedRental, setSelectedRental] = useState<RentalOption | null>(null);

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

  const handleMainImageClick = () => {
    setIsZoomOpen(true);
  };

  const handleCloseZoom = () => {
    setIsZoomOpen(false);
  };

  const handleZoomBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsZoomOpen(false);
    }
  };

  const getWhatsAppLink = () => {
    if (selectedRental) {
      const message = `Hello, I'd like to rent ${product?.title} for ${selectedRental.months} months at a price of $${selectedRental.price}.`;
      return `https://wa.me/6285161853108?text=${encodeURIComponent(message)}`;
    } else {
      const message = `Hello, I'm interested in ${product?.title} for $${product?.price}. Could you provide more information?`;
      return `https://wa.me/+6285161853108?text=${encodeURIComponent(message)}`;
    }
  };

  const handleRentalSelect = (rentalOption: RentalOption) => {
    setSelectedRental(rentalOption);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  

  if (!product) {
    return (
      <PageWrapper>
        <Container>
          <NotFound>
            <NotFoundText>Product not found. ID: {id}</NotFoundText>
            <NotFoundBtn onClick={() => navigate('/EA')}>
              ← Back to EA list
            </NotFoundBtn>
          </NotFound>
        </Container>
      </PageWrapper>
    );
  }

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
          <BreadcrumbLink onClick={() => navigate('/EA')}>EAs</BreadcrumbLink>
          <span tw="mx-2">/</span>
          <span tw="text-gray-800 dark:text-gray-100 font-semibold">{product.title}</span>
        </Breadcrumb>

        <ContentWrapper>
          <ImageSection>
            <ImageGallery>
              <MainImageWrapper onClick={handleMainImageClick} isActive={isFlipping}>
                <MainImage 
                  src={images[selectedImageIndex]} 
                  alt={product.title}
                />

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
            
            {/* Zoom Modal */}
            <ZoomModal 
              isOpen={isZoomOpen} 
              onClick={handleZoomBackdropClick}
            >
              <CloseButton onClick={handleCloseZoom}>
                ×
              </CloseButton>
              <ZoomedImage 
                src={images[selectedImageIndex]} 
                alt={product.title}
              />
            </ZoomModal>
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
              {product.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeaturesList>

            {/* Rental Options */}
            {product.rentalOptions.length > 0 && (
              <>
                <div tw="mb-4">
                  <h4 tw="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Rental Options</h4>
                  <RentalButtonsContainer>
                    {product.rentalOptions.map((option, index) => (
                      <RentalButton
                        key={index}
                        isSelected={selectedRental?.months === option.months}
                        onClick={() => handleRentalSelect(option)}
                      >
                        {option.months} Month / ${option.price}
                      </RentalButton>
                    ))}
                  </RentalButtonsContainer>
                </div>
              </>
            )}

            <ButtonRow>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                tw="inline-block"
              >
                <BuyBtn>
                  <span></span>
                  <span>{selectedRental ? 'Rent' : 'Buy'}</span>
                </BuyBtn>
              </a>
              <BackBtn onClick={() => navigate('/EA')}>
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
