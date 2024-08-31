// const fs = require('fs');
// const path = require('path');
// const { SitemapStream, streamToPromise } = require('sitemap');
// const { Readable } = require('stream');

// const urls = [
//   { url: 'https://ecombithub.com/', changefreq: 'daily', priority: 1.0 },
//   { url: 'https://ecombithub.com/blog', changefreq: 'daily', priority: 0.8 },
//   { url: 'https://ecombithub.com/about', changefreq: 'monthly', priority: 0.8 },
//   { url: 'https://ecombithub.com/contact', changefreq: 'monthly', priority: 0.8 },
//   { url: 'https://ecombithub.com/app', changefreq: 'monthly', priority: 0.8 },
//   { url: 'https://ecombithub.com/terms-and-conditions', changefreq: 'monthly', priority: 0.8 },
//   { url: 'https://ecombithub.com/privacy-policy', changefreq: 'monthly', priority: 0.8 },
//   { url: 'https://ecombithub.com/shopify/app/:handle', changefreq: 'monthly', priority: 0.8 },
// ];

// const sitemapStream = new SitemapStream({ hostname: 'https://ecombithub.com' });


// const readableStream = Readable.from(urls);


// readableStream.pipe(sitemapStream);


// streamToPromise(sitemapStream).then((sitemapContent) => {

//   fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
//   console.log('Sitemap created successfully!');
// });


const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/app', changefreq: 'monthly', priority: 0.8 },
  { url: '/terms-and-conditions', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/shopify/app/:handle', changefreq: 'monthly', priority: 0.8 },
  { url: '/shopify/:handle', changefreq: 'monthly', priority: 0.8 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://ecombithub.com' });
const readableStream = Readable.from(urls);

readableStream.pipe(sitemapStream);

streamToPromise(sitemapStream)
  .then((sitemapContent) => {
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
    console.log('Sitemap created successfully!');
  })
  .catch((error) => {
    console.error('Error creating sitemap:', error);
  });
