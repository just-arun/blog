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
    "revision": "f2583f2eb14cd01620ba70f108fc5495"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "2e5ec638043fe315077d64a97e207928"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "126680a3ba53b4624b15d2a2873a43ff"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "347e518053fc0291e4f9fc8af34ea967"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "417cb5dbd6f816b783f337fb9c2768d3"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "da99a906fa213cec0f857938f989ef77"
  },
  {
    "url": "404.html",
    "revision": "4b855cd8af3784f3ab19cceacd32eeea"
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
    "url": "assets/js/20.7be420f8.js",
    "revision": "c4586dccc320ec0a60e129779134b07c"
  },
  {
    "url": "assets/js/21.f2619d95.js",
    "revision": "e91d0fed9b05f2fbfb55ebaf6bad9782"
  },
  {
    "url": "assets/js/22.14ce3818.js",
    "revision": "016b071ec1660d285fdaeae26db7e479"
  },
  {
    "url": "assets/js/23.6ff16015.js",
    "revision": "be1a2439f144d5ed335afa2e9851427c"
  },
  {
    "url": "assets/js/24.ad9ed894.js",
    "revision": "54ee2b34cbd64fcba0395f459142537b"
  },
  {
    "url": "assets/js/25.9a812c2b.js",
    "revision": "4d68a271e4ecaaf530350f6ae314eb14"
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
    "url": "assets/js/app.8ced0733.js",
    "revision": "1de0b529a70da9f97fd24f61d9e21bf8"
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
    "revision": "41825b11c286b4f0b6cfdad8e1c9ff86"
  },
  {
    "url": "page/2/index.html",
    "revision": "c224191c14b815e1478893021f99f57d"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "030adc8e7dcab43ac488b5d9d3800756"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "6e626cb220f19edc8e8fd8e20da8f2f6"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "40f868684af86824fca7c76dfa896e6c"
  },
  {
    "url": "tag/index.html",
    "revision": "150d0d5da2e9e3acfdb1059c2a267d8a"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "455cf76b63367bc263babd6687ffa634"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "cd27e04afe14bdf235b641c1ce9ad5ca"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "8c9bca3f1bb4ce0b20208e67d4516736"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "33a8aa16ea728c210c3c606a10c0a408"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "095c0ddaea017eebc3f87a67102904a1"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "f8eeabc005e593a56f466b533d45e422"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "5baf7d9f57999334e51abddbdb046223"
  },
  {
    "url": "tag/String/index.html",
    "revision": "f5214428d4fa62d26723f8f067c1801e"
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
