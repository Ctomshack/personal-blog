import React from 'react';
import Image from 'next/image';

const BakedImage = () => {
  return (
    <div><Image
    src="/bakedImage.png"
    alt="project image"
    layout="fill"
  /></div>
  )
}

export default BakedImage