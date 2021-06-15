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
    "revision": "7b490bab503343da24d8e14b3676aea8"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "ec67f5c55d27fd64ba06e75feb2d9952"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "5038b9380ba8233a0ca4b8b4a180fdbd"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "bc0fc359402e73773d2d32d7e1d902d0"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "3f0cfb39fe156f2d887a2fb235f657ac"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "97a3906578bb5aa4833c22b2c0d21742"
  },
  {
    "url": "404.html",
    "revision": "2a688a4589a7094aacf5038f004b3986"
  },
  {
    "url": "assets/css/0.styles.3afcd97f.css",
    "revision": "daca06237c8c0b679153c3fd40f82c88"
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
    "url": "assets/js/10.bcebb8b9.js",
    "revision": "72a1ed57e2bc6658ac4c5e93e2e626ea"
  },
  {
    "url": "assets/js/11.ce205783.js",
    "revision": "4ef85faf09b4f7247c57dbfe8975a607"
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
    "url": "assets/js/20.3c2808e5.js",
    "revision": "ea1e5cb71d67b885737f2af9ce14b6ae"
  },
  {
    "url": "assets/js/21.1021c62a.js",
    "revision": "4de0bed8ee5b4a184131bd5c0fab35e2"
  },
  {
    "url": "assets/js/22.14ce3818.js",
    "revision": "016b071ec1660d285fdaeae26db7e479"
  },
  {
    "url": "assets/js/23.7451e963.js",
    "revision": "2f225ebea9a2fca98a5417620907a9d1"
  },
  {
    "url": "assets/js/24.f8fb2118.js",
    "revision": "a41f0dc0743063e57c9bdeeac1ae937f"
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
    "url": "assets/js/app.0002923b.js",
    "revision": "e1ee9a44f98ca64b7e8a92f2778b94d2"
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
    "revision": "35138c2bba7f75749d6c2477f8be9063"
  },
  {
    "url": "page/2/index.html",
    "revision": "2389a026feae94ef1ca469bacb28210a"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "1582b7eb41ce7b75eadfdb286d5f4225"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "5791202bdf746575abdbe5eb18c66116"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "ae9a788accb92647cde7afa83649375f"
  },
  {
    "url": "tag/index.html",
    "revision": "55f051327c264f883ef1137e0530f1ca"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "ec10fa97e9e049fb207441770ce8814c"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "f5d523f06faf67dc06cf867a6f77a87f"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "733fb1e2f2bd8a90a39dba4a18e7a2ee"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "6f3d87cacf4ef2197894f6d31e88845c"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "bc1ffcfbd3cfde032596e99c237a2d1a"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "97a1595e895dfce0e829fcad58ea7784"
  },
  {
    "url": "tag/String/index.html",
    "revision": "9c7fc3139fbc4395a6377d8a8675402f"
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
