(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[84143],{801550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>o,N7:()=>i,mq:()=>c,uv:()=>s,Qy:()=>a,IL:()=>u,Li:()=>l,OW:()=>p,ZO:()=>f,Um:()=>m,TF:()=>d,Ls:()=>y,Ec:()=>h,Eu:()=>b,JJ:()=>v,nZ:()=>O,YD:()=>E,GI:()=>g,Jb:()=>_,Uh:()=>S,e$:()=>N,eh:()=>T,$j:()=>P,Mk:()=>A,xy:()=>w,o6:()=>C,FP:()=>M,Mo:()=>j,sO:()=>Z,Px:()=>R,hd:()=>I,Ju:()=>x,BV:()=>L,SO:()=>k,H0:()=>G,$X:()=>U,ou:()=>H,NE:()=>z});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",s="PAN_TO",a="ZOOM_TO_EXTENT",u="ZOOM_TO_POINT",l="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",f="CHANGE_MAP_STYLE",m="CHANGE_ROTATION",d="CREATION_ERROR_LAYER",y="UPDATE_VERSION",h="INIT_MAP",b="RESIZE_MAP",v="CHANGE_MAP_LIMITS",O="SET_MAP_RESOLUTIONS",E="REGISTER_EVENT_LISTENER",g="UNREGISTER_EVENT_LISTENER",_="MOUSE_MOVE",S="MOUSE_OUT",N="MAP:MAP_PLUGIN_LOAD",T="MAP:ORIENTATION",P="MAP:UPDATE_MAP_VIEW";function A(e,t,n,r){return{type:N,mapType:t,loading:e,loaded:n,error:r}}function w(e,t,n){return{type:u,pos:e,zoom:t,crs:n}}function C(e,t,n,o,i,c,s,a){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:i,projection:c,viewerOptions:s,resolution:a}}function M(e,t){return{type:o,point:e,layer:t}}function j(e){return{type:i,pointer:e}}function Z(e,t){return{type:c,zoom:e,mapStateSource:t}}function R(e,t,n,r){return{type:a,extent:e,crs:t,maxZoom:n,options:r}}function I(e,t){return{type:f,style:e,mapStateSource:t}}function x(){return{type:b}}function L(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:v,restrictedExtent:t,crs:n,minZoom:r}}function k(e){return{type:O,resolutions:e}}var G=function(e,t){return{type:E,eventName:e,toolName:t}},U=function(e,t){return{type:g,eventName:e,toolName:t}},H=function(e){return{type:_,position:e}},z=function(){return{type:S}}},509192:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(675263),o=n.n(r),i=n(124852),c=n.n(i),s=n(38560),a=n(480681),u=n(950966);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function l(){var e;p(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(y(e=i.call.apply(i,[this].concat(n))),"addTooltip",(function(t){if(!e.props.tooltip)return t;var n=c().createElement(a.Tooltip,{id:"locate-tooltip"},e.props.tooltip);return c().createElement(u.Z,{placement:e.props.tooltipPlace,key:"overlay-trigger."+e.props.id,overlay:n},t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this;return this.addTooltip(c().createElement(s.Z,{id:this.props.id,style:this.props.style,onClick:function(){return e.props.onZoom(e.props.currentZoom+e.props.step)},className:this.props.className,disabled:this.props.currentZoom+this.props.step>this.props.maxZoom||this.props.currentZoom+this.props.step<this.props.minZoom,bsStyle:this.props.bsStyle},this.props.glyphicon?c().createElement(a.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(c().Component);b(O,"propTypes",{id:o().string,style:o().object,glyphicon:o().string,text:o().string,btnSize:o().oneOf(["large","small","xsmall"]),className:o().string,help:o().oneOfType([o().string,o().element]),step:o().number,currentZoom:o().number,minZoom:o().number,maxZoom:o().number,onZoom:o().func,tooltip:o().element,tooltipPlace:o().string,bsStyle:o().string}),b(O,"defaultProps",{id:"mapstore-zoom",className:"square-button",glyphicon:"plus",btnSize:"xsmall",tooltipPlace:"left",step:1,currentZoom:3,minZoom:0,maxZoom:28,onZoom:function(){},bsStyle:"default",style:{}});const E=O},38560:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(480681),o=n(124852),i=n.n(o),c=n(294184),s=n.n(c),a=["disabled","className","onClick"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const l=(p=r.Button,i().forwardRef((function(e,t){var n=e.disabled,r=e.className,o=e.onClick,c=void 0===o?function(){}:o,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,a);return i().createElement(p,u({ref:t,className:n?s()("disabled",r):r,onClick:function(){n||c.apply(void 0,arguments)}},l),l.children)})));var p},370757:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #zoomin-btn, .msgapi #zoomout-btn {\n    z-index: 1;\n    position: relative;\n}\n",""]);const i=o},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},775898:(e,t,n)=>{"use strict";var r=n(893379),o=n.n(r),i=n(370757);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},893379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],a=t.base?s[0]+t.base:s[0],u=n[a]||0,l="".concat(a," ").concat(u);n[a]=u+1;var p=c(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:l,updater:y(f,t),references:1}),r.push(l)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,d=0;function y(e,t){var n,r,o;if(t.singleton){var i=d++;n=m||(m=a(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=a(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}}}]);