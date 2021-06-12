/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2021/06/12/array-in-javascipt/index.html",
    "revision": "1781dfc4bba990a70ffe8f4287b0bc64"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "8d961a81408460d63a733b8a43353bdd"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "8c43c754891e5efb9f4bda5d88f475fe"
  },
  {
    "url": "404.html",
    "revision": "b8d4f5c2c1214b397618cd3c74ac1726"
  },
  {
    "url": "assets/css/0.styles.4b30a9c9.css",
    "revision": "9e38a27932f9f575a217d08145bb7f67"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/ico.svg",
    "revision": "9236130f3d84104246b12a8d19f423a7"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "1c8469766bbaf816879aa53d5170b684"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.02b890f2.js",
    "revision": "4c6639dfb8a3c1cd1ce9a19a86cd4c6d"
  },
  {
    "url": "assets/js/11.e7295477.js",
    "revision": "1f400f5b2c9f74c60e22e30ea160e78e"
  },
  {
    "url": "assets/js/12.aa0ec399.js",
    "revision": "510211d891d7ea3c703f204c7aeab759"
  },
  {
    "url": "assets/js/13.928f8b12.js",
    "revision": "d5f4f4a521877bc4d1701afae7aa0970"
  },
  {
    "url": "assets/js/14.db59d95b.js",
    "revision": "546b9244f0c93cf282f050100e11f038"
  },
  {
    "url": "assets/js/15.8096973b.js",
    "revision": "7e54441322ebfe4bc4172113773ee7b5"
  },
  {
    "url": "assets/js/16.96667673.js",
    "revision": "2f874328cb23c9292d4838295adcf66c"
  },
  {
    "url": "assets/js/17.9c78fb19.js",
    "revision": "a9ef4a52cfd5eafb331bb22887cf52f5"
  },
  {
    "url": "assets/js/18.3ba25b41.js",
    "revision": "836c375a8b2235e177c326fb287aa3cf"
  },
  {
    "url": "assets/js/19.4315b3b7.js",
    "revision": "ac640f00456d186b17b883ed61ad285f"
  },
  {
    "url": "assets/js/20.0c55aa00.js",
    "revision": "5c9d487c709842da72d6665e2555f3c2"
  },
  {
    "url": "assets/js/21.11e7e84f.js",
    "revision": "cae0e08e58004ccf31cddb78a97eb399"
  },
  {
    "url": "assets/js/22.2f6a1d27.js",
    "revision": "31185500128ff61a30bc1cf5f7291df1"
  },
  {
    "url": "assets/js/23.4c5a20f9.js",
    "revision": "8a8dd2674ee9827d6c0ef3d6a718347f"
  },
  {
    "url": "assets/js/3.9a5dae9c.js",
    "revision": "d4f812db8b8b650ae2710a90704d3476"
  },
  {
    "url": "assets/js/4.26a6aab7.js",
    "revision": "e5809a6bece047812e3f14a0136fefae"
  },
  {
    "url": "assets/js/5.4c213529.js",
    "revision": "2e18843f23148b4aaf7175587c4aedab"
  },
  {
    "url": "assets/js/6.fa1a7adb.js",
    "revision": "e455b71a83997957a462834480a05e9a"
  },
  {
    "url": "assets/js/7.d5c5844b.js",
    "revision": "f1ea9e456db1ed161848ade8f5250478"
  },
  {
    "url": "assets/js/8.ff33ec4d.js",
    "revision": "634f54ac2c4e4ed5541e8512c92da2d3"
  },
  {
    "url": "assets/js/9.e58a124e.js",
    "revision": "2b3eed3930fd11e1ba42f6dd4293199a"
  },
  {
    "url": "assets/js/app.1893cd6d.js",
    "revision": "0937b2132ad58d4fb26cb0685ed4c5c4"
  },
  {
    "url": "assets/js/ga.js",
    "revision": "01c825cf6bb9b30be6e3eeb8750079a8"
  },
  {
    "url": "assets/js/vuejs-paginate.94257100.js",
    "revision": "1a7ab36c9bd57769f00ae3896de9faf1"
  },
  {
    "url": "index.html",
    "revision": "180ce2c1fa417e88f39a78068548c14e"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "4d0bc05287a60e219aa4be1996a03227"
  },
  {
    "url": "tag/index.html",
    "revision": "92a729fe504d85a5b2a7b9b0c9940988"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ea5b4ba11d2d8af9b42ceb413701178e"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "5f94fb6392a6e454a9f33c5f3898c27a"
  },
  {
    "url": "tag/String/index.html",
    "revision": "1d472e37dc1e3d2274aa004ae7fb0c1c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
