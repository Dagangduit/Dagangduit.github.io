// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import tw from 'twin.macro';
// import { EAProducts } from '../data/EAProducts';

// const Grid = tw.div`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-8`;
// const Card = tw.div`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer`;
// const ImageWrapper = tw.div`relative w-full h-56 overflow-hidden`;
// const Img = tw.img`w-full h-full object-cover hover:scale-110 transition-transform duration-500`;
// const Content = tw.div`p-5`;
// const Category = tw.p`text-sm text-blue-500 font-medium uppercase tracking-wide`;
// const Title = tw.h3`text-lg font-semibold mt-2 mb-1 text-gray-800`;
// const Desc = tw.p`text-gray-600 text-sm mb-3`;
// const Price = tw.span`text-green-600 font-bold text-base`;

// export default function EA() {
//   const navigate = useNavigate();

//   const handleClick = (id: number) => {
//     navigate(`/EA/${id}`);
//   };

//   return (
//     <div tw="bg-gray-50 min-h-screen py-10">
//       <h1 tw="text-3xl font-bold text-center mb-10 text-gray-800">Expert Advisors Collection</h1>
//       <Grid>
//         {EAProducts.map((ea) => (
//           <Card key={ea.id} onClick={() => handleClick(ea.id)}>
//             <ImageWrapper>
//               <Img src={ea.image} alt={ea.title} />
//             </ImageWrapper>
//             <Content>
//               <Category>{ea.category}</Category>
//               <Title>{ea.title}</Title>
//               <Desc>{ea.description}</Desc>
//               <Price>${ea.price}</Price>
//             </Content>
//           </Card>
//         ))}
//       </Grid>
//     </div>
//   );
// }

  

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import tw, { styled } from 'twin.macro';
// import { EAProducts } from '../data/EAProducts';
// import ShapeEffect from '../components/ShapeEffect/ShapeEffect'; // pastikan ada component ini

// // ===== Styling =====
// const Wrapper = styled.div`
//   ${tw`relative min-h-screen overflow-hidden py-10 transition-colors duration-500`}
// `;

// const Background = tw.div`
//   absolute inset-0 -z-20 opacity-40 dark:opacity-30 pointer-events-none
// `;

// const Foreground = tw.div`
//   absolute inset-0 -z-10 opacity-60 dark:opacity-40 pointer-events-none
// `;

// const Title = tw.h1`
//   text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100
// `;

// const Grid = tw.div`
//   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-8
// `;

// const Card = tw.div`
//   bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 
//   rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
//   overflow-hidden cursor-pointer relative
// `;

// const ImageWrapper = tw.div`relative w-full h-56 overflow-hidden`;
// const Img = tw.img`
//   w-full h-full object-cover hover:scale-110 transition-transform duration-500
// `;

// const Content = tw.div`p-5`;
// const Category = tw.p`text-sm text-blue-500 font-medium uppercase tracking-wide`;
// const TitleText = tw.h3`text-lg font-semibold mt-2 mb-1`;
// const Desc = tw.p`text-sm mb-3 opacity-80 leading-snug`;
// const Price = tw.span`text-green-600 dark:text-green-400 font-bold text-base`;

// // ===== Component =====
// export default function EA() {
//   const navigate = useNavigate();

//   const handleClick = (id: number) => {
//     navigate(`/EA/${id}`);
//   };

//   return (
//     <Wrapper>
//       {/* ✨ Background Effects */}
//       <Background>
//         <ShapeEffect count={12} sizes={[30, 60]} />
//       </Background>
//       <Foreground>
//         <ShapeEffect count={12} sizes={[40, 80]} />
//       </Foreground>

//       <Title>Expert Advisors Collection</Title>

//       <Grid>
//         {EAProducts.map((ea) => (
//           <Card key={ea.id} onClick={() => handleClick(ea.id)}>
//             <ImageWrapper>
//               <Img src={ea.image} alt={ea.title} />
//             </ImageWrapper>
//             <Content>
//               <Category>{ea.category}</Category>
//               <TitleText>{ea.title}</TitleText>
//               <Desc>{ea.description}</Desc>
//               <Price>${ea.price}</Price>
//             </Content>
//           </Card>
//         ))}
//       </Grid>
//     </Wrapper>
//   );
// }

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import tw, { styled } from 'twin.macro';
// import { EAProducts } from '../data/EAProducts';
// import ShapeEffect from '../components/ShapeEffect/ShapeEffect';

