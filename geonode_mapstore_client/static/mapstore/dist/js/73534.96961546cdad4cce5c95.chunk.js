(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[73534],{921914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>E,Ih:()=>u,Xw:()=>i,Pn:()=>c,DZ:()=>O,e8:()=>a,E0:()=>p,F9:()=>s,X_:()=>f,pb:()=>l,qb:()=>_,Re:()=>y,ih:()=>R,xy:()=>T,jL:()=>N,oz:()=>I,ph:()=>S,lF:()=>D,gG:()=>d,cb:()=>G,GI:()=>m,B1:()=>b,fv:()=>A,gc:()=>v,zX:()=>P,ZF:()=>C,Zb:()=>U,DW:()=>g,Xp:()=>F,Fm:()=>M,sV:()=>h,Mn:()=>L,LU:()=>j,XP:()=>w,WU:()=>Y,JB:()=>H,g:()=>q,ws:()=>Z,HP:()=>k,aN:()=>W,Pg:()=>Q,u0:()=>x,TM:()=>V,PM:()=>X,lK:()=>K,sv:()=>J,MO:()=>$,oO:()=>z,Mc:()=>tt,Zw:()=>et,RA:()=>rt,am:()=>nt,ZM:()=>ot,wm:()=>Et,Y$:()=>ut,Qu:()=>it,kT:()=>ct});var n=r(647310),o="LOAD_FEATURE_INFO",E="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",i="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",O="PURGE_MAPINFO_RESULTS",a="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",s="HIDE_MAPINFO_MARKER",f="SHOW_REVERSE_GEOCODE",l="HIDE_REVERSE_GEOCODE",_="GET_VECTOR_INFO",y="NO_QUERYABLE_LAYERS",R="CLEAR_WARNING",T="FEATURE_INFO_CLICK",N="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",I="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",S="TOGGLE_MAPINFO_STATE",D="UPDATE_CENTER_TO_MARKER",d="IDENTIFY:CHANGE_PAGE",G="IDENTIFY:CLOSE_IDENTIFY",m="IDENTIFY:CHANGE_FORMAT",b="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",A="IDENTIFY:EDIT_LAYER_FEATURES",v="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",P="IDENTIFY:SET_MAP_TRIGGER",C="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",U="IDENTIFY:SET_SHOW_IN_MAP_POPUP",g="IDENTIFY:IDENTIFY_IS_MOUNTED",F="IDENTIFY:INIT_PLUGIN";function M(t,e,r,n,E){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:E}}function h(t,e,r,n){return{type:E,error:e,reqId:t,requestParams:r,layerMetadata:n}}function L(t,e,r,n){return{type:u,reqId:t,exceptions:e,requestParams:r,layerMetadata:n}}function j(){return{type:y}}function w(){return{type:R}}function Y(t,e){return{type:c,reqId:t,request:e}}function H(t,e,r,n){return{type:_,layer:t,request:e,metadata:r,queryableLayers:n}}function q(){return{type:O}}function Z(t){return{type:a,infoFormat:t}}function k(){return{type:p}}function W(){return{type:s}}function B(t){return{type:f,reverseGeocodeData:t.data}}function Q(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(B(t))})).catch((function(t){e(B(t))}))}}function x(){return{type:l}}function V(){return{type:S}}function X(t){return{type:D,status:t}}function K(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:T,point:t,layer:e,filterNameList:r,overrideParams:n,itemId:o}}function J(t){return{type:N,point:t}}function $(t){return{type:I,enabled:t}}function z(t){return{type:d,index:t}}var tt=function(){return{type:G}},et=function(t){return{type:m,format:t}},rt=function(t){return{type:b,showCoordinateEditor:t}},nt=function(t){return{type:A,layer:t}},ot=function(t){return{type:v,query:t}},Et=function(t){return{type:P,trigger:t}},ut=function(t){return{type:U,value:t}},it=function(t){return{type:g,isMounted:t}},ct=function(t){return{type:F,cfg:t}}},647310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(375875),o=r.n(n),E=r(472500),u=r.n(E),i=r(727418),c=r.n(i),O={format:"json",bounded:0,polygon_geojson:1,priority:5};const a={geocode:function(t,e){var r=c()({q:t},O,e||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=c()({lat:t.lat,lon:t.lng},e||{},O),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},925108:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(782904),o=r(727418),E=r.n(o),u=r(921914);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.kM:var r=e.property||"enabled";return E()({},t,a({},e.control,E()({},t[e.control],a({},r,!(t[e.control]||{})[r]))));case n.At:return!0===e.toggle&&t[e.control]&&t[e.control][e.property]===e.value?E()({},t,a({},e.control,E()({},t[e.control],a({},e.property,void 0)))):E()({},t,a({},e.control,E()({},t[e.control],a({},e.property,e.value))));case n.dc:return E()({},t,a({},e.control,E()({},t[e.control],e.properties)));case n.l:var o=Object.keys(t).filter((function(t){return-1===(e.skip||[]).indexOf(t)})),i=o.reduce((function(e,r){return E()(e,a({},r,E()({},t[r],!0===t[r].enabled?{enabled:!1}:{})))}),{});return E()({},t,i);case u.DW:return O(O({},t),{},{info:O(O({},t.info),{},{available:e.isMounted})});default:return t}}},643892:(t,e,r)=>{"use strict";r.d(e,{W:()=>n,Zf:()=>o,Eu:()=>E,Vy:()=>u,YB:()=>i,xm:()=>c,_f:()=>O,ek:()=>a,cd:()=>p,pt:()=>s,ww:()=>f,tR:()=>l,Js:()=>_,p2:()=>y,ZH:()=>R,eQ:()=>T,ql:()=>N,$X:()=>I,nS:()=>S,ih:()=>D,J5:()=>d,uA:()=>G,Pv:()=>m,_Z:()=>b,dh:()=>A,IH:()=>v,e3:()=>P,Oq:()=>C,Q$:()=>U,DF:()=>g,id:()=>F,Br:()=>M,bI:()=>h,U5:()=>L,e5:()=>j,b3:()=>w,mN:()=>Y,QN:()=>H,HV:()=>q,xe:()=>Z,vA:()=>k,gw:()=>W,qs:()=>B,CB:()=>Q,vg:()=>x,Z0:()=>V,lf:()=>X,jQ:()=>K,nk:()=>J,X7:()=>$,nO:()=>z,F4:()=>tt,EU:()=>et,Rk:()=>rt,V1:()=>nt});var n="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",E="GEONODE:RESOURCE_ERROR",u="GEONODE:UPDATE_RESOURCE_PROPERTIES",i="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",O="GEONODE:SET_RESOURCE_ID",a="GEONODE:SET_RESOURCE_PERMISSIONS",p="GEONODE:EDIT_TITLE_RESOURCE",s="GEONODE:EDIT_ABSTRACT_RESOURCE",f="GEONODE:EDIT_THUMBNAIL_RESOURCE",l="GEONODE:SET_FAVORITE_RESOURCE",_="GEONODE:SET_MAP_THUMBNAIL",y="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",R="GEONODE:REQUEST_RESOURCE_CONFIG",T="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",N="GEONODE:LOADING_RESOURCE_CONFIG",I="GEONODE:RESET_RESOURCE_STATE",S="GEONODE:RESOURCE_CONFIG_ERROR",D="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",d="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",G="GEONODE:RESET_GEO_LIMITS",m="GEONODE:PROCESS_RESOURCES",b="GEONODE_SET_RESOURCE_THUMBNAIL",A="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",v="GEONODE_DOWNLOAD_RESOURCE",P="GEONODE_DOWNLOAD_COMPLETE",C="GEONODE_UPDATE_SINGLE_RESOURCE";function U(){return{type:n}}function g(t){return{type:o,data:t}}function F(t){return{type:C,data:t}}function M(t){return{type:p,title:t}}function h(t){return{type:s,abstract:t}}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false";return{type:f,thumbnailUrl:t,thumbnailChanged:e}}function j(){return{type:b}}function w(t){return{type:i,resourceType:t}}function Y(t){return{type:E,error:t}}function H(t){return{type:u,properties:t}}function q(){return{type:c}}function Z(t){return{type:O,id:t}}function k(t){return{type:y,permissions:t}}function W(t){return{type:l,favorite:t}}function B(t){return{type:A,enabled:t}}function Q(t){return{type:_,bbox:t}}function x(t,e,r){return{type:R,resourceType:t,pk:e,options:r}}function V(t){return{type:T,resourceType:t}}function X(t){return{type:N,loading:t}}function K(t){return{type:S,message:t}}function J(){return{type:I}}function $(t){return{type:D,compactPermissions:t}}function z(t){return{type:d,compactPermissions:t}}function tt(){return{type:G}}function et(t,e,r){return{type:m,processType:t,resources:e,redirectTo:r}}function rt(t){return{type:v,resource:t}}function nt(t){return{type:P,resource:t}}},100824:(t,e,r)=>{"use strict";r.d(e,{Z:()=>E});var n=r(124852),o=r.n(n);const E=(0,n.forwardRef)((function(t,e){var r=t.enabled,n=t.className,E=t.children;return r?o().createElement("div",{ref:e,className:n||"gn-overlay-container",style:{position:"relative",height:"100%"}},E):null}))},228261:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(124852),o=r.n(n),E=r(675263),u=r.n(E),i=["id","className","style","children"];function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}function O(t){var e=t.id,r=t.className,n=t.style,E=t.children,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},E=Object.keys(t);for(n=0;n<E.length;n++)r=E[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(t);for(n=0;n<E.length;n++)r=E[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,i),O=r?" "+r:"";return o().createElement(o().Fragment,null,o().createElement("div",c({},u,{id:e,className:"gn-spinner".concat(O),style:n}),o().createElement("div",null)),E)}O.propTypes={id:u().string,className:u().string,style:u().object},O.defaultProps={};const a=O},51605:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n.Z});var n=r(228261)}}]);