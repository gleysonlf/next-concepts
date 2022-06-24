import { Grid } from '@/components/Grid';
import { ResourceCard } from '@/components/ResourceCard';
import { View } from '@/components/View';

const HomePage = () => {
  const items = [
    {
      id: 1,
      Render: () => (
        <ResourceCard
          resource={{
            id: 1,
            name: 'Characters',
            description: 'There is a total of 826 characters',
            resourceURI: '/characters',
            attributionText: '',
            thumbnail: {
              path: '/img/characters',
              extension: 'png',
            },
          }}
        />
      ),
    },
    {
      id: 2,
      Render: () => (
        <ResourceCard
          resource={{
            id: 2,
            name: 'Locations',
            description: 'There is a total of 126 locations',
            resourceURI: '/locations',
            attributionText: '',
            thumbnail: {
              path: '/img/locations',
              extension: 'png',
            },
          }}
        />
      ),
    },
    {
      id: 3,
      Render: () => (
        <ResourceCard
          resource={{
            id: 3,
            name: 'Episodes',
            description: 'There is a total of 51 episodes',
            resourceURI: '/episodes',
            attributionText: '',
            thumbnail: {
              path: '/img/episodes',
              extension: 'png',
            },
          }}
        />
      ),
    },
  ];

  return (
    <View>
      <div className='flex w-full h-full items-center justify-center'>
        <Grid items={items} />
      </div>
    </View>
  );
};

export default HomePage;
