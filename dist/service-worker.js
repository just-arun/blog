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
    "revision": "46767eea7ac2e56cf37c86c5991bbbe9"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "b5236831d73232a34cd3afa04c79620e"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "b0933282b5fd9b7a7a8a3f0422fe6a29"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "85a57e347adf957430286ab4c7d0b929"
  },
  {
    "url": "2021/06/15/conditional-and-looping-statements-in-javascript/index.html",
    "revision": "230224ab32cfca51aa5274c80975493c"
  },
  {
    "url": "2021/06/15/logical-operators-in-javascript/index.html",
    "revision": "fcfef4396b1306c95451d9666b748668"
  },
  {
    "url": "404.html",
    "revision": "91af1ece47fe5f793e5a33d022e7ae05"
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
    "url": "assets/js/21.c3e10315.js",
    "revision": "93afd29fdc6632c86930998a5bfab047"
  },
  {
    "url": "assets/js/22.d69a087d.js",
    "revision": "99ed83e7a49530edaf800ec448acddb3"
  },
  {
    "url": "assets/js/23.48873300.js",
    "revision": "c7d279e9be7a861b13b5b7973444817c"
  },
  {
    "url": "assets/js/24.680c944e.js",
    "revision": "a962a42cad579256e66be116940f967a"
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
    "url": "assets/js/app.174d470d.js",
    "revision": "84b37dadb9440a75f1f10f1858d68850"
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
    "revision": "c8c016517266c7b1aa2c076e6ebdd409"
  },
  {
    "url": "page/2/index.html",
    "revision": "c95a3fc5d38f20dd407cbf8032838340"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "d5bb414eb6661df11b0a0f61bdb2adf3"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "dded0c1eaae932a7899a8c93b8821db7"
  },
  {
    "url": "tag/Condition/index.html",
    "revision": "b87f7683e86268cb1b334c75d48bf8bd"
  },
  {
    "url": "tag/index.html",
    "revision": "68c55b11bac247aac2ee9feb0d37b4c1"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "9c591f929929e09c0ca610ec7f75e639"
  },
  {
    "url": "tag/Logical_Operator/index.html",
    "revision": "d7d8fcd3c83030e9d18449838ef4c0d0"
  },
  {
    "url": "tag/Looping/index.html",
    "revision": "327174eeab2d25ffe40118774cac3c9a"
  },
  {
    "url": "tag/MergeSort/index.html",
    "revision": "d06749f3f1d6d4164c9fa10c209c6e45"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "1a3533160cb86d140405687d191a0592"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "ed772272ea03b9471a58c957bc4dfd6d"
  },
  {
    "url": "tag/String/index.html",
    "revision": "68230d8587e55b4f7dba6fe17d6e0f64"
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
