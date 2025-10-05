import React from 'react';
import tw from 'twin.macro';

const SkeletonCard = tw.div`border rounded-xl p-6 animate-pulse`;

export default function EASkeleton() {
  return <SkeletonCard className="h-24 bg-gray-200"></SkeletonCard>;
}
