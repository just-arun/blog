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
    "revision": "850d310e1d409c262eca0099380d707e"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "589f21188a483208b3cac7570ac65c7c"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "466914a13d2137b5e7a5d096814ef82e"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "4f1f48fe4550870e6b243fa4df990d57"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "19fd6d35e4aba2e05e664306ef6dd7a6"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "ab94fd1b3429d0be0042e180eca4e439"
  },
  {
    "url": "404.html",
    "revision": "82a9456dae385a3793db6d574ea1615c"
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
    "url": "assets/js/20.3c2808e5.js",
    "revision": "ea1e5cb71d67b885737f2af9ce14b6ae"
  },
  {
    "url": "assets/js/21.1021c62a.js",
    "revision": "4de0bed8ee5b4a184131bd5c0fab35e2"
  },
  {
    "url": "assets/js/22.d69a087d.js",
    "revision": "99ed83e7a49530edaf800ec448acddb3"
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
    "url": "assets/js/25.c3f726fb.js",
    "revision": "0635366686ccc06985c632e9b92a6e31"
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
    "url": "assets/js/app.6a69a479.js",
    "revision": "09c545b268bae297cf2efe15f3f12727"
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
    "revision": "cf1b11993eef469abe18839c9455970f"
  },
  {
    "url": "page/2/index.html",
    "revision": "92a1277be606eeaebbbaf8269555e4c0"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "18683bf6970b28b2877689b79a776526"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "4b22f48a16632813f800fee1c783fc59"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "2b7e20557ebc53bba8fd5f887ec21d51"
  },
  {
    "url": "tag/index.html",
    "revision": "2fb1f866393902cec5759b2e38214c34"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "81d16138de975e7df4639b51a95fd92b"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "989295159adbbcfd31e3c0507068b100"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "95fe1eca56c61818b0110ac33a2319e3"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "cced8bb6a99a84bbec39010f31e4d27c"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "f541854b4b3205ea80b8cb7ca285d520"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "5c143f725f4c10b0fcbc75bed03df5ca"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "99d9ad83a166529ad7478ae1fb36b063"
  },
  {
    "url": "tag/String/index.html",
    "revision": "a8c4ffd73a68c52ab08310465935b28c"
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
