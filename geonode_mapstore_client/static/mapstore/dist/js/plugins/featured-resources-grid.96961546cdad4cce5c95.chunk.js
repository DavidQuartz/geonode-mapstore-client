(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[65512,80628],{615402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(675263),o=r.n(n),i=r(124852),u=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function s(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function p(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===c(t)?t:String(t)}var b=r(868195).FormattedHTMLMessage,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(o){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function c(){return a(this,c),i.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){return this.context.intl?u().createElement(b,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(u().Component);p(m,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),p(m,"contextTypes",{intl:o().object});const v=m},999052:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>q});var n=r(124852),o=r.n(n),i=r(171703),u=r(180307),c=r(322843),a=r(472500),l=r.n(a),f=r(22222),s=r(770058),y=r(93993),p=r(303744),d=r(51605),b=r(615402),m=r(507412),v=r(580628),g=r(182021),h=r(535721);const O=(0,v.Z)((function(e){var t=e.resources,r=e.formatHref,i=e.isCardActive,u=e.buildHrefByTemplate,c=e.containerWidth,a=e.width,l=e.options,f=e.onResize,s=e.downloading,y=e.getDetailHref,p=a||c,d=Math.floor(p/344),b=d>4?4:d,m=p>=368?Math.floor((p-24*b)/b):"100%";(0,n.useEffect)((function(){f(b)}),[b]);var v=Math.floor(12),O=0===b||1===b,j=function(e){return O?{width:p-24,margin:v}:{width:m,marginRight:(e+1)%b==0?0:24,marginTop:8}},w=O?{paddingBottom:0}:{paddingLeft:v,paddingBottom:0};return a?o().createElement("ul",{style:w},t.map((function(e,t){var n=(0,h.fu)(e).isProcessing;return o().createElement("li",{key:null==e?void 0:e.pk,style:j(t)},o().createElement(g.Z,{active:i(e),data:e,formatHref:r,options:l,buildHrefByTemplate:u,layoutCardsStyle:"grid",loading:n,readOnly:n,featured:!0,downloading:!(null==s||!s.find((function(t){return t.pk===e.pk}))),getDetailHref:y}))}))):o().createElement("div",null)}));function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===j(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A=(0,v.Z)((function(e){var t,r,i=e.resources,u=e.loading,c=e.isNextPageAvailable,a=e.formatHref,l=e.isCardActive,f=e.containerStyle,s=e.header,y=e.buildHrefByTemplate,v=e.isPreviousPageAvailable,g=e.loadFeaturedResources,h=e.onLoad,j=e.width,w=e.downloading,S=e.getDetailHref,A=(t=(0,n.useState)(),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),H=A[0],_=A[1],k=P({fontSize:"1rem"},!c||u?{color:"grey",cursor:"not-allowed"}:{cursor:"pointer"}),R=P({fontSize:"1rem"},!v||u?{color:"grey",cursor:"not-allowed"}:{cursor:"pointer"});return o().createElement("div",{className:"gn-card-grid",style:0===i.length?{display:"none"}:{}},s,o().createElement("div",{style:{display:"flex",width:"100%"}},o().createElement("div",{style:{flex:1,width:"100%"}},o().createElement("div",{className:"gn-card-grid-container",style:f},o().createElement("h3",null,o().createElement(b.Z,{msgId:"gnhome.featuredList"})),o().createElement(O,{featured:!0,resources:i,formatHref:a,isCardActive:l,buildHrefByTemplate:y,containerWidth:j,onResize:function(e){!isNaN(e)&&h(void 0,e),_(e)},downloading:w,getDetailHref:S}),o().createElement("div",{className:"gn-card-grid-pagination featured-list"},o().createElement(p.Z,{size:"sm",onClick:function(){return g("previous",H)},disabled:!v||u,"aria-hidden":"true"},o().createElement(m.Z,{style:R,name:"caret-left"})),o().createElement("div",null,u&&o().createElement(d.Z,{size:"sm",animation:"border",role:"status"},o().createElement("span",{className:"sr-only"},"Loading..."))),o().createElement(p.Z,{size:"sm",onClick:function(){return g("next",H)},disabled:!c||u,"aria-hidden":"true"},o().createElement(m.Z,{style:k,name:"caret-right"})))))))}));A.defaultProps={page:1,resources:[],isNextPageAvailable:!1,loading:!1,formatHref:function(){return"#"},isCardActive:function(){return!1},isPreviousPageAvailable:!1,onLoad:function(){}};const H=A;var _=r(877593),k=r(653488),R=r(452992),T=r(805207),Z=r(572036),x=r(555168),C=r(864818),D=r(18576),N=r(331869);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===I(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=(0,i.connect)((0,f.P1)([k.n,function(e){var t,r;return(null==e||null===(t=e.gnsearch)||void 0===t||null===(r=t.featuredResources)||void 0===r?void 0:r.page)||1},function(e){var t,r;return(null==e||null===(t=e.gnsearch)||void 0===t||null===(r=t.featuredResources)||void 0===r?void 0:r.isNextPageAvailable)||!1},function(e){var t,r;return(null==e||null===(t=e.gnsearch)||void 0===t||null===(r=t.featuredResources)||void 0===r?void 0:r.isPreviousPageAvailable)||!1},function(e){var t,r;return(null==e||null===(t=e.gnsearch)||void 0===t||null===(r=t.featuredResources)||void 0===r?void 0:r.loading)||!1},R.aZ],(function(e,t,r,n,o,i){return{resources:e,page:t,isNextPageAvailable:r,isPreviousPageAvailable:n,loading:o,downloading:i}})),{loadFeaturedResources:y.Jl})(H);function M(e){var t=e.targetSelector,r=void 0===t?"":t,n=e.children,i=r?document.querySelector(r):null;return i?(0,u.createPortal)(n,i):o().createElement(o().Fragment,null,n)}var $=(0,i.connect)((0,f.P1)([function(e){var t;return null==e||null===(t=e.router)||void 0===t?void 0:t.location},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null}],(function(e,t){return{location:e,resource:t}})),{fetchFeaturedResources:y.Jl})((function(e){var t=e.location,r=e.pagePath,n=void 0===r?"":r,i=e.fetchFeaturedResources,u=e.targetSelector,c=e.resource;function a(e){return n+(0,_.nz)(z({location:t},e))}var f=l().parse(t.search,!0).query;return o().createElement(M,{targetSelector:u},o().createElement("div",{className:"gn-row gn-home-section"},o().createElement("div",{className:"gn-grid-container"},o().createElement(L,{query:f,getDetailHref:function(e){return a({query:{d:"".concat(e.pk,";").concat(e.resource_type)},replaceQuery:!0,excludeQueryKeys:[]})},formatHref:a,cardOptions:[],isCardActive:function(e){return e.pk===(null==c?void 0:c.pk)},buildHrefByTemplate:s.QH,onLoad:i,containerStyle:{minHeight:"auto"}}))))}));const q=(0,c.rx)("FeaturedResourcesGrid",{component:$,containers:{},epics:z(z(z({},C.ZP),D.ZP),N.ZP),reducers:{gnsearch:T.Z,gnresource:Z.Z,resourceservice:x.Z}})},770058:(e,t,r)=>{"use strict";r.d(t,{gj:()=>y,QH:()=>d,mk:()=>b,BK:()=>m,bH:()=>v,_y:()=>g});var n=r(227361),o=r.n(n),i=r(414293),u=r.n(i),c=r(322843),a=r(368523);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function y(e,t,r){var n=t?t.filter((function(e){return e.type===r})):void 0;return void 0===n||n&&0===n.length||n&&n.some((function(t){return e&&e.includes(null==t?void 0:t.value)}))}function p(e,t){return 0===(null==t?void 0:t.indexOf("${"))?o()(e,t.replace(/^\$\{(.*)\}$/,"$1")):t}function d(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",n=t.split(r),o=n.map((function(t){return p(e,t)}));return o.join(r)}var b=function(e){return!(""===e||u()(e))},m=function(e){return function t(r){return r&&"object"===s(r)?Array.isArray(r)?r.map(t):Object.fromEntries(Object.entries(r).map((function(e){var r=l(e,2),n=r[0],o=r[1];return[n,t(o)]}))):e(r)}},v=function e(t,r){return t&&t.reduce((function(t,n){var o=n;return Object.entries(n).forEach((function(t){var i=l(t,2),u=i[0],c=i[1];Array.isArray(c)&&(o[u]=e(n[u],r))})),r(o)&&t.push(o),t}),[])},g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.filterFunc,i=void 0===n?function(e){return!e.disableIf}:n,u=v([m((function(t){return(0,c.CU)((function(t){return o()(e,t)}),(0,a.z)(),t)}))(t)],i),f=l(u,1),s=f[0];return s}},580628:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(124852),o=r.n(n),i=r(14147);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}const d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handleWidth:!0,handleHeight:!0};return function(r){function n(){return c(this,n),f(this,s(n).apply(this,arguments))}return y(n,r),l(n,[{key:"render",value:function(){return o().createElement(i.Z,t,o().createElement(e,this.props))}}]),n}(n.Component)}}}]);