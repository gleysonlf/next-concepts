import Image from 'next/image';

import clsxm from '@/lib/clsxm';

import { RCProps, Resource } from '@/types';

type Props = RCProps<Pick<Resource, 'thumbnail'>>;

export const ResourceThumbnail = ({ thumbnail, className }: Props) => {
  const src = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <figure className='w-[150px] h-[150px] relative'>
      <Image
        src={src}
        alt=''
        className={clsxm('border-4 border-gray-200 rounded-full', className)}
        layout='fill'
      />
    </figure>
  );
};
