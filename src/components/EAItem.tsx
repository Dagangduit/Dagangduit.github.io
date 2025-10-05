import React from 'react';
import tw from 'twin.macro';

const Card = tw.div`border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer`;
const Title = tw.h3`text-lg font-semibold`;
const Desc = tw.p`mt-2 text-sm text-gray-500`;
const Button = tw.button`mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`;

export default function EAItem({ product, getLink }: { product: any; getLink: (id: number) => string }) {
  return (
    <Card onClick={() => window.location.href = getLink(product.id)}>
      <Title>{product.title}</Title>
      <Desc>{product.body}</Desc>
      <Button>View Details</Button>
    </Card>
  );
}
