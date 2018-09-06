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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e6f1bb288b058692cd3908e4330c507c"
  },
  {
    "url": "assets/css/0.styles.714a7de3.css",
    "revision": "1c773189bfaed7d87cc55780d944021d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56103aa0.js",
    "revision": "a9e38caf09fc1a4cb4f853919f02aac6"
  },
  {
    "url": "assets/js/11.8c9e575d.js",
    "revision": "04661c440e01fd34f0378ed36f595305"
  },
  {
    "url": "assets/js/12.ee862da7.js",
    "revision": "25e42a3324d93087e02acfab60c45d71"
  },
  {
    "url": "assets/js/13.cdf6d9d2.js",
    "revision": "8d10dbb68801c8621cd6b3aedab31aeb"
  },
  {
    "url": "assets/js/14.8bba58da.js",
    "revision": "907c70f94a766586bec9579e9580e5bd"
  },
  {
    "url": "assets/js/15.9126e5e7.js",
    "revision": "158c3a29c3e115f7ab024b6f7ae8771d"
  },
  {
    "url": "assets/js/16.0b83990c.js",
    "revision": "091705e5ab69a3ae0f693f934d6349b6"
  },
  {
    "url": "assets/js/17.8d86b596.js",
    "revision": "3e3c0d0752ada85f062851a7a2274cb8"
  },
  {
    "url": "assets/js/18.6ac28206.js",
    "revision": "b542896ca442d069c2c526bc71037b9a"
  },
  {
    "url": "assets/js/19.1c09d711.js",
    "revision": "b74044a6eaead7f5c90b8b6f796accb7"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.32bec3e1.js",
    "revision": "49dba574fa688f8fa0592a4b67eeff8a"
  },
  {
    "url": "assets/js/21.009001a3.js",
    "revision": "d1eb0959bd9ce03f3ccad11923f98733"
  },
  {
    "url": "assets/js/22.35e207bc.js",
    "revision": "ad170d68401b80e5870cc7e4e31612f9"
  },
  {
    "url": "assets/js/23.eeedef63.js",
    "revision": "0d5c889bb48be494efb374669d9a7a50"
  },
  {
    "url": "assets/js/24.75b17f3a.js",
    "revision": "6907baad88ef8c88ef3c04a8a42d5a67"
  },
  {
    "url": "assets/js/25.d619a587.js",
    "revision": "d52dbfb36c4186eb62ced5d1a15dbaa5"
  },
  {
    "url": "assets/js/26.7fac5712.js",
    "revision": "0938399e797e559d0a12c84f2755366f"
  },
  {
    "url": "assets/js/27.17214a08.js",
    "revision": "b1744c47e3912ac4e3fda7813d8bab00"
  },
  {
    "url": "assets/js/28.451f76f7.js",
    "revision": "38fa1c05a30e0d8b258d1064d5a0fea9"
  },
  {
    "url": "assets/js/29.dbc8468b.js",
    "revision": "5e3346bfac225073cf082119915a4406"
  },
  {
    "url": "assets/js/3.c3545b72.js",
    "revision": "01197f5e236be99fc7d8481f40ef25e7"
  },
  {
    "url": "assets/js/30.10765c78.js",
    "revision": "848676dc1ba0519cc6f88ac37fad8464"
  },
  {
    "url": "assets/js/31.5847661e.js",
    "revision": "419e7d972b65d6507f79c4d572efb7f2"
  },
  {
    "url": "assets/js/4.2fa74b91.js",
    "revision": "9d47f9473059a1dc3453f38d56e75387"
  },
  {
    "url": "assets/js/5.2e703070.js",
    "revision": "7e6bf8a82af7be1644154ca10f093c9c"
  },
  {
    "url": "assets/js/6.390b7748.js",
    "revision": "e55ce1fb94e7535d378cf538e1ac7cd0"
  },
  {
    "url": "assets/js/7.5e81788e.js",
    "revision": "ad2bf7a0b67cd8c3ea828d37da908098"
  },
  {
    "url": "assets/js/8.78dfc617.js",
    "revision": "2ec36e2afd5845e2088ea856a9bf94de"
  },
  {
    "url": "assets/js/9.30bef3e9.js",
    "revision": "5ec25eec76e3504f97e362672fa2e474"
  },
  {
    "url": "assets/js/app.dbc021f4.js",
    "revision": "d982e84026419bf034d251bf0141bd90"
  },
  {
    "url": "config/index.html",
    "revision": "855057eba446257d716b1d8c2a787185"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "ba9a49860677caa9e820b7d9a05258f0"
  },
  {
    "url": "guide/assets.html",
    "revision": "fcd11006f994b03142170fd945bbf509"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "d875d29ce45d729b8f42504d9e5399cf"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "24cdb25bcc697333bb752437ccdc52d4"
  },
  {
    "url": "guide/deploy.html",
    "revision": "10548a1e9c94e2120af99c2ab34c2f6b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4d14ed72abaff97f5cca1f7d3325bd5a"
  },
  {
    "url": "guide/i18n.html",
    "revision": "cacd334654950322b9314a33bf820a29"
  },
  {
    "url": "guide/index.html",
    "revision": "3b13768e0da37e56c65060285deecfa5"
  },
  {
    "url": "guide/markdown.html",
    "revision": "e7e947233e784486b603cc0b5340a16f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "10e296e1f0e9ebb6bb8544b89c06e3d8"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "7c93cd3b81ac93c2c4bc2f3439561d99"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "ea66d09f111b63b685ae2f1b11091bd8"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "05065862caecd4f244494cbf070ea9b6"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "ad29bca8191e770306c814938645268c"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "7109b22165c5ff1b0d122456e66841c2"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "49b850810549fbbb67b2e9c52b16f57e"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "c2af22a661b07c5046d74ec64e5c0221"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "f1c67d8ef208e1b1cef22eabd77d9c4e"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "cf78eb86f3ae5afa19149030321d041b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "abef906c3719bff8d81d3183c90664d9"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "44d8148a0715a19a12e249521cabdcec"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "ddbaa8a3f0f9475febb4cb2c9a39d41a"
  },
  {
    "url": "zh/index.html",
    "revision": "1ca2ce1d91983b164f532b4e8ee39ede"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
