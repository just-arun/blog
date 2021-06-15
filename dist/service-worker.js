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
    "revision": "bcd32ea20f9336953a99ffa057ea1b6a"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "f27e9eb0e32aebb3ae400b811a8b507f"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "cca25be9220af5bd1cebec0325f57971"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "508c93b20de26456deb4117fce7385f1"
  },
  {
    "url": "404.html",
    "revision": "2118710a97759c569a96d5910acc7b09"
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
    "url": "assets/js/10.02b890f2.js",
    "revision": "4c6639dfb8a3c1cd1ce9a19a86cd4c6d"
  },
  {
    "url": "assets/js/11.e7295477.js",
    "revision": "1f400f5b2c9f74c60e22e30ea160e78e"
  },
  {
    "url": "assets/js/12.aa0ec399.js",
    "revision": "510211d891d7ea3c703f204c7aeab759"
  },
  {
    "url": "assets/js/13.928f8b12.js",
    "revision": "d5f4f4a521877bc4d1701afae7aa0970"
  },
  {
    "url": "assets/js/14.f8b30df2.js",
    "revision": "86eae23717603efc455774869fa3bcb7"
  },
  {
    "url": "assets/js/15.8096973b.js",
    "revision": "7e54441322ebfe4bc4172113773ee7b5"
  },
  {
    "url": "assets/js/16.96667673.js",
    "revision": "2f874328cb23c9292d4838295adcf66c"
  },
  {
    "url": "assets/js/17.9c78fb19.js",
    "revision": "a9ef4a52cfd5eafb331bb22887cf52f5"
  },
  {
    "url": "assets/js/18.3ba25b41.js",
    "revision": "836c375a8b2235e177c326fb287aa3cf"
  },
  {
    "url": "assets/js/19.4315b3b7.js",
    "revision": "ac640f00456d186b17b883ed61ad285f"
  },
  {
    "url": "assets/js/20.3684e00b.js",
    "revision": "966d6070ad9f411fb0540a074e1e507d"
  },
  {
    "url": "assets/js/21.20820127.js",
    "revision": "6b286b5ecd937b9704aa5491a1adb631"
  },
  {
    "url": "assets/js/22.6f2b2487.js",
    "revision": "184df07c27348bbac292a73dfb1fc161"
  },
  {
    "url": "assets/js/23.1a2f65e9.js",
    "revision": "07f61937cc20e921a7e32bc47c957744"
  },
  {
    "url": "assets/js/24.abe11998.js",
    "revision": "b57a82720115cb89da3a3938d2d6f416"
  },
  {
    "url": "assets/js/3.9a5dae9c.js",
    "revision": "d4f812db8b8b650ae2710a90704d3476"
  },
  {
    "url": "assets/js/4.a66bddf1.js",
    "revision": "b63080a50de10eddfa59c45198f7f4c9"
  },
  {
    "url": "assets/js/5.aff67ca3.js",
    "revision": "7596ae67a9fac98cc2ed096608df896e"
  },
  {
    "url": "assets/js/6.46ecb7e0.js",
    "revision": "a369b04ceb3f4c3dbdd52c42da054b93"
  },
  {
    "url": "assets/js/7.67c6d269.js",
    "revision": "75577f9d1d1e34879285b0197cad0376"
  },
  {
    "url": "assets/js/8.ff33ec4d.js",
    "revision": "634f54ac2c4e4ed5541e8512c92da2d3"
  },
  {
    "url": "assets/js/9.f4422f6f.js",
    "revision": "680a20f1452debf74bca33b590f3b1f0"
  },
  {
    "url": "assets/js/app.da56b615.js",
    "revision": "e04d1d832b83fa0a5ce0c0df20dc613d"
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
    "revision": "e39c61a199892b840a3f1736f5cac3f2"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "9e353ddab1ce2800ef549758180ed860"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "d92039293de018e18ee71c844d1db80f"
  },
  {
    "url": "tag/index.html",
    "revision": "606c19f8576fe1496e25fc3746d9736d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "57e835c5e92490344aafaef6d9c7a6ac"
  },
  {
    "url": "tag/Merge Sort/index.html",
    "revision": "9f0d223334eeb847f593fbec4f5fc914"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "c67cca19acd21089c07de28fd5945506"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "06717ce661e5759483b23f1836bba9f8"
  },
  {
    "url": "tag/String/index.html",
    "revision": "c1d8a2439eae47fa38a9291a64c3594d"
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
