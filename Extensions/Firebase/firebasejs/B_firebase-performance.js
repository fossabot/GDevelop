!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(Ue){"use strict";try{(function(){Ue=Ue&&Object.prototype.hasOwnProperty.call(Ue,"default")?Ue.default:Ue;var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function h(t,a,s,u){return new(s=s||Promise)(function(n,e){function r(t){try{o(u.next(t))}catch(t){e(t)}}function i(t){try{o(u.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?n(t.value):((e=t.value)instanceof s?e:new s(function(t){t(e)})).then(r,i)}o((u=u.apply(t,a||[])).next())})}function d(n,r){var i,o,a,t,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&e[0]?o.return:e[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,e[1])).done)return a;switch(o=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return s.label++,{value:e[1],done:!1};case 5:s.label++,o=e[1],e=[0];continue;case 7:e=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){s=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){s.label=e[1];break}if(6===e[0]&&s.label<a[1]){s.label=a[1],a=e;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(e);break}a[2]&&s.ops.pop(),s.trys.pop();continue}e=r.call(n,s)}catch(t){e=[6,t],o=0}finally{i=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function s(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||0<e--)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function o(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}var i,t,e,g=(i=Error,n(t=u,e=i),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a),u);function a(){this.constructor=t}function u(t,e){var n=i.call(this,e)||this;return n.code=t,n.name="FirebaseError",Object.setPrototypeOf(n,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,l.prototype.create),n}var l=(f.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r,i=e[0]||{},o=this.service+"/"+t,a=this.errors[t],s=a?(r=i,a.replace(v,function(t,e){var n=r[e];return null!=n?n.toString():"<"+e+"?>"})):"Error",u=this.serviceName+": "+s+" ("+o+").",c=new g(o,u),l=0,f=Object.keys(i);l<f.length;l++){var p=f[l];"_"!==p.slice(-1)&&(p in c&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),c[p]=i[p])}return c},f);function f(t,e,n){this.service=t,this.serviceName=e,this.errors=n}var v=/\{\$([^}]+)}/g,p=(m.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},m.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},m.prototype.setServiceProps=function(t){return this.serviceProps=t,this},m);function m(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function y(n){return new Promise(function(t,e){n.onsuccess=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function b(n,r,i){var o,t=new Promise(function(t,e){y(o=n[r].apply(n,i)).then(t,e)});return t.request=o,t}function _(t,n,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[n][e]},set:function(t){this[n][e]=t}})})}function w(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return b(this[n],t,arguments)})})}function I(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return this[n][t].apply(this[n],arguments)})})}function S(t,r,e,n){n.forEach(function(n){n in e.prototype&&(t.prototype[n]=function(){return t=this[r],(e=b(t,n,arguments)).then(function(t){if(t)return new E(t,e.request)});var t,e})})}function T(t){this._index=t}function E(t,e){this._cursor=t,this._request=e}function A(t){this._store=t}function N(n){this._tx=n,this.complete=new Promise(function(t,e){n.oncomplete=function(){t()},n.onerror=function(){e(n.error)},n.onabort=function(){e(n.error)}})}function O(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new N(n)}function k(t){this._db=t}_(T,"_index",["name","keyPath","multiEntry","unique"]),w(T,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),S(T,"_index",IDBIndex,["openCursor","openKeyCursor"]),_(E,"_cursor",["direction","key","primaryKey","value"]),w(E,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(E.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),y(e._request).then(function(t){if(t)return new E(t,e._request)})})})}),A.prototype.createIndex=function(){return new T(this._store.createIndex.apply(this._store,arguments))},A.prototype.index=function(){return new T(this._store.index.apply(this._store,arguments))},_(A,"_store",["name","keyPath","indexNames","autoIncrement"]),w(A,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),S(A,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),I(A,"_store",IDBObjectStore,["deleteIndex"]),N.prototype.objectStore=function(){return new A(this._tx.objectStore.apply(this._tx,arguments))},_(N,"_tx",["objectStoreNames","mode"]),I(N,"_tx",IDBTransaction,["abort"]),O.prototype.createObjectStore=function(){return new A(this._db.createObjectStore.apply(this._db,arguments))},_(O,"_db",["name","version","objectStoreNames"]),I(O,"_db",IDBDatabase,["deleteObjectStore","close"]),k.prototype.transaction=function(){return new N(this._db.transaction.apply(this._db,arguments))},_(k,"_db",["name","version","objectStoreNames"]),I(k,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(o){[A,T].forEach(function(t){o in t.prototype&&(t.prototype[o.replace("open","iterate")]=function(){var t,e=(t=arguments,Array.prototype.slice.call(t)),n=e[e.length-1],r=this._store||this._index,i=r[o].apply(r,e.slice(0,-1));i.onsuccess=function(){n(i.result)}})})}),[T,A].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,n){var r=this,i=[];return new Promise(function(e){r.iterateCursor(t,function(t){t?(i.push(t.value),void 0===n||i.length!=n?t.continue():e(i)):e(i)})})})});var P,R="0.4.8",C=1e4,M="w:"+R,j="FIS_v2",L="https://firebaseinstallations.googleapis.com/v1",B=36e5,D=((P={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',P["not-registered"]="Firebase Installation is not registered.",P["installation-not-found"]="Firebase Installation not found.",P["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',P["app-offline"]="Could not process request. Application offline.",P["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",P),F=new l("installations","Installations",D);function x(t){return t instanceof g&&t.code.includes("request-failed")}function U(t){var e=t.projectId;return L+"/projects/"+e+"/installations"}function q(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function H(r,i){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,i.json()];case 1:return e=t.sent(),n=e.error,[2,F.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function V(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function K(t,e){var n=e.refreshToken,r=V(t);return r.append("Authorization",j+" "+n),r}function W(n){return h(this,void 0,void 0,function(){var e;return d(this,function(t){switch(t.label){case 0:return[4,n()];case 1:return 500<=(e=t.sent()).status&&e.status<600?[2,n()]:[2,e]}})})}function $(e){return new Promise(function(t){setTimeout(t,e)})}function G(t){return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t}(t))).replace(/\+/g,"-").replace(/\//g,"_")}var J=/^[cdef][\w-]{21}$/,z="";function Y(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=G(t).substr(0,22);return J.test(e)?e:z}catch(t){return z}}function Z(t){return t.appName+"!"+t.appId}var Q=new Map;function X(t,e){var n=Z(t);tt(n,e),function(t,e){var n=nt();n&&n.postMessage({key:t,fid:e});rt()}(n,e)}function tt(t,e){var n,r,i=Q.get(t);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){(0,a.value)(e)}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var et=null;function nt(){return!et&&"BroadcastChannel"in self&&((et=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){tt(t.data.key,t.data.fid)}),et}function rt(){0===Q.size&&et&&(et.close(),et=null)}var it,ot,at,st,ut="firebase-installations-database",ct=1,lt="firebase-installations-store",ft=null;function pt(){var e,t,n;return ft||(e=function(t){switch(t.oldVersion){case 0:t.createObjectStore(lt)}},t=b(indexedDB,"open",[ut,ct]),(n=t.request)&&(n.onupgradeneeded=function(t){e&&e(new O(n.result,t.oldVersion,n.transaction))}),ft=t.then(function(t){return new k(t)})),ft}function ht(a,s){return h(this,void 0,void 0,function(){var e,n,r,i,o;return d(this,function(t){switch(t.label){case 0:return e=Z(a),[4,pt()];case 1:return n=t.sent(),r=n.transaction(lt,"readwrite"),[4,(i=r.objectStore(lt)).get(e)];case 2:return o=t.sent(),[4,i.put(s,e)];case 3:return t.sent(),[4,r.complete];case 4:return t.sent(),o&&o.fid===s.fid||X(a,s.fid),[2,s]}})})}function dt(i){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return e=Z(i),[4,pt()];case 1:return n=t.sent(),[4,(r=n.transaction(lt,"readwrite")).objectStore(lt).delete(e)];case 2:return t.sent(),[4,r.complete];case 3:return t.sent(),[2]}})})}function gt(s,u){return h(this,void 0,void 0,function(){var e,n,r,i,o,a;return d(this,function(t){switch(t.label){case 0:return e=Z(s),[4,pt()];case 1:return n=t.sent(),r=n.transaction(lt,"readwrite"),[4,(i=r.objectStore(lt)).get(e)];case 2:return o=t.sent(),void 0!==(a=u(o))?[3,4]:[4,i.delete(e)];case 3:return t.sent(),[3,6];case 4:return[4,i.put(a,e)];case 5:t.sent(),t.label=6;case 6:return[4,r.complete];case 7:return t.sent(),!a||o&&o.fid===a.fid||X(s,a.fid),[2,a]}})})}function vt(i){return h(this,void 0,void 0,function(){var r,e,n;return d(this,function(t){switch(t.label){case 0:return[4,gt(i,function(t){var e=yt(t||{fid:Y(),registrationStatus:0}),n=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:function(o){return h(this,void 0,void 0,function(){var e,n,r,i;return d(this,function(t){switch(t.label){case 0:return[4,mt(o)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,$(100)];case 3:return t.sent(),[4,mt(o)];case 4:return e=t.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,vt(o)];case 6:return n=t.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,e]}})})}(t)}:{installationEntry:e};if(!navigator.onLine){var n=Promise.reject(F.create("app-offline"));return{installationEntry:e,registrationPromise:n}}var r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,7]),[4,function(s,t){var u=t.fid;return h(this,void 0,void 0,function(){var e,n,r,i,o,a;return d(this,function(t){switch(t.label){case 0:return e=U(s),n=V(s),r={fid:u,authVersion:j,appId:s.appId,sdkVersion:M},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,W(function(){return fetch(e,i)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return a=t.sent(),[2,{fid:a.fid||u,registrationStatus:2,refreshToken:a.refreshToken,authToken:q(a.authToken)}];case 3:return[4,H("Create Installation",o)];case 4:throw t.sent()}})})}(r,i)];case 1:return e=t.sent(),[2,ht(r,e)];case 2:return x(n=t.sent())&&409===n.serverCode?[4,dt(r)]:[3,4];case 3:return t.sent(),[3,6];case 4:return[4,ht(r,{fid:i.fid,registrationStatus:0})];case 5:t.sent(),t.label=6;case 6:throw n;case 7:return[2]}})})}(t,r);return{installationEntry:r,registrationPromise:i}}}(i,e);return r=n.registrationPromise,n.installationEntry})];case 1:return(e=t.sent()).fid!==z?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=t.sent(),n)];case 3:return[2,{installationEntry:e,registrationPromise:r}]}})})}function mt(t){return gt(t,function(t){if(!t)throw F.create("installation-not-found");return yt(t)})}function yt(t){return 1===(e=t).registrationStatus&&e.registrationTime+C<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function bt(t,l){var f=t.appConfig,p=t.platformLoggerProvider;return h(this,void 0,void 0,function(){var r,i,o,a,s,u,c;return d(this,function(t){switch(t.label){case 0:return e=f,n=l.fid,r=U(e)+"/"+n+"/authTokens:generate",i=K(f,l),(o=p.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:M}},s={method:"POST",headers:i,body:JSON.stringify(a)},[4,W(function(){return fetch(r,s)})];case 1:return(u=t.sent()).ok?[4,u.json()]:[3,3];case 2:return c=t.sent(),[2,q(c)];case 3:return[4,H("Generate Auth Token",u)];case 4:throw t.sent()}var e,n})})}function _t(s,u){return void 0===u&&(u=!1),h(this,void 0,void 0,function(){var a,e,n;return d(this,function(t){switch(t.label){case 0:return[4,gt(s.appConfig,function(t){if(!It(t))throw F.create("not-registered");var e,n,r,i=t.authToken;if(u||2!==(r=i).requestStatus||function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+B}(r)){if(1===i.requestStatus)return a=function(r,i){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,wt(r.appConfig)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,$(100)];case 3:return t.sent(),[4,wt(r.appConfig)];case 4:return e=t.sent(),[3,2];case 5:return 0===(n=e.authToken).requestStatus?[2,_t(r,i)]:[2,n]}})})}(s,u),t;if(!navigator.onLine)throw F.create("app-offline");var o=(e=t,n={requestStatus:1,requestTime:Date.now()},c(c({},e),{authToken:n}));return a=function(i,o){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,8]),[4,bt(i,o)];case 1:return e=t.sent(),r=c(c({},o),{authToken:e}),[4,ht(i.appConfig,r)];case 2:return t.sent(),[2,e];case 3:return!x(n=t.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,dt(i.appConfig)];case 4:return t.sent(),[3,7];case 5:return r=c(c({},o),{authToken:{requestStatus:0}}),[4,ht(i.appConfig,r)];case 6:t.sent(),t.label=7;case 7:throw n;case 8:return[2]}})})}(s,o),o}return t})];case 1:return e=t.sent(),a?[4,a]:[3,3];case 2:return n=t.sent(),[3,4];case 3:n=e.authToken,t.label=4;case 4:return[2,n]}})})}function wt(t){return gt(t,function(t){if(!It(t))throw F.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+C<Date.now()?c(c({},t),{authToken:{requestStatus:0}}):t})}function It(t){return void 0!==t&&2===t.registrationStatus}function St(e,n){return void 0===n&&(n=!1),h(this,void 0,void 0,function(){return d(this,function(t){switch(t.label){case 0:return[4,function(n){return h(this,void 0,void 0,function(){var e;return d(this,function(t){switch(t.label){case 0:return[4,vt(n)];case 1:return(e=t.sent().registrationPromise)?[4,e]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}})})}(e.appConfig)];case 1:return t.sent(),[4,_t(e,n)];case 2:return[2,t.sent().token]}})})}function Tt(s,u){return h(this,void 0,void 0,function(){var r,i,o,a;return d(this,function(t){switch(t.label){case 0:return e=s,n=u.fid,r=U(e)+"/"+n,i=K(s,u),o={method:"DELETE",headers:i},[4,W(function(){return fetch(r,o)})];case 1:return(a=t.sent()).ok?[3,3]:[4,H("Delete Installation",a)];case 2:throw t.sent();case 3:return[2]}var e,n})})}function Et(t,r){var i=t.appConfig;return function(t,e){nt();var n=Z(t),r=Q.get(n);r||(r=new Set,Q.set(n,r)),r.add(e)}(i,r),function(){var t,e,n;t=r,e=Z(i),(n=Q.get(e))&&(n.delete(t),0===n.size&&Q.delete(e),rt())}}function At(t){return F.create("missing-app-config-values",{valueName:t})}function Nt(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}(it=Ue).INTERNAL.registerComponent(new p("installations",function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw At("App Configuration");if(!t.name)throw At("App Name");try{for(var r=s(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!t.options[o])throw At(o)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(i){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return[4,vt(i.appConfig)];case 1:return e=t.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):_t(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(t){return St(n,t)},delete:function(){return function(r){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,gt(e=r.appConfig,function(t){if(!t||0!==t.registrationStatus)return t})];case 1:if(!(n=t.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw F.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw F.create("app-offline");case 3:return[4,Tt(e,n)];case 4:return t.sent(),[4,dt(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})})}(n)},onIdChange:function(t){return Et(n,t)}}},"PUBLIC")),it.registerVersion("@firebase/installations",R),(st=at=at||{})[st.DEBUG=0]="DEBUG",st[st.VERBOSE=1]="VERBOSE",st[st.INFO=2]="INFO",st[st.WARN=3]="WARN",st[st.ERROR=4]="ERROR",st[st.SILENT=5]="SILENT";at.DEBUG,at.VERBOSE,at.INFO,at.WARN,at.ERROR,at.SILENT;function Ot(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),o=Pt[e];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[o].apply(console,Nt(["["+i+"]  "+t.name+":"],n))}}var kt=at.INFO,Pt=((ot={})[at.DEBUG]="log",ot[at.VERBOSE]="log",ot[at.INFO]="info",ot[at.WARN]="warn",ot[at.ERROR]="error",ot),Rt=(Object.defineProperty(Ct.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in at))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=t},enumerable:!0,configurable:!0}),Object.defineProperty(Ct.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!0,configurable:!0}),Object.defineProperty(Ct.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!0,configurable:!0}),Ct.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Nt([this,at.DEBUG],t)),this._logHandler.apply(this,Nt([this,at.DEBUG],t))},Ct.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Nt([this,at.VERBOSE],t)),this._logHandler.apply(this,Nt([this,at.VERBOSE],t))},Ct.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Nt([this,at.INFO],t)),this._logHandler.apply(this,Nt([this,at.INFO],t))},Ct.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Nt([this,at.WARN],t)),this._logHandler.apply(this,Nt([this,at.WARN],t))},Ct.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Nt([this,at.ERROR],t)),this._logHandler.apply(this,Nt([this,at.ERROR],t))},Ct);function Ct(t){this.name=t,this._logLevel=kt,this._logHandler=Ot,this._userLogHandler=null}var Mt,jt,Lt,Bt,Dt="0.3.2",Ft="FB-PERF-TRACE-MEASURE",xt="@firebase/performance/config",Ut="@firebase/performance/configexpire",qt="Performance",Ht=((Mt={})["trace started"]="Trace {$traceName} was started before.",Mt["trace stopped"]="Trace {$traceName} is not running.",Mt["no window"]="Window is not available.",Mt["no app id"]="App id is not available.",Mt["no project id"]="Project id is not available.",Mt["no api key"]="Api key is not available.",Mt["invalid cc log"]="Attempted to queue invalid cc event",Mt["FB not default"]="Performance can only start when Firebase app instance is the default one.",Mt["RC response not ok"]="RC response is not ok",Mt["invalid attribute name"]="Attribute name {$attributeName} is invalid.",Mt["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",Mt["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",Mt["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",Mt),Vt=new l("performance",qt,Ht),Kt=(Wt.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},Wt.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},Wt.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},Wt.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},Wt.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},Wt.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},Wt.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},Wt.prototype.setupObserver=function(t,i){this.PerformanceObserver&&new this.PerformanceObserver(function(t){for(var e=0,n=t.getEntries();e<n.length;e++){var r=n[e];i(r)}}).observe({entryTypes:[t]})},Wt.getInstance=function(){return void 0===jt&&(jt=new Wt(Lt)),jt},Wt);function Wt(t){if(!(this.window=t))throw Vt.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}function $t(t,e){var n=t.length-e.length;if(n<0||1<n)throw Vt.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}var Gt,Jt,zt,Yt=(Zt.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw Vt.create("no app id");return t},Zt.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw Vt.create("no project id");return t},Zt.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw Vt.create("no api key");return t},Zt.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},Zt.getInstance=function(){return void 0===Bt&&(Bt=new Zt),Bt},Zt);function Zt(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=$t("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=$t("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.shouldSendToFl=!1,this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}function Qt(){return Gt}(zt=Jt=Jt||{})[zt.UNKNOWN=0]="UNKNOWN",zt[zt.VISIBLE=1]="VISIBLE",zt[zt.HIDDEN=2]="HIDDEN";var Xt=["firebase_","google_","ga_"],te=new RegExp("^[a-zA-Z]\\w*$");function ee(){switch(Kt.getInstance().document.visibilityState){case"visible":return Jt.VISIBLE;case"hidden":return Jt.HIDDEN;default:return Jt.UNKNOWN}}var ne=new Rt(qt);ne.logLevel=at.INFO;var re="0.0.1",ie={loggingEnabled:!0,shouldSendToFl:!0},oe={shouldSendToFl:!1},ae="FIREBASE_INSTALLATIONS_AUTH";function se(e){var r,t=function(){var t=Kt.getInstance().localStorage;if(!t)return;var e=t.getItem(Ut);if(!e||!function(t){return Number(t)>Date.now()}(e))return;var n=t.getItem(xt);if(!n)return;try{return JSON.parse(n)}catch(t){return}}();return t?(ce(e,t),Promise.resolve()):(r=e,function(){var t=Yt.getInstance().installationsService.getToken();return t.then(function(t){}),t}().then(function(t){var e="https://firebaseremoteconfig.googleapis.com/v1/projects/"+Yt.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+Yt.getInstance().getApiKey(),n=new Request(e,{method:"POST",headers:{Authorization:ae+" "+t},body:JSON.stringify({app_instance_id:r,app_instance_id_token:t,app_id:Yt.getInstance().getAppId(),app_version:Dt,sdk_version:re})});return fetch(n).then(function(t){if(t.ok)return t.json();throw Vt.create("RC response not ok")})}).catch(function(){ne.info(ue)}).then(function(t){return ce(e,t)}).then(function(t){return function(t){var e=Kt.getInstance().localStorage;if(!t||!e)return;e.setItem(xt,JSON.stringify(t)),e.setItem(Ut,String(Date.now()+60*Yt.getInstance().configTimeToLive*60*1e3))}(t)},function(){}))}var ue="Could not fetch config, will use default configs";function ce(t,e){if(!e)return e;var n,r,i=Yt.getInstance(),o=e.entries||{},a=e.state;return i.loggingEnabled=void 0!==o.fpr_enabled?"true"===String(o.fpr_enabled):ie.loggingEnabled,o.fpr_log_source&&(i.logSource=Number(o.fpr_log_source)),o.fpr_log_endpoint_url&&(i.logEndPointUrl=o.fpr_log_endpoint_url),o.fpr_log_transport_key&&(i.transportKey=o.fpr_log_transport_key),i.shouldSendToFl=void 0===a||"INSTANCE_STATE_UNSPECIFIED"===a||"NO_TEMPLATE"===a?oe.shouldSendToFl:o.fpr_log_transport_web_percent?(n=t,r=Number(o.fpr_log_transport_web_percent),0!==n.length&&function(t){for(var e=0,n=0;n<t.length;n++)e=(e<<3)+e-t.charCodeAt(n);return e=Math.abs(e%100)}(n)<r):ie.shouldSendToFl,void 0!==o.fpr_vc_network_request_sampling_rate&&(i.networkRequestsSamplingRate=Number(o.fpr_vc_network_request_sampling_rate)),void 0!==o.fpr_vc_trace_sampling_rate&&(i.tracesSamplingRate=Number(o.fpr_vc_trace_sampling_rate)),i.logTraceAfterSampling=le(i.tracesSamplingRate),i.logNetworkAfterSampling=le(i.networkRequestsSamplingRate),e}function le(t){return Math.random()<=t}var fe,pe=1;function he(){return pe=2,fe=fe||function(){var n=Kt.getInstance().document;return new Promise(function(t){if(n&&"complete"!==n.readyState){var e=function(){"complete"===n.readyState&&(n.removeEventListener("readystatechange",e),t())};n.addEventListener("readystatechange",e)}else t()})}().then(function(){return(t=Yt.getInstance().installationsService.getId()).then(function(t){Gt=t}),t;var t}).then(function(t){return se(t)}).then(function(){return de()},function(){return de()})}function de(){pe=3}var ge,ve=1e4,me=5500,ye=3,be=ye,_e=[],we=!1;function Ie(t){setTimeout(function(){if(0!==be)return _e.length?void function(){var t=o(_e);_e=[];var e=t.map(function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}});(function(t,e){return Yt.getInstance().shouldSendToFl?function(t,i){return function(t){var e=Yt.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}(t).then(function(t){return t.ok||ne.info("Call to Firebase backend failed."),t.json()}).then(function(t){var e=Number(t.nextRequestWaitMillis),n=ve;isNaN(e)||(n=Math.max(e,n));var r=t.logResponseDetails;Array.isArray(r)&&0<r.length&&"RETRY_REQUEST_LATER"===r[0].responseAction&&(_e=o(i,_e),ne.info("Retry transport request later.")),be=ye,Ie(n)})}(t,e):function(t){return fetch(Yt.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(t)}).then(function(t){return t.ok||ne.info("Call to Firebase backend failed."),t.json()}).then(function(t){var e=Number(t.next_request_wait_millis),n=isNaN(e)?ve:Math.max(ve,e);be=ye,Ie(n)})}(t)})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Yt.getInstance().logSource,log_event:e},t).catch(function(){_e=o(t,_e),be--,ne.info("Tries left: "+be+"."),Ie(ve)})}():Ie(ve)},t)}function Se(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];!function(t){if(!t.eventTime||!t.message)throw Vt.create("invalid cc log");_e=o(_e,[t])}({message:n.apply(void 0,t),eventTime:Date.now()})}}function Te(t,e){(ge=ge||Se(Ne))(t,e)}function Ee(t){var e=Yt.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&Kt.getInstance().requiredApisAvailable()&&(t.isAuto&&ee()!==Jt.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===pe?Ae(t):he().then(function(){return Ae(t)},function(){return Ae(t)})))}function Ae(t){Qt()&&setTimeout(function(){return Te(t,1)},0)}function Ne(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:Oe(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:Oe(),trace_metric:e};return JSON.stringify(r)}(t);var n,r,i}function Oe(){return{google_app_id:Yt.getInstance().getAppId(),app_instance_id:Qt(),web_app_info:{sdk_version:Dt,page_url:Kt.getInstance().getUrl(),service_worker_status:"serviceWorker"in(t=Kt.getInstance().navigator)?t.serviceWorker.controller?2:3:1,visibility_state:ee(),effective_connection_type:function(){var t=Kt.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}()},application_process_state:0};var t}var ke=["_fp","_fcp","_fid"];var Pe=(Re.prototype.start=function(){if(1!==this.state)throw Vt.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},Re.prototype.stop=function(){if(2!==this.state)throw Vt.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Ee(this)},Re.prototype.record=function(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=c({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r];isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}Ee(this)},Re.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&this.putMetric(t,0),this.counters[t]+=e},Re.prototype.putMetric=function(t,e){if(n=t,r=this.name,0===n.length||100<n.length||!(r&&r.startsWith("_wt_")&&-1<ke.indexOf(n))&&n.startsWith("_"))throw Vt.create("invalid custom metric name",{customMetricName:t});var n,r;this.counters[t]=e},Re.prototype.getMetric=function(t){return this.counters[t]||0},Re.prototype.putAttribute=function(t,e){var n,r,i=!(0===(n=t).length||40<n.length||Xt.some(function(t){return n.startsWith(t)})||!n.match(te)),o=0!==(r=e).length&&r.length<=100;if(i&&o)this.customAttributes[t]=e;else{if(!i)throw Vt.create("invalid attribute name",{attributeName:t});if(!o)throw Vt.create("invalid attribute value",{attributeValue:e})}},Re.prototype.getAttribute=function(t){return this.customAttributes[t]},Re.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},Re.prototype.getAttributes=function(){return c({},this.customAttributes)},Re.prototype.setStartTime=function(t){this.startTimeUs=t},Re.prototype.setDuration=function(t){this.durationUs=t},Re.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},Re.createOobTrace=function(t,e,n){var r=Kt.getInstance().getUrl();if(r){var i=new Re("_wt_"+r,!0),o=Math.floor(1e3*Kt.getInstance().getTimeOrigin());if(i.setStartTime(o),t&&t[0]&&(i.setDuration(Math.floor(1e3*t[0].duration)),i.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),i.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),i.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd))),e){var a=e.find(function(t){return"first-paint"===t.name});a&&a.startTime&&i.putMetric("_fp",Math.floor(1e3*a.startTime));var s=e.find(function(t){return"first-contentful-paint"===t.name});s&&s.startTime&&i.putMetric("_fcp",Math.floor(1e3*s.startTime)),n&&i.putMetric("_fid",Math.floor(1e3*n))}Ee(i)}},Re.createUserTimingTrace=function(t){Ee(new Re(t,!1,t))},Re);function Re(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=Kt.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="FB-PERF-TRACE-START-"+this.randomId+"-"+this.name,this.traceStopMark="FB-PERF-TRACE-STOP-"+this.randomId+"-"+this.name,this.traceMeasure=n||Ft+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}function Ce(t){var e=t;if(e&&void 0!==e.responseStart){var n=Kt.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){var e=Yt.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(function(){return Te(t,0)},0)}}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}var Me=5e3;function je(){Qt()&&(setTimeout(function(){return function(){var t=Kt.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout(function(){Pe.createOobTrace(e,n),r=void 0},Me);t.onFirstInputDelay(function(t){r&&(clearTimeout(r),Pe.createOobTrace(e,n,t))})}else Pe.createOobTrace(e,n)}()},0),setTimeout(function(){return function(){for(var t=Kt.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){Ce(r[n])}t.setupObserver("resource",Ce)}()},0),setTimeout(function(){return function(){for(var t=Kt.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){Le(r[n])}t.setupObserver("measure",Le)}()},0))}function Le(t){var e=t.name;e.substring(0,Ft.length)!==Ft&&Pe.createUserTimingTrace(e)}var Be=(De.prototype.trace=function(t){return new Pe(t)},Object.defineProperty(De.prototype,"instrumentationEnabled",{get:function(){return Yt.getInstance().instrumentationEnabled},set:function(t){Yt.getInstance().instrumentationEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(De.prototype,"dataCollectionEnabled",{get:function(){return Yt.getInstance().dataCollectionEnabled},set:function(t){Yt.getInstance().dataCollectionEnabled=t},enumerable:!0,configurable:!0}),De);function De(t){this.app=t,Kt.getInstance().requiredApisAvailable()?(we||(Ie(me),we=!0),he().then(je,je)):ne.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}var Fe;function xe(t,e){if("[DEFAULT]"!==t.name)throw Vt.create("FB not default");if("undefined"==typeof window)throw Vt.create("no window");return Lt=window,Yt.getInstance().firebaseAppInstance=t,Yt.getInstance().installationsService=e,new Be(t)}(Fe=Ue).INTERNAL.registerComponent(new p("performance",function(t){var e=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();return xe(e,n)},"PUBLIC")),Fe.registerVersion("@firebase/performance","0.3.2")}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-performance.js - be sure to load firebase-app.js first.")}});