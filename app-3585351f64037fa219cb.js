webpackJsonp([0xd2a57dc1d883],{82:function(n,e,o){"use strict";function t(n,e,o){var t=u.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function r(n,e,o){return u.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=r;var u=[{plugin:o(371),options:{plugins:[]}}]},207:function(n,e,o){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(331),"component---src-pages-404-js":o(333),"component---src-pages-about-js":o(334),"component---src-pages-components-footer-js":o(335),"component---src-pages-components-navbar-js":o(336),"component---src-pages-components-popup-js":o(337),"component---src-pages-components-slider-js":o(338),"component---src-pages-contact-us-js":o(339),"component---src-pages-index-js":o(340),"component---src-pages-pay-js":o(341),"component---src-pages-portal-js":o(342),"component---src-pages-providers-and-staff-js":o(343),"component---src-pages-resources-js":o(344),"component---src-pages-services-js":o(348),"component---src-pages-services-capsule-endoscopy-js":o(345),"component---src-pages-services-colonoscopy-js":o(346),"component---src-pages-services-hemorrhoid-banding-js":o(347),"component---src-pages-services-upper-endoscopy-js":o(349)},e.json={"layout-index.json":o(350),"offline-plugin-app-shell-fallback.json":o(360),"404.json":o(351),"about.json":o(353),"components-footer.json":o(354),"components-navbar.json":o(355),"components-popup.json":o(356),"components-slider.json":o(357),"contact-us.json":o(358),"index.json":o(359),"pay.json":o(361),"portal.json":o(362),"providers-and-staff.json":o(363),"resources.json":o(364),"services.json":o(365),"services-capsule-endoscopy.json":o(366),"services-colonoscopy.json":o(367),"services-hemorrhoid-banding.json":o(368),"services-upper-endoscopy.json":o(369),"404-html.json":o(352)},e.layouts={"layout---index":o(332)}},208:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},s=o(1),i=t(s),l=o(6),p=t(l),f=o(135),d=t(f),m=o(59),h=t(m),g=o(82),y=o(509),v=t(y),j=function(n){var e=n.children;return i.default.createElement("div",null,e())},x=function(n){function e(o){r(this,e);var t=u(this,n.call(this)),a=o.location;return d.default.getPage(a.pathname)||(a=c({},a,{pathname:"/404.html"})),t.state={location:a,pageResources:d.default.getResourcesForPathname(a.pathname)},t}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=c({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,v.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(i.default.Component);x.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=x,n.exports=e.default},59:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(401),u=t(r),a=(0,u.default)();n.exports=a},209:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(80),u=o(136),a=t(u),c={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,a.default)(t,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),c[u])return c[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(u,{path:n.path})||(0,r.matchPath)(u,{path:n.matchPath}))return s=n,c[u]=n,!0}else{if((0,r.matchPath)(u,{path:n.path,exact:!0}))return s=n,c[u]=n,!0;if((0,r.matchPath)(u,{path:n.path+"index.html"}))return s=n,c[u]=n,!0}return!1}),s}}},210:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(165),u=t(r),a=o(82),c=(0,a.apiRunner)("replaceHistory"),s=c[0],i=s||(0,u.default)();n.exports=i},352:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(380)})})}},351:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(381)})})}},353:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(382)})})}},354:function(n,e,o){o(2),n.exports=function(n){return o.e(18253473296134,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(383)})})}},355:function(n,e,o){o(2),n.exports=function(n){return o.e(0xfeb8ff70afd6,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(384)})})}},356:function(n,e,o){o(2),n.exports=function(n){return o.e(30553858320159,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(385)})})}},357:function(n,e,o){o(2),n.exports=function(n){return o.e(0xbd6f97fbba89,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(386)})})}},358:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf973280e871f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(387)})})}},359:function(n,e,o){o(2),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(388)})})}},350:function(n,e,o){o(2),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(112)})})}},360:function(n,e,o){o(2),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(389)})})}},361:function(n,e,o){o(2),n.exports=function(n){return o.e(0xda2ec81be7f2,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(390)})})}},362:function(n,e,o){o(2),n.exports=function(n){return o.e(59999806982826,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(391)})})}},363:function(n,e,o){o(2),n.exports=function(n){return o.e(73583931443601,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(392)})})}},364:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa0a3f3734aef,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(393)})})}},366:function(n,e,o){o(2),n.exports=function(n){return o.e(1363024739584,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(394)})})}},367:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf108390991a8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(395)})})}},368:function(n,e,o){o(2),n.exports=function(n){return o.e(46184814717360,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(396)})})}},369:function(n,e,o){o(2),n.exports=function(n){return o.e(62416081049907,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(397)})})}},365:function(n,e,o){o(2),n.exports=function(n){return o.e(0xea2208afaa7d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(398)})})}},332:function(n,e,o){o(2),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(211)})})}},135:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(1),u=(t(r),o(209)),a=t(u),c=o(59),s=t(c),i=o(136),l=t(i),p=void 0,f={},d={},m={},h={},g={},y=[],v=[],j={},x="",b=[],R={},C=function(n){return n&&n.default||n},N=void 0,_=!0,k=[],w={},P={},E=5;N=o(212)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},L=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},T=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){h[e]=t,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),o(n,t)})}},S=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):T(e,function(n,t){if(n)o(n);else{var r=C(t());g[e]=r,o(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),w[n]||(w[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){v=[],j={},R={},b=[],y=[],x=""},addPagesArray:function(n){y=n,x="/Bowie-Internal-Medicine-Website",p=(0,a.default)(n,x)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return v.pop()},enqueue:function(n){var e=(0,l.default)(n,x);if(!y.some(function(n){return n.path===e}))return!1;var o=1/M;M+=1,j[e]?j[e]+=1:j[e]=1,U.has(e)||v.unshift(e),v.sort(L);var t=p(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||h[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:v,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return v.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var u=r;u.unregister()}window.location.reload()}})),_=!1;if(w[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),s.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,c=function(){if(r&&u&&(!t.layoutComponentChunkName||a)){m[e]={component:r,json:u,layout:a,page:t};var n={component:r,json:u,layout:a,page:t};o(n),s.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return S(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),r=e,c()}),S(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),u=e,c()}),void(t.layoutComponentChunkName&&S(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),a=e,c()}))},peek:function(n){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(n){return v.length-v.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,o(113))},399:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-components-footer-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-footer.json",path:"/components/footer/"},{componentChunkName:"component---src-pages-components-navbar-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-navbar.json",path:"/components/navbar/"},{componentChunkName:"component---src-pages-components-popup-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-popup.json",path:"/components/popup/"},{componentChunkName:"component---src-pages-components-slider-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-slider.json",path:"/components/slider/"},{componentChunkName:"component---src-pages-contact-us-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact-us.json",path:"/contactUs/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-pay-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"pay.json",path:"/pay/"},{componentChunkName:"component---src-pages-portal-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portal.json",path:"/portal/"},{componentChunkName:"component---src-pages-providers-and-staff-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"providers-and-staff.json",path:"/providersAndStaff/"},{componentChunkName:"component---src-pages-resources-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"resources.json",path:"/resources/"},{componentChunkName:"component---src-pages-services-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"services.json",path:"/services/"},{componentChunkName:"component---src-pages-services-capsule-endoscopy-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"services-capsule-endoscopy.json",path:"/services/capsuleEndoscopy/"},{componentChunkName:"component---src-pages-services-colonoscopy-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"services-colonoscopy.json",path:"/services/Colonoscopy/"},{componentChunkName:"component---src-pages-services-hemorrhoid-banding-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"services-hemorrhoid-banding.json",path:"/services/hemorrhoidBanding/"},{componentChunkName:"component---src-pages-services-upper-endoscopy-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"services-upper-endoscopy.json",path:"/services/upperEndoscopy/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},212:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],u=function(){var n=e();n&&(r.push(n),o(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=o(82),a=o(1),c=t(a),s=o(168),i=t(s),l=o(80),p=o(375),f=o(315),d=t(f),m=o(21),h=o(210),g=t(h),y=o(59),v=t(y),j=o(399),x=t(j),b=o(400),R=t(b),C=o(208),N=t(C),_=o(207),k=t(_),w=o(135),P=t(w);o(237),window.___history=g.default,window.___emitter=v.default,P.default.addPagesArray(x.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(213);var t=function(n){function e(n){n.page.path===P.default.getPage(t).path&&(v.default.off("onPostLoadPageResources",e),clearTimeout(a),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),t=o.pathname,r=E[t];r&&(t=r.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var a=setTimeout(function(){v.default.off("onPostLoadPageResources",e),v.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(a),window.___history.push(o)):v.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,u.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return c.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,a.createElement)(f?f:h,null,(0,a.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,a.createElement)(N.default,r({page:!0},t)):(0,a.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0],s=(0,u.apiRunner)("replaceHydrateFunction",void 0,i.default.render)[0];(0,d.default)(function(){return s(c.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},400:function(n,e){n.exports=[]},213:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(59),u=t(r),a="/";a="/Bowie-Internal-Medicine-Website/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},136:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},315:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},2:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,u=o.s;o.e=function(t,a){var c=!1,s=!0,i=function(n){a&&(a(o,n),a=null)};return!u&&e&&e[t]?void i(!0):(r(t,function(){c||(c=!0,s?setTimeout(function(){i()}):i())}),void(c||(s=!1,n(function(){c||(c=!0,u?u[t]=void 0:(e||(e={}),e[t]=!0),i(!0))}))))}}t()},331:function(n,e,o){o(2),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(370)})})}},371:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},401:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},113:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function u(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function a(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&c())}function c(){if(!h){var n=r(a);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,u(n)}}function s(n,e){this.fun=n,this.array=e}function i(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new s(n,e)),1!==m.length||h||r(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=i,f.addListener=i,f.once=i,f.off=i,f.removeListener=i,f.removeAllListeners=i,f.emit=i,f.prependListener=i,f.prependOnceListener=i,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},509:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},333:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(215)})})}},334:function(n,e,o){o(2),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(216)})})}},335:function(n,e,o){o(2),n.exports=function(n){return o.e(37329907133730,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(83)})})}},336:function(n,e,o){o(2),n.exports=function(n){return o.e(0xdeb0d657c537,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(84)})})}},337:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6c8e21a419c0,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(85)})})}},338:function(n,e,o){o(2),n.exports=function(n){return o.e(92058797267591,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(44)})})}},339:function(n,e,o){o(2),n.exports=function(n){return o.e(43369700788870,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(217)})})}},340:function(n,e,o){o(2),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(218)})})}},341:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe9b5acbc8ad5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(219)})})}},342:function(n,e,o){o(2),n.exports=function(n){return o.e(0xec5cfde0771f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(220)})})}},343:function(n,e,o){o(2),n.exports=function(n){return o.e(41224741024519,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(221)})})}},344:function(n,e,o){o(2),n.exports=function(n){return o.e(79718873386587,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(222)})})}},348:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf56877dfa5f4,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(223)})})}},346:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf1acecee684,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(224)})})}},345:function(n,e,o){o(2),n.exports=function(n){return o.e(9970183474905,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(225)})})}},347:function(n,e,o){o(2),n.exports=function(n){return o.e(0xab5224610f66,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(226)})})}},349:function(n,e,o){o(2),n.exports=function(n){return o.e(0x5efc653b6eb3,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(227)})})}}});
//# sourceMappingURL=app-3585351f64037fa219cb.js.map