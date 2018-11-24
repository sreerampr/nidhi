const title = 'Title';
const shortName = 'Short Name';
const tagline = 'tagline';
const description = tagline;
const keywords = 'keyword';

module.exports = {
  seo: {
    title,
    description,
    keywords,
  },
  manifest: {
    seed: {
      'short_name': shortName,
      'name': title,
      'start_url': '/',
      'background_color': '#000000',
      'display': 'standalone',
      'theme_color': 'orange',
      "icons": [
        {
          "src": "/img/logo-192.png",
          "type": "image/png",
          "sizes": "192x192",
        },
        {
          "src": "/img/logo-512.png",
          "type": "image/png",
          "sizes": "512x512",
        },
      ],
    },
  },
  navbar: {
    title,
    tagline,
  },
  ports: {
    wdsPort: 9000,
    serverPort: 9000,
  },
  dist: '_dist',
};
