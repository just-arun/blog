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
    "revision": "6817b671b088f97353cd660142fe1fd8"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "69f194325790205a2d5efb01d06c4a2e"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "cac4b95a3febaedc850c02809cf8bb71"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "d05511b37f5146d40132d5dd2b15bb39"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "c6afe196608e0aa1d347a947b5ea93a4"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "0c5dcc94ad152e94ef08c54ec27cc5de"
  },
  {
    "url": "404.html",
    "revision": "4a00e60d0fdab4f25d80367e55f93bbe"
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
    "url": "assets/js/15.64f174e6.js",
    "revision": "c73f108a6110583239c92c93a0bca2db"
  },
  {
    "url": "assets/js/16.8dc9e506.js",
    "revision": "c9a7b1309834137df6e17cf5bdd759dc"
  },
  {
    "url": "assets/js/17.60e8ff16.js",
    "revision": "e64329bf90b1d9fb01ff5b73d41f2db0"
  },
  {
    "url": "assets/js/18.043b1975.js",
    "revision": "28074668ecd1e41b3827e34367bd9635"
  },
  {
    "url": "assets/js/19.3929294e.js",
    "revision": "3d96ec0777994fcf6be4c52c28544908"
  },
  {
    "url": "assets/js/20.309c9143.js",
    "revision": "f8de0faf1556a8a283639754acdc43ac"
  },
  {
    "url": "assets/js/21.562c9aae.js",
    "revision": "6c21b9ffe7fdc37028968444d252272a"
  },
  {
    "url": "assets/js/22.fd9b94d3.js",
    "revision": "719c698023d66cf528b0deb660fa9c34"
  },
  {
    "url": "assets/js/23.9af8042d.js",
    "revision": "4228e37a18691fd279094559d683b6e5"
  },
  {
    "url": "assets/js/24.2b749515.js",
    "revision": "308e3b228bc1da80f816f72183d1ada4"
  },
  {
    "url": "assets/js/25.084f5a82.js",
    "revision": "54bc4a1e0ce1cca2bc7410fe53154836"
  },
  {
    "url": "assets/js/26.dbafba76.js",
    "revision": "71843dbd985e9a8f0676672b0fac5c69"
  },
  {
    "url": "assets/js/27.1a31496a.js",
    "revision": "fcbbdfeaa2c305f6b7d165d48f45d7cd"
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
    "url": "assets/js/ads.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/js/app.a654e29a.js",
    "revision": "c2828d91e0e10b010a1251c1351c5193"
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
    "revision": "8362ebed45f130eaf0e58ee0b3a835e6"
  },
  {
    "url": "page/2/index.html",
    "revision": "5d4255887a34d0fc4564297dfb342478"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "695ffe1f3630fe7c77fcd6d107d201a1"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "de1220a861bec6d40b48d26256c9d08d"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "465f7c9816320110c16b0402f2332f24"
  },
  {
    "url": "tag/index.html",
    "revision": "89ef43efbf93bd3733accca356b25434"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "738cc2d4799403d0c7a9675190ddf6e3"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "a249d0f69fa1a5b9664e14f324c8e842"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "7be9951ab0299c38bdaa38d0d54988e1"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "7f53816ef59d913b0d99065db38e9dff"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "a1996990405a412017d07966397b0717"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "458cac7ce4f0ecf9c850191166da5449"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "229aa2158663e237a3b5780c912512fa"
  },
  {
    "url": "tag/String/index.html",
    "revision": "104e1c9344e25bbb36cf786cca1b6501"
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
