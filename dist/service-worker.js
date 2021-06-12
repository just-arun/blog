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
    "revision": "6aaa37e7d4b6ef44fb2224e83977f457"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "8f8250eb40bab9c3ec036ecd3c853d84"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "409babd7f6e0342c519e5606cb310ac0"
  },
  {
    "url": "404.html",
    "revision": "b15318e389b3f460feb8569065b47ce2"
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
    "url": "assets/js/app.aea21ed5.js",
    "revision": "11ef98a0c484e57cf8afd56e854f03c8"
  },
  {
    "url": "assets/js/ga.js",
    "revision": "043279d1dc0152c776554e946dd8b8de"
  },
  {
    "url": "assets/js/vuejs-paginate.94257100.js",
    "revision": "1a7ab36c9bd57769f00ae3896de9faf1"
  },
  {
    "url": "index.html",
    "revision": "9678af1fc14ca736f888cf8db83a273c"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "1105004023f00767a7bde12beb789b71"
  },
  {
    "url": "tag/index.html",
    "revision": "4d5a3f288805600c29067e234669eedd"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "7c01216d1e3478ced064ce710ea59f0c"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "91009ccc0a0cca41f5f669f684da1aa8"
  },
  {
    "url": "tag/String/index.html",
    "revision": "7777ae63152eb0918f6a6ac987353867"
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
