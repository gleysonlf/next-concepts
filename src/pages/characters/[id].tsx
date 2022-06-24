import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { fetchApi } from '@/lib/api';
import clsxm from '@/lib/clsxm';

import { View } from '@/components/View';

import { Character } from '@/types';

type CharacterPageProps = {
  character?: Character;
};

const CharacterPage = ({ character }: CharacterPageProps) => {
  const router = useRouter();
  const { id } = router.query;

  const handleStatus = (status: string) => {
    switch (status) {
      case 'Alive':
        return (
          <span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full'>
            {status}
          </span>
        );
      case 'Dead ':
        return (
          <span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full'>
            {status}
          </span>
        );

      default:
        return (
          <span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full'>
            {status}
          </span>
        );
    }
  };

  return router.isFallback || !character ? (
    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    <View title='Character'>
      <p>Loading informations about character {id}.</p>
    </View>
  ) : (
    <View title={`Character ${character.id}`}>
      <div className='rounded-md shadow-lg text-gray-600'>
        <div className='md:flex px-4 leading-none'>
          <div className='flex-none'>
            <figure
              className={clsxm(
                'h-72 w-56 relative transform -translate-y-4',
                'border-1 border-gray-300 shadow-lg'
              )}
            >
              <Image
                src={character.image}
                alt='pic'
                className='rounded-md'
                layout='fill'
              />
            </figure>
          </div>

          <div className='flex-col'>
            <p className='ml-8 pt-4 text-2xl font-bold'>{character.name}</p>
            <hr className='hr-text' data-content='' />
            <div className='text-md px-4 my-2 ml-4 leading-8'>
              <div className='flex justify-between'>
                <span className='font-bold'>
                  {handleStatus(character.status)} | {character.species}, gender{' '}
                  {character.gender}
                </span>
                <span className='font-bold'></span>
              </div>
              <p>Origin: {character.origin.name}</p>
              <p>
                Last known location:{' '}
                <Link href={character.location.url}>
                  <a>{character.location.name}</a>
                </Link>
              </p>
              <div className='text-xs'>
                <button
                  type='button'
                  className={clsxm(
                    'border border-gray-400 font-semibold',
                    'rounded-md px-4 py-2 my-2',
                    'transition duration-500 ease select-none',
                    'hover:bg-gray-900 hover:text-gray-200 focus:outline-none focus:shadow-outline'
                  )}
                >
                  Epsode List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/character/1` and `/character/2` are generated at build time
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // Enable statically generating additional pages
    // For example: `/character/3`
    fallback: true,
  };
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetchApi(`character/${params?.id}`);
  const character = await res.json();

  // Pass character data to the page via props
  return {
    props: { character },
    // Re-generate the character at most once per second
    // if a request comes in
    revalidate: 1 * 60 * 60,
  };
};

export default CharacterPage;
