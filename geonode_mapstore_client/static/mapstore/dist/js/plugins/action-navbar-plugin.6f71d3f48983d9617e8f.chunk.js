(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5675],{66959:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(57588).Badge},25223:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(66959)},39399:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r.n(n),o=r(57588);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}o.Dropdown.Item=o.MenuItem,o.Dropdown.Divider=function(e){return a().createElement(o.MenuItem,i({},e,{divider:!0}))};const l=o.Dropdown},36693:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(39399)},18212:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(67294),a=r.n(n),o=r(45697),i=r.n(o),l=r(5346),c=r(36693),u=r(25223),s=r(38429),m=r(73935),f=r(97842),d=r(70058),p=function(e){var t=e.id,r=e.items,n=e.label,o=e.labelId,i=e.toogleStyle,p=e.toogleImage,y=e.toogleIcon,g=e.dropdownClass,b=e.tabIndex,v=e.badgeValue,h=e.containerNode,I=e.size,E=e.alignRight,O=e.variant,j=r.map((function(e,t){return"plugin"===e.type&&e.Component?a().createElement("li",null,a().createElement(e.Component,{variant:"default",className:e.className})):"divider"===e.type?a().createElement(c.Z.Divider,{key:t}):a().createElement(a().Fragment,null,a().createElement(c.Z.Item,{key:t,href:e.href,style:e.style,as:null!=e&&e.items?"span":"a",target:e.target,className:e.className},e.labelId&&a().createElement(l.Z,{msgId:e.labelId})||e.label,(0,d.mk)(e.badge)&&a().createElement(u.Z,null,e.badge)),(null==e?void 0:e.items)&&a().createElement("div",{className:"gn-sub-flat-menu-block"},function(e){return e&&e.map((function(e){return r=(t={labelId:e.labelId,href:e.href,badge:e.badge,target:e.target}).labelId,n=t.href,o=t.badge,i=t.target,a().createElement(a().Fragment,null,a().createElement(s.Z,{href:n,target:i},r&&a().createElement(l.Z,{msgId:r}),(0,d.mk)(o)&&a().createElement(u.Z,null,o)));var t,r,n,o,i}))}(null==e?void 0:e.items)))})),w=a().createElement(c.Z.Toggle,{id:"gn-toggle-dropdown-".concat(t),bsStyle:O,tabIndex:b,style:i,bsSize:I,noCaret:!0},p?a().createElement("img",{src:p}):void 0,y?a().createElement(f.Z,{name:y}):void 0,o&&a().createElement(l.Z,{msgId:o})||n,(0,d.mk)(v)&&a().createElement(u.Z,null,v));return a().createElement(c.Z,{className:"".concat(g),pullRight:E},w,h?(0,m.createPortal)(a().createElement(c.Z.Menu,null,j),h.parentNode):a().createElement(c.Z.Menu,null,j))};p.propTypes={id:i().number,items:i().array.isRequired,label:i().string,labelId:i().string,toogleStyle:i().object,toogleImage:i().string,state:i().object,dropdownClass:i().string,tabIndex:i().number,badgeValue:i().number,containerNode:i().element};const y=p},44197:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(67294),a=r.n(n),o=r(45697),i=r.n(o),l=r(85106);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=(0,n.forwardRef)((function(e,t){var r=e.items,n=e.containerClass,o=e.childrenClass,i=e.query,c=e.formatHref,s=e.size,m=e.alignRight,f=e.variant;return a().createElement("ul",{ref:t,className:"".concat(n)},r.map((function(e,t){return a().createElement("li",{key:t},a().createElement(l.Z,{variant:e.variant||f,item:u(u({},e),{},{id:e.id||t}),size:s,alignRight:m,menuItemsProps:{query:i,formatHref:c},classItem:o}))})))}));m.propTypes={items:i().array.isRequired,containerClass:i().string,childrenClass:i().string,query:i().string,formatHref:i().func},m.defaultProps={items:[],query:{},user:void 0,formatHref:function(){return"#"},containerClass:""};const f=m},85106:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(67294),a=r.n(n),o=r(45697),i=r.n(o),l=r(84596),c=r.n(l),u=r(25223),s=r(38429),m=r(5346),f=r(18212),d=r(70058),p=function(e){var t=e.item,r=e.menuItemsProps,n=e.containerNode,o=e.tabIndex,i=e.classItem,l=void 0===i?"":i,p=e.size,y=e.alignRight,g=e.variant,b=r.formatHref,v=r.query,h=t.id,I=t.type,E=t.label,O=t.labelId,j=void 0===O?"":O,w=t.items,S=void 0===w?[]:w,Z=t.href,P=t.style,N=t.badge,C=void 0===N?"":N,A=t.image,H=t.Component,k=t.target,q=t.className,R="btn".concat(g&&" btn-".concat(g)||"").concat(p&&" btn-".concat(p)||"").concat(q?" ".concat(q):""),z=C;if("dropdown"===I)return a().createElement(f.Z,{id:h,items:S,label:E,labelId:j,toogleStyle:P,toogleImage:A,dropdownClass:"".concat(l).concat(q?" ".concat(q):""),tabIndex:o,badgeValue:z,containerNode:n,size:p,alignRight:y,variant:g});if(("custom"===I||"plugin"===I)&&H)return a().createElement(H,{variant:g,size:p,className:q});if("link"===I)return a().createElement(s.Z,{href:Z,target:k,className:R},j&&a().createElement(m.Z,{msgId:j})||E);if("divider"===I)return a().createElement("div",{className:"gn-menu-divider",style:P});if("filter"===I){var D=c()(v.f||[]).find((function(e){return e===t.id}));return a().createElement(s.Z,{target:k,style:P,href:b({query:{f:t.id},replaceQuery:!D}),className:R},j&&a().createElement(m.Z,{msgId:j})||E,(0,d.mk)(z)&&a().createElement(u.Z,null,z))}return null};p.propTypes={item:i().object.isRequired,menuItemsProps:i().object.isRequired,containerNode:i().element,tabIndex:i().number,draggable:i().bool,classItem:i().string};const y=p},38429:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r.n(n),o=["children","className"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const l=(0,n.forwardRef)((function(e,t){var r=e.children,n=e.className,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o);return a().createElement("a",i({},l,{ref:t,className:"nav-link".concat(n?" ".concat(n):"")}),r)}))},84996:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(44197).Z},76329:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(67294),a=r.n(n),o=r(98611),i=r.n(o),l=r(22843);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const d=function(e){var t=e.items,r=e.loadedPlugins,o=e.loaderComponent,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];function s(e){return m(e.items).sort((function(e,t){return e.position>t.position?1:-1})).map((function(t){return u(u({},t),{},{Component:t.Component||(0,l.KB)(t,e.loadedPlugins,e.loaderComponent||a().createElement("div",null))})}))||[]}var f=(0,n.useRef)({});f.current={items:t,loadedPlugins:r,loaderComponent:o};var d=i()(Object.keys(r||{}),","),p=(0,n.useMemo)((function(){return s(f.current)}),[d].concat(m(c)));return p}},32100:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var n=r(67294),a=r.n(n),o=r(45697),i=r.n(o),l=r(22843),c=r(33664),u=r(22222),s=r(84996),m=r(18212);const f=function(e){var t=e.items,r=e.variant;return a().createElement("div",{className:"gn-sub-flat-menu-container"},a().createElement(m.Z,{toogleIcon:"bars",className:"gn-sub-flat-menu",items:t,variant:r}))};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const y=function(e){var t=d((0,n.useState)(0),2),r=t[0],a=t[1],o=d((0,n.useState)(0),2),i=o[0],l=o[1],c=function(){null!=e&&e.current&&(a(e.current.offsetWidth),l(e.current.offsetHeight))};return(0,n.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[e]),(0,n.useEffect)((function(){c()})),{width:r,height:i}};var g=r(97842),b=r(38429);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(e){var t,r,o=e.items,i=e.formatHref,l=e.query,c=e.variant,u=e.size,m=(0,n.useRef)(),d=(0,n.useRef)(),p=y(m).width,g=y(d).width,b=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(t,r)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=b[0],I=b[1];return(0,n.useEffect)((function(){I(g>=p)}),[g,p]),a().createElement("div",{className:"gn-menu-content-side gn-menu-content-left",ref:m},h&&o&&a().createElement(f,{items:o,variant:c}),!h&&o&&a().createElement(s.Z,{ref:d,items:o,containerClass:"gn-menu-list",formatHref:i,query:l,variant:c,size:u}))},I=function(e){var t=e.items,r=e.formatHref,o=e.query,i=e.variant,l=e.size,c=(0,n.useRef)();return a().createElement("div",{className:"gn-menu-content-right"},t&&a().createElement(s.Z,{ref:c,items:t,containerClass:"gn-menu-list",formatHref:r,query:o,variant:i,alignRight:!0,size:l}))},E=(0,n.forwardRef)((function(e,t){var r=e.style,n=e.leftItems,o=e.rightItems,i=e.query,l=e.formatHref,c=e.variant,u=e.size,s=e.resource,m=e.titleItems;return a().createElement("nav",{ref:t,className:"gn-menu gn-".concat(c),style:r},a().createElement("div",{className:"gn-menu-container"},a().createElement("div",{className:"gn-menu-content"},a().createElement("div",{className:"gn-action-navbar-title"},a().createElement(b.Z,{href:"#",className:"gn-action-navbar-breadcrumb-link"},a().createElement(g.Z,{name:"home"})),a().createElement(g.Z,{name:"angle-right",className:"gn-action-navbar-breadcrumb-seperator"}),a().createElement("p",{title:null==s?void 0:s.title,className:"gn-action-navbar-resource-title"},null==s?void 0:s.title),m.map((function(e){var t=e.Component,r=e.name;return a().createElement(t,{key:r,variant:"info"})}))),n.length>0&&a().createElement(h,{items:n,formatHref:l,query:i,variant:c,size:u}),o.length>0&&a().createElement(I,{items:o,formatHref:l,query:i,variant:c,size:u}))))}));E.propTypes={style:i().object,leftItems:i().array,rightItems:i().array,query:i().object,formatHref:i().func,variant:i().string},E.defaultProps={leftItems:[],rightItems:[],titleItems:[],query:{},formatHref:function(){return"#"},variant:"primary"};const O=E;var j=r(76329),w=r(3828),S=r(70058);function Z(e,t){return!e.disableIf&&(!e.type||!e.perms||(0,S.gj)(t,e.perms,"resource"))}function P(e,t){var r=e.items,n=e.leftMenuItems,o=e.rightMenuItems,i=e.resourcePerms,l=e.resource,c=e.isDirtyState,u=e.selectedLayerPermissions,s=e.titleItems,m=t.loadedPlugins,f=(0,j.Z)({items:r,loadedPlugins:m},[null==l?void 0:l.pk,u]),d=(0,S.bH)(n,(function(e){return f.find((function(t){"plugin"===e.type&&t.name===e.name&&(e.Component=null==t?void 0:t.Component)})),e.className=e.showPendingChangesIcon&&c?"gn-pending-changes-icon":"",e})),p=(0,S.bH)(o,(function(e){return f.find((function(t){"plugin"===e.type&&t.name===e.name&&(e.Component=null==t?void 0:t.Component)})),e})),y=(0,S.bH)(s,(function(e){return f.find((function(t){"plugin"===e.type&&t.name===e.name&&(e.Component=null==t?void 0:t.Component)})),e})),g=(0,S.bH)(d,(function(e){return Z(e,i)})),b=(0,S.bH)(p,(function(e){return Z(e,i)})),v=(0,S.bH)(y,(function(e){return Z(e,i)}));return a().createElement(O,{leftItems:g,rightItems:b,variant:"primary",size:"sm",resource:l,titleItems:v})}P.propTypes={items:i().array,leftMenuItems:i().array,rightMenuItems:i().array,titleItems:i().array},P.defaultProps={items:[],leftMenuItems:[],rightMenuItems:[],titleItems:[]};var N=(0,c.connect)((0,u.P1)([w.HG,w.ez,w.yK,w.YR,w.l_],(function(e,t,r,n,a){return{resourcePerms:e.length>0?e:t?["change_resourcebase"]:[],resource:r,isDirtyState:!!n,selectedLayerPermissions:a}})))(P);const C=(0,l.rx)("ActionNavbar",{component:N,containers:{},epics:{},reducers:{}})},70058:(e,t,r)=>{"use strict";r.d(t,{gj:()=>s,QH:()=>f,j4:()=>d,mk:()=>p,BK:()=>y,bH:()=>g});var n=r(27361),a=r.n(n),o=r(14293),i=r.n(o);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t,r){var n=t?t.filter((function(e){return e.type===r})):void 0;return void 0===n||n&&0===n.length||n&&n.some((function(t){return e&&e.includes(null==t?void 0:t.value)}))}function m(e,t){return 0===(null==t?void 0:t.indexOf("${"))?a()(e,t.replace(/^\$\{(.*)\}$/,"$1")):t}function f(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",n=t.split(r),a=n.map((function(t){return m(e,t)}));return a.join(r)}function d(e,t,r){var n,a,o,i,l,c=r?void 0===r.authenticated?t.authenticated:r.authenticated:t.authenticated;return void 0===c||!0===c&&(null==e?void 0:e.user)&&(a=e.user,o=t.allowedGroups,l=(null==a||null===(i=a.info)||void 0===i?void 0:i.groups)||[],!o||!!l.find((function(e){return-1!==o.indexOf(e)})))&&s(null==e||null===(n=e.user)||void 0===n?void 0:n.perms,t.perms,"user")||!1===c&&!(null!=e&&e.user)}var p=function(e){return!(""===e||i()(e))},y=function(e){return function t(r){return r&&"object"===u(r)?Array.isArray(r)?r.map(t):Object.fromEntries(Object.entries(r).map((function(e){var r=l(e,2),n=r[0],a=r[1];return[n,t(a)]}))):e(r)}},g=function e(t,r){return t&&t.reduce((function(t,n){var a=n;return Object.entries(n).forEach((function(t){var o=l(t,2),i=o[0],c=o[1];Array.isArray(c)&&(a[i]=e(n[i],r))})),r(a)&&t.push(a),t}),[])}}}]);