(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1751],{21914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>i,Ih:()=>s,Xw:()=>u,Pn:()=>a,DZ:()=>c,e8:()=>p,E0:()=>l,F9:()=>f,X_:()=>y,pb:()=>d,qb:()=>b,Re:()=>m,ih:()=>v,xy:()=>h,jL:()=>g,oz:()=>E,ph:()=>O,lF:()=>P,gG:()=>I,cb:()=>_,GI:()=>R,B1:()=>w,fv:()=>T,gc:()=>j,zX:()=>N,ZF:()=>F,Zb:()=>S,DW:()=>M,Xp:()=>A,Fm:()=>D,sV:()=>x,Mn:()=>G,LU:()=>C,XP:()=>Y,WU:()=>L,JB:()=>U,g:()=>q,ws:()=>Z,HP:()=>k,aN:()=>H,Pg:()=>V,u0:()=>W,TM:()=>B,PM:()=>K,lK:()=>Q,sv:()=>z,MO:()=>J,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ie,Y$:()=>se,Qu:()=>ue,kT:()=>ae});var n=r(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",s="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",a="NEW_MAPINFO_REQUEST",c="PURGE_MAPINFO_RESULTS",p="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",b="GET_VECTOR_INFO",m="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",h="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",E="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",O="TOGGLE_MAPINFO_STATE",P="UPDATE_CENTER_TO_MARKER",I="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",R="IDENTIFY:CHANGE_FORMAT",w="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",T="IDENTIFY:EDIT_LAYER_FEATURES",j="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",N="IDENTIFY:SET_MAP_TRIGGER",F="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",S="IDENTIFY:SET_SHOW_IN_MAP_POPUP",M="IDENTIFY:IDENTIFY_IS_MOUNTED",A="IDENTIFY:INIT_PLUGIN";function D(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function x(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function G(e,t,r,n){return{type:s,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function C(){return{type:m}}function Y(){return{type:v}}function L(e,t){return{type:a,reqId:e,request:t}}function U(e,t,r,n){return{type:b,layer:e,request:t,metadata:r,queryableLayers:n}}function q(){return{type:c}}function Z(e){return{type:p,infoFormat:e}}function k(){return{type:l}}function H(){return{type:f}}function X(e){return{type:y,reverseGeocodeData:e.data}}function V(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(X(e))})).catch((function(e){t(X(e))}))}}function W(){return{type:d}}function B(){return{type:O}}function K(e){return{type:P,status:e}}function Q(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:h,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function z(e){return{type:g,point:e}}function J(e){return{type:E,enabled:e}}function $(e){return{type:I,index:e}}var ee=function(){return{type:_}},te=function(e){return{type:R,format:e}},re=function(e){return{type:w,showCoordinateEditor:e}},ne=function(e){return{type:T,layer:e}},oe=function(e){return{type:j,query:e}},ie=function(e){return{type:N,trigger:e}},se=function(e){return{type:S,value:e}},ue=function(e){return{type:M,isMounted:e}},ae=function(e){return{type:A,cfg:e}}},47310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(75875),o=r.n(n),i=r(72500),s=r.n(i),u=r(37295),a=r.n(u),c={format:"json",bounded:0,polygon_geojson:1,priority:5};const p={geocode:function(e,t){var r=a()({q:e},c,t||{}),n=s().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=a()({lat:e.lat,lon:e.lng},t||{},c),n=s().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},15402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(45697),o=r.n(n),i=r(24852),s=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function l(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=r(68195).FormattedHTMLMessage,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function u(){return a(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){return this.context.intl?s().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):s().createElement("span",null,this.props.msgId||"")}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(s().Component);y(b,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(b,"contextTypes",{intl:o().object});const m=b},42872:(e,t,r)=>{"use strict";r.d(t,{Z:()=>C});var n=r(24852),o=r.n(n),i=r(45697),s=r.n(i),u=r(88798),a=r(15402),c=r(5346),p=r(80681);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function b(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,r,n,i,s=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function u(){var e;f(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(m(e=s.call.apply(s,[this].concat(r))),"onTouchStart",(function(t){var r=t.touches[0];e.startX=r.pageX,e.startY=r.pageY,e.setState({scrolling:!1})})),h(m(e),"onTouchMove",(function(t){var r=t.touches[0],n=t.currentTarget;if(e.state.scrolling)t.stopPropagation();else if(Math.abs(e.startY-r.pageY)>Math.abs(e.startX-r.pageX))t.stopPropagation();else{var o=e.startX<r.pageX?"left":"right";(n&&"left"===o&&n.clientWidth<n.scrollWidth&&0!==n.scrollLeft||n&&"right"===o&&n.clientWidth+n.scrollLeft!==n.scrollWidth)&&(e.setState({scrolling:!0}),t.stopPropagation())}})),h(m(e),"onTouchEnd",(function(){e.setState({scrolling:!1})})),h(m(e),"renderPage",(function(){var t="function"==typeof e.props.viewers?e.props.viewers:e.props.viewers[e.props.format];return t?o().createElement(t,{response:e.props.response,layer:e.props.layer}):null})),e}return t=u,(r=[{key:"render",value:function(){return o().createElement("div",{style:{width:"100%",height:"100%",overflowX:"auto"},onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd},this.renderPage())}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);h(g,"propTypes",{format:s().string,viewers:s().oneOfType([s().func,s().object]),response:s().oneOfType([s().string,s().object,s().node]),layer:s().object});var E=r(41609),O=r.n(E),P=r(31351),I=r.n(P),_=r(10240),R=r.n(_),w=r(2870);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function M(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(l,e);var t,r,n,i,s=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(i){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return M(this,e)});function l(){var e;N(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return x(A(e=s.call.apply(s,[this].concat(r))),"getResponseProperties",(function(){var t=e.props.validator(e.props.format),r=e.props.responses.map((function(e){return void 0===e?{}:e})),n=e.props.renderValidOnly?t.getValidResponses(r):r,o=t.getNoValidResponses(e.props.responses),i=e.props.requests.length===o.length;return{validResponses:n,currResponse:e.getCurrentResponse(n[e.props.index]),emptyResponses:i,invalidResponses:o}})),x(A(e),"getCurrentResponse",(function(t){return e.props.validator(e.props.format).getValidResponses([t])})),x(A(e),"renderEmptyLayers",(function(){var t=e.getResponseProperties(),r=t.invalidResponses,n=t.emptyResponses;if(0===e.props.missingResponses&&n)return null;var i=0!==r.length;if(e.props.renderValidOnly||(i=i&&0===e.props.missingResponses),i){var s=r.map((function(e){return e.layerMetadata.title}));return e.props.showEmptyMessageGFI&&!e.props.disableInfoAlert?o().createElement(p.Alert,{bsStyle:"info"},o().createElement(c.Z,{msgId:"noInfoForLayers"}),o().createElement("b",null,s.join(", "))):null}return null})),x(A(e),"renderPage",(function(t){var r=e.props.viewers[e.props.format];return r?o().createElement(r,{response:t}):null})),x(A(e),"renderEmptyPages",(function(){var t=e.getResponseProperties().emptyResponses;return 0===e.props.missingResponses&&t?o().createElement(p.Alert,{bsStyle:"danger"},o().createElement("h4",null,o().createElement(a.Z,{msgId:"noFeatureInfo"}))):null})),x(A(e),"renderPages",(function(){var t=e.getResponseProperties().validResponses;return t.map((function(r,n){var i,s,a=r.response,c=r.layerMetadata,l=(0,w.Q)(r,e.props),f=e.props.header;null!=c&&null!==(i=c.viewer)&&void 0!==i&&i.type&&(s=(0,u.gA)(c.viewer.type));var y=t.filter((function(e){return!R()(e.response,"no features were found")})).length;return o().createElement(p.Panel,{eventKey:n,key:n,collapsible:e.props.collapsible,header:f?o().createElement("span",null,o().createElement(f,j({size:y},e.props.headerOptions,c,{index:e.props.index,onNext:function(){return e.props.onNext()},onPrevious:function(){return e.props.onPrevious()}}))):null,style:e.props.style},o().createElement(g,{response:a,format:l,viewers:s||e.props.viewers,layer:c}))}))})),x(A(e),"containerStyle",(function(t){return O()(t)&&e.props.isMobile?{height:"100%"}:{display:O()(t)?"none":"block"}})),e}return t=l,(r=[{key:"shouldComponentUpdate",value:function(e){return e.responses!==this.props.responses||e.missingResponses!==this.props.missingResponses||e.index!==this.props.index}},{key:"render",value:function(){var e=this,t=this.props.container,r=this.getResponseProperties(),n=r.currResponse,i=r.emptyResponses,s=[this.renderEmptyLayers(),o().createElement(t,j({},this.props.containerProps,{onChangeIndex:function(t){e.props.setIndex(t)},ref:"container",index:this.props.index||0,key:"swiper",style:this.containerStyle(n),className:"swipeable-view"}),this.renderPages())];return s=this.props.isMobile?s:I()(s),o().createElement("div",{className:"mapstore-identify-viewer"},i?this.renderEmptyPages():s.map((function(e){return e})))}}])&&F(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);x(G,"propTypes",{format:s().string,collapsible:s().bool,requests:s().array,responses:s().array,missingResponses:s().number,container:s().oneOfType([s().object,s().func]),header:s().oneOfType([s().object,s().func]),headerOptions:s().object,validator:s().func,viewers:s().object,style:s().object,containerProps:s().object,index:s().number,onNext:s().func,onPrevious:s().func,onUpdateIndex:s().func,setIndex:s().func,showEmptyMessageGFI:s().bool,renderValidOnly:s().bool,loaded:s().bool,isMobile:s().bool,disableInfoAlert:s().bool}),x(G,"defaultProps",{format:(0,u.wR)(),responses:[],requests:[],missingResponses:0,collapsible:!1,headerOptions:{},container:p.Accordion,validator:u.Te,viewers:(0,u.Qm)(),style:{position:"relative",marginBottom:0},containerProps:{},showEmptyMessageGFI:!0,renderValidOnly:!1,onNext:function(){},onPrevious:function(){},setIndex:function(){},isMobile:!1,disableInfoAlert:!1});const C=G},11196:(e,t,r)=>{"use strict";r.d(t,{mI:()=>i,Yy:()=>s});var n=r(67076),o=r(88798),i=(0,n.withHandlers)({onNext:function(e){var t=e.index,r=void 0===t?0:t,n=e.setIndex,o=void 0===n?function(){}:n,i=e.validResponses,s=void 0===i?[]:i;return function(){o(Math.min(s.length-1,r+1))}},onPrevious:function(e){var t=e.index,r=e.setIndex,n=void 0===r?function(){}:r;return function(){n(Math.max(0,t-1))}}}),s=(0,n.defaultProps)({format:(0,o.wR)(),validator:o.Te})},21751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{IDENTIFY_POPUP:()=>P,default:()=>I});var n=r(24852),o=r.n(n),i=r(73014),s=r(11196),u=r(67076),a=r(71703),c=r(22222),p=r(7877),l=r(21914),f=r(42872),y=r(1469),d=r.n(y),b=r(52353),m=r.n(b),v=r(79870),h=r(827),g=(0,u.compose)((0,a.connect)((0,c.P1)(p.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,u.defaultProps)({index:0,responses:[]})),E=(0,c.P1)([p.q7,p.o9,p.OK,p.us,p.x0,h.hp,p.vR],(function(e,t,r,n,o,i,s){return{responses:e,validResponses:t,requests:r,format:n,showEmptyMessageGFI:o,missingResponses:(r||[]).length-(e||[]).length,renderValidOnly:i,loaded:s}}));const O=(0,u.compose)((0,a.connect)(E),(0,u.defaultProps)({responses:[],container:function(e){var t=e.index,r=e.children;return o().createElement(o().Fragment,null,d()(r)&&r[t]||r)},header:v.Z}),g,s.Yy,s.mI,(0,i.Z)((function(e){var t=e.loaded;return m()(t)})))(f.Z);var P="identify";const I={identify:O}},32425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(45697),o=r.n(n),i=r(24852),s=r.n(i);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){return e>100?"full":e>40?"medium":"small"},l=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return s().createElement("div",{className:o,style:a({width:t,height:t,overflow:"hidden"},n)},!i&&s().createElement("div",{className:"mapstore-".concat(p(t),"-size-loader")}))};l.propTypes={size:o().number,className:o().string,style:o().object};const f=l},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(24852),o=r.n(n),i=r(96259),s=r(32425);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=function(e){var t=e.width,r=e.height,n=e.className,u=void 0===n?"loader-container":n,c=e.contentStyle,p=void 0===c?{}:c;return o().createElement("div",{className:u},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,u=e.height,c=void 0===u?200:u,l=t||(c>0?Math.min(i,c):i),f=r||(c>0?Math.min(i,c):i),y=Math.min(l,f);return o().createElement(s.Z,{size:y,style:a({padding:y/10,margin:"auto",display:"flex"},p)})})))}},73014:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(24852),o=r.n(n),i=r(67076),s=r(82110);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}var a=function(e){var t=e.loading,r=e.isLoading;return t||r&&("function"==typeof r?r():!0===r)};const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.Z;return(0,i.branch)(e,(function(){return function(e){var n=e.loaderProps;return o().createElement(r,u({},t,n))}}))}},2870:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s,j:()=>u});var n=r(27361),o=r.n(n),i=r(53005),s=function(e,t){var r=e.format,n=e.queryParams,o=void 0===n?{}:n;return o.info_format||o.outputFormat||r&&i.O7[r]||t.format},u=function(e){return!!o()(e,"layer.search.url")}},10240:(e,t,r)=>{var n=r(29750),o=r(80531),i=r(40554),s=r(79833);e.exports=function(e,t,r){return e=s(e),r=null==r?0:n(i(r),0,e.length),t=o(t),e.slice(r,r+t.length)==t}}}]);