import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { IndicatorProducts } from '../data/IndicatorProducts';
import ShapeEffect from '../components/ShapeEffect/ShapeEffect';

const Wrapper = styled.div`
  ${tw`relative w-full min-h-full overflow-hidden py-10 px-8 transition-colors duration-500`}
`;

const Background = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-50 blur-sm -z-20`;

const Foreground = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none -z-10`;

const Header = tw.div`text-center mb-12 max-w-3xl mx-auto`;

const Title = tw.h1`
  text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100
`;

const Subtitle = tw.p`
  text-lg text-gray-600 dark:text-gray-400 leading-relaxed
`;

const SearchWrapper = tw.div`
  max-w-xl mx-auto mt-8 mb-4
`;

const SearchInput = styled.input`
  ${tw`w-full px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-300`}
  
  &:focus {
    ${tw`border-blue-500 dark:border-blue-400`}
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const NoResults = tw.div`
  text-center py-20 text-gray-500 dark:text-gray-400 text-lg
`;

const Grid = tw.div`
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-8
`;

const Card = styled.div`
  ${tw`rounded-2xl overflow-hidden cursor-pointer relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-300`}

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .dark & {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    .dark & {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    }
  }
`;

const ImageWrapper = tw.div`relative w-full h-56 overflow-hidden`;
const Img = tw.img`
  w-full h-full object-cover hover:scale-110 transition-transform duration-500
`;

const Content = tw.div`p-5`;
const Category = tw.p`text-sm text-blue-500 font-medium uppercase tracking-wide`;
const TitleText = tw.h3`text-lg font-semibold mt-2 mb-1`;
const Desc = tw.p`text-sm mb-3 opacity-80 leading-snug`;
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
          Koleksi indikator premium untuk meningkatkan analisis teknikal Anda. Dilengkapi dengan teknologi canggih untuk membantu Anda mengidentifikasi peluang trading dengan lebih akurat.
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
              <Img src={indi.image} alt={indi.title} />
            </ImageWrapper>
            <Content>
              <Category>{indi.category}</Category>
              <TitleText>{indi.title}</TitleText>
              <Desc>{indi.description}</Desc>
              <Price>${indi.price}</Price>
            </Content>
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
