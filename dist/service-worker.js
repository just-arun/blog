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
    "revision": "673e00ca146a4891d4deb55f7198a24f"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "34be316f49ef995418fc68c18b5003d8"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "95b9139f77f8044fa1fbd1f55ecdc513"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "5a6d44b977ab50579bc2337f53c0a028"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "a631db87294cf2589fbfb09b08bd6dda"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "7aa7fef77ddfe792c223a6d5256f0e8a"
  },
  {
    "url": "404.html",
    "revision": "fb383165173cc697b310115999860fdb"
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
    "url": "assets/js/21.33bdbd9a.js",
    "revision": "5f0042f66509a3d69c08fd21dffd9bd7"
  },
  {
    "url": "assets/js/22.4424e044.js",
    "revision": "c77e243be949f9cada0ff36a1804d589"
  },
  {
    "url": "assets/js/23.0736e16b.js",
    "revision": "ccbf424a97206b32996ad666f9c2e73b"
  },
  {
    "url": "assets/js/24.3a5ac902.js",
    "revision": "08a2cde57b5630c6c1c9211531f2528d"
  },
  {
    "url": "assets/js/25.774b7ed8.js",
    "revision": "ba6849236b32b8584fec4891e2b3dd52"
  },
  {
    "url": "assets/js/26.a764146c.js",
    "revision": "648927b926402d44d332cdeac6564378"
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
    "url": "assets/js/app.c36b6903.js",
    "revision": "d49e6c9e308ab479715698e542eaaeb9"
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
    "revision": "40269fa90cdec92efd44ca2257850822"
  },
  {
    "url": "page/2/index.html",
    "revision": "f8aa17ae82ab5901bb79eeaa04ce0c19"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "b208f7fd4682c3c29d8fbdc19fbfebcf"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "4fe691a1de4f4c51a542ecc65f04178a"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "d4cd9089a0899749116bf8e62288806c"
  },
  {
    "url": "tag/index.html",
    "revision": "acaa52b62444ac90fae035e08420bd23"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a40208ea15c0a7d54c5fa537a13bc563"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "5c9f0717b6a9242a4de6f75e74bada25"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "5abc756545235b616eac61ee7b07d539"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "7fd2a5e97861955a7aa39de23e014809"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "cb895d1e3ba0079fc7a255c4716edf4d"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "2c46853c2deeec82b4fe835e66c1f494"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "10f95bb120c4168fa8f288f96c3df1d1"
  },
  {
    "url": "tag/String/index.html",
    "revision": "f87966ed6dba3d96775e5508917aa0bb"
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
