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
    "revision": "dd5cc8387fabe154b8717c70fbfdbd7e"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "01ad72b7688d4eba743fb0e45c9ba7e7"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "6953cc0601082f002e361bb568a79348"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "073520e8a4d28280a9b4ae2dda7e41e1"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "c541072f2e270eb9ee1afd607ae33cf3"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "25126edf89ab7abcf24e861b2ce93171"
  },
  {
    "url": "2021/06/18/class-and-methods-in-javascript/index.html",
    "revision": "7c6645e9970f48466ceb4ec1f7b2deb6"
  },
  {
    "url": "404.html",
    "revision": "a34d678f6ab2501bc8b8b4b4b4aa3d45"
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
    "url": "assets/js/14.c3604ead.js",
    "revision": "45bc70d79963a98b8e5047f06b223b80"
  },
  {
    "url": "assets/js/15.7ec269db.js",
    "revision": "ac6ace44d864d3fb3c053c529f614b9f"
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
    "url": "assets/js/21.cffb4e41.js",
    "revision": "a1340743ad7531e6b20a8975e14419ed"
  },
  {
    "url": "assets/js/22.2e3d849e.js",
    "revision": "1231a985c2bd54ae7d5333d037f1033e"
  },
  {
    "url": "assets/js/23.2beffabb.js",
    "revision": "bcfce8d573e9e56d68dd6f77c935550a"
  },
  {
    "url": "assets/js/24.4ecefe57.js",
    "revision": "afc6ac2e10b2b6e4854b4366c5ca4ec4"
  },
  {
    "url": "assets/js/25.465e84e6.js",
    "revision": "9686eb170ef6c20232758028b4d5e1fe"
  },
  {
    "url": "assets/js/26.c3980f84.js",
    "revision": "79cf23460b8aa55c02be4183af40e8f4"
  },
  {
    "url": "assets/js/27.e3f0be63.js",
    "revision": "c56bac86c0d0363549a4ac35615a4aa5"
  },
  {
    "url": "assets/js/28.65f757a2.js",
    "revision": "9bf94f1f2d65fe4aad74abe152ca50b7"
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
    "url": "assets/js/app.0eda8531.js",
    "revision": "ee06a9b8ae9980441c293b7177aa7ca9"
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
    "revision": "7bd67b466aa6764cb83ce629af645903"
  },
  {
    "url": "page/2/index.html",
    "revision": "12cd7251184763046f66c7622c2b4609"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "9712e8612d9ae2ce9d9893a50c010e79"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "f3406c1441eef7c767974ee72888a6be"
  },
  {
    "url": "tag/Class/index.html",
    "revision": "6b965011da55dc657539bfaf562af5e0"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "a0bb03459e6538663fc83dd9896d2d4d"
  },
  {
    "url": "tag/index.html",
    "revision": "cd6a7748c80bd8a6aec24756911b359e"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c23d8be5cc0eca8d6abc78c734db2736"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "442fb391904911842d3bebeb6a2d26b2"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "75cc1c380dfa5e3c389a78494d9d89e6"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "95646cd9268d056663047b81a9e51d7d"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "d103300c009352964520199eb806945c"
  },
  {
    "url": "tag/Methods/index.html",
    "revision": "ee75340e165f6e48bdc6797bdac4eaea"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "2ab8acd2fc0186c58d7eb502b4d7ba1d"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "7dbbc27361281a7ddc5c1c724bfe6828"
  },
  {
    "url": "tag/String/index.html",
    "revision": "b0594d2ec1491dca3fdc6e0133f5a61a"
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
