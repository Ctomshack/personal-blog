import React from 'react';
import Image from 'next/image';

const BlogImage = () => {
  return (
    <div><Image
    src="/blogImage.png"
    alt="project image"
    layout="fill"
  /></div>
  )
}

export default BlogImage