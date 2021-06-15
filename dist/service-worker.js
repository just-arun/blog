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
    "revision": "b99b5de68180b82f31621a3832d04ffb"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "70c7a6cc7a5c2dc3cd0e0823b65983f0"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "b572ef50615a786140b88212fe582bde"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "c5b8ed1c34af9745e81de17e13537118"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "f8190e7c8e47f9eca7a46311d28a88e1"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "d74f16730f822d16820eddc1b5897a2d"
  },
  {
    "url": "404.html",
    "revision": "a8b1b34d8b36e5979fbd97a7a91998d7"
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
    "url": "assets/js/12.47f06b53.js",
    "revision": "ca7fd357103a872e599199449aadd8cf"
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
    "url": "assets/js/16.9888057a.js",
    "revision": "05bf58ed15c93f4ae0f4a6f5a4268276"
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
    "url": "assets/js/20.23818145.js",
    "revision": "60b5d5038f93ca8c4c6b190edc2b2c5c"
  },
  {
    "url": "assets/js/21.cb8e347b.js",
    "revision": "72ab9e398d5eabcf0e5844b6d4820732"
  },
  {
    "url": "assets/js/22.7f221288.js",
    "revision": "1ef660575d9df684efc3468450b04bd0"
  },
  {
    "url": "assets/js/23.af30e895.js",
    "revision": "36859b4ee097b53cc620e5f5398af346"
  },
  {
    "url": "assets/js/24.1b996cf1.js",
    "revision": "2ed350634dbe804d9665e9df8c5d6a3a"
  },
  {
    "url": "assets/js/25.678440b5.js",
    "revision": "06845a8f8029c3cc4575e095fe8484f9"
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
    "url": "assets/js/6.acddffc0.js",
    "revision": "725af140f275e2b0b8371ad4cd70e2ac"
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
    "url": "assets/js/app.add918e6.js",
    "revision": "e1414d5d918a2b8aaf13a8c65d4274cd"
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
    "revision": "2e7407d0b22e3be071a1cc553f11506a"
  },
  {
    "url": "page/2/index.html",
    "revision": "a99ae6a3d290648681894364ba2f87bc"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "d5c7ea2c8c20a7fd2e2ae2e6332db490"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "9e9ce0ca150fd1edcf4605300abf2290"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "3823921ce64938ddcfaffa1f1c51f729"
  },
  {
    "url": "tag/index.html",
    "revision": "d7f2c05f18b39e3ce4d22f1b9c6ab440"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "373e9e8c10893e84e0d3a9299f07ab43"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "7f141aa329eb0bf333899d37847cc3e4"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "afafcf5a3ca704c0fdd5c345c2457769"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "8843b52de2e6134f0c748f0969ff141f"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "08ab8d9451f3622f4a98dee581426515"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "c0152027dc9a632f602a91e7f67de911"
  },
  {
    "url": "tag/String/index.html",
    "revision": "3ccfdaa6a537abf896a55d235ac3de63"
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