// // ===== Styling =====
// const Wrapper = styled.div`
//   ${tw`relative min-h-screen overflow-hidden py-10 transition-colors duration-500`}
// `;

// const Background = tw.div`
//   absolute inset-0 -z-20 opacity-40 dark:opacity-30 pointer-events-none
// `;

// const Foreground = tw.div`
//   absolute inset-0 -z-10 opacity-60 dark:opacity-40 pointer-events-none
// `;

// const Title = tw.h1`
//   text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100
// `;

// const Grid = tw.div`
//   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-8
// `;

// // 💥 Card dengan bayangan adaptif tema
// const Card = styled.div`
//   ${tw`rounded-2xl overflow-hidden cursor-pointer relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-300`}

//   /* Bayangan adaptif */
//   /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);*/

//   /* Mode gelap: bayangan putih tebal */
//   .dark & {
//     box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
//   }

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

//     .dark & {
//       box-shadow: 0 0 25px rgba(255, 255, 255, 0.35);
//     }
//   }
// `;

// const ImageWrapper = tw.div`relative w-full h-56 overflow-hidden`;
// const Img = tw.img`
//   w-full h-full object-cover hover:scale-110 transition-transform duration-500
// `;

// const Content = tw.div`p-5`;
// const Category = tw.p`text-sm text-blue-500 font-medium uppercase tracking-wide`;
// const TitleText = tw.h3`text-lg font-semibold mt-2 mb-1`;
// const Desc = tw.p`text-sm mb-3 opacity-80 leading-snug`;
// const Price = tw.span`text-green-600 dark:text-green-400 font-bold text-base`;

// // ===== Component =====
// export default function EA() {
//   const navigate = useNavigate();

//   const handleClick = (id: number) => {
//     navigate(`/EA/${id}`);
//   };

//   return (
//     <Wrapper>
//       {/* ✨ Background Effects */}
//       <Background>
//         <ShapeEffect count={12} sizes={[30, 60]} />
//       </Background>
//       <Foreground>
//         <ShapeEffect count={12} sizes={[40, 80]} />
//       </Foreground>

//       <Title>Expert Advisors Collection</Title>

//       <Grid>
//         {EAProducts.map((ea) => (
//           <Card key={ea.id} onClick={() => handleClick(ea.id)}>
//             <ImageWrapper>
//               <Img src={ea.image} alt={ea.title} />
//             </ImageWrapper>
//             <Content>
//               <Category>{ea.category}</Category>
//               <TitleText>{ea.title}</TitleText>
//               <Desc>{ea.description}</Desc>
//               <Price>${ea.price}</Price>
//             </Content>
//           </Card>
//         ))}
//       </Grid>
//     </Wrapper>
//   );
// }
import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { EAProducts } from '../data/EAProducts';
import ShapeEffect from '../components/ShapeEffect/ShapeEffect';

const Wrapper = styled.div`
  ${tw`relative w-full min-h-full overflow-hidden py-10 px-8 transition-colors duration-500`}
`;

const Background = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-50 blur-sm -z-20`;

const Foreground = tw.div`absolute inset-0 top-0 left-0 w-full h-full [user-select:none] pointer-events-none -z-10`;

const Title = tw.h1`
  text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100
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
const Img = tw.img`w-full h-full object-cover hover:scale-110 transition-transform duration-500`;
const Content = tw.div`p-5`;
const Category = tw.p`text-sm text-blue-500 font-medium uppercase tracking-wide`;
const TitleText = tw.h3`text-lg font-semibold mt-2 mb-1`;
const Desc = tw.p`text-sm mb-3 opacity-80 leading-snug`;
const Price = tw.span`text-green-600 dark:text-green-400 font-bold text-base`;

export default function EA() {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/EA/${id}`);
  };

  return (
    <Wrapper>
      <Background>
        <ShapeEffect count={12} sizes={[30, 60]} />
      </Background>
      <Foreground>
        <ShapeEffect count={12} sizes={[40, 80]} />
      </Foreground>

      <Title>Expert Advisors Collection</Title>

      <Grid>
        {EAProducts.map((ea) => (
          <Card key={ea.id} onClick={() => handleClick(ea.id)}>
            <ImageWrapper>
              <Img src={ea.image} alt={ea.title} />
            </ImageWrapper>
            <Content>
              <Category>{ea.category}</Category>
              <TitleText>{ea.title}</TitleText>
              <Desc>{ea.description}</Desc>
              <Price>${ea.price}</Price>
            </Content>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}