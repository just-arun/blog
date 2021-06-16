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
    "revision": "3bc5ec62ae38d2cebfc83a966ec6b256"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "c57f9dd4b662c6451e7ef14aa733b32e"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "faab81c729a33280658d7631c1092094"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "4ee44fd11f95cf7dfc0a02ea8c0fee74"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "ddacb07c08d86f2e442e606ae6d778c1"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "056b6b2b8ceeb8d34b5ad074f51fe8c1"
  },
  {
    "url": "404.html",
    "revision": "b24b9d27273044ef66f00f41d72c0df5"
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
    "url": "assets/js/21.0d47a155.js",
    "revision": "8310530edb32a00bea8e84d25be69168"
  },
  {
    "url": "assets/js/22.2e3d849e.js",
    "revision": "1231a985c2bd54ae7d5333d037f1033e"
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
    "url": "assets/js/25.24855448.js",
    "revision": "96eb2ad2489f1333e2d6e215c99d7741"
  },
  {
    "url": "assets/js/26.013458fc.js",
    "revision": "99700f78a55513999644ef5bfda99dfb"
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
    "url": "assets/js/app.77220ffd.js",
    "revision": "b261c04fb3afff21e17a6df05838ef07"
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
    "revision": "c54f9b8e4d527c0cdfd178cb167b6f7f"
  },
  {
    "url": "page/2/index.html",
    "revision": "4ef05e9e09659de76140c8de1bc37fd4"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "8412ec21328dd5968d12bed2e3e263fa"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "841564b1cbeb59d738c7e2fbdbc84260"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "7c272cd4ed2cae6fe9e5eda70b71b54f"
  },
  {
    "url": "tag/index.html",
    "revision": "503df4bdcf44f71001a6da8b813b063d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a16a429b4922cd963d097166cf0283e6"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "f189bf3dae7d104a39afa2e6fde4ea32"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "6026401db3f36755b247fb67af6bb02f"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "66586ef59a3bc38ec3656f91430e150b"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "d423bac3318d8139cb01c92c7fef2938"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "cb28bafc4bf2f4a083e24d6227af74c9"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "154cec63b662330b821b32e01ecd4bf7"
  },
  {
    "url": "tag/String/index.html",
    "revision": "05b272ac27b596347766d3d77c3268a4"
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
