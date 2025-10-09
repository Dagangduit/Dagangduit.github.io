import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { EAProducts } from '../data/EAProducts';
import ShapeEffect from '../components/ShapeEffect/ShapeEffect';

const Wrapper = styled.div`
  ${tw`relative w-full min-h-full overflow-hidden py-10 px-8 transition-colors duration-500`}
`;

const Background = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-50 blur-sm -z-20`;

const Foreground = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none -z-10`;

const Header = tw.div`text-center mb-8 sm:mb-12 max-w-4xl mx-auto px-4`;

const Title = tw.h1`
  text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100
`;

const Subtitle = tw.p`
  text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed
`;

const SearchWrapper = tw.div`
  max-w-xl mx-auto mt-8 mb-4
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
  ${tw`text-center py-20 text-lg`}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgb(100, 116, 139);
  
  .dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgb(148, 163, 184);
  }
`;

const Grid = tw.div`
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-8
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
  ${tw`p-5 flex-grow`}
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
  ${tw`flex items-center justify-between mt-auto px-5 pb-3`}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  .dark & {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Price = tw.span`text-green-600 dark:text-green-400 font-bold text-base`;

export default function EA() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (id: number) => {
    navigate(`/EA/${id}`);
  };

  const filteredProducts = EAProducts.filter((ea) => {
    const query = searchQuery.toLowerCase();
    return (
      ea.title.toLowerCase().includes(query) ||
      ea.category.toLowerCase().includes(query) ||
      ea.description.toLowerCase().includes(query)
    );
  });

  // Debug logging
  console.log('📋 CURRENT EA PRODUCTS BEING RENDERED:');
  filteredProducts.forEach((ea, index) => {
    console.log(`${index + 1}. ${ea.title}: ${ea.image}`);
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
        <Title>Expert Advisors Collection</Title>
        <Subtitle>
          Find the best Expert Advisors for your automated trading. Each EA is designed with proven strategies to deliver optimal results in various market conditions.
        </Subtitle>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="🔍 Search EA by name, category, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>
      </Header>

      {filteredProducts.length > 0 ? (
        <Grid>
          {filteredProducts.map((ea) => (
          <Card key={ea.id} onClick={() => handleClick(ea.id)}>
            <ImageWrapper>
              <Img
                src={ea.image}
                alt={ea.title}
                onLoad={() => console.log('✅ Image loaded:', ea.title, ea.image)}
                onError={(e) => console.error('❌ Image failed:', ea.title, ea.image, e)}
              />
            </ImageWrapper>
            <Content>
              <Category>{ea.category}</Category>
              <TitleText>{ea.title}</TitleText>
              <Desc>{ea.description}</Desc>
            </Content>
            <PriceSection>
              <Price>${ea.price}</Price>
              <span tw="text-sm font-medium text-green-500 dark:text-green-400">
                Free Demo
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
