import Link from 'next/link';

import clsxm from '@/lib/clsxm';

import { routes } from '@/router.settings';

import { RCProps } from '@/types';

type Props = RCProps<
  Partial<{
    itemClassName: string;
  }>
>;

export const Nav = ({ className, itemClassName }: Props) => {
  return (
    <nav className={clsxm('list-none', className)}>
      {Object.values(routes).map((item) => (
        <Link key={item.path} href={item.path}>
          <a
            className={clsxm(
              'text-sm uppercase',
              'inline-flex items-center py-4 px-8',
              'transition-all ease-in-out duration-300',
              'border-b-2 border-transparent',
              'hover:text-blue-300 hover:border-blue-600',
              //'hover:ring-offset-2 houver:ring-transparent hover:ring-2 ',
              itemClassName
            )}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};
