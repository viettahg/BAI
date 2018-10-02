const TOKEN_TYPE_IMAGE_URLS = [
  '/images/token-images/cheap-dota2-dragonclaw-hook-9682.jpg',
];

const TOKEN_TYPE_IMAGE_URLS_SMALL = [
  '/images/token-images/cheap-dota2-dragonclaw-hook-9682.jpg',
];

export default function (tokenType, size) {
  switch (size) {
    case 'small':
      return TOKEN_TYPE_IMAGE_URLS_SMALL[tokenType];
    default:
      return TOKEN_TYPE_IMAGE_URLS[tokenType];
  }
}
