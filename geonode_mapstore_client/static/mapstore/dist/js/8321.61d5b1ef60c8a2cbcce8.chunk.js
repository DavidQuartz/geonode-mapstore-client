(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8321],{38334:(e,r,t)=>{"use strict";t.d(r,{oc:()=>n,v:()=>o,jo:()=>a,tv:()=>i,iF:()=>u,iC:()=>l});var n="GEONODE:START_ASYNC_PROCESS",o="GEONODE:STOP_ASYNC_PROCESS",a="GEONODE:UPDATE_ASYNC_PROCESS";function i(e){return{type:n,payload:e}}function u(e){return{type:a,payload:e}}function l(e){return{type:o,payload:e}}},18576:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>M});var n,o=t(75875),a=t.n(o),i=t(89255),u=t(827),l=t(74621),s=t(97395),c=t(73443),v=t(43892),d=t(99380),p=t(55035),f=t(55877),b=t.n(f),m=t(3828),y=t(89514),O=t(38334),g=t(35721),h=t(12530),S=t(82904);function w(e){return function(e){if(Array.isArray(e))return T(e)}(e)||P(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,r){if(e){if("string"==typeof e)return T(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,r):void 0}}function P(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function T(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){D(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function D(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e,r){var t=(0,g.oB)(e.data,r);return A(A({},e),t)}var _=(D(n={},g.P6.MAP,(function(e,r,t){var n=(0,u.Od)(e)||{};return r?(0,d.sA)(r,A(A({},C(t,n)),{},{id:r})):(0,d.df)(C(t,n))})),D(n,g.P6.GEOSTORY,(function(e,r,t){var n=(0,l.np)(e);return r?(0,d.yp)(r,t):(0,d.Du)(A({name:t.title+" "+b()(),owner:n.name,resource_type:g.P6.GEOSTORY},t))})),D(n,g.P6.DASHBOARD,(function(e,r,t){var n=(0,l.np)(e);return r?(0,d.yp)(r,t):(0,d.Du)(A({name:t.title+" "+b()(),owner:n.name,resource_type:g.P6.DASHBOARD},t))})),D(n,g.P6.DOCUMENT,(function(e,r,t){return!!r&&(0,d.gU)(r,t)})),D(n,g.P6.DATASET,(function(e,r,t){return!!r&&(0,d.do)(r,t)})),n);const M={gnSaveContent:function(e,r){return e.ofType(c.oG).switchMap((function(e){var t,n=r.getState(),o=(null===(t=n.gnresource)||void 0===t?void 0:t.type)||"map",a=(0,m.Il)(n,o),u=A(A({title:e.metadata.name},e.metadata.description&&{abstract:e.metadata.description}),a&&{data:JSON.parse(JSON.stringify(a))}),l=(0,m.yK)(n);return i.Observable.defer((function(){return _[o](n,e.id,u,e.reload)})).switchMap((function(r){return e.reload?(window.location.href=(0,p.z)(null==r?void 0:r.detail_url),window.location.reload(),i.Observable.empty()):i.Observable.of.apply(i.Observable,[(0,S.Xg)("pendingChanges","value",null),(0,c.gc)(r),(0,v.DF)(A(A({},l),u))].concat(w(e.showNotifications?[!0===e.showNotifications?(0,s.Vp)({title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"}):(0,s.Kp)(e.showNotifications)]:[])))})).catch((function(r){return i.Observable.of.apply(i.Observable,[(0,c.cE)(r.data||r.message)].concat(w(e.showNotifications?[(0,s.vU)({title:"map.mapError.errorTitle",message:"map.mapError.errorDefault"})]:[])))})).startWith((0,c.id)())}))},gnSaveDirectContent:function(e,r){return e.ofType(c.oz).switchMap((function(){var e=r.getState(),t=(0,u._H)(e),n=(null==t?void 0:t.id)||(0,m.fg)(e),o=(0,m.oS)(e),l=o.compactPermissions,p=o.geoLimits,f=(0,m.yK)(e);return i.Observable.defer((function(){return a().all([(0,d.iv)(n)].concat(w(p?p.map((function(e){return 0===e.features.length?(0,y.jg)(n,e.id,e.type).catch((function(){return{error:!0,resourceId:n,limits:e}})):(0,y.dl)(n,e.id,e.type,{features:e.features}).catch((function(){return{error:!0,resourceId:n,limits:e}}))})):[])))})).switchMap((function(r){var t,o=function(e){if(Array.isArray(e))return e}(t=r)||P(t)||E(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=o[0],u=o.slice(1).filter((function(e){return e.error})),s=(0,m.Yj)(e),p=(0,m.uu)(e),b={name:s||(null==a?void 0:a.title),description:p||(null==a?void 0:a.abstract),extension:null==a?void 0:a.extension,href:null==a?void 0:a.href};return i.Observable.concat.apply(i.Observable,w(l?[i.Observable.defer((function(){return(0,d.BY)(n,(0,g.go)(l)).then((function(e){return{resource:f,output:e,processType:h.zj.PERMISSIONS_RESOURCE}})).catch((function(e){var r;return{resource:f,error:(null==e||null===(r=e.data)||void 0===r?void 0:r.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0,processType:h.zj.PERMISSIONS_RESOURCE}}))})).switchMap((function(e){return i.Observable.of((0,O.tv)(e))}))]:[]).concat([i.Observable.of((0,c.Vj)(n,b,!1,!(u.length>0)||{title:"gnviewer.warningGeoLimitsSaveTitle",message:"gnviewer.warningGeoLimitsSaveMessage"}),(0,v.F4)())]))})).catch((function(e){var r;return i.Observable.of((0,c.cE)(e.data||e.message),(0,s.vU)({title:"map.mapError.errorTitle",message:(null==e||null===(r=e.data)||void 0===r?void 0:r.detail)||(null==e?void 0:e.message)||"map.mapError.errorDefault"}))})).startWith((0,c.id)())}))},gnSetMapThumbnail:function(e,r){return e.ofType(v.Js).switchMap((function(e){var t,n,o,a,u=r.getState(),l=(null===(t=u.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.resource_type)||"map",p=null==u||null===(o=u.gnresource)||void 0===o?void 0:o.id,f=(null===(a=u.gnresource)||void 0===a?void 0:a.data)||{},b={srid:e.bbox.crs,bbox:[Object.values(e.bbox.bounds)[2],Object.values(e.bbox.bounds)[0],Object.values(e.bbox.bounds)[3],Object.values(e.bbox.bounds)[1]]};return i.Observable.defer((function(){return(0,d.CB)(p,b,l)})).switchMap((function(e){return i.Observable.of.apply(i.Observable,[(0,v.QN)(A(A({},f),{},{thumbnail_url:"".concat(e.thumbnail_url,"?").concat(Math.random())})),(0,c.rG)()].concat([(0,s.Vp)({title:"gnviewer.thumbnailsaved",message:"gnviewer.thumbnailsaved"})]))})).catch((function(e){return i.Observable.of((0,c.cE)(e.data),(0,s.vU)({title:"gnviewer.thumbnailnotsaved",message:"gnviewer.thumbnailnotsaved"}))}))}))},gnWatchStopPermissionsProcess:function(e,r){return e.ofType(O.v).filter((function(e){var r;return(null==e||null===(r=e.payload)||void 0===r?void 0:r.processType)===h.zj.PERMISSIONS_RESOURCE})).switchMap((function(e){var t,n,o,a,u,l=r.getState();if((0,m.fg)(l)!==(null==e||null===(t=e.payload)||void 0===t||null===(n=t.resource)||void 0===n?void 0:n.pk))return i.Observable.empty();if((null==e||null===(o=e.payload)||void 0===o?void 0:o.error)||(null==e||null===(a=e.payload)||void 0===a||null===(u=a.output)||void 0===u?void 0:u.status)===h.N5.FAILED)return i.Observable.of((0,s.vU)({title:"gnviewer.errorCompactPermissionsTitle",message:"gnviewer.errorCompactPermissionsMessage"}));var c=(0,m.iV)(l);return i.Observable.of((0,v.X7)(c))}))},gnWatchStopCopyProcessOnSave:function(e,r){return e.ofType(O.v).filter((function(e){var r;return(null==e||null===(r=e.payload)||void 0===r?void 0:r.processType)===h.zj.COPY_RESOURCE})).switchMap((function(e){var t,n,o,a,u,l,c,f,b,y,O,g=r.getState(),S=(0,m.fg)(g),w=null==g||null===(t=g.router)||void 0===t||null===(n=t.location)||void 0===n?void 0:n.pathname;if(S!==(null==e||null===(o=e.payload)||void 0===o||null===(a=o.resource)||void 0===a?void 0:a.pk)||w.includes("/detail/"))return i.Observable.empty();if((null==e||null===(u=e.payload)||void 0===u?void 0:u.error)||(null==e||null===(l=e.payload)||void 0===l||null===(c=l.output)||void 0===c?void 0:c.status)===h.N5.FAILED)return i.Observable.of((0,s.vU)({title:"map.mapError.errorTitle",message:"map.mapError.errorDefault"}));var E=null==e||null===(f=e.payload)||void 0===f||null===(b=f.output)||void 0===b||null===(y=b.output_params)||void 0===y||null===(O=y.output)||void 0===O?void 0:O.uuid;return void 0===E?i.Observable.empty():i.Observable.defer((function(){return(0,d.LS)(E)})).switchMap((function(e){return window.location.href=(0,p.z)(null==e?void 0:e.detail_url),i.Observable.empty()})).startWith((0,v.lf)(!0))}))}}},62170:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(73443),o=t(43892),a={};const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case o.$X:return a;case n.rs:case n.oz:return{saving:!0,error:void 0,success:void 0};case o.Js:return{savingThumbnailMap:!0};case n.AY:return{success:r.success,saving:!1};case n.SW:return{error:r.error,saving:!1};case n.yB:return{};default:return e}}}}]);