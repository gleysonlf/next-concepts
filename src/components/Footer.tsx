import Image from 'next/image';

export const Footer = () => (
  <footer className='bg-gray-300 text-gray-600 px-6 flex items-center justify-between'>
    <figure className='relative w-40 h-20 my-2'>
      <Image alt='DevLira' src='/img/logo_devlira.svg' layout='fill' />
    </figure>
    <div>
      {'© '}
      <span className='font-bold'>GleysonLF</span>
    </div>
  </footer>
);
