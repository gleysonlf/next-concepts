import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

import { RCProps } from '@/types';

type Props = RCProps<
  Partial<{
    title?: string;
  }>
>;

export const View = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className='flex overflow-x-hidden'>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <div className='flex flex-1 flex-col'>
        <Header onOpenSidebar={onOpen} />
        <main
          className={clsxm(
            'min-h-[calc(100vh-60px)] flex flex-1 flex-col p-8',
            "bg-no-repeat bg-bottom bg-[url('/img/hero.svg')]"
          )}
        >
          {title && (
            <h1 className='text-gray-700 text-3xl font-bold my-8'>{title}</h1>
          )}
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
