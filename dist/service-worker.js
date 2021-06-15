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
    "revision": "fff8cf284433c1e0c3081492d0746814"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "fa5d4c6d85e87f0727967b23a0cbbd79"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "44d5dc7d6145fc35361be9b042b89c68"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "99735b8697635ef8b2b614ab485177fe"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "c0b47367b5fb4ba1d2330701f8764b9e"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "bd7eeb21214f3eb2ca333f8e4be89692"
  },
  {
    "url": "404.html",
    "revision": "36d9facd92c07193c8d782bb4a761a44"
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
    "url": "assets/js/20.338ea528.js",
    "revision": "b0edbb044faaab6f55456951e9aac4f6"
  },
  {
    "url": "assets/js/21.4fb27ced.js",
    "revision": "513b4dcee4f3277706ebb82d277e8433"
  },
  {
    "url": "assets/js/22.d69a087d.js",
    "revision": "99ed83e7a49530edaf800ec448acddb3"
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
    "url": "assets/js/app.d91db0c7.js",
    "revision": "71c7fa8af639579c5f603aaee5e28d5d"
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
    "revision": "fb31544937f1178e0394f9294f5a8174"
  },
  {
    "url": "page/2/index.html",
    "revision": "33e184d95037f42c0f6bfc6ca8b9bdd8"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "85770d813952471f096cdc4a6ed44684"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "3b6cddc72a5fd3373448f637eccff0d6"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "771c2c98f4e401723d5418bab9b75559"
  },
  {
    "url": "tag/index.html",
    "revision": "1ae95d59bb2ecc6d5485c6b4c1015534"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a7da0387ec383fd8b84692fb2ddc1be6"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "41d6d5be82222d332942e9bf89c85973"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "f8330868853f98ae4056bb94bafd0889"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "e42f95b7cb3defc8cc57b4995dd249ed"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "bbdc83e379c0baf65bd469420c0e4df4"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "eb59604b1833e19ae1f0a2fc855a5efe"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "241c69f5c79e39855ac50b4bb59981cb"
  },
  {
    "url": "tag/String/index.html",
    "revision": "685c335fb09b9f0b148438b9dde67ff3"
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
