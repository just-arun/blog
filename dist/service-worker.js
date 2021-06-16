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
    "revision": "e35e9a1b3e9200eb2fb0d2ecf7d85243"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "46aab279ceaa0d4524d28927ca128b09"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "2d6d9568c9f526cc817c28ad537614ed"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "88355b8b1f58de64b2e1d8f6e75b8c4b"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "24a52e8e7917eaa26d13ea72ba9dfbf4"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "2c0f97b8b11bbfecb833d26c4b526cd5"
  },
  {
    "url": "404.html",
    "revision": "fcc58994f40fa57cc0a7b31dad41e62d"
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
    "url": "assets/js/10.0f5f26b6.js",
    "revision": "4d583832ce909016b88397049639f157"
  },
  {
    "url": "assets/js/11.3e66afaf.js",
    "revision": "fef7354d91642a02efaa2cd3e8f932ad"
  },
  {
    "url": "assets/js/12.2e205992.js",
    "revision": "9a26056d7f18b12a50e6bb4b6309d34e"
  },
  {
    "url": "assets/js/13.71a5f306.js",
    "revision": "12ccbfd7d7543ff24239f75072fce319"
  },
  {
    "url": "assets/js/14.daeaf6bf.js",
    "revision": "4ef17277e31e6221381094474c35f4dc"
  },
  {
    "url": "assets/js/15.929b06ed.js",
    "revision": "ec40a6899fbfc749e324fcf1a08525d6"
  },
  {
    "url": "assets/js/16.73b790a0.js",
    "revision": "978fca49323f0ec55b48f3b22140856b"
  },
  {
    "url": "assets/js/17.ab2d164a.js",
    "revision": "cc2d8f27c85fac8ab79e42d3505d136b"
  },
  {
    "url": "assets/js/18.faf71060.js",
    "revision": "9c663e3d4d16c9ed88b6a50768448f5e"
  },
  {
    "url": "assets/js/19.6575736c.js",
    "revision": "9d1c8b4e80581054cf0b0e55719c5a1a"
  },
  {
    "url": "assets/js/20.350a84b4.js",
    "revision": "b31305c28ced855ba0c1b002a9b9b909"
  },
  {
    "url": "assets/js/21.1021c62a.js",
    "revision": "4de0bed8ee5b4a184131bd5c0fab35e2"
  },
  {
    "url": "assets/js/22.7f221288.js",
    "revision": "1ef660575d9df684efc3468450b04bd0"
  },
  {
    "url": "assets/js/23.7451e963.js",
    "revision": "2f225ebea9a2fca98a5417620907a9d1"
  },
  {
    "url": "assets/js/24.ad9ed894.js",
    "revision": "54ee2b34cbd64fcba0395f459142537b"
  },
  {
    "url": "assets/js/25.fcad2586.js",
    "revision": "2a3c8802b55ed74bb4172a18a217a238"
  },
  {
    "url": "assets/js/26.cf2abb8f.js",
    "revision": "48a6ece2c32c97f0ffcaf26d0143b0f0"
  },
  {
    "url": "assets/js/3.9a5dae9c.js",
    "revision": "d4f812db8b8b650ae2710a90704d3476"
  },
  {
    "url": "assets/js/4.b48a36dd.js",
    "revision": "79d9d892bdb10878af160de2c3dd5531"
  },
  {
    "url": "assets/js/5.ab0ac9bc.js",
    "revision": "a7c1b90bf145f2db5c04df44f1917701"
  },
  {
    "url": "assets/js/6.f90fb057.js",
    "revision": "27f841f2b5833e960a043f24db6a818f"
  },
  {
    "url": "assets/js/7.a376d0fb.js",
    "revision": "72fad242c2382a3a1d053dcb6826b281"
  },
  {
    "url": "assets/js/8.d690b6b0.js",
    "revision": "efaac915e9d090e0ccf372113eb7e624"
  },
  {
    "url": "assets/js/9.c8b5c59b.js",
    "revision": "771536fd65aaeaae23825a431dc29098"
  },
  {
    "url": "assets/js/app.02b0b322.js",
    "revision": "101fa196210f6ddb18281bd412c02c64"
  },
  {
    "url": "assets/js/ga.js",
    "revision": "70bdb4ceb321334a582f87f8a4173f26"
  },
  {
    "url": "assets/js/vuejs-paginate.94257100.js",
    "revision": "1a7ab36c9bd57769f00ae3896de9faf1"
  },
  {
    "url": "index.html",
    "revision": "18f7cb46a503f5d4304504fe19cd5b26"
  },
  {
    "url": "page/2/index.html",
    "revision": "fa81c85e105f4583ee2917580c7dde3e"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "c1afede2d9e20fa7239879bc97abbdf5"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "cc34966977b62c0854c481a148c86085"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "b26e43a9da003486546a6396455765c3"
  },
  {
    "url": "tag/index.html",
    "revision": "9c41be5a1ab978af0705b31916150cdd"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "fd51f355f48b5c53e03656aebbfaade0"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "fa3a3c2a8cba3c02506ce92b45c0849d"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "83381f428a689234e1412519e654eb84"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "7198b3c5c96c0b03eaab244401f5e0c2"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "ce8e5d42852373e01df9a22a068529a8"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "2622b8954cf5d42bf6cad4068ff4d803"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "c7ee101a9703f7b6052cd44ba87bfbe0"
  },
  {
    "url": "tag/String/index.html",
    "revision": "b0243a27477b275ea9a642036cc6cb2f"
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
