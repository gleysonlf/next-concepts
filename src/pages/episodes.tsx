import { useEffect, useState } from 'react';

import { fetchApi } from '@/lib/api';

import { View } from '@/components/View';

import { Episode } from '@/types';

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchApi('episode/10,23,28,32')
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data);
        setLoading(false);
      });
  }, []);

  const handleCards = () => {
    return !episodes ? (
      <p>null</p>
    ) : (
      episodes.map((ep) => EpisodeCard(ep.id, ep))
    );
  };

  const EpisodeCard = (i: number, episode: Episode) => (
    <div className='grow m-2 p-6 bg-gray-100 rounded-lg'>
      <div className='mb-5'></div>
      <h3 className='text-lg font-bold mb-2'>{episode.episode}</h3>
      <p className='text-sm leading-6 text-gray-600'>{episode.name}</p>
    </div>
  );

  return (
    <View title='Episodes List'>
      <div className='flex justify-center items-center'>
        {isLoading ? <p>Loading episodes...</p> : handleCards()}
      </div>
    </View>
  );
};

export default EpisodesPage;
