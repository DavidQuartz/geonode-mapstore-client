(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[82714],{807472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(727418),o=n.n(r),i=n(45697),a=n.n(i),l=n(124852),c=n.n(l),u=n(485294),s=n.n(u),f=n(472986),p=n.n(f),d=n(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function v(e,t,n){return t=O(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,n||[],O(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function S(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var C=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return S(e=v(this,t,[].concat(r)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),S(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),S(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),S(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:E({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),n=this.props.draggable?c().createElement(s(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&b(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(c().Component);S(C,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),S(C,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const N=C},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(124852),o=n.n(r);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(124852),o=n.n(r),i=n(294184),a=n.n(i),l=n(480681),c=n(807472),u=n(80717),s=n(867076),f=n(819081),p=n.n(f),d=n(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},y={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const E=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,i=e.loadingText,s=e.onClose,f=void 0===s?function(){}:s,E=e.title,b=void 0===E?"":E,v=e.clickOutEnabled,g=void 0===v||v,O=e.showClose,h=void 0===O||O,S=e.disabledClose,w=void 0!==S&&S,C=e.showFullscreen,N=void 0!==C&&C,P=e.fullscreenType,R=void 0===P?"full":P,_=e.buttons,T=void 0===_?[]:_,j=e.size,D=void 0===j?"":j,k=e.bodyClassName,I=void 0===k?"":k,G=e.children,A=e.draggable,U=void 0!==A&&A,Z=e.fullscreenState,x=e.onFullscreen,M=e.fade,L=void 0!==M&&M,V=e.fitContent,z=e.modalClassName,F=void 0===z?"":z,B=e.dialogClassName,W=void 0===B?"":B,H=e.enableFooter,Q=void 0===H||H,q=m[D]||"",X=N&&"expanded"===Z&&y.className[R]||"",Y=n?o().createElement("div",{className:"modal-fixed ".concat(F," ")+(U?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:g?f:function(){},containerClassName:"ms-resizable-modal",draggable:U,modal:!0,className:a()("modal-dialog modal-content",q,X,W,{"ms-fit-content":V})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},b),N&&y.className[R]&&o().createElement(l.gG,{className:"ms-header-btn",onClick:function(){return x("expanded"===Z?"collapsed":"expanded")},glyph:y.glyph[Z][R]}),h&&f&&o().createElement(l.gG,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:w}))),o().createElement("div",{role:"body",className:I},G),Q&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?i:null),o().createElement(u.Z,{buttons:T})))):null;return L?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Y):Y}))},212610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(124852),o=n.n(r),i=n(867076),a=n(957557),l=n.n(a),c=n(815135);const u=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=e.noTooltipWhenDisabled;return!(void 0!==n&&n&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,l()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(124852),o=n.n(r),i=n(867076),a=n(45697),l=n.n(a),c=n(957557),u=n.n(c),s=n(480681),f=n(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function m(e,t,n){return t=E(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,n||[],E(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}const O=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,n,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(n,t),r=n,(a=[{key:"renderPopover",value:function(){return o().createElement(s.J2,u()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,u()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(f.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,a}(o().Component),v(t,"propTypes",{popover:l().object}),v(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(124852),o=n.n(r),i=n(819081),a=n.n(i),l=n(480681),c=n(90085),u=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,n=void 0===t?[]:t,r=e.btnGroupProps,i=void 0===r?{}:r,f=e.btnDefaultProps,p=void 0===f?{}:f,d=e.transitionProps,m=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,y=function(){return n.map((function(e,t){var n=e.visible,r=void 0===n||n,i=e.Element,a=e.renderButton,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u);return r?a||i&&o().createElement(i,s({key:l.key||t},l))||o().createElement(c.Z,s({key:l.key||t},p,l)):null}))};return o().createElement(l.hE,i,m?o().createElement(a(),m,y()):y())}},90085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(124852),o=n.n(r),i=n(867076),a=n(805346),l=n(957557),c=n.n(l),u=n(480681),s=n(532425),f=n(212610),p=n(617252),d=n(38560),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}const E=(0,i.compose)(f.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,n=e.loading,r=e.text,i=void 0===r?"":r,l=e.textId,f=e.glyphClassName,p=void 0===f?"":f,E=e.loaderProps,b=void 0===E?{}:E,v=e.children,g=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,m);return o().createElement(d.Z,c()(g,["pullRight","confirmNo","confirmYes"]),t&&!n?o().createElement(u.gG,{glyph:t,className:p}):null,l?o().createElement(a.Z,{msgId:l}):i,n?o().createElement(s.Z,y({className:"ms-loader".concat(g.bsStyle&&" ms-loader-"+g.bsStyle||"").concat(g.bsSize&&" ms-loader-"+g.bsSize||"")},b)):null,v)}))},271609:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(375875),o=n.n(r),i=n(737275),a=n(984596),l=n.n(a),c=n(692957);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e){var t=e||i.ZP.getConfigProp("contextPluginsConfiguration")||"configs/pluginsConfig.json",n=l()(t);return o().all(n.map((function(e){return o().get(e).then((function(e){return e.data})).catch((function(){return null}))}))).then((function(e){var t,n=function(e){if(Array.isArray(e))return e}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=n[0],o=n.slice(1);if(!r)throw new Error("plugins configuration file is broken");return(0,c.ao)(r,o.filter((function(e){return e&&"object"===u(e)})))}))}},643892:(e,t,n)=>{"use strict";n.d(t,{W:()=>r,Zf:()=>o,Eu:()=>i,Vy:()=>a,YB:()=>l,xm:()=>c,_f:()=>u,ek:()=>s,cd:()=>f,pt:()=>p,ww:()=>d,tR:()=>m,Js:()=>y,p2:()=>E,ZH:()=>b,eQ:()=>v,ql:()=>g,$X:()=>O,nS:()=>h,ih:()=>S,J5:()=>w,uA:()=>C,Pv:()=>N,_Z:()=>P,dh:()=>R,IH:()=>_,e3:()=>T,Oq:()=>j,Y0:()=>D,sA:()=>k,ip:()=>I,li:()=>G,F_:()=>A,um:()=>U,Q$:()=>Z,DF:()=>x,id:()=>M,Br:()=>L,bI:()=>V,U5:()=>z,e5:()=>F,b3:()=>B,mN:()=>W,QN:()=>H,HV:()=>Q,xe:()=>q,vA:()=>X,gw:()=>Y,qs:()=>K,CB:()=>$,vg:()=>J,Z0:()=>ee,lf:()=>te,jQ:()=>ne,nk:()=>re,X7:()=>oe,nO:()=>ie,F4:()=>ae,EU:()=>le,Rk:()=>ce,V1:()=>ue,rg:()=>se,v6:()=>fe,d7:()=>pe,Rx:()=>de,as:()=>me,jv:()=>ye});var r="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",a="GEONODE:UPDATE_RESOURCE_PROPERTIES",l="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",u="GEONODE:SET_RESOURCE_ID",s="GEONODE:SET_RESOURCE_PERMISSIONS",f="GEONODE:EDIT_TITLE_RESOURCE",p="GEONODE:EDIT_ABSTRACT_RESOURCE",d="GEONODE:EDIT_THUMBNAIL_RESOURCE",m="GEONODE:SET_FAVORITE_RESOURCE",y="GEONODE:SET_MAP_THUMBNAIL",E="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",b="GEONODE:REQUEST_RESOURCE_CONFIG",v="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",g="GEONODE:LOADING_RESOURCE_CONFIG",O="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",S="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",w="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",C="GEONODE:RESET_GEO_LIMITS",N="GEONODE:PROCESS_RESOURCES",P="GEONODE_SET_RESOURCE_THUMBNAIL",R="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",_="GEONODE_DOWNLOAD_RESOURCE",T="GEONODE_DOWNLOAD_COMPLETE",j="GEONODE_UPDATE_SINGLE_RESOURCE",D="GEONODE_SET_RESOURCE_EXTENT",k="GEONODE:SET_RESOURCE_PATH_PARAMETERS",I="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",G="GEONODE:MANAGE_LINKED_RESOURCE",A="GEONODE:SET_DEFAULT_VIEWER_PLUGINS",U="GEONODE:SET_SELECTED_LAYER";function Z(){return{type:r}}function x(e,t){return{type:o,data:e,pending:t}}function M(e){return{type:j,data:e}}function L(e){return{type:f,title:e}}function V(e){return{type:p,abstract:e}}function z(e){return{type:d,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function F(){return{type:P}}function B(e){return{type:l,resourceType:e}}function W(e){return{type:i,error:e}}function H(e){return{type:a,properties:e}}function Q(){return{type:c}}function q(e){return{type:u,id:e}}function X(e){return{type:E,permissions:e}}function Y(e){return{type:m,favorite:e}}function K(e){return{type:R,enabled:e}}function $(e){return{type:y,bbox:e}}function J(e,t,n){return{type:b,resourceType:e,pk:t,options:n}}function ee(e,t){return{type:v,resourceType:e,options:t}}function te(e){return{type:g,loading:e}}function ne(e){return{type:h,message:e}}function re(){return{type:O}}function oe(e){return{type:S,compactPermissions:e}}function ie(e){return{type:w,compactPermissions:e}}function ae(){return{type:C}}function le(e,t,n){return{type:N,processType:e,resources:t,redirectTo:n}}function ce(e){return{type:_,resource:e}}function ue(e){return{type:T,resource:e}}function se(e){return{type:D,coords:e}}function fe(e){return{type:k,params:e}}function pe(e){return{type:G,payload:e}}function de(e){return{type:I,resource:e}}function me(e){return{type:A,plugins:e}}function ye(e){return{type:U,layer:e}}},586300:(e,t,n)=>{"use strict";n.d(t,{N4:()=>c,vq:()=>u,YD:()=>s,at:()=>f});var r=n(375875),o=n.n(r),i=n(271609),a=n(55035),l={},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/map.json";return l.newMapConfig?new Promise((function(e){return e(l.newMapConfig)})):o().get(e).then((function(e){var t=e.data;return l.newMapConfig=t,t})).then((function(e){return window.overrideNewMapConfig?window.overrideNewMapConfig(e):e}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/geostory.json";return l.newGeoStoryConfig?new Promise((function(e){return e(l.newGeoStoryConfig)})):o().get(e).then((function(e){var t=e.data;return l.newGeoStoryConfig=t,t})).then((function(e){return window.overrideNewGeoStoryConfig?window.overrideNewGeoStoryConfig(e):e}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/styleTemplates.json";return l.styleTemplatesConfig?new Promise((function(e){return e(l.styleTemplatesConfig)})):o().get(e).then((function(e){var t=e.data;return l.styleTemplatesConfig=null==t?void 0:t.templates,l.styleTemplatesConfig}))},f=function(){return null!=l&&l.pluginsConfig?Promise.resolve(l.pluginsConfig):(0,i.Z)((0,a.PX)("geoNodeSettings.staticPath","/static/")+"mapstore/configs/pluginsConfig.json").then((function(e){return l.pluginsConfig=e,e}))}},276318:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(124852),o=n.n(r),i=n(322843),a=n(171703),l=n(275982),c=n(22222),u=n(805346),s=n(303744),f=n(507412),p=n(337326),d=n(586300),m=n(782904),y=n(229698),E=n(49977),b=n(441609),v=n.n(b),g=n(12248),O=n(323827),h=n(482100),S=n(643892);const w={gnSetDefaultViewerEnabledPlugins:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState;return e.ofType(O.sP).filter((function(){return!v()((0,h.OV)(t()))})).switchMap((function(){var e,n,r=t(),o=null!==(e=null==r||null===(n=r.gnresource)||void 0===n?void 0:n.params)&&void 0!==e?e:{},i=o.pk,a=o.mapPk;if("new"===i&&a){var l,c,u=(null!==(l=(0,g.w7)(r))&&void 0!==l?l:[]).map((function(e){return e.name})),s=(null!==(c=(0,h.OV)(r))&&void 0!==c?c:[]).filter((function(e){return u.includes(e)}));return E.Observable.of((0,O.iR)(s))}return E.Observable.of((0,S.as)([]))}))}};var C=n(424216),N=n(694745),P=n(399534),R=n(535721),_=n(12530);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}var j=["enabled","onSetControl","match","resourcesParams","location","defaultViewerPlugins","onReplaceLocation","onSetMapViewer","onManageLinkedResource","onSetDefaultViewerPlugins"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(null,arguments)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=T(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==T(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var U=(0,a.connect)((0,c.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.mapViewersCatalog)||void 0===n?void 0:n.enabled},function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.params},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[_.zj.LINK_RESOURCE])||void 0===n?void 0:n.loading},function(e){var t;return null==e||null===(t=e.router)||void 0===t?void 0:t.location}],(function(e,t,n,r){return{enabled:e,resourcesParams:t,loading:n,location:r}})),{onSetControl:m.Xg.bind(null,"mapViewersCatalog","enabled"),onReplaceLocation:l.gx,onSetMapViewer:O.DF,onManageLinkedResource:S.d7,onSetDefaultViewerPlugins:S.as})((function(e){var t,n,i=e.enabled,a=e.onSetControl,l=(e.match,e.resourcesParams),c=(e.location,e.defaultViewerPlugins),m=void 0===c?["Annotations","TOC","BackgroundSelector","Identify","QueryPanel","Measure","Print","MousePosition","Search","ScaleBox","GlobeViewSwitcher","ZoomAll","ZoomIn","ZoomOut","Timeline","MetadataExplorer","Widgets"]:c,y=(e.onReplaceLocation,e.onSetMapViewer),E=e.onManageLinkedResource,b=e.onSetDefaultViewerPlugins,v=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,j),g=(t=(0,r.useState)(""),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),O=g[0],h=g[1],S=l||{},w=S.pk,T=S.mapPk;return(0,r.useEffect)((function(){return"new"===w&&T&&(h("select"),b(m)),function(){h("")}}),[w,T]),o().createElement(o().Fragment,null,o().createElement(P.Z,null,o().createElement(N.Z,{title:o().createElement(u.Z,{msgId:"link"===O?"gnviewer.selectLinkedMapViewer":"gnviewer.copyConfigurationFromTitle"}),show:i,size:"lg",clickOutEnabled:!1,onClose:function(){a(!1),h("")}},o().createElement(C.Z,D({},v,{placeholderId:"gnviewer.mapViewersCatalogFilterPlaceholder",noResultId:"gnviewer.mapViewersCatalogEntriesNoResults",onSelect:function(e){"link"===O?E({resourceType:R.P6.VIEWER,source:T,target:e.pk,processType:_.zj.LINK_RESOURCE}):((0,d.at)().then((function(t){y({data:e.data},t)})),a(!1)),h("")},request:function(e){return(0,p.i9)(I(I(I({},e),{},{"filter{resource_type}":"mapviewer"},w&&"new"!==w&&{"filter{-pk}":w}),"link"!==O&&{"include[]":"data"}))},style:{position:"relative",width:"100%",height:"100%"}})))),o().createElement(P.Z,null,o().createElement(N.Z,{title:"",show:"select"===O,clickOutEnabled:!1,onClose:null,fitContent:!0,modalClassName:"gn-new-map-viewer-action"},o().createElement("div",{className:"gn-new-map-viewer-action-wrapper"},o().createElement("div",{className:"gn-new-map-viewer-action-card"},o().createElement("div",null,o().createElement(f.Z,{name:"link",className:"fa-4x"})),o().createElement(s.Z,{variant:"primary",onClick:function(){h("link"),a(!0)}},o().createElement(u.Z,{msgId:"gnviewer.linkToViewer"}))),o().createElement("div",{className:"gn-new-map-viewer-action-card"},o().createElement("div",null,o().createElement(f.Z,{name:"cogs",className:"fa-4x"})),o().createElement(s.Z,{variant:"primary",onClick:function(){return h("")}},o().createElement(u.Z,{msgId:"gnviewer.createNewViewer"})))))))})),Z=(0,a.connect)((0,c.P1)([],(function(){return{}})),{onClick:m.Xg.bind(null,"mapViewersCatalog","enabled",!0)})((function(e){var t=e.onClick,n=e.size,r=e.variant;return o().createElement(s.Z,{size:n,onClick:function(){t()},variant:r},o().createElement(u.Z,{msgId:"gnviewer.copyConfigurationFrom"}))}));const x=(0,i.rx)("MapViewersCatalog",{component:U,containers:{ActionNavbar:{name:"MapViewersCatalog",Component:Z}},epics:I(I({},y.Z),w),reducers:{}})}}]);