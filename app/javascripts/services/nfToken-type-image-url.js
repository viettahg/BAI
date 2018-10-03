const TOKEN_TYPE_IMAGE_URLS = [
  {
    title: 'Dragonclaw Hook',
    image: '/images/token-images/cheap-dota2-dragonclaw-hook-9682.jpg',
    price: 0.03,
  },
  {
    title: 'Vigil Triumph',
    image: '/images/token-images/cheap-dota2-vigil-triumph-21872.jpg',
    price: 0.03,
  },
  {
    title: 'Sullen Harvest',
    image: '/images/token-images/cheap-dota2-sullen-harvest-20909.jpg',
    price: 0.03,
  },
  {
    title: 'Sea Rake Bridle',
    image: '/images/token-images/cheap-dota2-sea-rake-s-bridle-20164.jpg',
    price: 0.03,
  },
  {
    title: 'Astral Drift',
    image: '/images/token-images/cheap-dota2-astral-drift-461.jpg',
    price: 0.03,
  },
  {
    title: 'Scorching Talon',
    image: '/images/token-images/cheap-dota2-scorching-talon-20130.jpg',
    price: 0.03,
  },
];

const TOKEN_TYPE_IMAGE_URLS_SMALL = [
  {
    title: 'Dragonclaw Hook',
    image: '/images/token-images/cheap-dota2-dragonclaw-hook-9682.jpg',
    price: 0.03,
  },
  {
    title: 'Vigil Triumph',
    image: '/images/token-images/cheap-dota2-vigil-triumph-21872.jpg',
    price: 0.03,
  },
  {
    title: 'Sullen Harvest',
    image: '/images/token-images/cheap-dota2-sullen-harvest-20909.jpg',
    price: 0.03,
  },
  {
    title: 'Sea Rake Bridle',
    image: '/images/token-images/cheap-dota2-sea-rake-s-bridle-20164.jpg',
    price: 0.03,
  },
  {
    title: 'Astral Drift',
    image: '/images/token-images/cheap-dota2-astral-drift-461.jpg',
    price: 0.03,
  },
  {
    title: 'Scorching Talon',
    image: '/images/token-images/cheap-dota2-scorching-talon-20130.jpg',
    price: 0.03,
  },
];

export default function (tokenType, size) {
  const item = TOKEN_TYPE_IMAGE_URLS_SMALL[tokenType];
  return item ? item.image : TOKEN_TYPE_IMAGE_URLS_SMALL[0];
  // console.log('item %d = %s', tokenType, JSON.stringify(TOKEN_TYPE_IMAGE_URLS_SMALL[tokenType]));
  // switch (size) {
  //   case 'small':
  //     return TOKEN_TYPE_IMAGE_URLS_SMALL[tokenType].image;
  //   default:
  //     return TOKEN_TYPE_IMAGE_URLS[tokenType].image;
  // }
}
