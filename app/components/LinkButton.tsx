import React from 'react';

const LinkButton = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className='bg-[#00b2ff] text-white py-1.5 px-4 rounded-md text-xl'
  >
    {text}
  </a>
);

export default LinkButton;
