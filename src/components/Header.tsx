import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/router.settings';

import { MenuIcon } from './icons/MenuIcon';
import { Nav } from './Nav';

import { RCProps } from '@/types';

type Props = RCProps<
  Partial<{
    onOpenSidebar: () => void;
  }>
>;

export const Header = ({ onOpenSidebar }: Props) => {
  return (
    <header className='bg-gray-800 px-8 flex items-center py-4 lg:py-0'>
      <Link href={routes.HOME.path}>
        <a className='flex items-center'>
          <Image src='/img/logo_dark.svg' alt='Logo' width={32} height={32} />
          <h1 className='text-white uppercase font-bold mx-2'>
            Rick and Morty
          </h1>
        </a>
      </Link>
      <button
        type='button'
        title='Sidebar'
        className='ml-auto'
        onClick={onOpenSidebar}
      >
        <MenuIcon className='text-white h-8 w-8 lg:hidden' />
      </button>
      <Nav className='hidden text-white ml-auto lg:flex' />
    </header>
  );
};
