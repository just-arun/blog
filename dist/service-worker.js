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
    "revision": "b5e9cba77bf692f588a188c3d2a0f91c"
  },
  {
    "url": "2021/06/12/objects-in-javascript/index.html",
    "revision": "6ab09de60ef18ff23c553e1ff2d427cf"
  },
  {
    "url": "2021/06/12/string-functions-in-javascript/index.html",
    "revision": "254051164d88cc992387dca14362aafc"
  },
  {
    "url": "2021/06/14/merge-sort-algorithm-using-javascript/index.html",
    "revision": "aa04c13e1b00f6934c7ae573b9a25047"
  },
  {
    "url": "404.html",
    "revision": "80b12c3db34e3cb1c77170ae8ff7f0b5"
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
    "url": "assets/js/20.a2df0377.js",
    "revision": "0713379b8fa78479e2463d90f165a3fb"
  },
  {
    "url": "assets/js/21.0bb9c312.js",
    "revision": "c932d55f0c74ab517cdd095e5e3194e1"
  },
  {
    "url": "assets/js/22.6f2b2487.js",
    "revision": "184df07c27348bbac292a73dfb1fc161"
  },
  {
    "url": "assets/js/23.9ab54e81.js",
    "revision": "ba6e177ebc9fbaa05b1933a3928130d1"
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
    "url": "assets/js/app.fef4bd1f.js",
    "revision": "4a23af35a2ab7d620d975343cecf1dd9"
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
    "revision": "136a6f3b9aadb70c963d55337378619d"
  },
  {
    "url": "tag/Algorithm/index.html",
    "revision": "9f3894164f3646139fef610ca2e7bc76"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "f8c2272dfb6694d59ff57630cb34f64e"
  },
  {
    "url": "tag/index.html",
    "revision": "7f6f636a38bb5a7bb1c5145cbafb600c"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "42a05beb23f893d26f192c9bd84ffb2b"
  },
  {
    "url": "tag/Merge Sort/index.html",
    "revision": "b2063765387738350a4d4071d9e4672c"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "5a80015c55c292bbfbaec1d0285ef201"
  },
  {
    "url": "tag/Sort/index.html",
    "revision": "18badd81430a1fcc4701b631def8f391"
  },
  {
    "url": "tag/String/index.html",
    "revision": "a4bad1525419f603022b37558f6f7aa6"
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
