(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[59010],{362520:(e,t,n)=>{"use strict";n.d(t,{dn:()=>r,Kn:()=>o,FV:()=>i,yS:()=>l});var r="MAP_LAYOUT:UPDATE_MAP_LAYOUT",o="MAP_LAYOUT:FORCE_UPDATE_MAP_LAYOUT";function i(e){return{type:r,layout:e}}function l(){return{type:o}}},55105:(e,t,n)=>{"use strict";n.d(t,{Ss:()=>f,Nr:()=>y,ic:()=>d,Jz:()=>v,VM:()=>p,CF:()=>b});var r=n(91175),o=n.n(r),i=n(800827),l=n(552259);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return e.maplayout&&e.maplayout.layout||{}},y=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return c(c({},e),{},s({},t,n[t]))}),{})||{}},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=f(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},v=function(e){return m(e,[{key:"right",value:658}])},p=function(e){return m(e,[{key:"bottom",value:30,type:"not"}])},b=function(e){var t=(0,i.Od)(e),n=y(e);return n&&t&&t.size&&{left:(0,l.parseLayoutValue)(n.left,t.size.width),bottom:(0,l.parseLayoutValue)(n.bottom,t.size.height),right:(0,l.parseLayoutValue)(n.right,t.size.width),top:(0,l.parseLayoutValue)(n.top,t.size.height)}}},586300:(e,t,n)=>{"use strict";n.d(t,{N4:()=>l,vq:()=>a,YD:()=>u});var r=n(375875),o=n.n(r),i={},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/map.json";return i.newMapConfig?new Promise((function(e){return e(i.newMapConfig)})):o().get(e).then((function(e){var t=e.data;return i.newMapConfig=t,t})).then((function(e){return window.overrideNewMapConfig?window.overrideNewMapConfig(e):e}))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/geostory.json";return i.newGeoStoryConfig?new Promise((function(e){return e(i.newGeoStoryConfig)})):o().get(e).then((function(e){var t=e.data;return i.newGeoStoryConfig=t,t})).then((function(e){return window.overrideNewGeoStoryConfig?window.overrideNewGeoStoryConfig(e):e}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/styleTemplates.json";return i.styleTemplatesConfig?new Promise((function(e){return e(i.styleTemplatesConfig)})):o().get(e).then((function(e){var t=e.data;return i.styleTemplatesConfig=null==t?void 0:t.templates,i.styleTemplatesConfig}))}},567587:(e,t,n)=>{"use strict";n.d(t,{z:()=>c});var r=n(409082);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=["msForceVisual"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=e.baseUrl,o=e.styleName;return n.e(2568).then(n.t.bind(n,402568,23)).then((function(e){var n=e.default;return(0,r.bc)({baseUrl:t,styleName:o}).then((function(e){var l=(null==e?void 0:e.metadata)||{},u=l.msForceVisual,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(l,i);if(!u||""===u)return e;var s=a(a({},c),{},{msForceVisual:"",msEditorType:"visual",msStyleJSON:"",msMD5Hash:n(null==e?void 0:e.code)});return(0,r.Uz)(a(a({},e),{},{baseUrl:t,styleName:o,metadata:s,options:{params:{raw:!0}}})).then((function(){return a(a({},e),{},{metadata:s})}))}))}))}},632247:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(124852);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const i=function(e,t){var n,i,l=function(){if("undefined"==typeof window)return t;try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log("Error to get item key “".concat(e,"”:"),n),t}},a=(n=(0,r.useState)(l),i=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(n,i)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],c=a[1];return(0,r.useEffect)((function(){c(l())}),[]),(0,r.useEffect)((function(){var e=function(){c(l())};return window.addEventListener("localStorage",e),function(){window.removeEventListener("localStorage",e)}}),[]),[u,function(t){try{var n=t instanceof Function?t(u):t;c(n),window.localStorage.setItem(e,JSON.stringify(n)),window.dispatchEvent(new Event("localStorage"))}catch(t){console.log("Error “".concat(e,"”:"),t)}}]}},133096:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ve});var r=n(124852),o=n.n(r),i=n(322843),l=n(171703),a=n(22222),u=n(480681),c=n(278720),s=n(532244),f=n(394943),y=n(49977),d=n(423570),m=n.n(d),v=n(580416),p=n(396909),b=n(782904),g=n(460604),S=n(99009),O=n(409082),h=n(893222),w="GEONODE:REQUEST_DATASET_AVAILABLE_STYLES",E=n(717621),j=n.n(E),P=n(535721),C=n(567587),N=n(362520),T=n(55105),A=n(737275),k=n(226735);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===I(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){var t=e.type,n=e.title,r=j()("hsl(".concat(Math.floor(270*Math.random()),", 90%, 70%)")).toHexString();switch(t){case"raster":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\traster-channels: auto;\n\traster-opacity: 1;\n}\n";case"point":default:return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tmark: symbol('square');\n\t:mark {\n\t\tfill: "+r+";\n\t\tsize: 4;\n\t}\n}\n";case"linestring":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tstroke: "+r+";\n}\n";case"polygon":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tfill: "+r+";\n}\n"}}const V={gnRequestDatasetAvailableStyles:function(e,t){return e.ofType(w).switchMap((function(e){var n,r=t.getState(),o=(null==e||null===(n=e.options)||void 0===n?void 0:n.styleService)||(0,h.Z0)(r);return y.Observable.concat(y.Observable.of((0,b.Xg)("visualStyleEditor","enabled",!0)),y.Observable.defer((function(){return function(e){var t,n,r,o,i,l,a=e.layer,u=e.styleService,c=null==a||null===(t=a.extendedParams)||void 0===t||null===(n=t.mapLayer)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.subtype,s=(null==a?void 0:a.availableStyles)||[];return 0===s.length?function(e,t){var n,r="visual";return e?(0,C.z)({baseUrl:null==t?void 0:t.baseUrl,styleName:(0,P.UH)(e)}).then((function(e){var t=e||{},n=t.metadata,r=void 0===n?{}:n,o=t.code,i=t.format,l=t.languageVersion;return{msEditorType:null==r?void 0:r.msEditorType,msStyleJSON:null==r?void 0:r.msStyleJSON,code:o,format:i,languageVersion:l}})).catch((function(){return{msEditorType:r,msStyleJSON:null,code:n}})):new Promise((function(e){return e({msStyleJSON:null,msEditorType:r,code:n})}))}(null==a||null===(o=a.extendedParams)||void 0===o||null===(i=o.mapLayer)||void 0===i||null===(l=i.dataset)||void 0===l?void 0:l.default_style,u).then((function(e){var t,n,r,o,i=e||{},l=i.msEditorType,s=i.msStyleJSON,f=i.code,y=i.format,d=i.languageVersion,v=a.name.split(":"),p=1===v.length?v[0]:v[v.length-1],b=(o=p,"geonode:".concat(m()(),"_ms_").concat(o)),g={title:p,description:"",msStyleJSON:s,msEditorType:l,gnDatasetPk:null==a||null===(t=a.extendedParams)||void 0===t||null===(n=t.mapLayer)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.pk};return O.ZP.createStyle(D({baseUrl:null==u?void 0:u.baseUrl,code:f||Z({type:c,title:p}),format:f&&y?y:"css",styleName:b,metadata:g,options:{params:{raw:!0}}},f&&y&&{languageVersion:d})).then((function(){return[[{name:b,title:p,metadata:g,format:y}],!0]}))})):new Promise((function(e){return e([s])}))}({layer:e.layer,styleService:o})})).switchMap((function(t){var n,r,i,l,a=(i=t,l=1,function(e){if(Array.isArray(e))return e}(i)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(i,l)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(i,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],u=(null==e||null===(n=e.options)||void 0===n?void 0:n.style)||(null==a||null===(r=a[0])||void 0===r?void 0:r.name);return y.Observable.concat(y.Observable.defer((function(){return O.ZP.getStylesInfo({baseUrl:null==o?void 0:o.baseUrl,styles:a})})).switchMap((function(t){return y.Observable.of((0,v.tV)(e.layer.id,"layer",{availableStyles:t}),(0,v.Xy)({style:u},!0),(0,g.W)(e.layer.id,S.s1,"override",{}),(0,p.Nf)("edit"))})))})))}))},gnUpdateStyleInfoOnSave:function(e,t){return e.ofType(p.ch).switchMap((function(){var e=t.getState(),n=(0,h.Vf)(e);return y.Observable.of((0,v.tV)(n.id,"layers",{style:n.style}))}))},gnUpdateVisualStyleEditorMapLayout:function(e,t){return e.ofType(N.dn,b.At).filter((function(){var e,n,r;return null===(e=t.getState())||void 0===e||null===(n=e.controls)||void 0===n||null===(r=n.visualStyleEditor)||void 0===r?void 0:r.enabled})).filter((function(e){return e.source!==k.O.PANEL})).map((function(e){var n=e.layout,r=(0,A.u8)("mapLayout")||{left:{sm:300,md:500,lg:600},right:{md:658},bottom:{sm:30}},o=(0,N.FV)(D(D(D({},(0,T.Ss)(t.getState())),n),{},{left:r.left.md,boundingMapRect:D(D({},(null==n?void 0:n.boundingMapRect)||{}),{},{left:r.left.md})}));return D(D({},o),{},{source:k.O.PANEL})}))}};var x=n(805346),z=n(303744),_=n(399534),F=n(694745),R=n(76907),J=n(815135),G=n(675110),Y=n(632247),q=n(283958),B=n(290702),X=n(166287),$=n(586300);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===H(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=(0,J.Z)(z.Z);function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==re(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==re(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===re(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var se=(0,J.Z)(z.Z),fe=(0,l.connect)((0,a.P1)([h.QW,h.gB,h.aN,h.p,G.l2],(function(e,t,n,r,o){var i;return{isStyleChanged:void 0!==e&&void 0!==t&&e!==t,loading:n,error:!(null==r||null===(i=r.edit)||void 0===i||!i.status),layerLoading:o&&o.some((function(e){return e.loading}))}})),{onClick:p.Lc})((function(e){var t=e.variant,n=e.onClick,r=e.size,i=e.isStyleChanged,l=e.error,a=e.loading,u=e.layerLoading,c=e.msgId,s=void 0===c?"gnviewer.applyStyle":c,f=!!(a||u||l);return i?o().createElement(se,{variant:t||"primary",className:i?"gn-pending-changes-icon":"",size:r,disabled:f,onClick:f?function(){}:function(){return n()}},o().createElement(x.Z,{msgId:s})):null})),ye=(0,l.connect)((0,a.P1)([h.Vf,h.lC,h.Ed,h.gB,h.i7,function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.visualStyleEditor)||void 0===n?void 0:n.tmpCode}],(function(e,t,n,r,o,i){var l;return{geometryType:t,format:n,selectedStyle:null==e||null===(l=e.availableStyles)||void 0===l?void 0:l.find((function(e){return e.name===o})),code:r,tmpCode:i}})),{onSelect:p.p2,onUpdateMetadata:p.bB,onStoreTmpCode:b.Xg.bind(null,"visualStyleEditor","tmpCode")})((function(e){var t=e.code,n=e.format,i=e.geometryType,l=e.onSelect,a=e.selectedStyle,u=e.onUpdateMetadata,c=e.tmpCode,s=e.onStoreTmpCode,f=(0,r.useRef)(),y=ee((0,r.useState)([]),2),d=y[0],m=y[1],v=ee((0,r.useState)(),2),p=v[0],b=v[1],g=ee((0,r.useState)(!1),2),S=g[0],O=g[1];(0,r.useEffect)((function(){return f.current=!0,(0,$.YD)().then((function(e){f.current&&m(e)})),function(){f.current=!1}}),[]);var h=(0,r.useRef)();h.current=function(e){e?s(t):(b(void 0),c&&l(c))},(0,r.useEffect)((function(){return function(){s("")}}),[]);var w=d.filter((function(e){return e.types.includes(i)}));return(null==w?void 0:w.length)>0?o().createElement(B.Z,{key:S,placement:"right",open:S,onOpen:function(e){O(e),h.current(e)},content:o().createElement("div",{className:"gn-visual-style-editor-templates"},o().createElement("ul",null,w.map((function(e,t){var r;return o().createElement("li",{key:t,className:"gn-visual-style-editor-template".concat(p===t?" selected":""),onClick:function(){return function(e,t){var r,o=e.code;b(t);var i=(null==a||null===(r=a.metadata)||void 0===r?void 0:r.title)||(null==a?void 0:a.label)||(null==a?void 0:a.title)||(null==a?void 0:a.name)||"";(0,X.getStyleParser)(n).then((function(e){e.writeStyle(Q(Q({},o),{},{name:i})).then((function(e){f.current&&l(e)}))}))}(e,t)}},o().createElement("div",{className:"gn-visual-style-editor-template-preview"},null!=e&&null!==(r=e.preview)&&void 0!==r&&r.config?o().createElement(q.Z,e.preview.config):null==e?void 0:e.preview),o().createElement("div",{className:"gn-visual-style-editor-template-title"},e.title))}))),o().createElement("div",{className:"gn-visual-style-editor-templates-footer"},o().createElement(ne,{size:"xs",disabled:void 0===p,variant:"primary",onClick:function(){s(t),u({styleJSON:null,editorType:"visual"}),O(!1)}},o().createElement(x.Z,{msgId:"gnviewer.copy"}))))},o().createElement(ne,{size:"xs"},o().createElement(x.Z,{msgId:"gnviewer.copyFrom"}))):null})),de=(0,l.connect)((0,a.P1)([h.Vf,h.gc,h.Z0,h.QW,function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.visualStyleEditor)||void 0===n?void 0:n.enabled},function(e){return(0,T.ic)(e,{height:!0})},G.Iz,h.gB,R.L4],(function(e,t,n,r,o,i,l,a,u){return{layer:e,temporaryStyleId:t,styleService:n,initialCode:r,enabled:o,style:i,originalStyle:null==l?void 0:l.style,isStyleChanged:void 0!==r&&void 0!==a&&r!==a,resourceType:u}})),{onUpdateStatus:p.Nf,onUpdateParams:v.Xy,onInit:p.E0,onReset:p.Wv.bind(null,void 0,!1),onSave:p.Lc,onClose:b.Xg.bind(null,"visualStyleEditor","enabled",!1),onUpdateNode:v.tV},(function(e,t,n){var r,o,i,l=(null===(r=n.styleService)||void 0===r?void 0:r.baseUrl)===(null===(o=e.styleService)||void 0===o?void 0:o.baseUrl)&&(null===(i=e.styleService)||void 0===i?void 0:i.isStatic),a=n.styleService&&!l?le(le({},n.styleService),{},{isStatic:!0}):le({},e.styleService);return le(le(le(le({},n),e),t),{},{styleService:a})}))((function(e){var t=e.layer,n=e.editorConfig,i=e.styleService,l=e.onInit,a=e.onReset,s=e.temporaryStyleId,f=e.showLayerProperties,y=e.initialCode,d=e.enabled,m=e.onClose,v=e.style,p=e.isStyleChanged,b=e.resourceType,g=ue((0,r.useState)(!1),2),S=g[0],h=g[1],w=ue((0,Y.Z)("style-notifcation",!1),2),E=w[0],j=w[1],P=ue((0,r.useState)(!1),2),C=P[0],N=P[1],T=(0,r.useRef)();function A(e){e?(a(),m()):h(!0)}return T.current=function(){s&&O.ZP.deleteStyle({baseUrl:i.baseUrl,styleName:s})},(0,r.useEffect)((function(){function e(){T.current()}return l(i),window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e),a()}}),[]),d&&t.id?o().createElement("div",{className:"gn-visual-style-editor",style:v},f&&o().createElement("div",{className:"gn-visual-style-editor-layer-info"},o().createElement("div",{className:"gn-visual-style-editor-layer-title"},t.title),o().createElement(se,{onClick:A.bind(null,!p),className:"square-button"},o().createElement(u.Glyphicon,{glyph:"1-close"}))),!C&&!E&&"map"===b&&o().createElement("div",{className:"gn-visual-style-editor-alert alert-info"},o().createElement("div",{className:"gn-visual-style-editor-alert-message"},o().createElement(x.Z,{msgId:"gnviewer.stylesFirstClone"}),o().createElement(se,{size:"xs",variant:"transparent",onClick:function(){j(!0)}},o().createElement("p",null,o().createElement(x.Z,{msgId:"gnviewer.dismissMessage"})))),o().createElement(se,{size:"xs",variant:"transparent",onClick:function(){N(!0)}},o().createElement(u.Glyphicon,{glyph:"remove"}))),o().createElement("div",{className:"gn-visual-style-editor-body"},o().createElement("div",null,o().createElement(c.m2,{key:y,config:n,header:o().createElement(o().Fragment,null,o().createElement(ye,null),o().createElement(fe,{variant:"primary",size:"xs"}))}))),o().createElement(_.Z,null,o().createElement(F.Z,{title:o().createElement(x.Z,{msgId:"gnviewer.styleEditorCloseTitle"}),fitContent:!0,clickOutEnabled:!1,show:S,onClose:function(){h(!1)},buttons:[{text:o().createElement(x.Z,{msgId:"gnviewer.styleEditorCloseCancel"}),onClick:function(){h(!1)}},{text:o().createElement(x.Z,{msgId:"gnviewer.styleEditorCloseConfirm"}),bsStyle:"primary",onClick:function(){h(!1),A(!0)}}]},o().createElement("div",{style:{padding:"1rem"}},o().createElement(x.Z,{msgId:"gnviewer.styleEditorCloseMessage"}))))):null})),me=(0,l.connect)((0,a.P1)([h.Vf,R.HG,R.V$],(function(e,t,n){return{layer:e,enabled:!(null==t||!t.includes("change_resourcebase")),isNew:n}})),{onClick:function(e,t){return{type:w,layer:e,options:t}}})((function(e){var t,n=e.layer,r=e.status,i=e.onClick,l=void 0===i?function(){}:i,a=e.enabled,c=e.isNew,s=e.btnProps,f=void 0===s?{}:s,y=e.hide,d=e.selectedStyle;return y||"LAYER"!==r||null==n||null===(t=n.extendedParams)||void 0===t||!t.mapLayer||!a&&!c?null:o().createElement(se,oe({variant:"primary",className:"square-button-md"},f,{onClick:function(e){e.stopPropagation(),e.preventDefault(),l(n,{style:d})},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},tooltipId:o().createElement(x.Z,{msgId:"gnviewer.editLayerStyle"})}),o().createElement(u.Glyphicon,{glyph:"dropper"}))}));const ve=(0,i.rx)("VisualStyleEditor",{component:de,containers:{TOC:{target:"toolbar",Component:me},LayerSettings:{target:"style-button",Component:me}},reducers:{styleeditor:s.Z},epics:le(le({},f.ZP),V)})},226735:(e,t,n)=>{"use strict";n.d(t,{O:()=>r});var r={PANEL:"PANEL"}}}]);