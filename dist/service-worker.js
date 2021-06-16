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
    "revision": "26bdd23af137529a88df608dcc6bdda9"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "1e6a146328c0235a9f35ce3d8a67200f"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "f146e4e0e44b73f5de51fecbfcc173f4"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "2dedc7ce3b7da1b41204bbe4470ad96b"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "292cb6b4991d74766f50afa79656b77b"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "5aadc293faedb046d8290721ae33e19d"
  },
  {
    "url": "404.html",
    "revision": "2b3979454d83f668de8b61d4b6068f91"
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
    "url": "assets/js/20.7be420f8.js",
    "revision": "c4586dccc320ec0a60e129779134b07c"
  },
  {
    "url": "assets/js/21.f2619d95.js",
    "revision": "e91d0fed9b05f2fbfb55ebaf6bad9782"
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
    "url": "assets/js/24.ad9ed894.js",
    "revision": "54ee2b34cbd64fcba0395f459142537b"
  },
  {
    "url": "assets/js/25.8fc67ab8.js",
    "revision": "2216067973887acc34f4e5ca12265d31"
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
    "url": "assets/js/app.9756373c.js",
    "revision": "5cd349ca6890c20c4dff72315650aa6f"
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
    "revision": "820b5854926451cc2a1f6b37c8083ff0"
  },
  {
    "url": "page/2/index.html",
    "revision": "b14638270dbe22fe7243f67837b7ffd9"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "b147616b908590df85357728bb514e41"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "c038ef947dce76bccc470b4082044361"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "d2e77e4c58a81d9ac579933db6c2c91b"
  },
  {
    "url": "tag/index.html",
    "revision": "899850f5ac789dd8887b97a4ab4529a7"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "48ba099ed4e7233fed80ccc409966170"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "a11e8e871acfea3c674e78199357c2f3"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "bfd7b9464de0a18a0855d909f8024ab2"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "d5df74feccc08b9677bc2c4b57f80773"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "47cc3b9c97b7b642adbcf30727941753"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "2a65d9975073b7da63965a4469ee88f4"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "db251da0c0a56e753a38a5b6972b044f"
  },
  {
    "url": "tag/String/index.html",
    "revision": "b537598d6089855073c09b3f9f493de1"
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
