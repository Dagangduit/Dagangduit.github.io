import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import { EAProducts } from '../data/EAProducts';
import { IndicatorProducts } from '../data/IndicatorProducts';

const Wrapper = tw.div`max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-3xl mt-10`;
const Img = tw.img`w-full h-80 object-cover rounded-2xl mb-6`;
const Title = tw.h2`text-3xl font-bold text-gray-800 mb-4`;
const Category = tw.span`text-blue-500 font-semibold uppercase text-sm`;
const Desc = tw.p`text-gray-600 mb-6 leading-relaxed`;
const Price = tw.div`text-green-600 font-bold text-xl mb-6`;
const ButtonRow = tw.div`flex gap-4`;
const Btn = tw.button`px-5 py-2 rounded-lg text-white font-semibold transition-all duration-300`;
const BuyBtn = tw(Btn)`bg-blue-500 hover:bg-blue-600`;
const BackBtn = tw(Btn)`bg-gray-500 hover:bg-gray-600`;

export default function DetailEA() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = IndicatorProducts.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div tw="text-center text-gray-600 mt-20">
        Product not found.
        <button tw="ml-3 text-blue-500 underline" onClick={() => navigate('/EA')}>
          Back to list
        </button>
      </div>
    );

  return (
    <div tw="bg-gray-100 min-h-screen py-10">
      <Wrapper>
        <Img src={product.image} alt={product.title} />
        <Category>{product.category}</Category>
        <Title>{product.title}</Title>
        <Desc>{product.description}</Desc>
        <Price>${product.price}</Price>

        <ButtonRow>
          <BuyBtn>Buy Now</BuyBtn>
          <BackBtn onClick={() => navigate('/INDICATOR')}>Back</BackBtn>
        </ButtonRow>
      </Wrapper>
    </div>
  );
}
