(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[95121,47310,2095],{921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>l,e8:()=>s,E0:()=>f,F9:()=>p,X_:()=>d,pb:()=>y,qb:()=>m,Re:()=>v,ih:()=>O,xy:()=>E,jL:()=>b,oz:()=>g,ph:()=>h,lF:()=>S,gG:()=>T,cb:()=>_,GI:()=>I,B1:()=>P,fv:()=>w,gc:()=>D,zX:()=>R,ZF:()=>j,Zb:()=>N,DW:()=>A,Xp:()=>C,Fm:()=>M,sV:()=>U,Mn:()=>G,LU:()=>F,XP:()=>x,WU:()=>k,JB:()=>L,g:()=>Z,ws:()=>H,HP:()=>q,aN:()=>Y,Pg:()=>W,u0:()=>V,TM:()=>$,PM:()=>Q,lK:()=>X,sv:()=>z,MO:()=>K,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ie,Y$:()=>ue,Qu:()=>ae,kT:()=>ce});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",y="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",v="NO_QUERYABLE_LAYERS",O="CLEAR_WARNING",E="FEATURE_INFO_CLICK",b="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",g="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",h="TOGGLE_MAPINFO_STATE",S="UPDATE_CENTER_TO_MARKER",T="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",I="IDENTIFY:CHANGE_FORMAT",P="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",w="IDENTIFY:EDIT_LAYER_FEATURES",D="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",R="IDENTIFY:SET_MAP_TRIGGER",j="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",N="IDENTIFY:SET_SHOW_IN_MAP_POPUP",A="IDENTIFY:IDENTIFY_IS_MOUNTED",C="IDENTIFY:INIT_PLUGIN";function M(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function U(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function G(e,t,r,n){return{type:u,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function F(){return{type:v}}function x(){return{type:O}}function k(e,t){return{type:c,reqId:e,request:t}}function L(e,t,r,n){return{type:m,layer:e,request:t,metadata:r,queryableLayers:n}}function Z(){return{type:l}}function H(e){return{type:s,infoFormat:e}}function q(){return{type:f}}function Y(){return{type:p}}function B(e){return{type:d,reverseGeocodeData:e.data}}function W(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(B(e))})).catch((function(e){t(B(e))}))}}function V(){return{type:y}}function $(){return{type:h}}function Q(e){return{type:S,status:e}}function X(e,t){return{type:E,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function z(e){return{type:b,point:e}}function K(e){return{type:g,enabled:e}}function J(e){return{type:T,index:e}}var ee=function(){return{type:_}},te=function(e){return{type:I,format:e}},re=function(e){return{type:P,showCoordinateEditor:e}},ne=function(e){return{type:w,layer:e}},oe=function(e){return{type:D,query:e}},ie=function(e){return{type:R,trigger:e}},ue=function(e){return{type:N,value:e}},ae=function(e){return{type:A,isMounted:e}},ce=function(e){return{type:C,cfg:e}}},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(375875),o=r.n(n),i=r(472500),u=r.n(i),a=r(727418),c=r.n(a),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var r=c()({q:e},l,t||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=c()({lat:e.lat,lon:e.lng},t||{},l),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},925108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(782904),o=r(727418),i=r.n(o),u=r(921914);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return i()({},e,s({},t.control,i()({},e[t.control],s({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?i()({},e,s({},t.control,i()({},e[t.control],s({},t.property,void 0)))):i()({},e,s({},t.control,i()({},e[t.control],s({},t.property,t.value))));case n.dc:return i()({},e,s({},t.control,i()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})).reduce((function(t,r){return i()(t,s({},r,i()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return i()({},e,o);case u.DW:return l(l({},e),{},{info:l(l({},e.info),{},{available:t.isMounted})});default:return e}}},55237:(e,t,r)=>{"use strict";r.d(t,{tr:()=>h,jb:()=>S,Xu:()=>T,un:()=>_,Qn:()=>I,_q:()=>P,og:()=>w,$4:()=>D,kN:()=>R,oD:()=>j,V$:()=>N,uH:()=>A,pC:()=>C,tz:()=>M,p:()=>U});var n=r(747037),o=r.n(n),i=r(647960),u=r.n(i),a=r(227361),c=r.n(a),l=r(984596),s=r.n(l),f=r(730381),p=r.n(f),d=r(86638);function y(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=/PT?[\d\.]+[YMWDHMS]/,b=function(e){return e?o()(e)?new Date(e).getTime():(u()(e)&&e.getTime(),e):null},g=function(e){var t=e.start,r=e.end,n=e.duration,o=p().duration(n).asMilliseconds();return(new Date(r).getTime()-new Date(t).getTime())/o},h=function(e){for(var t=e.start,r=e.end,n=e.duration,o=p().duration(n).asMilliseconds(),i=[],u=new Date(t),a=new Date(r);u<=a;)i.push(new Date(u).toISOString()),u.setTime(u.getTime()+o);return i},S=function(e){var t=e.start,r=e.end,n=e.duration;return h({start:t,end:r,duration:n}).map((function(e){return{start:new Date(e),end:new Date(new Date(e).getTime()+p().duration(n).asMilliseconds())}}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,r=e.end,n=e.duration,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.start,u=o.end;if(!i||!u)return{count:g({start:t,end:r,duration:n}),start:t,end:r};var a=p().duration(n).asMilliseconds(),c=new Date(t).getTime(),l=new Date(r).getTime(),s=new Date(i).getTime(),f=new Date(u).getTime(),d=Math.ceil((s-c)/a),y=Math.floor((f-c)/a),m=Math.floor((l-c)/a);if(d>=0&&y<=m){var v=y-d;return{start:new Date(c+Math.max(0,d)*a),end:new Date(c+Math.min(m,y)*a),count:v}}return{count:g({start:t,end:r,duration:n}),start:t,end:r}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,r=e.end,n=arguments.length>1?arguments[1]:void 0,o=new Date(t),i=new Date(r),u=Math.floor(i.getTime()-o.getTime())/n;return{range:{start:t,end:r},resolution:p().duration(u).toISOString().match(E)[0]}},I=function(){var e,t,r=arguments.length>1?arguments[1]:void 0,n=(e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],(t=arguments.length>2?arguments[2]:void 0)?e.map((function(e){var r=m(e.split("/"),2);return{start:r[0],end:r[1]}[t]})):e);return n[function(e,t){var r=b(t),n=1/0,o=-1;return e.forEach((function(e,t){var i=b(e),u=Math.abs(i-r);u<n&&(n=u,o=t)})),o}(n,r)]},P=function(e){return e&&e.indexOf&&e.indexOf("--")>0},w=function(e,t){var r=p()(e).diff(t);return{start:r>=0?t:e,end:r>=0?e:t}},D=function(e){return 6e4*e.getTimezoneOffset()},R=function(e){var t=e;!u()(e)&o()(e)&&(t=new Date(e));var r=t.getUTCHours();r=r<10?"0"+r:r;var n=t.getUTCMinutes();n=n<10?"0"+n:n;var i=t.getUTCSeconds();return i=i<10?"0"+i:i,"".concat(r,":").concat(n,":").concat(i)},j=function(e){var t=e;!u()(e)&o()(e)&&(t=new Date(e));var r=t.getUTCMonth()+1,n=t.getUTCDate();return r=r<10?"0"+r:r,n=n<10?"0"+n:n,"".concat(t.getUTCFullYear(),"-").concat(r,"-").concat(n)},N=function(e,t){var r=(0,d.mh)(e),n="HH:mm:SS";switch(t){case"time":return n;case"date":return r;default:return r+" "+n}},A=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).Domains,t=void 0===e?{}:e,r=arguments.length>1?arguments[1]:void 0,n=s()(t.DimensionDomain||[]).concat(),o=t["@version"]||t.version,i=c()(t,"SpaceDomain.BoundingBox");return i&&n.push({Identifier:"space",Domain:i}),n.map((function(e){var t=e.Identifier,n=e.Domain;return{source:{type:"multidim-extension",version:o,url:r},name:t,domain:n}}))},C=function(e,t,r){var n=b(t),o=b(r);return e.reduce((function(e,t){var r=b(t);return b(n)<r&&b(o)>r?[].concat(y(e),[t]):y(e)}),[])},M=function(e){var t=e.reduce((function(e,t){if(-1!==t.indexOf("/")){var r=m(t.split("/"),2),n=r[0],o=r[1];return[].concat(y(e),[n,o])}return[].concat(y(e),[t])}),[]).sort();return[t[0],t[t.length-1]]},U=function(e,t,r){var n=p()(e);return("add"===r?n.add(t,"seconds"):n.subtract(t,"seconds")).toISOString()}},643892:(e,t,r)=>{"use strict";r.d(t,{W:()=>n,Zf:()=>o,Eu:()=>i,Vy:()=>u,YB:()=>a,xm:()=>c,_f:()=>l,ek:()=>s,cd:()=>f,pt:()=>p,ww:()=>d,tR:()=>y,Js:()=>m,p2:()=>v,ZH:()=>O,eQ:()=>E,ql:()=>b,$X:()=>g,nS:()=>h,ih:()=>S,J5:()=>T,uA:()=>_,Pv:()=>I,_Z:()=>P,dh:()=>w,IH:()=>D,e3:()=>R,Oq:()=>j,Q$:()=>N,DF:()=>A,id:()=>C,Br:()=>M,bI:()=>U,U5:()=>G,e5:()=>F,b3:()=>x,mN:()=>k,QN:()=>L,HV:()=>Z,xe:()=>H,vA:()=>q,gw:()=>Y,qs:()=>B,CB:()=>W,vg:()=>V,Z0:()=>$,lf:()=>Q,jQ:()=>X,nk:()=>z,X7:()=>K,nO:()=>J,F4:()=>ee,EU:()=>te,Rk:()=>re,V1:()=>ne});var n="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",u="GEONODE:UPDATE_RESOURCE_PROPERTIES",a="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",l="GEONODE:SET_RESOURCE_ID",s="GEONODE:SET_RESOURCE_PERMISSIONS",f="GEONODE:EDIT_TITLE_RESOURCE",p="GEONODE:EDIT_ABSTRACT_RESOURCE",d="GEONODE:EDIT_THUMBNAIL_RESOURCE",y="GEONODE:SET_FAVORITE_RESOURCE",m="GEONODE:SET_MAP_THUMBNAIL",v="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",O="GEONODE:REQUEST_RESOURCE_CONFIG",E="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",b="GEONODE:LOADING_RESOURCE_CONFIG",g="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",S="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",T="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",_="GEONODE:RESET_GEO_LIMITS",I="GEONODE:PROCESS_RESOURCES",P="GEONODE_SET_RESOURCE_THUMBNAIL",w="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",D="GEONODE_DOWNLOAD_RESOURCE",R="GEONODE_DOWNLOAD_COMPLETE",j="GEONODE_UPDATE_SINGLE_RESOURCE";function N(){return{type:n}}function A(e,t){return{type:o,data:e,pending:t}}function C(e){return{type:j,data:e}}function M(e){return{type:f,title:e}}function U(e){return{type:p,abstract:e}}function G(e){return{type:d,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function F(){return{type:P}}function x(e){return{type:a,resourceType:e}}function k(e){return{type:i,error:e}}function L(e){return{type:u,properties:e}}function Z(){return{type:c}}function H(e){return{type:l,id:e}}function q(e){return{type:v,permissions:e}}function Y(e){return{type:y,favorite:e}}function B(e){return{type:w,enabled:e}}function W(e){return{type:m,bbox:e}}function V(e,t,r){return{type:O,resourceType:e,pk:t,options:r}}function $(e){return{type:E,resourceType:e}}function Q(e){return{type:b,loading:e}}function X(e){return{type:h,message:e}}function z(){return{type:g}}function K(e){return{type:S,compactPermissions:e}}function J(e){return{type:T,compactPermissions:e}}function ee(){return{type:_}}function te(e,t,r){return{type:I,processType:e,resources:t,redirectTo:r}}function re(e){return{type:D,resource:e}}function ne(e){return{type:R,resource:e}}},217549:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),a=["href","readOnly","children"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e){var t=e.href,r=e.readOnly,n=e.children,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a);return r?n:o().createElement("a",c({href:t},i),n)}l.propTypes={href:u().string,readOnly:u().bool.isRequired,children:u().any},l.defaultProps={href:"",readOnly:!1};const s=l},834065:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),a=r(877593),c=r(217549),l=["resource","readOnly","formatHref","pathname"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function f(e){var t,r,n,i=e.resource,u=e.readOnly,f=e.formatHref,p=e.pathname,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l);return d.detailsPanel?o().createElement(c.Z,{readOnly:u,href:f({pathname:p,query:{"filter{owner.username.in}":null===(n=i.owner)||void 0===n?void 0:n.username}})},i.owner&&(0,a.vW)(i.owner)):o().createElement("p",s({className:"card-text gn-card-user"},d),(null===(t=i.owner)||void 0===t?void 0:t.avatar)&&o().createElement("img",{src:i.owner.avatar,alt:(0,a.vW)(i.owner),className:"gn-card-author-image"}),o().createElement(c.Z,{readOnly:u,href:f({pathname:p,query:{"filter{owner.username.in}":null===(r=i.owner)||void 0===r?void 0:r.username}})},i.owner&&(0,a.vW)(i.owner)))}f.propTypes={resource:u().object,readOnly:u().bool,formatHref:u().func,props:u().any},f.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const p=f},100824:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=(0,n.forwardRef)((function(e,t){var r=e.enabled,n=e.className,i=e.children;return r?o().createElement("div",{ref:t,className:n||"gn-overlay-container",style:{position:"relative",height:"100%"}},i):null}))},71268:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(805346),u=r(675263),a=r.n(u),c=r(507412),l=r(815135),s=r(441609),f=r.n(s),p=r(535721),d=r(303744),y=(0,l.Z)(d.Z),m=function(e){var t,r,n,u=e.resource,a=void 0===u?{}:u,l=(0,p.fu)(a),s=l.isApproved,d=l.isPublished,m=l.isProcessing,v=l.isCopying,O=l.isDeleting,E=l.isDeleted;return f()(a)?null:o().createElement("p",{className:"gn-resource-status-text"},!m&&(!s||!d)&&o().createElement(y,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(t={isApproved:s,isPublished:d},r=t.isApproved,n=t.isPublished,!r&&n?o().createElement(i.Z,{msgId:"gnhome.pendingApproval"}):r||n?n||r?"":o().createElement(i.Z,{msgId:"gnhome.unpublished"}):o().createElement(i.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(O||E||v)&&"0.4rem"},tooltipPosition:"top"},o().createElement(c.Z,{name:"info-circle",className:"gn-resource-status-pending"})),O&&o().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},o().createElement(i.Z,{msgId:"gnviewer.deleting"})),E&&o().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},o().createElement(i.Z,{msgId:"gnviewer.deleted"})),v&&o().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},o().createElement(i.Z,{msgId:"gnviewer.cloning"})))};m.propTypes={isApproved:a().bool,isPublished:a().bool},m.defaultProps={isApproved:!0,isPublished:!0};const v=m},228261:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),a=["id","className","style","children"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e){var t=e.id,r=e.className,n=e.style,i=e.children,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),l=r?" "+r:"";return o().createElement(o().Fragment,null,o().createElement("div",c({},u,{id:t,className:"gn-spinner".concat(l),style:n}),o().createElement("div",null)),i)}l.propTypes={id:u().string,className:u().string,style:u().object},l.defaultProps={};const s=l},51605:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(228261)},94228:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>M});var n=r(124852),o=r.n(n),i=r(322843),u=r(171703),a=r(22222),c=r(737275),l=r(843683),s=r(274621),f=r(643892),p=r(452992),d=r(17594),y=r(925108),m=r(782904),v=r(572036),O=r(76907),E=r(303744);var b=r(100824),g=r(625635),h=r(877593),S=r(805346),T=r(675110),_=r(800827),I=r(535721),P=r(770058),w=r(807461);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===D(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=(0,u.connect)((0,a.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1},function(e){var t,r;return(null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.favorite)||!1},function(e){var t;return(null==e||null===(t=e.gnsave)||void 0===t?void 0:t.savingThumbnailMap)||!1},T.l2,O.km,O.Bs,_.Od,function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.showMapThumbnail)||!1},p.WB],(function(e,t,r,n,o,i,u,a,c,l){return{layers:o,resource:e,loading:t,savingThumbnailMap:n,favorite:r,isThumbnailChanged:i,resourceThumbnailUpdating:u,initialBbox:null==a?void 0:a.bbox,enableMapViewer:c,downloading:l,canDownload:(0,I.sH)(e,"download_resourcebase"),resourceId:e.pk}})),{closePanel:m.Xg.bind(null,"rightOverlay","enabled",!1),onFavorite:f.gw,onMapThumbnail:f.CB,onResourceThumbnail:f.e5,onClose:f.qs,onAction:f.Rk})(l.Z),A=(0,u.connect)((0,a.P1)([O.V$,O.fg],(function(e,t){return{hide:e||!t}})),{onClick:m.Xg.bind(null,"rightOverlay","enabled","DetailViewer")})((function(e){var t=e.onClick,r=e.hide,n=e.variant,i=e.size,u=e.showMessage;return r?null:o().createElement(E.Z,{variant:n,size:i,onClick:function(){t()}},u?o().createElement(S.Z,{msgId:"gnviewer.editInfo"}):o().createElement(d.Z,{name:"info-circle"}))})),C=(0,u.connect)((0,a.P1)([function(e){var t,r;return"DetailViewer"===(null==e||null===(t=e.controls)||void 0===t||null===(r=t.rightOverlay)||void 0===r?void 0:r.enabled)},O.il,O.V$,O.fg,s.np,function(e){return(0,i.bh)(e,(0,c.u8)("monitorState"))}],(function(e,t,r,n,o,i){return{enabled:e,canEdit:t,hide:r||!n,user:o,monitoredState:i}})),{onEditResource:f.Br,onEditAbstractResource:f.bI,onEditThumbnail:f.U5,onClose:m.Xg.bind(null,"rightOverlay","enabled",!1)})((0,g.EN)((function(e){var t=e.location,r=e.enabled,i=e.onEditResource,u=e.onEditAbstractResource,a=e.onEditThumbnail,c=e.canEdit,l=e.hide,s=e.user,f=e.onClose,p=e.monitoredState,d=e.queryPathname,y=void 0===d?"/":d,m=e.tabs,v=void 0===m?[]:m,O=(0,P._y)(p,{tabs:v}),E=function(e){var t=e.disabled,r=e.onClickOut,o=(0,n.useRef)();return(0,n.useEffect)((function(){function e(e){var n;!t&&(null==o||null===(n=o.current)||void 0===n?void 0:n.contains)&&!o.current.contains(e.target)&&r()}return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}),[t,o,r]),o}({disabled:!r,onClickOut:function(){f()}});return l?null:o().createElement(b.Z,{enabled:r,ref:E,className:"gn-overlay-wrapper"},o().createElement(N,{editTitle:function(e){i(e)},editAbstract:function(e){u(e)},editThumbnail:function(e){a(e,!0)},activeEditMode:r&&c,enableFavorite:!!s,formatHref:function(e){return(0,h.nz)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({location:t},e))},tabs:O.tabs,pathname:y}))})));const M=(0,i.rx)("DetailViewer",{component:C,containers:{ActionNavbar:{name:"DetailViewerButton",Component:A}},epics:w.Z,reducers:{gnresource:v.Z,controls:y.Z}})},572036:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(618446),o=r.n(n),i=r(441609),u=r.n(i),a=r(643892),c=r(535721),l=["data"],s=["features"],f=["features"],p=["features"];function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E={selectedLayerPermissions:[],data:{},permissions:[]};const b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.$X:return E;case a.ql:return v(v({},e),{},{configError:void 0,loadingResourceConfig:t.loading});case a.nS:return v(v({},e),{},{loading:!1,configError:t.message});case a.W:return v(v({},e),{},{loading:!0});case a.Zf:var r,n,i=t.data||{},d=(i.data,v({},y(i,l))),m=null===(r=e.data)||void 0===r?void 0:r.linkedResources;return u()(m)||d.pk!==(null===(n=e.data)||void 0===n?void 0:n.pk)||(d.linkedResources=m),v(v({},e),{},{error:null,initialResource:v({},t.data),data:d,loading:!1,isNew:!1});case a.Eu:return v(v({},e),{},{initialResource:null,data:null,error:t.error,loading:!1});case a.Vy:return v(v({},e),{},{data:v(v({},e.data),t.properties)});case a.YB:return v(v({},e),{},{type:t.resourceType});case a.xm:return v(v({},E),{},{isNew:!0});case a._f:return v(v({},e),{},{id:t.id});case a.ek:return v(v({},e),{},{permissions:t.permissions});case a.cd:return v(v({},e),{},{data:v(v({},null==e?void 0:e.data),{},{title:null==t?void 0:t.title,name:null==t?void 0:t.title})});case a.pt:return v(v({},e),{},{data:v(v({},null==e?void 0:e.data),{},{abstract:null==t?void 0:t.abstract})});case a.ww:return v(v({},e),{},{data:v(v({},null==e?void 0:e.data),{},{thumbnail_url:null==t?void 0:t.thumbnailUrl,thumbnailChanged:null==t?void 0:t.thumbnailChanged})});case a._Z:return v(v({},e),{},{data:v(v({},null==e?void 0:e.data),{},{updatingThumbnail:!0})});case a.dh:return v(v({},e),{},{showMapThumbnail:t.enabled});case a.p2:return v(v({},e),{},{selectedLayerPermissions:t.permissions});case a.ih:return v(v({},e),{},{initialCompactPermissions:t.compactPermissions,compactPermissions:t.compactPermissions,isCompactPermissionsChanged:!1,geoLimits:[]});case a.J5:return v(v({},e),{},{compactPermissions:t.compactPermissions,isCompactPermissionsChanged:!o()((0,c.go)(e.initialCompactPermissions),(0,c.go)(t.compactPermissions)),geoLimits:(0,c.vB)(t.compactPermissions)});case a.uA:if(e.compactPermissions){var O=e.compactPermissions,b=O.users,g=O.organizations,h=O.groups;return v(v({},e),{},{compactPermissions:{users:b.map((function(e){return e.features,y(e,s)})),organizations:g.map((function(e){return e.features,y(e,f)})),groups:h.map((function(e){return e.features,y(e,p)}))},geoLimits:[]})}return e;default:return e}}},770058:(e,t,r)=>{"use strict";r.d(t,{gj:()=>p,QH:()=>d,mk:()=>y,BK:()=>m,bH:()=>v,_y:()=>O});var n=r(227361),o=r.n(n),i=r(414293),u=r.n(i),a=r(322843),c=r(368523);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t,r){var n=t?t.filter((function(e){return e.type===r})):void 0;return void 0===n||n&&0===n.length||n&&n.some((function(t){return e&&e.includes(null==t?void 0:t.value)}))}function d(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",n=t.split(r).map((function(t){return function(e,t){return 0===(null==t?void 0:t.indexOf("${"))?o()(e,t.replace(/^\$\{(.*)\}$/,"$1")):t}(e,t)}));return n.join(r)}var y=function(e){return!(""===e||u()(e))},m=function(e){return function t(r){return r&&"object"===f(r)?Array.isArray(r)?r.map(t):Object.fromEntries(Object.entries(r).map((function(e){var r=l(e,2),n=r[0],o=r[1];return[n,t(o)]}))):e(r)}},v=function e(t,r){return t&&t.reduce((function(t,n){var o=n;return Object.entries(n).forEach((function(t){var i=l(t,2),u=i[0],a=i[1];Array.isArray(a)&&(o[u]=e(n[u],r))})),r(o)&&t.push(o),t}),[])},O=function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).filterFunc,n=void 0===r?function(e){return!e.disableIf}:r;return l(v([m((function(t){return(0,a.CU)((function(t){return o()(e,t)}),(0,c.z)(),t)}))(t)],n),1)[0]}},877593:(e,t,r)=>{"use strict";r.d(t,{nz:()=>E,vW:()=>b,Ie:()=>g,RJ:()=>h,AW:()=>S,Yo:()=>T});var n=r(472500),o=r.n(n),i=r(984596),u=r.n(i),a=r(957557),c=r.n(a),l=r(423570),s=r.n(l);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var p=["search"];function d(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){var t=e.location,r=e.pathname,n=e.query,i=e.replaceQuery,a=e.excludeQueryKeys,l=t.search,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,p),f=o().parse(l||"",!0).query,y=n?i?v(v({},f),n):Object.keys(n).reduce((function(e,t){var r=n[t],o=u()(e[t]).filter((function(e){return e})),i=-1===o.indexOf(r)?[].concat(d(o),[r]):o.filter((function(e){return e!==r}));return v(v({},e),{},O({},t,i))}),f):f;return"#".concat(o().format(v(v(v({},s),r&&{pathname:r}),{},{query:c()(Object.keys(y).reduce((function(e,t){return y[t]&&0!==y[t].length?v(v({},e),{},O({},t,y[t])):e}),{}),a)})))};function b(e){return e.first_name&&e.last_name?"".concat(e.first_name," ").concat(e.last_name):e.username}function g(e){var t=o().parse(e.search,!0).query;return Object.keys(t).reduce((function(e,t){return 0===t.indexOf("filter")||"f"===t||"q"===t?v(v({},e),{},O({},t,[])):e}),{extent:void 0})}function h(e){return Object.keys(e).reduce((function(t,r){return["sort","page","d"].includes(r)?t:[].concat(d(t),d(u()(e[r]).map((function(e){return{key:r,value:e}}))))}),[])}var S=function e(t){return t.some((function(t){return t.items?e(t.items):!!t.facet}))},T=function e(t){var r=t.formItems,n=t.facetItems;return r.reduce((function(t,r){if(r.facet){var o=(n||[]).filter((function(e){return e.type===r.facet})).sort((function(e,t){return e.order-t.order}));return[].concat(d(t),d(o.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.key,o=e.config,i=e.filter,u=e.label,a=e.is_localized,c=e.loadItems,l=o.style||r.style,f=o.type||r.type;return v(v({uuid:s()(),name:t,key:n,id:t,type:f,style:l},a?{labelId:u}:{label:u}),{},{loadItems:function(e,r,n){return c({name:t,style:l,filterKey:i,filters:r,setFilters:n},e)}})}))))}return null!=r&&r.items?[].concat(d(t),[v(v({},r),{},{uuid:r.uuid||s()(),items:e({formItems:r.items,facetItems:n})})]):[].concat(d(t),[v(v({},r),{},{uuid:r.uuid||s()()})])}),[])}},887157:(e,t,r)=>{var n=r(640554),o=r(588958);e.exports=function(e,t,r,i){var u=e.length;for((r=n(r))<0&&(r=-r>u?0:u+r),(i=void 0===i||i>u?u:n(i))<0&&(i+=u),i=r>i?0:o(i);r<i;)e[r++]=t;return e}},580760:(e,t,r)=>{var n=r(989881);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},441761:(e,t,r)=>{var n=r(644239),o=r(637005);e.exports=function(e){return o(e)&&"[object Date]"==n(e)}},389179:(e,t,r)=>{var n=r(555639),o=r(640554),i=r(14841),u=r(479833),a=n.isFinite,c=Math.min;e.exports=function(e){var t=Math[e];return function(e,r){if(e=i(e),(r=null==r?0:c(o(r),292))&&a(e)){var n=(u(e)+"e").split("e"),l=t(n[0]+"e"+(+n[1]+r));return+((n=(u(l)+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}},819873:(e,t,r)=>{var n=r(887157),o=r(816612);e.exports=function(e,t,r,i){var u=null==e?0:e.length;return u?(r&&"number"!=typeof r&&o(e,t,r)&&(r=0,i=u),n(e,t,r,i)):[]}},763105:(e,t,r)=>{var n=r(234963),o=r(580760),i=r(267206),u=r(701469);e.exports=function(e,t){return(u(e)?n:o)(e,i(t,3))}},647960:(e,t,r)=>{var n=r(441761),o=r(307518),i=r(531167),u=i&&i.isDate,a=u?o(u):n;e.exports=a},313880:(e,t,r)=>{var n=r(479833);e.exports=function(){var e=arguments,t=n(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},59854:(e,t,r)=>{var n=r(389179)("round");e.exports=n},588958:(e,t,r)=>{var n=r(829750),o=r(640554);e.exports=function(e){return e?n(o(e),0,4294967295):0}}}]);