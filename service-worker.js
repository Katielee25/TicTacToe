"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["C:/Users/KatieLee/Tic-Tac-Toe/build/index.html","763c47c061c8adba6eca8011df686a32"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/css/main.e1af0f42.css","570b937d994f6ab3680b599353938c1b"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/js/main.78a812c8.js","551804266b9c3fcfa84ab9efc070ecef"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/media/bouncycat.c8e5742a.gif","c8e5742a999abbf1c945599686574019"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/media/guitar.61893bf1.gif","61893bf172b6678046225fc9ca300803"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/media/keyboard.c98ce942.gif","c98ce9425ec8ac52e05efaf336a7bd66"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/media/paw.81bc07ca.jpg","81bc07ca15912874fd91577f35d2ef32"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/media/pawG.a888123f.jpg","a888123f8ad7932c28c4d5e9bcdf4401"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/media/title.e84288fc.gif","e84288fca2bd208b13baad86c4243e6a"],["C:/Users/KatieLee/Tic-Tac-Toe/build/static/media/trumpet.a3449273.gif","a3449273acc3377c63ec1c583c8a9df8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/react-gh-pages/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});