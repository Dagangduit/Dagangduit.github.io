import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { IndicatorProducts } from '../data/IndicatorProducts';
import ShapeEffect from '../components/ShapeEffect/ShapeEffect';

const Wrapper = styled.div`
  ${tw`relative w-full min-h-full overflow-hidden py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-500`}
`;

const Background = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-50 blur-sm -z-20`;

const Foreground = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none -z-10`;

const Header = tw.div`text-center mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto px-2 sm:px-4`;

const Title = tw.h1`
  text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100
`;

const Subtitle = tw.p`
  text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed
`;

const SearchWrapper = tw.div`
  max-w-xl mx-auto mt-6 sm:mt-8 mb-4 px-4
`;

const SearchInput = styled.input`
  ${tw`w-full px-6 py-3 rounded-full border-2 outline-none transition-all duration-300`}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(71, 85, 105);
  
  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
  }
  
  &::placeholder {
    color: rgb(100, 116, 139);
    opacity: 0.7;
  }
  
  .dark &::placeholder {
    color: rgb(148, 163, 184);
    opacity: 0.6;
  }
  
  &:focus {
    border: 1px solid rgba(59, 130, 246, 0.5);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background: rgba(255, 255, 255, 0.25);
    
    .dark & {
      background: rgba(0, 0, 0, 0.35);
    }
  }
`;

const NoResults = styled.div`
  ${tw`text-center py-12 sm:py-16 lg:py-20 text-base sm:text-lg px-4`}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgb(100, 116, 139);
  margin: 0 1rem;

  .dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgb(148, 163, 184);
  }
`;

const Grid = tw.div`
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8
`;

const Card = styled.div`
  ${tw`rounded-2xl overflow-hidden cursor-pointer relative transition-all duration-300 h-full`}
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(71, 85, 105);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  .dark & {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(148, 163, 184);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    .dark & {
      background: rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    }
  }
`;

const ImageWrapper = styled.div`
  ${tw`relative w-full aspect-[16/10] overflow-hidden`}
  .dark & img {
    filter: brightness(0.8) contrast(1.1);
  }
`;

const Img = tw.img`w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500`;

const Content = styled.div`
  ${tw`p-4 sm:p-5 flex-grow`}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  .dark & {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Category = tw.p`text-sm text-blue-500 dark:text-blue-400 font-medium uppercase tracking-wide`;
const TitleText = tw.h3`text-lg font-semibold mt-2 mb-1`;
const Desc = tw.p`text-sm mb-3 opacity-80 leading-snug flex-grow`;

const PriceSection = styled.div`
  ${tw`flex items-center justify-between mt-auto px-4 sm:px-5 pb-3`}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  .dark & {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Price = tw.span`text-green-600 dark:text-green-400 font-bold text-base`;

export default function Indicator() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (id: number) => {
    navigate(`/indicator/${id}`);
  };

  const filteredProducts = IndicatorProducts.filter((indi) => {
    const query = searchQuery.toLowerCase();
    return (
      indi.title.toLowerCase().includes(query) ||
      indi.category.toLowerCase().includes(query) ||
      indi.description.toLowerCase().includes(query)
    );
  });

  return (
    <Wrapper>

      <Background>
        <ShapeEffect count={12} sizes={[30, 60]} />
      </Background>
      <Foreground>
        <ShapeEffect count={12} sizes={[40, 80]} />
      </Foreground>

                  <Header>
        <Title>Indicator Collection</Title>
        <Subtitle>
          Premium indicator collection to enhance your technical analysis. Equipped with advanced technology to help you identify trading opportunities more accurately.
        </Subtitle>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="🔍 Search indicator by name, category, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>
      </Header>

      {filteredProducts.length > 0 ? (
        <Grid>
          {filteredProducts.map((indi) => (
          <Card key={indi.id} onClick={() => handleClick(indi.id)}>
            <ImageWrapper>
              <Img
                src={indi.image}
                alt={indi.title}
                onLoad={() => console.log('✅ Indicator image loaded:', indi.title, indi.image)}
                onError={(e) => console.error('❌ Indicator image failed:', indi.title, indi.image, e)}
              />
            </ImageWrapper>
            <Content>
              <Category>{indi.category}</Category>
              <TitleText>{indi.title}</TitleText>
              <Desc>{indi.description}</Desc>
            </Content>
            <PriceSection>
              <Price>Price: {indi.price} USD</Price>
              <span tw="text-sm font-medium text-green-500 dark:text-green-400">
                Free Trial
              </span>
            </PriceSection>
          </Card>
                  ))}
        </Grid>
      ) : (
        <NoResults>
          No products found for "{searchQuery}". Try a different search term.
        </NoResults>
      )}
    </Wrapper>
  );
}
