import Link from 'next/link';

import clsxm from '@/lib/clsxm';

import { ResourceThumbnail } from './ResourceThumbnail';

import { RCProps, Resource } from '@/types';

export type Props = RCProps<
  Partial<{
    resource: Resource;
  }>
>;

export const ResourceCard = ({ resource, children, className }: Props) => {
  return (
    <Link href={resource?.resourceURI || '#'}>
      <a title={resource?.name}>
        <section
          className={clsxm('p-4 border border-gray-200  rounded-md', className)}
        >
          <header className='flex flex-col items-center'>
            {resource?.thumbnail ? (
              <ResourceThumbnail
                thumbnail={resource.thumbnail}
                className='mb-4'
              />
            ) : null}
            <h2 className='text-md  text-gray-700 uppercase'>
              {resource?.name}
            </h2>
            <h3 className='text-sm text-gray-500'>{resource?.description}</h3>
          </header>
          {(typeof children === 'function' && children({ resource })) ||
            children}
          <footer>
            <p className='text-xs text-center text-gray-500'>
              {resource?.attributionText}
            </p>
          </footer>
        </section>
      </a>
    </Link>
  );
};
