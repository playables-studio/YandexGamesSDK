(()=>{"use strict";var e={},n=function(){function e(){}return e.authenticateUser=function(){return e=this,n=void 0,a=function(){var e,n,t,a;return function(e,n){var t,a,r,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(t=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],a=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,window.yandexSDK.getPlayer()];case 1:return e=r.sent(),n=""!==e.getUniqueID(),t={id:e.getUniqueID(),name:e.getName(),avatarUrlSmall:e.getPhoto("small"),avatarUrlMedium:e.getPhoto("medium"),avatarUrlLarge:e.getPhoto("large"),isAuthorized:n},unityInstance.SendMessage("YandexGamesSDK","OnAuthenticationSuccess",JSON.stringify(t)),[3,3];case 2:return a=r.sent(),unityInstance.SendMessage("YandexGamesSDK","OnAuthenticationFailure",a.message),[3,3];case 3:return[2]}}))},new((t=void 0)||(t=Promise))((function(r,s){function o(e){try{c(a.next(e))}catch(e){s(e)}}function i(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}c((a=a.apply(e,n||[])).next())}));var e,n,t,a},e}(),t=function(e,n,t,a){return new(t||(t=Promise))((function(r,s){function o(e){try{c(a.next(e))}catch(e){s(e)}}function i(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}c((a=a.apply(e,n||[])).next())}))},a=function(e,n){var t,a,r,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(t=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],a=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},r=function(){function e(){}return e.initialize=function(){return t(this,void 0,void 0,(function(){var n;return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,5]),[4,e.loadYandexSDK()];case 1:return t.sent(),[3,5];case 2:return n=t.sent(),console.error("Failed to initialize:",n.message),[4,e.waitForUnityInstance()];case 3:return t.sent(),[4,e.waitForYandexGamesSDKReady()];case 4:return t.sent(),window.unityInstance.SendMessage("YandexGamesSDK","OnSDKInitialized","false|".concat(n.message)),[3,5];case 5:return[2]}}))}))},e.getServerTime=function(){return t(this,void 0,void 0,(function(){var e,n;return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,window.yandexSDK.serverTime()];case 1:return e=t.sent(),window.unityInstance.SendMessage("YandexGamesSDK","OnGetServerTimeSuccess",String(e)),[3,3];case 2:return n=t.sent(),console.error("Failed to get server time:",n.message||String(n)),window.unityInstance.SendMessage("YandexGamesSDK","OnGetServerTimeFailure","false|".concat(n.message||String(n))),[3,3];case 3:return[2]}}))}))},e.getEnvironment=function(){return t(this,void 0,void 0,(function(){var e,n;return a(this,(function(t){try{e=window.yandexSDK,n=e.environment,window.unityInstance.SendMessage("YandexGamesSDK","OnGetEnvironmentSuccess",JSON.stringify(n))}catch(e){console.error("Failed to get environment:",e.message||String(e)),window.unityInstance.SendMessage("YandexGamesSDK","OnGetEnvironmetFailure","false|".concat(e.message||String(e)))}return[2]}))}))},e.loadYandexSDK=function(){return t(this,void 0,void 0,(function(){return a(this,(function(n){return[2,new Promise((function(n,t){var a=document.createElement("script");a.src="/sdk.js",a.onload=function(){return e.onYandexSDKLoaded().then(n).catch(t)},a.onerror=function(){console.error("Failed to load Yandex SDK script"),e.initializeUnity().then(n).catch(t)},document.head.appendChild(a)}))]}))}))},e.onYandexSDKLoaded=function(){return t(this,void 0,void 0,(function(){var n,t;return a(this,(function(a){switch(a.label){case 0:return a.trys.push([0,5,,9]),[4,window.YaGames.init()];case 1:return n=a.sent(),window.yandexSDK=n,console.log("Yandex SDK loaded and initialized successfully"),[4,e.initializeUnity()];case 2:return a.sent(),[4,e.waitForUnityInstance()];case 3:case 6:return a.sent(),[4,e.waitForYandexGamesSDKReady()];case 4:return a.sent(),e.sendUnityMessage("OnYSDKLoaded","YSDK loaded successfully"),e.isInitialized=!0,window.unityInstance.SendMessage("YandexGamesSDK","OnSDKInitialized","true"),[3,9];case 5:return t=a.sent(),console.error("Yandex SDK failed to initialize:",t.message),[4,e.waitForUnityInstance()];case 7:return a.sent(),e.sendUnityMessage("OnYSDKLoadFailed",t.message),[4,e.initializeUnity()];case 8:return a.sent(),window.unityInstance.SendMessage("YandexGamesSDK","OnSDKInitialized","false|".concat(t.message)),[3,9];case 9:return[2]}}))}))},e.initializeUnity=function(){return t(this,void 0,void 0,(function(){var n,t,r,s;return a(this,(function(a){return t="".concat(n="Build","/{{{ LOADER_FILENAME }}}"),r={dataUrl:"".concat(n,"/{{{ DATA_FILENAME }}}"),frameworkUrl:"".concat(n,"/{{{ FRAMEWORK_FILENAME }}}"),codeUrl:"".concat(n,"/{{{ CODE_FILENAME }}}"),streamingAssetsUrl:"StreamingAssets",companyName:"{{{ COMPANY_NAME }}}",productName:"{{{ PRODUCT_NAME }}}",productVersion:"{{{ PRODUCT_VERSION }}}"},s=document.querySelector("#unity-canvas"),[2,new Promise((function(n,a){e.loadScript(t,(function(){window.createUnityInstance(s,r,e.updateLoadingProgress).then((function(t){console.log("Unity WebGL instance created successfully"),window.unityInstance=t,window.unityInstance=t,e.unityInitResolve&&(e.unityInitResolve(),e.unityInitResolve=null),n()})).catch((function(e){console.error("Failed to load Unity game:",e),alert("Failed to load Unity game: "+e),a(e)}))}))}))]}))}))},e.loadScript=function(e,n){var t=document.createElement("script");t.src=e,t.onload=n,t.onerror=function(){console.error("Failed to load script:",e),alert("Failed to load Unity loader script.")},document.body.appendChild(t)},e.updateLoadingProgress=function(e){},e.sendUnityMessage=function(e,n){unityInstance?unityInstance.SendMessage("YandexGamesSDK",e,n):console.warn("Unity instance is not initialized.")},e.waitForUnityInstance=function(){return window.unityInstance?Promise.resolve():e.unityInstancePromise},e.waitForYandexGamesSDKReady=function(){return e.yandexGamesSDKReadyPromise},e.OnYandexGamesSDKReady=function(){e.yandexGamesSDKReadyResolve&&(e.yandexGamesSDKReadyResolve(),e.yandexGamesSDKReadyResolve=null)},e.checkForInitialization=function(){return e.isInitialized},e.isInitialized=!1,e.unityInitResolve=null,e.yandexGamesSDKReadyResolve=null,e.unityInstancePromise=new Promise((function(n){e.unityInitResolve=n})),e.yandexGamesSDKReadyPromise=new Promise((function(n){e.yandexGamesSDKReadyResolve=n})),e}(),s=function(e,n,t,a){return new(t||(t=Promise))((function(r,s){function o(e){try{c(a.next(e))}catch(e){s(e)}}function i(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}c((a=a.apply(e,n||[])).next())}))},o=function(e,n){var t,a,r,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(t=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],a=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},i=function(){function e(){}return e.savePlayerData=function(e,n){return s(this,arguments,void 0,(function(e,n,t){var a,r;return void 0===t&&(t=!0),o(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),[4,window.yandexSDK.getPlayer()];case 1:return[4,s.sent().setData((r={},r[e]=n,r),t)];case 2:return s.sent(),unityInstance.SendMessage("YandexGamesSDK","OnPlayerDataSaved","true"),[3,4];case 3:return a=s.sent(),console.error("Failed to save player data:",a.message),unityInstance.SendMessage("YandexGamesSDK","OnPlayerDataSaved","false|".concat(a.message)),[3,4];case 4:return[2]}}))}))},e.loadPlayerData=function(e){return s(this,void 0,void 0,(function(){var n,t,a;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,window.yandexSDK.getPlayer()];case 1:return[4,r.sent().getData([e])];case 2:return(n=r.sent())&&n.hasOwnProperty(e)?(t=n[e],console.log("Loaded player data from Yandex for key: ".concat(e),t),unityInstance.SendMessage("YandexGamesSDK","OnPlayerDataLoaded",JSON.stringify({success:!0,data:t}))):(console.warn("No data found in Yandex for key: ".concat(e)),unityInstance.SendMessage("YandexGamesSDK","OnPlayerDataLoaded","false|No data found for the given key")),[3,4];case 3:return a=r.sent(),console.error("Failed to load player data:",a.message),unityInstance.SendMessage("YandexGamesSDK","OnPlayerDataLoaded","false|".concat(a.message)),[3,4];case 4:return[2]}}))}))},e}(),c=function(e,n,t,a){return new(t||(t=Promise))((function(r,s){function o(e){try{c(a.next(e))}catch(e){s(e)}}function i(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}c((a=a.apply(e,n||[])).next())}))},u=function(e,n){var t,a,r,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(t=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],a=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},d=function(){function e(){}return e.submitScore=function(e,n){return c(this,void 0,void 0,(function(){var t,a=this;return u(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,window.yandexSDK.getLeaderboards().then((function(t){return c(a,void 0,void 0,(function(){return u(this,(function(a){switch(a.label){case 0:return[4,t.setLeaderboardScore(e,n)];case 1:return a.sent(),unityInstance.SendMessage("YandexGamesSDK","OnSubmitScoreSuccess",""),[2]}}))}))}))];case 1:return r.sent(),[3,3];case 2:return t=r.sent(),unityInstance.SendMessage("YandexGamesSDK","OnSubmitScoreFailure",t.message),[3,3];case 3:return[2]}}))}))},e.getLeaderboardEntries=function(e,n,t){return c(this,void 0,void 0,(function(){var a,r=this;return u(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,window.yandexSDK.getLeaderboards().then((function(a){return c(r,void 0,void 0,(function(){var r,s,o;return u(this,(function(i){switch(i.label){case 0:return[4,a.getLeaderboardEntries(e,{includeUser:!0,quantityTop:n+t,quantityAround:0})];case 1:return r=i.sent(),s=r.entries.slice(n,n+t),o=JSON.stringify({entries:s}),unityInstance.SendMessage("YandexGamesSDK","OnGetLeaderboardEntriesSuccess",o),[2]}}))}))}))];case 1:return s.sent(),[3,3];case 2:return a=s.sent(),unityInstance.SendMessage("YandexGamesSDK","OnGetLeaderboardEntriesFailure",a.message),[3,3];case 3:return[2]}}))}))},e.getPlayerEntry=function(e){return c(this,void 0,void 0,(function(){var n,t=this;return u(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,window.yandexSDK.getLeaderboards().then((function(n){return c(t,void 0,void 0,(function(){var t,a;return u(this,(function(r){switch(r.label){case 0:return[4,n.getLeaderboardPlayerEntry(e)];case 1:return t=r.sent(),a=JSON.stringify(t),unityInstance.SendMessage("YandexGamesSDK","OnGetPlayerEntrySuccess",a),[2]}}))}))}))];case 1:return a.sent(),[3,3];case 2:return n=a.sent(),unityInstance.SendMessage("YandexGamesSDK","OnGetPlayerEntryFailure",n.message),[3,3];case 3:return[2]}}))}))},e}(),l=function(e,n,t,a){return new(t||(t=Promise))((function(r,s){function o(e){try{c(a.next(e))}catch(e){s(e)}}function i(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}c((a=a.apply(e,n||[])).next())}))},f=function(e,n){var t,a,r,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(t=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],a=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},y=function(){function e(){}return e.setGameplayReady=function(){return l(this,void 0,void 0,(function(){var e,n,t;return f(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,window.yandexSDK];case 1:return e=a.sent(),null===(t=e.features.LoadingAPI)||void 0===t||t.ready(),[3,3];case 2:return n=a.sent(),console.error("Failed to send LoadingAPI ready: ",n.message),[3,3];case 3:return[2]}}))}))},e.setGameplayStart=function(){return l(this,void 0,void 0,(function(){var e;return f(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,window.yandexSDK];case 1:return n.sent().features.GameplayAPI.start(),[3,3];case 2:return e=n.sent(),console.error("Failed to send GameplayAPI start: ",e.message),[3,3];case 3:return[2]}}))}))},e.setGameplayStop=function(){return l(this,void 0,void 0,(function(){var e;return f(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,window.yandexSDK];case 1:return n.sent().features.GameplayAPI.stop(),[3,3];case 2:return e=n.sent(),console.error("Failed to send GameplayAPI stop: ",e.message),[3,3];case 3:return[2]}}))}))},e}(),h=function(e,n,t,a){return new(t||(t=Promise))((function(r,s){function o(e){try{c(a.next(e))}catch(e){s(e)}}function i(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}c((a=a.apply(e,n||[])).next())}))},w=function(e,n){var t,a,r,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(t=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,a=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],a=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},S=function(){function e(){}return e.showInterstitialAd=function(){return h(this,void 0,void 0,(function(){var e;return w(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,n.sent().adv.showFullscreenAdv({callbacks:{onClose:function(e){e?unityInstance.SendMessage("YandexGamesSDK","OnInterstitialAdCompleted","true|Interstitial ad was shown successfully."):unityInstance.SendMessage("YandexGamesSDK","OnInterstitialAdClose","Interstitial ad was not shown due to frequency limitation.")},onOpen:function(){console.log("Interstitial ad opened."),unityInstance.SendMessage("YandexGamesSDK","OnRewardedAdOpen","Interstitial ad opened.")},onError:function(e){console.error("Error while showing interstitial ad:",e),unityInstance.SendMessage("YandexGamesSDK","OnInterstitialAdCompleted","false|".concat(e.message||"Failed to show interstitial ad."))},onOffline:function(){console.warn("Network connection lost, unable to show interstitial ad."),unityInstance.SendMessage("YandexGamesSDK","OnInterstitialAdOffline","Network connection lost.")}}})];case 2:return n.sent(),[3,4];case 3:return e=n.sent(),console.error("Failed to call interstitial ad:",e),unityInstance.SendMessage("YandexGamesSDK","OnInterstitialAdFailure",e.message||"Failed to call interstitial ad."),[3,4];case 4:return[2]}}))}))},e.showRewardedAd=function(){return h(this,void 0,void 0,(function(){var e;return w(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,n.sent().adv.showRewardedVideo({callbacks:{onOpen:function(){console.log("Rewarded video ad opened."),unityInstance.SendMessage("YandexGamesSDK","OnRewardedAdOpen","Rewarded video ad opened.")},onRewarded:function(){console.log("Reward granted."),unityInstance.SendMessage("YandexGamesSDK","OnRewardedAdCompleted","true|Reward granted."),unityInstance.SendMessage("YandexGamesSDK","OnRewardedAdReward","Rewarded video ad was viewed successfully.")},onClose:function(){console.log("Rewarded video ad closed."),unityInstance.SendMessage("YandexGamesSDK","OnRewardedAdClose","Rewarded video ad closed.")},onError:function(e){console.error("Error while showing rewarded ad:",e),unityInstance.SendMessage("YandexGamesSDK","OnRewardedAdCompleted","false|".concat(e.message||"Failed to show rewarded video ad."))}}})];case 2:return n.sent(),[3,4];case 3:return e=n.sent(),console.error("Failed to call rewarded ad:",e),unityInstance.SendMessage("YandexGamesSDK","OnRewardedAdCompleted","false|".concat(e.message||"Failed to show rewarded video ad.")),[3,4];case 4:return[2]}}))}))},e.showBannerAd=function(e){return h(this,void 0,void 0,(function(){var n;return w(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,t.sent().adv.showBannerAdv()];case 2:return t.sent(),unityInstance.SendMessage("YandexGamesSDK","OnBannerAdLoaded","true|".concat(e)),[3,4];case 3:return n=t.sent(),console.error("Failed to show banner ad:",n),unityInstance.SendMessage("YandexGamesSDK","OnBannerAdLoaded","false|".concat(n.message||"Failed to show banner ad.")),[3,4];case 4:return[2]}}))}))},e.hideBannerAd=function(){return h(this,void 0,void 0,(function(){var e;return w(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,n.sent().adv.hideBannerAdv()];case 2:return n.sent(),unityInstance.SendMessage("YandexGamesSDK","OnBannerAdHidden","true"),[3,4];case 3:return e=n.sent(),console.error("Failed to hide banner ad:",e),unityInstance.SendMessage("YandexGamesSDK","OnBannerAdHidden","false|".concat(e.message)),[3,4];case 4:return[2]}}))}))},e.getBannerAdStatus=function(){return h(this,void 0,void 0,(function(){var e,n,t,a;return w(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,r.sent().adv.getBannerAdvStatus()];case 2:return e=r.sent(),n=e.stickyAdvIsShowing,t=e.reason,n?(console.log("Sticky banner is currently being shown."),unityInstance.SendMessage("YandexGamesSDK","OnBannerAdStatus","Sticky banner is currently being shown.")):t?(console.log("Sticky banner is not shown. Reason: ".concat(t)),unityInstance.SendMessage("YandexGamesSDK","OnBannerAdFailure","Sticky banner is not shown. Reason: ".concat(t))):unityInstance.SendMessage("YandexGamesSDK","OnBannerAdHidden","Sticky banner is not currently being shown."),[3,4];case 3:return a=r.sent(),console.error("Failed to get banner ad status:",a),unityInstance.SendMessage("YandexGamesSDK","OnBannerAdFailure",a.message||"Failed to get banner ad status."),[3,4];case 4:return[2]}}))}))},e}();window.YandexSDKVersion="1.1.1-beta",window.YandexSDKExports={AuthenticateUser:n.authenticateUser,SavePlayerData:i.savePlayerData,LoadPlayerData:i.loadPlayerData,CheckForInitialization:r.checkForInitialization,OnYandexGamesSDKReady:r.OnYandexGamesSDKReady,GetServerTime:r.getServerTime,GetEnvironment:r.getEnvironment,SubmitScore:d.submitScore,GetLeaderboardEntries:d.getLeaderboardEntries,GetPlayerEntry:d.getPlayerEntry,SetGameplayReady:y.setGameplayReady,SetGameplayStart:y.setGameplayStart,SetGameplayStop:y.setGameplayStop,HideBannerAd:S.hideBannerAd,ShowBannerAd:S.showBannerAd,ShowInterstitialAd:S.showInterstitialAd,ShowRewardedAd:S.showRewardedAd},window.addEventListener("load",(function(){r.initialize()}));var p=window;for(var v in e)p[v]=e[v];e.__esModule&&Object.defineProperty(p,"__esModule",{value:!0})})();